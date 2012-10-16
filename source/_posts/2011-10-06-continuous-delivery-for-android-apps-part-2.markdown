---
comments: true
layout: post
title: Continuous Delivery for Android Apps – Part 2
date: 2011-10-06 06:51:57.000000000 +05:30
author: 
- Leena
categories:
- All Posts
- Android
- Continuous Delivery
- Process
---
This post talks about how to run tests for the build setup as mentioned in <a href="/2011/09/continuous-delivery-for-android-apps-part-1/">Part 1</a>.
<h3><span style="text-decoration: underline;">Generate the build script for test</span></h3>
The suggested practice is to have 2 separate projects for android, one the source and the other for the tests. The following command will generate a build.xml for the test project. Replace the  with the path of the source path.

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">android update test-project -m ../&lt;project-path&gt; -p . </span>

One problem I've seen is that, it does not break the build even if there are failures in the test. Issue is reported here:

<!-- more -->

<a href="http://code.google.com/p/android/issues/detail?id=14241">http://code.google.com/p/android/issues/detail?id=14241</a>

I had to override the run-tests target as mentioned below to fix this issue:
<pre>&lt;target name="run-tests" depends="-install-tested-project, install"
description="Runs tests from the package defined in test.package property"&gt;
    &lt;echo&gt;Running tests ...&lt;/echo&gt;
    &lt;exec executable="${adb}" failonerror="true" outputproperty="tests.output"&gt;
        &lt;arg value="shell" /&gt;
        &lt;arg value="am" /&gt;
        &lt;arg value="instrument" /&gt;
        &lt;arg value="-w" /&gt;
        &lt;arg value="-e" /&gt;
        &lt;arg value="coverage" /&gt;
        &lt;arg value="@{emma.enabled}" /&gt;
        &lt;arg value="${manifest.package}/${test.runner}" /&gt;
    &lt;/exec&gt;
    &lt;echo message="${tests.output}"/&gt;
    &lt;fail message="Tests failed!!!"&gt;
        &lt;condition&gt;
            &lt;or&gt;
            &lt;contains string="${tests.output}" substring="Error" /&gt;
            &lt;contains string="${tests.output}" substring="Fail" /&gt;
            &lt;/or&gt;
        &lt;/condition&gt;
     &lt;/fail&gt;
&lt;/target&gt;</pre>
You can change the ant commands to <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px;">clean run-tests release </span>in Jenkins to run the tests as part of packaging.

Next I will be writing about how to start emulator from Jenkins while running the tests.

