---
comments: true
layout: post
title: Introduction to Continuous Delivery
wordpress_id: 2294
wordpress_url: http://www.multunus.com/?p=2059
date: 2012-05-15 14:49:16.000000000 +05:30
---
We've been doing Continuous Delivery for sometime and also been writing about how to implement the same. This post is about why Continuous Delivery is required and what problems does it solve.
<h3><strong><span style="text-decoration: underline;">What is Continuous Delivery</span></strong></h3>
Continuous Delivery is the process of being able to continuously deliver new versions of a software product to create a tight feedback loop between users and the project team—including the customer or product owner.

<!-- more -->

This helps to test new ideas and changes in the product and also measure the effect of changes in the revenue. Continuous Delivery means releasing software very frequently, i.e. multiple times a day, rather than once in months.
<h3><strong>Bottlenecks for Continuous Delivery</strong></h3>
<div>Lets see the usual challenges for releases. The following are the challenges that we faced before moving to Continuous Delivery. Let me put it in this way i.e. the following are the challenges which got us thinking on how to make releases more predictable and pain free. We already had a Continuous Integration setup at our end, but that was not enough to ease the process.</div>
<ul>
	<li>No tracking on which version was deployed, when and to which environment</li>
	<li>Different people working on different branches, code merge hell when its ready for deployment.</li>
	<li>When an urgent bug needs to be fixed, the fix need to be replicated in multiple branches along with the mainline branch</li>
	<li>No easy way to revert back to the previous stable version</li>
</ul>
We've seen even more challenges in teams which do not have a Continuous Integration setup yet. They are:
<ul>
	<li>Adhoc build processes</li>
	<li>Too much time spent on manual testing</li>
	<li>Integration of code happens only during deployment</li>
	<li>Complexity of build and deployment increases, depending on the complexity of the app.</li>
	<li>For clustered environments, the deployment needs to be updated to all slaves</li>
</ul>
<div>

Thats when we stumbled upon "<a href="http://www.informit.com/store/product.aspx?isbn=0321601912&amp;WT.DCSext.w_ptgrevartcl=Continuous+Delivery%3a+Reliable+Software+Releases+through+Build%2c+Test%2c+and+Deployment+Automation_1641923_ISBNTopCover">Continuous Delivery</a>" book by Jez Humble and Dave Farley and extended our Continuous Integration setup to Continuous Delivery.

</div>
<div>
<h3>Continuous Delivery to the rescue</h3>
One of the key principle of Continuous Delivery is <strong>To </strong><strong>create a <em>repeatable</em> and <em>reliable</em> process for releasing software.</strong> It solves problems by providing fast automated feedback on the <strong>production readiness</strong> of the application - every time there is a change to the code, infrastructure or the configuration.  So in Continuous Delivery, <strong><em>Done </em>means <em>Released.</em></strong>

</div>
<div>A central pattern of Continuous Delivery is called the <em><strong>Deployment pipeline - </strong></em>an automated implementation of the application's build, deploy, test and release process. The following shows a sample deployment pipeline:</div>
<p style="text-align: center;"><img class="aligncenter" style="border: none;" src="https://s3.amazonaws.com/multunus-cdimages/pipeline.png" alt="Deployment Pipeline" width="549" height="189" /></p>

<div>The deployment pipeline includes the following build and deployment process:</div>
<ul>
	<li>Creates executable code to verify that the syntax of the source code is valid.</li>
	<li>Runs the unit tests to check that the code behaves as expected.</li>
	<li>Runs the acceptance tests to check that the application conforms to its business acceptance criteria—that it delivers the business value that was intended.</li>
	<li>Run nonfunctional tests which checks that the application performs sufficiently well in terms of capacity, availability, security, and so on to meet its users’ needs.</li>
	<li>Runs tools which check that the expected code quality criteria such as test coverage and other technology-specific metrics are met.</li>
	<li>Then in the manual testing environment, exploratory testing is done. In parallel a demonstration to the customer and a selection of users can also be done. This helps the product owner to decide whether there are missing features, or find bugs that require fixing.</li>
	<li>If any of the above fails, the deployment should be stopped because it is a clear indication that the application is not production ready.</li>
</ul>
<div>I will write about the Benefits of Continuous Delivery in the next post.</div>
<h4><span style="text-decoration: underline;">References</span></h4>
<div><a href="https://docs.google.com/a/multunus.com/present/edit?id=0AQj1177vtu0MZHRoM2dmN180NzRneGp2bXRndw">https://docs.google.com/a/multunus.com/present/edit?id=0AQj1177vtu0MZHRoM2dmN180NzRneGp2bXRndw</a></div>
<div><a href="http://www.informit.com/articles/article.aspx?p=1829417" target="_blank">http://www.informit.com/articles/article.aspx?p=1829417</a></div>
<div><a href="http://continousdelivery.com" target="_blank">http://continousdelivery.com</a></div>
