---
comments: true
layout: post
title: Rails threadsafe and rake task
date: 2010-11-03 15:22:08.000000000 +05:30
author: 
- Leena
categories:
- All Posts
- Rails
---
We've got an application which uses JRuby + RoR deployed in Glassfish. We enabled <code><em>config.threadsafe!</em></code> in the production.rb file to support multithreaded environment.

The server was working fine, but the rake tasks started failing because of a class loading issue. The immediate fix we had was to disable threadsafe for rake tasks and enable it when the server is started. This is not a scalable solution and when we started looking further into it, we found that the following change in the rails initializer should resolve the issue:
<ul>
	<li>Open the file railities/lib/initiazer.rb</li>
	<li>Change the line <code><em>return if $rails_rake_task</em></code> in <em>load_application_classes</em> method to
<code><em>return if $rails_rake_task &amp;&amp; configuration.dependency_loading</em></code></li>
</ul>
You can see the issue and solution being discussed in the following thread:

<a href="http://groups.google.com/group/rubyonrails-core/browse_thread/thread/b13dbe0b8f12b7dc">http://groups.google.com/group/rubyonrails-core/browse_thread/thread/b13dbe0b8f12b7dc</a>
