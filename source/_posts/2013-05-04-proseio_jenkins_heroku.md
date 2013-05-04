---
layout: post
title:  "Continuous Deployment of Octopress Website with Prose.io and Jenkins"
date: 2013-05-04 18:33
comments: true
author:
  - Leena
categories:
  - All Posts
  - Continuous Delivery
---

As mentioned [in this blog post](http://www.multunus.com/2012/10/our-experience-with-jekyll-and-octopress/), out website multunus.com is hosted with Octopress. And as mentioned there, we were looking for a simple solution for Live Editing and Deployment of the website. This post is about how to edit Website with Prose.io and deploy it using Jenkins to heroku. 

With [Prose.io](http://prose.io/about.html), you can edit any Github files, but you need to run `rake generate` command for generating the HTML files and then need to deploy them. So you will need a development setup to deploy, even if the editing can be done online.

The solution is simple i.e. use [Jenkins](http://jenkins-ci.org/) or any [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration) server for deployment. 

So the steps are as follows:

* Add the following in `_config.yml`:

```
#prose.io settings
prose:
  rooturl: "source"
  metadata:
    "source/_posts": |
        layout: post
        title: "Change Title"
        date: 2013-04-11 02:33
        comments: true
        author:
          - author
        categories:
          - All Posts
          
````

* Setup Prose.io - just login with your Github Handle
* Create a script with as follows:

```
bundle install
bundle exec rake generate
git add public/
git commit -m "Deploying Generated files"

```
* Install the Heroku gem and setup the git remote and keys for deployment as mentioned [here](https://devcenter.heroku.com/articles/git)

* Setup Git Publisher to push the generated files to heroku as shown below.

![Git Publisher](https://s3.amazonaws.com/multunus-images/Git+Publisher.png)

Thats it. You are done. Just "Build" of a button, the changes gets deployed. With this setup anyone who has access to the Github Repo can make changes and deploy without any setup.

This post is written using Prose.io and published through Jenkins.

Yes, the setup was not as easy I had written above. I got stuck mainly with the following.

* I got stuck as the command `rake generate` was watching the file changes. It was not getting stopped for me. The culprit was `auto: true` in _config.yml file.
* If the file extension is .html, Prose.io will not show preview or metadata information. The markdown or md extension would work.
* Thought of using Travis.io as mentioned [here](http://www.harimenon.com/blog/2013/01/27/auto-deploying-to-my-octopress-blog/) for the deployment. But had issues with setting up git push for Heroku. Didn't continue on that as we've been using Jenkins as our CI server for long.