---
comments: true
date: 2011-11-04 14:55:20
layout: post
slug: continuous-delivery-building-android-library-project
title: 'Continuous Delivery: Building Android Library project'
wordpress_id: 1960
categories:
- All Posts
- Android
- Continuous Delivery
---

This post talks about how to build an Android Project using ant which depends on an Android Library project.



	
  * Add default.properties in the library project and add android.library=true in the same

	
  * Run the command in the main Android Project android update project --path . --library ../path-to-the-library/**Note: This always has to be relative path.**

	
  * Now running ant release should build the library project too.


**Note:** The android command mentioned in the second step adds an entry in the default.properties file. If you need to override that in different environments, override that in the local.properties. Even there, it has to be relative path, the absolute path will not work.
