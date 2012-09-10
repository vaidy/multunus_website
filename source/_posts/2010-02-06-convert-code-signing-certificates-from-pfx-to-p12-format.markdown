---
comments: true
layout: post
title: Convert code signing certificates from "pfx" to "p12" format
wordpress_id: 744
wordpress_url: http://www.multunus.com/?p=744
date: 2010-02-06 05:13:34.000000000 +05:30
author: Leena
categories:
- All Posts
- Technology
---
<div><strong>One of the requirements we had was to sign the applet that we built for <a href="http://alpha.userthoughts.com">UserThoughts</a></strong><strong>. We had purchased Comodo's <a id="l5m3" title="code signing certificate" href="http://en.wikipedia.org/wiki/Code_signing">code signing certificate</a> from <a id="wp-h" title="KSoftware" href="https://secure.ksoftware.net/code_signing.html?gclid=CN-epdfskZ8CFVBd4wodTC6EIA">KSoftware</a>. When you download the certificate from their site, it automatically gets installed in IE. Follow these steps for converting it into format which you can use with the Java Jarsigner.</strong></div>
<ol>
	<li> Export the certificate from IE by following the instructions given here: <a href="http://www.tech-pro.net/export-to-pfx.html">http://www.tech-pro.net/export-to-pfx.html</a></li>
	<li> The certificate with Private key will be exported as PFX format in the above step - but this <strong>cannot</strong> be used by the jarsigner. So you need to convert it into "p12 format" which the jarsigner can understand. For that you need to use Mozilla. First import the certificate  saved in step 1 into Mozilla as follows:
<ol>
	<li> From the "Edit" menu select "Preferences" and open the "Privacy &amp; Security" category and click on the "Certificates" item.</li>
	<li> In the "Manage Certificates" section, click on the "Manage Certificates" button.</li>
	<li> In the "Certificate Manager" window, the "Your Certificates" tab should automatically open. (If not, select it.)</li>
	<li> Click the "Impor"t button at the bottom of the window.</li>
	<li> It prompts you to select an existing file; select your certificate file from the location where you saved it in when you exported it.</li>
	<li> It prompts you to provide the "Master Password"; enter it, if you have set one.</li>
	<li> It prompts you to provide the password used to encrypt the certificate backup; enter it.</li>
	<li> It should say "Successfully restored your certificate(s) and private key(s)." Click OK.</li>
</ol>
</li>
	<li> Then export the certificate as p12 format:
<ol>
	<li> From the "Edit" menu select "Preferences" and open the "Privacy &amp; Security" category and click on the "Certificates" item</li>
	<li> In the "Manage Certificates" section, click on the "Manage Certificates" button.</li>
	<li> In the "Certificate Manager" window, the "Your Certificates" tab should automatically open. (If not, select it.)</li>
	<li> To export your "DOEGrids" or "KCA Personal Certificate", click on it to select it, and click the "Backup" button at the bottom of the window.</li>
	<li> You'll be prompted to specify a filename and location for the "PKCS#12-format" certificate file (file extension will be ".p12" in UNIX/Linux,  ".pfx" in Windows).  Provide them and click OK.</li>
	<li> A dialog box requesting the Master Password may appear (the password and certificate database). If you have set a Master Password, provide it. If not, you can make one up and provide it (optional). <strong>Remember this password!</strong></li>
	<li> You'll be prompted to make up and (twice) enter a second password. This one is for restoring this particular backup of this certificate. <strong>Remember this password!</strong></li>
	<li> Once the system says it's successfully backed up your certificate and private key, click OK.</li>
</ol>
</li>
	<li> We also need to know the alias of the ".p12" file so run:
<ol>
<pre> keytool -list -storetype pkcs12 -keystore &lt;path to the cert file&gt;</pre>
</ol>
</li>
	<li> Then you will see output like this:</li>
</ol>
<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"> Keystore type: pkcs12 Keystore provider: SunJSSE</span>

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"> Your keystore contains 1 entry</span>

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"> xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx, Apr 26, 2006, keyEntry, </span>

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"> Certificate fingerprint (MD5):hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh:hh</span>

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"> The xxxx-xxx... number is the alias for the key</span>

<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;"><span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; line-height: 19px; white-space: normal; font-size: 13px;"> 6. Change your ant script as follows to sign the certificate:</span></span>

[xml]&lt;target name=&quot;signjar&quot; depends=&quot;jar&quot;&gt;
 &lt;signjar jar=&quot;yourJar.jar&quot; storetype=&quot;pkcs12&quot;
   keystore=&quot;yourkey.p12&quot; alias=&quot;Your Alias&quot;
   storepass=&quot;your password&quot;/&gt;
&lt;/target&gt;[/xml]
