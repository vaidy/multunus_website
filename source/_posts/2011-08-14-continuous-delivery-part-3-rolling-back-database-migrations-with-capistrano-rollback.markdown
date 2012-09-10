---
comments: true
layout: post
title: ! 'Continuous Delivery - Part 4: Rolling back database migrations with Capistrano
  rollback'
wordpress_id: 1527
wordpress_url: http://www.multunus.com/?p=1527
date: 2011-08-14 08:22:40.000000000 +05:30
---
According to the book <a href="http://www.amazon.com/gp/product/0321601912?tag=contindelive-20">Continuous Delivery</a>, the database also should be under version control, and Rails allows us to achieve this with ActiveRecord Migrations. Even though <a class="zem_slink" title="Capistrano" rel="homepage" href="http://www.capify.org/">Capistrano</a> can run the migrations automatically with its <code>deploy</code> command, its <code>deploy:rollback</code> task does not rollback the DB migrations automatically.  I've created a small capistrano <a href="https://github.com/multunus/capistrano-db-rollback">recipe</a> which can take care of rolling back migrations.  The assumptions made are:
<ul>
	<li>All the migrations have the <code>down</code> method defined properly. You can check for this by running <code>rake db:migrate:redo</code></li>
	<li>The schema.rb exists in the repository. This is one of the <a href="http://guides.rubyonrails.org/migrations.html#schema-dumps-and-source-control">suggested practices</a> for Rails.</li>
</ul>
The script is very simple, it extracts the version from the <code>schema.rb</code> and runs the <code>rake db:migrate</code> with the same version. The task gets run automatically along with <code>deploy:rollback</code>. This approach should work for most small and medium complexity Rails apps.

Continued..
<ul>
	<li><a title="Continuous Delivery – Part 1: Our Jenkins Build Pipeline setup" href="http://www.multunus.com/2011/07/continuous-delivery-using-jenkins-build-pipeline/">Continuous Delivery – Part 1: Our Jenkins Build Pipeline setup</a></li>
	<li><a title="Continuous Delivery – Part 2: Code metrics with metrical" href="http://www.multunus.com/2011/07/continuous-delivery-code-metrics-with-metrical/">Continuous Delivery – Part 2: Code metrics with metrical</a></li>
	<li><a title="Continuous Delivery – Part 3: Running custom rake tasks during deployment" href="http://www.multunus.com/2011/07/continuous-delivery-contd/">Continuous Delivery – Part 3: Running custom rake tasks during deployment</a></li>
</ul>
<div class="zemanta-pixie" style="margin-top: 10px; height: 15px;"><a class="zemanta-pixie-a" title="Enhanced by Zemanta" href="http://www.zemanta.com/"><img class="zemanta-pixie-img" style="border: none; float: right;" src="http://img.zemanta.com/zemified_e.png?x-id=37c95294-b89a-4f0c-91c2-51a1717f4ba4" alt="Enhanced by Zemanta" /></a></div>
