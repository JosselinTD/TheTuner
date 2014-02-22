var state = "pause";
var ctx = new AudioContext();

$(function(){
	
	
	function play(){
		osc = ctx.createOscillator();
		osc.frequency.value = choix;
		osc.connect(ctx.destination);
		osc.start(0);
	}
	
	function stop(){
		osc.stop(0);
	}
	
	$(".play-pause-button").click(toggleCarillon);
	
	
	function toggleCarillon(){
		if(state == "pause"){
			state = "play";
			$("#play-pause").attr("src", "img/pause.png");
			play();
		} else {
			state = "pause";
			$("#play-pause").attr("src", "img/play.png");
			stop();
		}
	}
});