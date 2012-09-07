---
comments: true
layout: true
title: Takeaways from Ruby Conf India 2011
wordpress_id: 1290
wordpress_url: http://www.multunus.com/?p=1290
date: 2011-06-14 13:58:56.000000000 +05:30
---
I know its been almost two weeks since its all over, things may not be fresh in mind. And all of us were very busy with "go live" for one of our client projects. But as its "better later than never", I am putting my thoughts about the recently concluded RubyConf held in Bangalore on 28th and 29th of May 2011.

There were quite a few presentations this year which I felt were very useful for me. Those are:
<ul>
	<li><a href="http://rubyconfindia.org/2011/presentations/brianGuthrie-RubyPlusRailsPlusAppMinusRails.key" target="_blank">Ruby Plus Rails Plus Your Application Minus Rails</a> by Brian Guthrie</li>
	<li><a href="http://rubyconfindia.org/2011/presentations/janmejay-TLB-rocketBoosterForYourBuild.pdf" target="_blank">Test Load Balancer: Rocket Booster for your Build</a> by Janmejay Singh and Pavan</li>
	<li><a href="http://rubyconfindia.org/2011/presentations/brianGuthrie-ContinuousDelivery.key" target="_blank">Continuous Delivery</a> in Ruby by Srushti Ambekallu and Brian Guthrie</li>
</ul>
And its needless to say that the keynotes by Yehuda Katz, Chad Fowler, Nick Sieger and Ola Bini were awesome too. Especially<a href="http://rubyconfindia.org/2011/presentations/chadFowler-service.key" target="_blank"> Chad Fowler's session</a> gave a new perspective on "Service" and who should be considered as a "Customer". And Nick Sieger's closing note gave a different perspective on how to contribute back to the community by conducting workshops and with <a href="http://kidsruby.com/" target="_blank">Kidsruby</a>.

So whats next? Yes, implement the stuff we learned. So these are the immediate action items for us:
<ul>
	<li>More automation for the entire release mechanism. We do have a CI server and do have a Cap script for deployment. But we do not have a "one click deployment" process. A "<a href="http://www.google.com/url?sa=D&amp;q=http://code.google.com/p/build-pipeline-plugin/">Build pipeline</a>" plugin for Hudson should help us achieve that.</li>
	<li>Tools like <a href="http://wiki.opscode.com/display/chef/Home">Chef</a>/<a href="http://www.puppetlabs.com/puppet/introduction/">Puppet</a> for server configuration management. We've tried <a href="https://github.com/wr0ngway/rubber/wiki">rubber</a>, but are yet to use it for any production setup.</li>
	<li>Use <a href="http://test-load-balancer.github.com/">TLB</a> to run tests in parallel.  Setup seem to be pretty straightforward. This will be a huge help when you are doing many deployment in a day.</li>
</ul>
<strong>Update: </strong>One talk I missed in the list was <a href="http://rubyconfindia.org/2011/presentations/sherinC-DesigningHighThroughputWebServiceClients.key">Designing High Throughput Web Service Clients</a> by Sherin. He was able to convey the problems he faced and how he went ahead and solved those.
