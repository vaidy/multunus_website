---
comments: true
layout: true
title: ! 'Continuous Delivery - Part 3: Running custom rake tasks during deployment'
wordpress_id: 1482
wordpress_url: http://www.multunus.com/?p=1482
date: 2011-07-31 15:50:54.000000000 +05:30
---
One problem we faced with the pipeline setup what I had mentioned in my <a href="http://www.multunus.com/2011/07/continuous-delivery-using-jenkins-build-pipeline/">first post</a> was that - it was not handling how to run the extra tasks that we need to do in some of the deployments. Some examples are:
<ul>
	<li>Reindex the solr/lucene indexes if any new field has been added to the index</li>
	<li>Some custom rake tasks , say for eg: task to update values in the DB, which you don't want to add to migrations</li>
</ul>
We do have Cap tasks for running the required rake tasks, but again it was done manually. So we've to remember to run them after deploying to production.  And also there is no way to track what steps were followed for a certain deployment.

I used the build parameter again for fixing the above issue i.e. after accepting the extra tasks as parameter for the build for the first job, they will be passed on to the downstream jobs. In this way the same deployment steps will be automatically followed for rest of the jobs in the pipeline.

The only difference in this case is that - sometimes the parameter can be empty. This check has to be done in the scripts i.e. if the value exists for the parameter, execute the extra tasks along with the normal deployment else just do a normal deployment.

Continued..
<ul>
	<li><a title="Continuous Delivery – Part 1: Our Jenkins Build Pipeline setup" href="http://www.multunus.com/2011/07/continuous-delivery-using-jenkins-build-pipeline/">Continuous Delivery – Part 1: Our Jenkins Build Pipeline setup</a></li>
	<li><a title="Continuous Delivery – Part 2: Code metrics with metrical" href="http://www.multunus.com/2011/07/continuous-delivery-code-metrics-with-metrical/">Continuous Delivery – Part 2: Code metrics with metrical</a></li>
	<li><a title="Continuous Delivery – Part 4: Rolling back database migrations with Capistrano rollback" href="http://www.multunus.com/2011/08/continuous-delivery-part-3-rolling-back-database-migrations-with-capistrano-rollback/">Continuous Delivery – Part 4: Rolling back database migrations with Capistrano rollback</a></li>
</ul>
<div class="zemanta-pixie" style="margin-top: 10px; height: 15px;"><a class="zemanta-pixie-a" title="Enhanced by Zemanta" href="http://www.zemanta.com/"><img class="zemanta-pixie-img" style="border: none; float: right;" src="http://img.zemanta.com/zemified_e.png?x-id=0a6adeff-692b-401b-9726-093189c9c0b1" alt="Enhanced by Zemanta" /></a></div>
