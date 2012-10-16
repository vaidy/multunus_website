---
comments: true
layout: post
title: Working with DLLs, the Java way
date: 2010-01-29 12:20:51.000000000 +05:30
author: 
- Jeevan
categories:
- All Posts
- Technology
---
We had a very simple requirement, to invoke my DLLs using Java code for couple of reasons:
<ol>
	<li> We want to reuse application code built for a .NET application</li>
	<li> We want to integrate the DLLs with a Java based sever technology</li>
	<li> Should be simple enough to maintain the code by .NET professionals</li>
</ol>
There are couple of Java-COM bridging solutions I came across.
<ul>
	<li> <a id="o-ek" title="Java Native Interface (JNI)" href="http://en.wikipedia.org/wiki/Java_Native_Interface">Java Native Interface (JNI)</a></li>
	<li> <a id="m-.." title="JACOB" href="http://sourceforge.net/projects/jacob-project/">JACOB</a></li>
	<li> <a id="r0rf" title="Scriptom (Groovy - COM Scripting)" href="http://groovy.codehaus.org/COM+Scripting">Scriptom (Groovy - COM Scripting)</a></li>
	<li> <a id="h:uh" title="Java Native Access (JNA)" href="https://jna.dev.java.net/">Java Native Access (JNA)</a></li>
	<li> <a id="ck4a" title="JNBridge" href="http://www.jnbridge.com/">JNBridge</a></li>
</ul>
In this post, we'll see how Scriptom can be used to access DLLs.

Scriptom is a module in Groovy (A Java VM based scripting language) which wraps the JACOB classes to make it more usable. Scriptom's syntax looks like VB.NET code.

Lets jump in to the sample application.

Assume that we have a VB class named TimerState in the TestDLL VB.NET project, exposes the COM, signed and generates the DLLs.

Following is the TimerState VB class. In this class, we have an event <em>UpdateTime</em> which raises an event when to notify updated time.

```

    Public Event UpdateTime(ByVal Jump As Double)

    Public Sub TimerTask(ByVal Duration As Double)
        Dim Start As Double
        Dim Second As Double
        Dim SoFar As Double

        Start = Timer
        SoFar = Start
        Do While Timer &lt; Start + Duration
            If Timer - SoFar &gt;= 0.1 Then
                SoFar = SoFar + 0.1
                RaiseEvent UpdateTime(Timer - Start)
            End If
        Loop
    End Sub
End Class

```

We want to use this logic in the Scriptom code and do something whenever a UpdateTime event is raised. Here are the steps:
<ol>
	<li> Register the DLLs (this is required step for the Java Virtual Machine to get meta data about the DLLs)</li>
	<li> Download Scriptom</li>
	<li> Copy the jacob-*.dll to any system PATH</li>
	<li> Have all the JARS from Scriptom jar folder available in the CLASSPATH</li>
</ol>
Following is the sample code for invoking

```
import org.codehaus.groovy.scriptom.ActiveXObject // Imports the ActiveX object class which holds the reference to the class in DLL

def timer = new ActiveXObject(&quot;TestDLL.TimerState&quot;) // Looks for the meta data in the registry with &quot;TestDLL.TimerState&quot; name and creates a reference to that class

def time = 1.00

timer.events.UpdateTime = { variants -&gt; // event registration for UpdateTime event in the VB class. Variants holds the data passed from the event. In this case, it is Jump value.
    println &quot;UpdateTime: &quot; + variants[0] // We're just printing the upated time
}

timer.TimerTask(time) // starting the timer task in TimerState class
while(true) { // keeping itself alive to respond when timer events are raised
}
```

<div style="text-align: left;">Please refer <a id="hzki" title="COM Data Types in Scriptom" href="http://groovy.codehaus.org/COM+Data+Types+in+Scriptom">COM Data Types in Scriptom</a> for the .NET data types supported in Scriptom.</div>
<strong><span style="font-weight: normal;">
In the next post, we'll discuss about JNBridge, a comercial solution.</span></strong>
<div id="_mcePaste" style="overflow: hidden; position: absolute; left: -10000px; top: 694px; width: 1px; height: 1px;">

```
Public Event UpdateTime(ByVal Jump As Double)

Public Sub TimerTask(ByVal Duration As Double)
Dim Start As Double
Dim Second As Double
Dim SoFar As Double

Start = Timer
SoFar = Start
Do While Timer &lt; Start + Duration
If Timer - SoFar &gt;= 0.1 Then
SoFar = SoFar + 0.1
RaiseEvent UpdateTime(Timer - Start)
End If
Loop
End Sub
End Class
```
</div>
