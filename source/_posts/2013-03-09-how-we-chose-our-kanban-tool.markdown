---
layout: post
title: "How we chose our Kanban Tool"
date: 2013-03-09 22:39
comments: true
author:
- Leena
categories:
- All Posts
- Process
---
We've been using <a href="http://www.pivotaltracker.com/">Pivotal Tracker</a>[PT] as our Collaborative Project Management Tool for over 2 years now. 
<p>
Recently though, we chose to move toward a Kanban style of workflow. PT is however heavily geared toward an iterative form of development - but we’ve now chosen to eschew iterations altogether. We’ve been doing continuous deployment for a while now, and we found the whole process of estimations and sizing of stories a largely wasteful exercise. 
</p>
<p>
  I am not going to talk about “Why Kanban”, because there are many articles and books which talks about the same. But I am instead going to walk you through the process that we used to evaluate and decide upon the online Kanban tool that we finally ended up shifting to.
</p>
<p>
The different tools we evaluated were:
<ul>
  <li><a href="http://leankit.com/">LeanKit</a></li>
  <li><a href="http://kanbanery.com/">Kanbanery</a></li>
  <li><a href="http://kanbantool.com/">KanbanTool</a></li>
</ul>
</p>
<p>
  If you’ve ever used PT, you already know what an awesome piece of software it is. The real-time collaboration features, the sheer fluidity of the user interface, the way it all tightly fits together - is amazing. So, our expectations from the Kanban tool were already fairly high - especially in terms of a clutter free, fluid, “don’t-get-in-my-way” user experience.
</p>
<p>
  So, we came up with a list of criteria for deciding our tool of choice. 
</p>
<iframe width='700' height='400' frameborder='0' src='https://docs.google.com/spreadsheet/pub?key=0ApUPwJdQvqT_dEJuS25YZzMwWkJVc0NXWXhIbUhaQ1E&output=html&widget=true'></iframe>
<br/>
<p>
 Please use this <a href="https://docs.google.com/spreadsheet/ccc?key=0ApUPwJdQvqT_dEJuS25YZzMwWkJVc0NXWXhIbUhaQ1E&usp=sharing">link</a> if you would like to see the original document.
</p>
<p>
  Lastly, I would like to mention those articles which helped us to understand Kanban better.
<ul>    
  <li><a href="http://www.agileproductdesign.com/blog/2009/kanban_over_simplified.html">Kanban Development OverSimplified</a> by Jeff Patton</li>
  <li><a href="http://www.infoq.com/presentations/Single-Piece-Flow-Kanban">Single Piece Workflow in Kanban</a> by James Shore and Arloo Banshee</li>
  <li><a href="http://www.crisp.se/gratis-material-och-guider/kanban">Kanban</a> by Henrik Kniberg</li>
</ul>
</p>
<p>
  <strong>Update:</strong> We also looked at <a href="">Trello</a> but it does not provide features such as WIP limit, cycle and lead time reporting etc. which are key for Kanban. But we found that there is a Google Chrome Extension which can be used for adding <a href="https://github.com/NateHark/TrelloWIPLimits">WIP(Work in Progress) limit</a> in Trello. Obviously that would not be sufficient for collaboration, but would be sufficient for personal Kanban. 
</p>
