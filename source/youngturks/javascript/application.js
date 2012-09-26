selectATurk = function() {
	unselectAllTurks();
	$(this).children().find('img').addClass('color selected');
	updateShareUrl($(this).attr('name'));
};

updateShareUrl = function(turkName) {
	$('.addthis_button_tweet').attr('tw:url',window.location.origin + window.location.pathname + '#' + turkName);
}

unselectAllTurks = function() {
	$(".turk img").removeClass('color selected');
}

showTimeline = function() {
	var self = $(this);
	var name = self.attr("name");
	var timeline = $("#" + name + "-timeline");

	$(".sub-title").hide();
	
	$(".timelineContainer").hide();

	jsPlumb.detachEveryConnection();

	timeline.slideDown(2000);

	connectTimeline(self, $('.timelines'));			
};


connectTimeline = function(source, target) {

	var docWidth = document.width;

	var turk = jsPlumb.addEndpoint(source,{
		anchor: "BottomCenter",
		endpoint: "Blank"
	}),
		
	timeline = jsPlumb.addEndpoint(target,{
		anchor: [0.11785,0,0,-1],
		endpoint: "Blank"
	});

	jsPlumb.connect({ 
		source: turk, 
		target: timeline,
		connector: "Flowchart",
		paintStyle: { strokeStyle:"#CCC", lineWidth:2 },
		detachable: false
	});
};

