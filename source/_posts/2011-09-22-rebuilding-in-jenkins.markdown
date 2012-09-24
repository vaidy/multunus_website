---
comments: true
layout: post
title: Rebuilding in Jenkins
date: 2011-09-22 14:32:49.000000000 +05:30
author: Leena
categories:
- All Posts
- Continuous Delivery
- Process
---
<div>

One option that might be required after setting up a <a href="/blog/2011/07/continuous-delivery-using-jenkins-build-pipeline/">build pipeline</a> is the provision to redeploy an earlier version by click of a button. This can become handy when we find a bug in the production and want to see when the bug got introduced. For that we will have to redeploy the earlier version to the staging/UAT environment and test the same.

Jenkins by default does not allow to rerun any of the earlier jobs. But you can achieve this by the <a href="https://wiki.jenkins-ci.org/display/JENKINS/Rebuild+Plugin">Rebuild</a> plugin. It allows you to rebuild any job provided its parameterized build. It also allows you override the parameters. It will show the "Rebuild" button at the left side as shown below when you go to a specific build page:

<img src="/images/rebuild.png" alt="" width="156" height="247" />

This is not a replacement for revert build, because it does not take care of reverting DB. But this can be extended to do the same.

Note: It will show the Rebuild button only for those builds which occurred after installing the plugin. I took some time to realize this and it is not very clear in the documentation.

</div>
