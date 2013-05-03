---
layout: post
title: "Estimating to Timeboxing - Our Journey"
date: 2013-04-11 02:33
comments: true
author:
- Leena
- Vaidy
categories:
- All Posts
- Process
- Continuous Delivery
---

Estimations are predictions. Unfortunately though, they end up being perceived as <em>commitments</em>. And the team in question starts getting unduly pressured when the estimates go wrong. At Multunus this has happened many times in the past.

<p>Sometime last year we realized there was no point in trying any harder to come up with better estimates - just by relying on our past experience and gut instincts. It was time to look at things from a different perspective. </p>

<p>
We learnt a lot of things from <a href="http://www.jamesshore.com/Agile-Book/">Art of Agile Development [by James Shore]</a>. We found it tremendously useful for learning how to get started with Extreme Programming - and making the “prevention rather than cure” mental shift. This in turn resulted in much less <em>waste</em> - and higher efficiency across the team.
</p>

<p>
But we were still struggling with estimating. We tried the story points and velocity approach suggested by XP. But we were still unable to deliver things at a predictable pace.
</p>
<p>It was time to look beyond XP’s default practices. </p>

<h2>First set of changes</h2>
<br/>
<ul>
    <li>Keep both <a href="http://www.jamesshore.com/Agile-Book/release_planning.html">MMFs and Stories</a> as small as possible. </li>
    <li>Slice down all stories to the same size. This reduces the margin of error that creeps in during story size estimation. </li>
    <li>The velocity, then, is simply the number of stories delivered in an iteration.</li>
</ul>
<p>
The above changes worked well on projects which already had some kind of rhythm. We’d been working with these customer for at least 3 months - so, our knowledge of the system and the customer’s requirements were good. 
</p>
<p>
However, things still fell apart for new projects and customers. The level of uncertainty is obviously much higher in these cases - and the above modified approach was not sufficient for us to remain predictable enough.
</p>
<h2>Second set of changes</h2>
<br/>
<p>
During our search for alternative approaches [see references below], we discovered multiple presentations and blog posts - all suggesting the same thing: Estimating can never be accurate <em>enough</em>. 
</p>
<p>
We watched the <a href="http://www.infoq.com/presentations/Embracing-Uncertainty">Deliberate Discovery video [by Dan North]</a> - and that hit us. We might be more successful if we flipped things around - and <strong>timeboxed</strong> the stories and MMF’s. 
</p>
<p>
Instead of asking the question “How long will it take to build this Feature?”, we instead ask the question “What is the maximum time that should allocate for this feature?”. In addition, we’re also documenting what it is that we’re trying to discover/learn by building that particular feature. 
</p>
<p>
<strong>NOTE:</strong> This is subtly different from the “validated learning” approach in the Lean Startup world - because at this stage, we’re only speaking of engineering related risks.
</p>
<p>
This is useful to overcome <a href="http://en.wikipedia.org/wiki/Parkinson's_law">Parkinson’s Law</a> [“Work expands so as to fill the time available for its completion”]. There’s an additional sense of urgency that prevails on the team. This sense of urgency in turn results in reacting faster when we find ourselves going down “inevitable” rabbit holes. 
</p>
<p>
We’re also noticing a more ready acceptance of the “fail early” mantra - after shifting to the timeboxing mode. 

We’ve tried the timeboxing approach on two different projects - and in both cases, have found remarkably better results. We were close enough to the original estimates that we’d provided - in terms of both cost and time. 
</p>
<h2>Kanban</h2>
<br/>
<p>
As mentioned in my <a href="http://www.multunus.com/2013/03/how-we-chose-our-kanban-tool/">earlier post</a>, we’ve moved to Kanban, so we’re no longer doing fixed weekly iterations. And hence no calculations of velocity either.
</p>
<p>
Instead the focus is on reducing the cycle time for stories - by constantly identifying and eliminating waste in the workflow. 
</p>
<p>
Of course, tracking the original project plan is still necessary - and allows for an additional level of feedback on how well the team is progressing. 
</p>
<h3>References</h3>
</br/>
<a href="http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all">http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all/</a>
<br/>
<a href="http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html">http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html</a>
<br/>
<a href="http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating">http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating</a>
<br/>
<a href="http://www.industriallogic.com/blog/stop-using-story-points/">http://www.industriallogic.com/blog/stop-using-story-points/</a>
<a href="http://dannorth.net/2009/07/01/the-perils-of-estimation/">http://dannorth.net/2009/07/01/the-perils-of-estimation/</a>

