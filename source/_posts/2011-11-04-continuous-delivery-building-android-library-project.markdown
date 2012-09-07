---
comments: true
layout: true
title: ! 'Continuous Delivery: Building Android Library project'
wordpress_id: 1960
wordpress_url: http://www.multunus.com/?p=1960
date: 2011-11-04 14:55:20.000000000 +05:30
---
This post talks about how to build an Android Project using ant which depends on an Android Library project.
<ul>
	<li>Add default.properties in the library project and add <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">android.library=true </span>in the same</li>
	<li>Run the command in the main Android Project <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">android update project --path . --library ../path-to-the-library/</span><strong>Note: This always has to be relative path.</strong></li>
	<li>Now running <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">ant release</span> should build the library project too.</li>
</ul>
<strong>Note:</strong> The android command mentioned in the second step adds an entry in the <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">default.properties</span> file. If you need to override that in different environments, override that in the <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">local.properties</span>. Even there, it has to be relative path, the absolute path will not work.
