---
comments: true
date: 2011-09-22 14:32:49
layout: post
slug: rebuilding-in-jenkins
title: Rebuilding in Jenkins
wordpress_id: 1719
categories:
- Continuous Delivery
---



One option that might be required after setting up a [build pipeline](/2011/07/continuous-delivery-using-jenkins-build-pipeline/) is the provision to redeploy an earlier version by click of a button. This can become handy when we find a bug in the production and want to see when the bug got introduced. For that we will have to redeploy the earlier version to the staging/UAT environment and test the same.

Jenkins by default does not allow to rerun any of the earlier jobs. But you can achieve this by the [Rebuild](https://wiki.jenkins-ci.org/display/JENKINS/Rebuild+Plugin) plugin. It allows you to rebuild any job provided its parameterized build. It also allows you override the parameters. It will show the "Rebuild" button at the left side as shown below when you go to a specific build page:

![](/wp-content/uploads/2011/09/rebuild.png)

This is not a replacement for revert build, because it does not take care of reverting DB. But this can be extended to do the same.

Note: It will show the Rebuild button only for those builds which occurred after installing the plugin. I took some time to realize this and it is not very clear in the documentation.


