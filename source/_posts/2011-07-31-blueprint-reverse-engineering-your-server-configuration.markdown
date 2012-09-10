---
comments: true
layout: post
title: Blueprint - reverse engineering your server configuration
wordpress_id: 1489
wordpress_url: http://www.multunus.com/?p=1489
date: 2011-07-31 15:35:16.000000000 +05:30
---
There are many tools like <a href="http://wiki.opscode.com/display/chef/Home">Chef</a>, <a href="http://projects.puppetlabs.com/projects/puppet">Puppet</a> etc. to manage the server configuration, but there are not many which do the reverse i.e. create a configuration from an existing server. <a href="https://github.com/devstructure/blueprint">Blueprint</a> does exactly the latter.

Its a set of python scripts which reverse engineer your server configuration. It stores the configuration locally in its own repository, but you can also:
<ul>
	<li>Create Puppet/Chef scripts</li>
	<li>Convert into a normal shell script</li>
	<li>Using <a href="https://github.com/devstructure/blueprint-io">Blueprint I/O</a>, store the configuration in remote server and pull it when required</li>
</ul>
It scans all the packages installed on the machine and adds those into the configuration. According to the <a href="https://devstructure.com/docs/tutorial.html">tutorial</a>, you can do this on a dedicated server or on virtual servers created using <a href="http://www.virtualbox.org/">VirtualBox</a> etc, or on cloud servers like <a href="http://aws.amazon.com/ec2">Amazon EC2</a>, <a href="http://www.rackspacecloud.com/cloud_hosting_products/servers">Rackspace</a> etc.

I've tried it on a dedicated server (i.e. our CI server) as well as on an EC2 server. I faced a couple of issues, but with their help (see issues <a href="https://github.com/devstructure/blueprint/issues/71">71</a> and <a href="https://github.com/devstructure/blueprint/issues/63">63</a>), got those fixed.

While bringing up the EC2 instance, you can give the shell script created by Blueprint as user data, provided the size of the script is below 16384 bytes.

Its really an awesome tool. I got the reference to it from <a href="http://ruby5.envylabs.com/episodes/189-episode-186-june-24-2011/stories/1668-blueprint">Ruby5</a>
