---
layout: post
title: Our experience with Comatose - the MicroCMS
wordpress_id: 799
wordpress_url: http://www.multunus.com/?p=799
date: 2010-02-23 13:46:44.000000000 +05:30
---
In one of our projects which is primarily a web application, the client had asked that we go ahead and make as much of the copy available across the site, editable. This included not just copy in static pages such as "About Us", but also copy in dynamic pages. I mean things like tooltips for fields in forms, for example.

We first looked at <a href="http://radiantcms.org/" target="_blank">RadiantCMS</a>, with the intention of building our web application on top of it. But then decided to instead build our web app from scratch and then make parts of it editable using <a href="http://github.com/darthapo/comatose" target="_blank">Comatose</a> [which is a "MicroCMS"]. This way, we have more flexibility to add features to the web app using the Rails API and available plugins, rather than being constrained by RadiantCMS system.
<h4>Things we liked about Comatose:</h4>
<ul>
	<li> Its implemented as a Rails plugin - which makes it a breeze to install</li>
	<li> Implementing Single Sign On is also simple. Because it works well with the <a href="http://agilewebdevelopment.com/plugins/restful_authentication" target="_blank"> restful_authentication plugin</a>.</li>
	<li> Comatose allows rendering of pages inline from your application view - just like rendering a partial in a Rails app. To include an "editable" tool tip within a form, something as simple as the following is enough:
<ul>
	<li class="no-list-style">[ror]&lt;%= render :comatose=&gt;'about' %&gt;[/ror]</li>
</ul>
</li>
</ul>
There's of course a lot more you can do with this plugin. Check it out.
<h4>Now for the bad part :-(</h4>
<ul>
	<li>The main issue is font inconsistency. There are some options for setting the font size, but they don't work as expected - because the CSS styles are inherited from our app.</li>
	<li>In production mode, there is a noticeable delay between making changes in the CMS and the updated content showing up on the main site. Not sure why this is the case.</li>
</ul>
