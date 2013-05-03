---
comments: true
layout: post
title: Web Application Security
date: 2012-10-11 09:55:05.000000000 +05:30
author: 
- Sreenath
- Leena
categories:
- Technology
---
<p class="c0"><span>Now a days we, programmers are really obsessed
    with test driving our application and automating. We automate our
    unit tests and integration tests. We do continuous
    integration. But what about security testing
    ?</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>Many organization hire
    security professionals to test the web application security when
    the complete product is built and most often to test production
    environment. But most of the vulnerabilities that is present in
    the system could have fixed very easily and cheaply when found
    during the development phase. Also since the app is in the
    production environment hired security consultants will not be able
    to conduct an attack against the system and verify the
    vulnerability.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>Hiring a security
    consultant is very costly as well as :</span></p><p class="c0
    c2"><span></span></p><ol class="c6" start="1"><li class="c4
    c0"><span>We will not be supplied with a security test
    suit.</span></li><li class="c4 c0"><span>We will not have list of
    passing test cases and failing tests instead we get a list of
    vulnerabilities</span></li><li class="c4 c0"><span>After fixing
    the vulnerabilities we might have to hire them again to make sure
    that all the vulnerabilities are
    fixed.</span></li></ol><p class="c0
    c2"><span></span></p><p class="c0"><span>The truth is developers
    can identify and fix many of such vulnerabilities during the
    development itself. Moreover we can write automated security
    testing with the help of integration testing
    tools.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>There are two approaches
    for testing our web application security</span></p><p class="c0
    c2"><span></span></p><ol class="c6" start="1"><li class="c4
    c0"><span>Black box testing.</span></li><li class="c0
    c4"><span>White box testing.</span></li></ol><p class="c0
    c2"><span></span></p><p class="c0"><span>In black box testing we
    analyse the security of our application through the web
    &nbsp;front-end of our application. Vulnerability scanners is an
    example for black box scanning. In white box testing we use static
    code analysis to find the vulnerabilities in the
    system.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>For automated security
    analysis many tools are available. ROR developers can use any of
    the following.</span></p><p class="c0
    c2"><span></span></p><ol class="c6" start="1"><li class="c4
    c0"><span class="c7"><a class="c10"
    href="http://brakemanscanner.org/">Brakeman</a></span><span>&nbsp;for
    White box testing.</span></li><li class="c4
    c0"><span class="c7"><a class="c10"
    href="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">Zed
    Attack Proxy</a></span><span>&nbsp;for Black box
    testing.</span></li></ol><p class="c0
    c2"><span></span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>Brakeman is a static code
    analyzer whereas ZAP is a vulnerability scanning tool. Both serves
    different functionalities. Note that ZAP is not dependent on any
    programming language.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>Now regarding which
    method to follow for security testing I would like to quote the
    following from this </span><span class="c7"><a class="c10"
    href="http://jeremiahgrossman.blogspot.in/2009/10/black-box-vs-white-box-you-are-doing-it.html">blog</a></span><span>&nbsp;</span><span>:</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span class="c8">&ldquo;Black
    box vulnerability assessments measure the hackability of a website
    given an attacker with a certain amount of resources, skill, and
    scope. We know that bad guys will attack essentially all publicly
    facing websites at some point in time, so it makes sense for us to
    learn about the defects before they do. As such, black box
    vulnerability assessments are best defined as an outcome based
    metric for measuring the security of a system with all security
    safeguards in place.</span></p><p class="c0
    c2"><span class="c8"></span></p><p class="c0"><span class="c8">White
    box source code reviews, on the other hand, measure and/or help
    reduce the number of security defects in an application resulting
    from the current software development life-cycle. In the immortal
    words of Michael Howard regarding Microsoft&rsquo;s SDL mantra,
    &ldquo;Reduce the number of vulnerabilities and reduce the
    severity of the bugs you miss.&rdquo; Software has bugs, and that
    will continue to be the case. Therefore it is best to minimize
    them to the extent we can in effort to increase software
    assurance.&rdquo;</span></p><p class="c0
    c2"><span class="c13"></span></p><p class="c0"><span>We can run
    Brakeman against our application and after assessing the written
    code Brakeman will report the possible vulnerabilities. It will
    help us improve our code. But the downside is, it &nbsp;may not be
    zen percentage in finding the possible vulnerabilities because it
    checks for typical coding errors which opens the doors for
    security breaches. </span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>ZAP is a really good web
    app security analysis tool. It is a proxy which sits between the
    web application and the web browser constantly analysing all the
    HTTP traffic. But for the same reason, we need to walk through all
    the web features so that ZAP can analyse the
    traffic. </span></p><p class="c0"><span>We were thinking we
    &nbsp;should try to &nbsp;automate this process and once we find
    any issue, write a test to reproduce the same issue and go ahead
    and fix the problem. This will help us in making sure that the
    problem got fixed.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>If you want to automate
    the security testing using ZAP, it can be used done by integrating
    it with Web application testing tools such
    as </span><span class="c7"><a class="c10"
    href="http://seleniumhq.org/">Selenium</a></span><span>.</span></p><p class="c0
    c2"><span></span></p><p class="c0"><span>Regarding how to
    configure ZAP and analyze the security vulnerabilities, I will
    cover it in a separate blog post. I also will be writing about how
    to integrate it with Selenium for creating automated security
    testing suite.</span></p>
