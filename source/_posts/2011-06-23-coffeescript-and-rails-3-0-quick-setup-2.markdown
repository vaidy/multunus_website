---
comments: true
layout: post
title: CoffeeScript and Rails 3.0 - Quick setup
date: 2011-06-23 14:10:58.000000000 +05:30
author: Manoj
categories:
- All Posts
- Rails
- Technology
---
I have been hearing a lot about CoffeeScript nowadays as you must have as well. Yes, it is built into Rails 3.1 by default. However I'm still working on a Rails 3.0 project, where I'm thinking of starting to use CoffeeScript. So, this blog post concentrates on how to quickly setup CoffeeScript into your existing Rails 3.0 project. For more details refer to the links at the bottom of this post.

<strong>Step 1:</strong> Add these to Gemfile

```
gem 'therubyracer', :require =&gt; false
gem 'barista'
```

'barista' gem takes care of installing coffee-script gem and its dependencies. 'therubyracer' is the javascript engine for ruby.

<strong>Step 2:</strong> Run Bundle Install to install coffee-script gem and other required gems

```
bundle install
```

<strong>Step 3:</strong> Generate Barista initializer file config/initializers/barista_config.rb

```
rails generate barista:install
```

<strong>Step 4(optional): </strong>Lets  configure barista to compile all coffeescript code into public/javascripts/coffeescripts/ folder (this is optional, if not configured compiled code will be placed under public/javascripts folder)

config/initializers/barista_config.rb, line 7.

```
# Change the output root, causing Barista to compile into public/coffeescripts
c.output_root = Rails.root.join(&quot;public&quot;, &quot;javascripts&quot;, &quot;coffeescripts&quot;)
```

<strong>Step 5:</strong> Create a folder 'coffeescripts' under app/ to have all your coffeescripts. All file names should end with .coffee
Example: app/coffeescripts/user.coffee

```
jQuery -&gt;
 $('form').validate()
```

<strong>Step 6:</strong> Above code will be complied to JS file under public/javascripts/coffeescripts/user.js. Example code:

```
 /* DO NOT MODIFY. This file was compiled Thu, 23 Jun 2011 07:13:34 GMT from
 * /home/manoj/my_rails_app/app/coffeescripts/user.coffee
 */
 (function() {
  jQuery(function() {
    return $('form').validate();
  });
}).call(this);
```

<strong>Step 7:</strong> Include these coffeescript js files in your view/layouts using include tag.

```
<%= javascript_include_tag 'application', 'coffeescripts/user'>
```

And you're done with setup. As the complied code is neat JS code, your page should continue to work fine :) Going forward you can start using CoffeeScript for writing JS code.

For deployment we can use the <code>barista:brew</code> rake task in the Capistrano script using an "after" hook

<strong>Refrences used to create above steps:</strong>
<a href="http://jashkenas.github.com/coffee-script/">http://jashkenas.github.com/coffee-script/</a>
<a href="http://blog.nicolasblanco.fr/2010/12/13/you-should-already-use-coffeescript-in-your-rails-app/">http://blog.nicolasblanco.fr/2010/12/13/you-should-already-use-coffeescript-in-your-rails-app/</a>

<strong>Convert existing JS to coffeescript:</strong>
<a href="http://ricostacruz.com/js2coffee/">http://ricostacruz.com/js2coffee/</a>

<strong>Setting up Emacs with coffee-mode:</strong>
<a href="http://ozmm.org/posts/coffee_mode.html">http://ozmm.org/posts/coffee_mode.html</a>
