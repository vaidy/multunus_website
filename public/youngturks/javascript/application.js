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
	var timeline = $("#" + name + "-timeline");

	$(".sub-title").hide();
	
	$(".timelineContainer").hide();

	jsPlumb.detachEveryConnection();

	timeline.slideDown(2000);

	connectTimeline(self, $('.timelines'));			
};


connectTimeline = function(source, target) {

	var docWidth = document.width;

	var somevar = docWidth/8380.8933;

	console.log(somevar);

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

