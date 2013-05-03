---
comments: true
layout: post
title: Our experience with Jekyll and Octopress
date: 2012-10-25 08:30:05.000000000 +05:30
author: 
- Leena
categories:
- Technology
---
<div>
<p>
  We recently moved from Wordpress to Jekyll for our website because we found it harder to maintain our site with Wordpress. We also hit performance   bottlenecks with Wordpress and were clueless on how to fix those. Jekyll made a lot more sense as it uses Ruby, which we are very comfortable with as compared to PHP. And hardly any performance bottlenecks because the entire site is static, and so no DB tuning required :)
</p>

<h2>What is Jekyll?</h2>

<p>Jekyll is a simple, blog aware, static site generator created by <a href="http://tom.preston-werner.com/">Tom Preston-Werner</a>, founder of GitHub. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with any of your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your website from GitHub source.</p>
<p>We chose to use <a href="http://octopress.org/">Octopress</a>, a framework built on top of Jekyll. It comes with lot of features such as:
  <ul>
    <li>A semantic HTML5 template</li>
    <li>A Mobile first responsive layout (rotate, or resize your browser and see)</li>
    <li>Built in 3rd party support for Twitter, Google Plus One, Disqus Comments, Pinboard, Delicious, and Google Analytics</li>
    <li>An easy deployment strategy using Github pages or Rsync</li>
    <li>Built in support for Rack servers</li>
  </ul>
</p>
<p>There are lot of <a href="https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes">3rd party themes</a> available with Octopress which you can chose. This helped us to convert the existing Wordpress site to Jekyll. </p>

<h2>How does it work?</h2>

<p>Every page that you create in Jekyll will have the following sections:
  <ul>
    <li><a href="https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter">YAML frontmatter</a> on top of every file which will contain data in the YAML format which is processed by Jekyll. The mandatory ones are “title” and “layout” which decides the title and layout of the page respectively.</li>
    <li><a href="https://github.com/Shopify/liquid">Liquid</a> markup for the templating with the in markdown format or HTML format.  There is support for <a href="https://github.com/plusjade/mustache-with-jekyll">Mustache</a> too.</li>
    <li>Layouts for the pages.</li>
    <li>Plugins - this is for customizing the content. You can see more details about how to write plugins <a href="https://github.com/mojombo/jekyll/wiki/Plugins">here</a>.</li>
  </ul>
</p>

<h2>“Aha” Moments</h2>

<p>There were many “Aha” moments throughout the migration, I am putting those top ones which came to my mind while writing.</p>

<h3>Responsiveness </h3>

Bootstrap makes it so much easier to do the regular stuff - modals, navigation bar, tooltips, etc. And with a little more effort you get responsiveness for free.

<h3>Asides for Featured posts</h3>

Asides are the way you can add sidebar to your pages in Octopress. So if you want something to be displayed on the navbar, add a new aside file and include it in your layout. We had the requirement to display certain posts as “featured” and needed to be shown them in all pages. The only thing to do was to add ‘featured: true’ in the YAML front matter of the corresponding posts and create an aside as follows and include it in your layout. 

<h3>Integrating with comments</h3>

It was as simple adding “comments: true” in the posts which you want the comments to be displayed for. 

<h3>Keeping the blogs as unpublished</h3>

Keep “published: false” in the YAML frontmatter of the post. It won’t show up in the post list.

<h3>Permanent Links for Posts</h3>

Need to change the way the URL for blogs are being displayed? Just change the permlink in _config.yml 

<h2>Where things can take time</h2>

<h3>Figuring out how Jekyll does the magic</h3>

It took a while for us to figure out how Jekyll does the “magic”. Getting a hang of the layouts, YAML Front matter, Liquid Templating, Asides in Octopress can take time. If you need to customize, writing the plugins and what type of plugin to write can also take little time initially. 
<h3>Learning curve for Sass and Twitter bootstrap</h3>


As mentioned earlier, Octopress uses <a href="http://sass-lang.com/">Sass</a> and we chose a theme which uses <a href="http://twitter.github.com/bootstrap/">Bootstrap</a>. There would be a learning curve if you are new to both. 

<h3>Migrating content from Wordpress</h3>

There are quiet a few plugins written to <a href="https://github.com/mojombo/jekyll/wiki/Blog-Migrations">migrate</a> data from other blogging platforms including Wordpress. This worked well for blogs, but will not take care of downloading the related images and also the pages other than blogs. We used the tool <a href="https://github.com/thomasf/exitwp">exitwp</a>, which will try to migrate as much data as possible including downloading of images. But it does not take care of updating the posts with the new URL for the images, so that was a task that we had to take up manually. 

<h3>Contact Us Form</h3>

There are Wordpress plugins that can help you create a contact us form or a suggestion box. But how can you do that for a static website? You’ve two options: 

<ul>
	<li>Create an app with an API for saving the contact details</li>
	<li>Use some existing services which can persist form data</li>
</ul>

We went with the second option and after a lot of shopping around, we finally settled for none other than <a href="http://www.google.com/google-d-s/forms/">Google Forms</a>. This automatically took care of getting an email notification for every form submission. Some of the issues that we fixed or workarounds we had done are: 

<ul>
	<li>We followed the instructions mentioned <a href="http://www.morningcopy.com.au/tutorials/how-to-style-google-forms/">here</a> to customize the look and feel of the form.</li>
	<li>Added a hidden iframe to not to show the page from google form on submit</li>
	<li>Added front end validations for mandatory fields, to ensure that if and when the form is submitted, the submission would be successful.</li>
</ul>

<h3>Team Page</h3>

As any company’s website, we also needed a team page - A visual index of people and also separate pages of individual profiles. We found an excellent <a href="https://github.com/flatterline/jekyll-plugins#company-team">plugin</a>, that seemed to do just what we wanted. But since we had used Octopress, the directory structure was slightly different from what the plugin had expected. So we had to fiddle around with the plugin to understand how it worked and modify it to work for us. In the end, adding a new person to the team was as easy as adding a new yml file for that person.

<h2>Our contribution back </h2>

We’ve created couple of open source contributions as part of the migration process. You can see the details <a href="http://www.multunus.com/opensource">here</a>. 

<h2>Things, I felt, missing</h2>

<ul>
  <li>Debugging - I found it extremely tough to debug Jekyll. Tried both <a href="http://bashdb.sourceforge.net/ruby-debug.html">ruby-debug</a> and <a href="http://pryrepl.org/">pry</a>, but somehow both does not seem to be working. The tough part I found was how it suppresses exceptions. If there is an error in any generator, it just continues without even logging it.</li>

	<li>Live Editor for Octopress using which you can write the blog and automatically publish it. If you are using only Jekyll with GitHub pages, <a href="http://prose.io/">prose.io</a> would work for you.</li>
</ul>

<h2>Summary </h2>

<p>I would highly recommend Jekyll and/or Octopress for creating a company website especially if you are a software development firm comfortable with Ruby. It combines the power of Ruby, Templating and YAML using which it generates a static web site for you. Octopress helps you to quickly layout the foundation for your website on top of which you can easily build. </p>
<p>A huge thanks to the awesome Ruby community and GitHub community without whom the entire project might not have been possible. </p>

<h2>References</h2>

<a href="http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/ ">http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/ </a>
</div>


