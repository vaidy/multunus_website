---
comments: true
date: 2010-11-03 15:22:08
layout: post
slug: rails-threadsafe-and-rake-task
title: Rails threadsafe and rake task
wordpress_id: 954
categories:
- All Posts
- Rails
---

We've got an application which uses JRuby + RoR deployed in Glassfish. We enabled `_config.threadsafe!_` in the production.rb file to support multithreaded environment.

The server was working fine, but the rake tasks started failing because of a class loading issue. The immediate fix we had was to disable threadsafe for rake tasks and enable it when the server is started. This is not a scalable solution and when we started looking further into it, we found that the following change in the rails initializer should resolve the issue:



	
  * Open the file railities/lib/initiazer.rb

	
  * Change the line `_return if $rails_rake_task_` in _load_application_classes_ method to
`_return if $rails_rake_task && configuration.dependency_loading_`


You can see the issue and solution being discussed in the following thread:

[http://groups.google.com/group/rubyonrails-core/browse_thread/thread/b13dbe0b8f12b7dc](http://groups.google.com/group/rubyonrails-core/browse_thread/thread/b13dbe0b8f12b7dc)
