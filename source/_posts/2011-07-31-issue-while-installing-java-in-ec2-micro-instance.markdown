---
comments: true
layout: post
title: Issue while installing Java in EC2 Micro instance
wordpress_id: 1409
wordpress_url: http://www.multunus.com/?p=1409
date: 2011-07-31 14:22:30.000000000 +05:30
author: Leena
---
When I tried to install Java in our <a href="http://aws.amazon.com/ec2/instance-types/">EC2 micro instance</a>, it stopped responding. There was no luck even after restarting the instance. I thought it might be a specific issue with that particular instance, so tried it again by bringing up a new micro instance and every time it was the same behaviour. I then googled and discovered it as a known <a href="https://bugs.launchpad.net/ubuntu/+source/linux/+bug/634487">issue</a> reported back in September 2010. The suggested workaround is:
<ul>
	<li>Bring up a small instance</li>
	<li>Install Java</li>
	<li>Convert it into micro instance.</li>
</ul>
Converting of the instance can be done using <a href="http://aws.amazon.com/developertools/351">API tools</a>, or from the <a href="http://www.kinlane.com/2011/03/easier-scalability-with-aws/">AWS Console</a>. But for me this option was never enabled from the console. I don't know why. Of course, the API option would still work, I suppose.

But after looking at the bug in detail, I could see a solution which uses the linux <a href="http://linux.about.com/library/cmd/blcmdl1_nice.htm">nice</a> command, and that did the trick for me. You can see the script as the last comment. The script is as follows:
<pre class="Bash/shell">
#!/bin/bash
sudo add-apt-repository "deb <a rel="nofollow" href="http://archive.canonical.com/">http://archive.canonical.com/</a> natty partner"
sudo apt-get update
#Accept the Java license.
for i in bin jdk jre; do
echo "sun-java6-$i shared/accepted-sun-dlj-v1-1 select true" | sudo debconf-set-selections
done
# convoluted way to install java. this seems to only work some times! Race condition?
# <a rel="nofollow" href="https://forums.aws.amazon.com/message.jspa?messageID=199841#199841">https://forums.aws.amazon.com/message.jspa?messageID=199841#199841</a>
sudo nice --adjustment=19 apt-get install -y sun-java6-jre
<span style="font-family: monospace;">
</span></pre>
