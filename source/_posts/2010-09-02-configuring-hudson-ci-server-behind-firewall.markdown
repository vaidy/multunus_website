---
comments: true
layout: post
title: Configuring Hudson CI server behind firewall
date: 2010-09-02 14:44:17.000000000 +05:30
author: Leena
categories:
- All Posts
- Continuous Delivery
- Technology
---
When firewall was introduced within our local network, the Hudson server stopped working with the error:
<pre>javax.jmdns.impl.tasks.Prober run
WARNING: run() exception
java.io.IOException: Operation not permitted
at java.net.PlainDatagramSocketImpl.send(Native Method)
at java.net.DatagramSocket.send(DatagramSocket.java:625)
at javax.jmdns.impl.JmDNSImpl.send(JmDNSImpl.java:1200)
at javax.jmdns.impl.tasks.Prober.run(Prober.java:163)
at java.util.TimerThread.mainLoop(Timer.java:512)
at java.util.TimerThread.run(Timer.java:462)</pre>
And when you access hudson in browser, it stays with the message <strong><em>"Please wait while Hudson is getting ready to work...."</em></strong><em></em> forever.

Initially I thought the problem might be because the ports which are required by the Hudson server i.e. 8080 and 5353, were not opened in the Firewall. I opened those, but the error remained.

After googling for sometime, I could find similar issues being reported here:

<a href="http://issues.hudson-ci.org/browse/HUDSON-7129?page=com.atlassian.streams.streams-jira-plugin:activity-stream-issue-tab">http://issues.hudson-ci.org/browse/HUDSON-7129?page=com.atlassian.streams.streams-jira-plugin:activity-stream-issue-tab</a>

And the issue got fixed by adding
<pre>-Dhudson.DNSMultiCast.disabled=true</pre>
to the java command as follows:
<pre>java -Dhudson.DNSMultiCast.disabled=true -jar hudson.war --httpPort=8080</pre>
