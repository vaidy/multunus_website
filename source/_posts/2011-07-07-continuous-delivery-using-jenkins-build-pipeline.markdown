---
comments: true
layout: post
featured: true
title: ! 'Continuous Delivery - Part 1: Our Jenkins Build Pipeline setup'
date: 2011-07-07 14:28:55.000000000 +05:30
author: 
- Leena
categories:
- All Posts
- Continuous Delivery
- Process
- Technology
---
As part of our journey towards implementing <a href="http://continuousdelivery.com/">Continous Delivery</a>, I've added the <a href="https://wiki.jenkins-ci.org/display/JENKINS/Build+Pipeline+Plugin">Build pipeline</a> for our continous integration server <a href="http://jenkins-ci.org/">Jenkins</a>.  There are quite a few resources available on the net on how to add the plugin and configure it. This blog is not about how to configure the plugin, but more on how I've configured it for one of our projects and issues I faced while doing the same.

The pipeline we have now is very simple. They are:
<ul>
	<li>Run all the RSpec tests</li>
	<li>Run the Javascript Unit tests</li>
	<li>Deploy to staging</li>
	<li>Deploy to production</li>
</ul>
<strong>The problems we had with our earlier approach, and how the current approach solved those problems:</strong>

What we had in the past was, simple scripts with the above items. We had a job for running the tests. If the build was successful, we would run <a href="https://github.com/capistrano/capistrano">capistrano</a> scripts to deploy to staging and once the customer gave the thumbs up, we'd push it to production.  There are a series of steps that we had to do for each deployment. For eg:  for staging deployment:
<ul>
	<li>Merge the "staging" branch with master</li>
	<li>Run the cap script</li>
	<li>Tag the build</li>
</ul>
And almost similar steps needed to be followed for production deployment also. The usual problems that we used to face are:
<ul>
	<li>There is no way we knew what deployment was done on a certain day for what</li>
	<li>All staging updates would not get pushed to production, so it was a tough task to identify which tag to merge when we were finally ready for a production update</li>
</ul>
With the current approach, the advantages are:
<ul>
	<li>Its a one click deployment, so rare chance of making any kind of mistake</li>
	<li>We can clearly see when a feature has been moved to staging, and whether it has been pushed to production or not</li>
	<li>Anyone can do deployment as it is just a click of a button. We may even be able to teach the client how to do this.</li>
</ul>
One of the major problems I had faced in the earlier "manual" system - was the inability to pass parameters between builds. For example, once the app would be moved to staging, a tag is created and when its ready to be pushed to production, we'd have to merge that particular tag to production and then push it.

To achieve the above I used the "parameterized build" option. In Jenkins, the parameters get converted to Environment Variables and got passed to the downstream job.
When you fire the build, it prompts for the value of the parameter. Once entered this would be available as an Environment variable for this job and all its downstream jobs.

For eg: in the pipeline, the downstream project is "Stage deploy", and it will know the value for TAG and uses that value to create a tag in Git after successful deployment.

When it is ready for production deployment it merges with the same tag and deploys to production. In the latest version of the plugin, moving to the next step is <strong>not</strong> triggered automatically and you can retry the failed ones.

<strong>Note:</strong> Capturing the parameter will happen <strong>only</strong> for the first job. So, if the parameterized job is <em>not</em> the first one in the pipeline, the capture of the parameter will not happen.

So we've reached the "one click deployment stage" with this. But we've still got the following pending tasks - based on what's mention in the book  <a href="http://www.informit.com/store/product.aspx?isbn=0321601912">Continuous Delivery</a>:
<ul>
	<li>Rolling back the bad builds</li>
	<li>Add non-functional tests to the pipeline i.e. performance and security tests</li>
	<li>Feature flags</li>
	<li>Zero downtime deployment</li>
	<li>Canary Releases (Something on the lines of A/B testing)</li>
</ul>
Continued..
<ul>
	<li><a title="Continuous Delivery – Part 2: Code metrics with metrical" href="/2011/07/continuous-delivery-code-metrics-with-metrical/">Continuous Delivery – Part 2: Code metrics with metrical</a></li>
	<li><a title="Continuous Delivery – Part 3: Running custom rake tasks during deployment" href="/2011/07/continuous-delivery-contd/">Continuous Delivery – Part 3: Running custom rake tasks during deployment</a></li>
	<li><a title="Continuous Delivery – Part 4: Rolling back database migrations with Capistrano rollback" href="/2011/08/continuous-delivery-part-3-rolling-back-database-migrations-with-capistrano-rollback/">Continuous Delivery – Part 4: Rolling back database migrations with Capistrano rollback</a></li>
</ul>
References:
<ul>
	<li><a href="http://weblogs.java.net/blog/johnsmart/archive/2011/03/10/build-pipelines-jenkinshudson">http://weblogs.java.net/blog/johnsmart/archive/2011/03/10/build-pipelines-jenkinshudson</a></li>
	<li><a href="http://continuousdelivery.com/patterns">http://continuousdelivery.com/patterns</a></li>
	<li><a href="http://www.quora.com/How-does-Etsy-manage-development-and-operations" target="_blank">http://www.quora.com/How-does-Etsy-manage-development-and-operations</a></li>
</ul>
