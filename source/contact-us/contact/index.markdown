---
layout: default
title: "Write To Us"
date: 2012-09-12 20:22
comments: true
sharing: true
footer: true
nav: Contact Us
---
<div class="span9">
	<script type="text/javascript">var submitted=false;</script>
	<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {window.location='whateveryourredirectis.html';}"></iframe>

	<h1>Write To Us</h1> <a href="mailto:info@multunus.com">Or Just email us at info@multunus.com</a>
	<div class="notification success" style="display:none;">
		Thank You. We got your message.
	</div>
	<form action="https://docs.google.com/a/multunus.com/spreadsheet/formResponse?formkey=dDRNZFlZYUxqbGNpSEpzVGhiU2JZR1E6MQ&amp;ifq" method="POST" target="hidden_iframe" id="ss-form">
		<br>
		<div class="errorbox-good">
			<div class="ss-form-entry">
				<label class="ss-q-title" for="entry_0">Your Name (required)</label>
				<label class="ss-q-help" for="entry_0"></label>
				<input type="text" name="entry.0.single" value="" class="ss-q-short" id="entry_0">
			</div>
		</div>
		<br /> 
		<div class="errorbox-good">
			<div class="ss-form-entry">
				<label class="ss-q-title" for="entry_1">Your Email (required)</label>
				<label class="ss-q-help" for="entry_1"></label>
				<input type="text" name="entry.1.single" value="" class="ss-q-short" id="entry_1">
			</div>
		</div>
		<br />
		<div class="errorbox-good">
			<div class="ss-form-entry">
				<label class="ss-q-title" for="entry_4">Your Message</label>
				<label class="ss-q-help" for="entry_4"></label>
				<textarea name="entry.4.single" rows="8" cols="75" class="ss-q-long" id="entry_4"></textarea>
			</div>
		</div>
		<br>
		<input type="hidden" name="pageNumber" value="0">
		<input type="hidden" name="backupCache" value="">
		<div class="ss-form-entry">
			<input type="submit" name="submit" value="Submit">
		</div>
	</form>

	<script type="text/javascript">
	    $(function(){
	    	var form = $('#ss-form');
	    	form.validate({
	    		errorClass: 'invalid',
	    		rules: {
	    			'entry.0.single': "required",
	    			'entry.1.single': {
	    				required: true,
	    				email: true
	    			}
	    		},
	    		messages: {
	    		    'entry.0.single': "Please specify your name",
	    		    'entry.1.single': {
	    		    	required: "Please enter an email address",
	    		       	email: "Your email address must be in the format of name@domain.com"
	    		    }
	    		}
	    	});

	    	$("#hidden_iframe").load(function (){
	    		$("#ss-form input[type='text'], #ss-form textarea").val('');
	    		$('.notification').slideDown('slow');
	    		setTimeout(function(){
	    			$('.notification').slideUp('slow');
	    		},2000);
			});
	    });
	</script>
</div>

<div class="sidebar-nav span3">
  {% include_array contact_us_asides %}
</div> 
