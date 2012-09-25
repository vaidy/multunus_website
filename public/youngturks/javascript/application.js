selectATurk = function() {
	unselectAllTurks();
	$(this).children('img').addClass('color selected');
};

unselectAllTurks = function() {
	$(".turk img").removeClass('color selected');
}

showTimeline = function() {
	var self = $(this);
	var name = self.attr("name");
	var timeline = $("#" + name);

	$(".sub-title").hide();
	
	$(".timelineContainer").hide();

	jsPlumb.detachEveryConnection();

	timeline.slideDown(2000);

	connectTimeline(self, $('.timelines'));			
};


connectTimeline = function(source, target) {
	var turk = jsPlumb.addEndpoint(source,{
		anchor: "BottomCenter",
		endpoint: "Blank"
	}),
		
	timeline = jsPlumb.addEndpoint(target,{
		anchor: [0.1612,0,0,-1],
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

