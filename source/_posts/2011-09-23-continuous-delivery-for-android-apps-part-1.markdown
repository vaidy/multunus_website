---
comments: true
layout: post
featured: true
title: Continuous Delivery for Android Apps - Part 1
date: 2011-09-23 11:15:50.000000000 +05:30
author: 
- Leena
categories:
- All Posts
- Android
- Continuous Delivery
- Process
- Technology
---
<div>

We've set up our CI server for building android apps. We use Jenkins as our CI server, but the same steps can be applied to any CI server.
<h3><span style="text-decoration: underline">Setup Android Environment on CI server</span></h3>
You need to first install the android SDK and platform tools on the CI server. The steps are well defined <a href="http://developer.android.com/sdk/installing.html">here</a>. You can run the command <code>android update sdk --no-ui</code> if the CI server is in an headless environment.
<h3><span style="text-decoration: underline">Generate Build script</span></h3>
Using android SDK tool , you can generate build script for the android project which contains the standard steps for building the app such as clean, compile, release, install etc. The following command will generate the build script, replace &lt;appname&gt;, &lt;target&gt; and &lt;project path&gt; accordingly.
<pre>android update project -n &lt;appname&gt; -t &lt;target&gt; -p &lt;project directory&gt;</pre>
This will create build.xml file under the project directory. You need to create build.properties file with the following contents:
<pre>key.store=path-to-keystore
key.alias=[alias]
key.store.password=[pw]
key.alias.password=[pw2]</pre>
You can generate the key file using keytoool or you can generate the key file from eclipse. Run the command  <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace;line-height: 18px">ant clean release<span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif;line-height: 19px">, which will compile the files, and generate the apk files (it generates signed, unsigned and unaligned files). The signed version can be used for uploading to Android Market or for installing directly on any device. Couple of stuff to be noted here are:</span></span>
<ul>
	<li>Ant version has to be 1.8.0 or higher.</li>
	<li>Put the external libraries in the <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace;line-height: 18px">libs</span> directory. Build script automatically picks up the libraries put under libs directory, otherwise the script need to be changed to look at a different classpath.</li>
</ul>
Checkin the build.xml, build.properties and the key file into the repository.
<h3><span style="text-decoration: underline">Setup the CI server</span></h3>
The CI server has to run the ant script for building the app. One more setting what we've done in our Jenkins server was to archive the apks as artifacts (available in the post build action). In upcoming posts, I will cover how to do the following:
<ol>
	<li>Running android tests</li>
	<li>Running code/test coverage tools</li>
	<li>Actual deployment</li>
</ol>
References: <a href="http://skaug.no/ingvald/2011/09/android-app-with-jenkins/" target="_blank">http://skaug.no/ingvald/2011/09/android-app-with-jenkins/</a>

</div>
