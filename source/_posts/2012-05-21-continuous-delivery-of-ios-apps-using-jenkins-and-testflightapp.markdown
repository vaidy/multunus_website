---
comments: true
layout: post
title: ! 'Continuous Delivery of iOS apps using Jenkins and TestFlightApp '
date: 2012-05-21 11:03:21.000000000 +05:30
author: 
- Leena
categories:
- All Posts
- Continuous Delivery
---
As mentioned in <a href="/blog/categories/continuous-delivery/">earlier posts</a> we've been doing Continuous Delivery for both Webapps and Android apps for quite sometime. This post is about setting up Continuous Delivery for iOS apps using Jenkins and <a href="http://testflightapp.com" target="_blank">TestFlightApp</a>. TestFlightApp is a free service which helps to do closed beta testing without putting into AppStore. Using their APIs, the process of delivering new versions of the app can be automated.

<!-- more -->

Setting up Continuous Delivery mainly involves the following steps:
<ul>
	<li>Setup Mac Machine as Jenkins Node</li>
	<li>Setup Jenkins Xcode plugin</li>
	<li>Configure Distribution profile</li>
	<li>Integrate with TestFlightApp API</li>
</ul>
Lets see those steps in detail.

<strong><span style="text-decoration: underline;">Setup Mac Machine as Jenkins Node</span></strong>

Setting up a node with Jenkins is very easy . You can either control the slave using SSH or using JWS. Each node will have a label name associated with it, which needs to be mentioned during setting up the job which needs to be run on this node. You can configure the nodes from the Manage Nodes under the Manage Jenkins option. The following screenshot shows how to configure a node using SSH.

<img style="border: none;" src="https://s3.amazonaws.com/multunus-cdimages/jenkins_node.png" alt="Configure Node using SSH" width="579" height="411" />

This <a href="https://wiki.jenkins-ci.org/display/JENKINS/Step+by+step+guide+to+set+up+master+and+slave+machines">link</a> contains step by step instructions on how to configure a node using JavaWebStart.
<h3><strong><span style="text-decoration: underline;">Setup Jenkins Xcode plugin</span></strong></h3>
Jenkins XCode plugin abstracts the xcode commands to run for creating packages for distribution. <a href="https://wiki.jenkins-ci.org/display/JENKINS/Xcode+Plugin">Jenkins Wiki</a> has details about how to configure the same. I encountered one <a href="https://issues.jenkins-ci.org/browse/JENKINQS-12635?focusedCommentId=161518#comment-161518">issue</a> while configuring the same, i.e. ipa generation was failing when the "Build output directory" was configured with relative path. It got resolved by giving the full path as <strong>${WORKSPACE}/build</strong>.
<h3><strong><span style="text-decoration: underline;">Configure Distribution profile</span></strong></h3>
For distributing applications, an ad-hoc distribution profile needs to be created using the this <a href="https://developer.apple.com/ios/manage/provisioningprofiles/create.action?type=2">link</a>. The Development Provisioning Profile will not work with TestFlightApp. It took me sometime to figure out the same. The following video gives detailed instructions on how to create the same.

<a href="http://www.youtube.com/watch?v=XVO0tIHmQTg&amp;feature=relmfu">http://www.youtube.com/watch?v=XVO0tIHmQTg&amp;feature=relmfu</a>
<h3><strong><span style="text-decoration: underline;">Integrate with TestFlightApp API</span></strong></h3>
TestFlightApp provides <a href="https://testflightapp.com/api/doc/">API</a> which can be integrated with Jenkins to upload the IPA after successful build. I used curl command, as given as sample in the document, to upload the IPA. You can create support groups to be notified on each new upload of the app, and installation of the app is very simple i.e. just a click of link in the email. No iTunes and no sharing of IPA through emails.

One issue I was stuck during the setup was the configuration of the profile with the Xcode plugin. The plugin has the option "Embed Profile", but even if you give the path of the profile file, it was using the wrong profile for the IPA. The problem resolved when the profiles were refreshed in Xcode. You can get the Refresh option in the Organizer menu as shown below.
<img src="https://s3.amazonaws.com/multunus-cdimages/refresh_profiles_xcode.jpg" alt="Refresh profiles - Xcode" width="600" style="border: none;" />

<strong><span style="text-decoration: underline;">Note:</span></strong> This post is mainly about integrating Jenkins with TestflightApp, hence not talking about testing tools. I am planning to cover about the same in my upcoming posts.
