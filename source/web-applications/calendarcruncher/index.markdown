---
layout: default
slug: calendarcruncher
title: CalendarCruncher
---
<div class="span9">
  <h1>{{ page.title }}</h1>
  <div class="row-fluid">
    <div class="span5 main-image-container">
      <img src="/images/159__320x240_calendarcruncher.png" alt="CalendarCruncher" title="" />
    </div>
    <p><strong>CalendarCruncher.com</strong> – This website provides a very rich online experience to create, manage, sync and share online calendars. This is a SaaS application. <a href="http://www.calendarcruncher.com/tour">Multiple videos here</a></p>
    <p><strong>Challenges faced:</strong></p>
    <ul>
      <li><p>The calendaring domain is quite mature – there are multiple standards [CalDAV, iCal - including a section for Recurring Events] and many implementations. To make things more complicated, each implementation differs from others in one way or another. CalendarCruncher masks these differences and creates a seamless experience for the user.</p></li>
      <li><p>The UI had to be almost completely Javascript driven – to create a user experience that is very similar to that of a native client such as Microsoft Outlook.</p></li>
      <li><p>The application allows the user to sync with Google Calendar, Microsoft Outlook and Apple iCal – all from the same interface. Further the user is also allowed to change the external calendar they’ve synced their local calendar with – from say iCal to GCal. These features required us to build a platform that could talk to various calendaring systems using a common interface.</p></li>
      <li><p>The application allows the user to sync with Google Calendar, Microsoft Outlook and Apple iCal – all from the same interface. Further the user is also allowed to change the external calendar they’ve synced their local calendar with – from say iCal to GCal. These features required us to build a platform that could talk to various calendaring systems using a common interface.</p></li>
      <li><p>One component that we did not have suitable open source options for – was the Outlook plugin that had to be shipped with CalendarCruncher. So we built the plugin from scratch using C#. This is full fledged client that does bi-directional syncing of your Outlook calendar with that in CalendarCruncher – using the CalDAV protocol.</p></li>
    </ul>
    <p>
      <strong>Technologies Used:</strong> Ruby on Rails, JRuby, Java, Google Calendar API, C# .NET, DaviCal, Lucene, PHP, Glassfish, JQuery, Selenium, RSpec, Cucumber, CalDAV4J, RiCal
    </p>  
  </div>
</div>
<div class="sidebar-nav span3">
  {% include_array web_apps_asides %}
</div>


