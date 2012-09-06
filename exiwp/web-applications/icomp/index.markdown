---
comments: true
date: 2012-04-15 06:33:59
layout: page
slug: icomp
title: iComp
wordpress_id: 209
---

![iComp](http://new.multunus.com/wordpress/wp-content/gallery/finance/105__320x240_icomp.png)Integrated Compensation [iComp] wanted us to build an ETL [Extract, Transform, Load] system to be able to effectively process a **very large financial database** of companies across the world. We faced two major challenges:



	
  * A lot of analysis was required to determine how to determine the target data model – to ensure that the queries that would be run by the client would be highly efficient.

	
  * The raw data was humongous in nature – with more than **200+ Million** records. The ETL tool that we would write would have to process all of these records as efficiently as possible, but ensure that there were enough checks in place to ensure that the quality of the data in the target data model was maintained.


  

When we were done, the response times for the queries were at the sub-second level. This was a huge value addition for the client – who were earlier having to wait for >15min for the same queries with the original data format.

**Technologies Used:** Spring, Hibernate, MySQL Tuning
