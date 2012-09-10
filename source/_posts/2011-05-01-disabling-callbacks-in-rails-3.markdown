---
comments: true
layout: post
title: Disabling callbacks in Rails 3
wordpress_id: 1266
wordpress_url: http://www.multunus.com/?p=1266
date: 2011-05-01 02:10:17.000000000 +05:30
author: Leena
categories:
- All Posts
- Rails
- Technology
---
It is common requirement to disable the callbacks like <code>after_save</code>, <code>after_create </code>etc while importing/migrating data. One way to avoid this is by directly importing the data into DB using a command like <code>mysqlimport</code>. But by doing that, the Rails validations etc will not work. We can disable the callbacks using the <code>skip_callback</code> method.  For eg:

<code>User.skip_callback("create",:after,:send_confirmation_email)</code>

The above will skip the <code>send_confirmation_email</code> callback fired on after_create.

To set the callback back:

<code>User.set_callback("create",:after,:send_confirmation_email)</code>
