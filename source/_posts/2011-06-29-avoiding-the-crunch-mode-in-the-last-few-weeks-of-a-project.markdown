---
comments: true
layout: post
title: Avoiding the "crunch mode" in the last few weeks of a project
wordpress_id: 1358
wordpress_url: http://www.multunus.com/?p=1358
date: 2011-06-29 11:19:52.000000000 +05:30
---
We recently launched a product into production. It was a 4 month long project - with 5 full time members on the team. Right from the outset, one of things that we wanted to do, was to set and maintain a rhythm across the entire duration of the project. We set this rhythm to 1 week iterations - with a demo at the end of each iteration. Things went pretty well for most of the project. We had expected to have to hustle a little bit in the last couple of weeks - but in the end we actually ended up working much longer hours than the usual.

After the launch, we realized that the number of issues reported over the last few weeks of the project were much higher than what we were used to for most of the project. So not only did we have a tired team at launch time, we also had lower quality. In the retrospective that soon followed the launch, we discussed this in great detail and came up with one important conclusion:
<p style="padding-left: 30px;"><em>We were missing the forest for trees - by focusing  too much on the individual <strong>practices</strong>, but not appreciating the <strong>overall XP Process</strong>. Had we been perhaps more aware of the value we were getting by following the practices, we'd probably tried to find or create new practices that would have suited the changing context better. </em></p>
Thankfully though, I got this thought that writing to <a href="http://jamesshore.com/">James Shore</a> directly might help as well. James is, among many other things, the author of our favorite book - <a href="http://jamesshore.com/Agile-Book/">The Art of Agile Development</a>. What follows is the question/answer emails I exchanged with him:

My Question to James:
<blockquote><em><span style="color: #000000;">We are a team that has transitioned to XP for a while now. We have been following almost everything mentioned in your book "The Art of Agile Development". We found that the project was more stable than any other project that we'd done in the past.</span></em>

<em><span style="color: #000000;">
</span></em>

<em><span style="color: #000000;">But we found recently that we were not able to sustain the pace with which we had started the project. There was this "Crunch Mode" in the last few weeks of the project with everyone in the team putting in long hours of work.</span></em>

<em><span style="color: #000000;">
</span></em>

<em><span style="color: #000000;">We really want to avoid to such situations in our future projects. Can you suggest as to how we could achieve that?</span></em></blockquote>
And the response I got from him:
<blockquote>
<p style="text-align: left;"><em><span style="color: #000000;">Glad to hear it worked for you! It's hard to know what happened since I wasn't there, but there are several possibilities:</span></em></p>
<p style="text-align: left;"><em><span style="color: #000000;">
</span></em></p>
<p style="text-align: left;"><em><span style="color: #000000;">- You might have overcommitted. In that case, take a second look at the "<a href="http://jamesshore.com/Agile-Book/release_planning.html" target="_blank">Release Planning</a>" and "<a href="http://jamesshore.com/Blog/Use-Risk-Management-to-Make-Solid-Commitments.html" target="_blank">Risk Management</a>" practices. You might have been better off reducing scope or delaying the release date.</span></em></p>
<p style="text-align: left;"><em><span style="color: #000000;">
</span></em></p>
<em><span style="color: #000000;">- You might have had incurred too much technical debt. In that case, remember the maxim that you should always leave the code better than you found it, and take a second look at the <a href="http://jamesshore.com/Agile-Book/slack.html" target="_blank">Slack</a>, <a href="http://jamesshore.com/Agile-Book/test_driven_development.html" target="_blank">TDD</a>, <a href="http://jamesshore.com/Agile-Book/refactoring.html" target="_blank">Refactoring</a>, <a href="http://jamesshore.com/Agile-Book/simple_design.html" target="_blank">Simple Design</a>, and <a href="http://jamesshore.com/Agile-Book/incremental_design.html" target="_blank">Incremental Design</a> practices.</span></em>

<em><span style="color: #000000;">
</span></em>

<em><span style="color: #000000;">- You might have had too many bugs. In that case, take a second look at the "<a href="http://jamesshore.com/Agile-Book/no_bugs.html" target="_blank">No Bugs</a>" practice and remember that you need to keep things clean and bug-free all the time rather than saving up bug-fixing for the end. Also consider doing the "Exploratory Testing <sup>[1]</sup>" practice from the beginning of the project, and not saving testing for the end.</span></em>

<em><span style="color: #000000;">
</span></em>

<em><span style="color: #000000;">- You might have had a difficult relationship with your key stakeholders. This problem, in particular, can result in excessive schedule pressure, which will lead to all of the other problems I've mentioned. In that case, see the "<a href="http://jamesshore.com/Agile-Book/trust.html" target="_blank">Trust</a>" practice and enlist the help of some politically-savvy people in your organization. You might also be interested in the Rabu project I've started (<a href="http://www.teamrabu.com/" target="_blank">http://www.teamrabu.com</a>).</span></em>

<em><span style="color: #000000;">
</span></em>

<em><span style="color: #000000;">Finally, consider that a week or two of crunch mode at the end of a longer project isn't always a bad thing, so long as that's all it is.</span></em>

<em><span style="color: #000000;">
</span></em>

<span style="color: #000000;"><em> </em><em> </em><em> </em><em> </em><em> </em><em> </em></span>
<p style="text-align: left;"><em><span style="color: #000000;">Best wishes,</span></em></p>
<p style="text-align: left;"><em><span style="color: #000000;"> Jim</span></em></p>
</blockquote>
I guess our problem was that we had overcommitted. We also did not consider practices like the Risk Management and Slack.

Now speaking of action items, we've come up with the following:
<ul>
	<li>Commit to deliver features only after following the Risk Management techniques mentioned in the book</li>
	<li>Introduce Slack as part of every iteration</li>
	<li>And finally, to ensure we don't forget to appreciate the process enough, we've added one additional item in our Navigator's<sup>[2]</sup> checklist.
<ul>
	<li>[Update] The value of this action item is debatable. Its been about 3 weeks since we put it up on the checklist - but we've got the tendency to ignore anything that doesn't change frequently enough. So we'll need to come up with a better solution for the "lack of appreciation" problem. Any ideas? Please help us by commenting below. Thanks!</li>
</ul>
</li>
</ul>
<strong><span style="text-decoration: underline;">Notes:</span></strong>

[1] This practice is yet to be put online.

[2] This refers to the role of the Navigator in the context of <a href="http://jamesshore.com/Agile-Book/pair_programming.html">Pair Programming</a>
