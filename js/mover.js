var choix = 261.63;
$(function(){
	$("#note-choice").on("touchstart", start);
	$("#note-choice").on("touchmove", move);
	$("#note-choice").on("touchend", end);
	
	var pos;
	function start(evt){
		evt.preventDefault();
		$(".note").css("transition", "none");
		pos = evt.originalEvent.touches[0].pageX;
	}
	
	function move(evt){
		evt.preventDefault();
		$(".note").each(function(index){
			$(this).css("left", "-="+(pos-evt.originalEvent.touches[0].pageX));
		});
		pos = evt.originalEvent.touches[0].pageX;
	}
	
	function end(evt){
		evt.preventDefault();
		
		var base = $("body").width()/2;
		var dist = 10000;
		var proche;
		$(".note").each(function(){
			var val = parseInt($(this).css("left"));
			/*if(val > base) val+=30;
			else val -= 30;*/
			if(Math.abs(val-base) < dist){
				dist = Math.abs(val-base);
				proche = $(this);
			}
		});
		
		$(".note").css("transition", "left 500ms");
		if(parseInt(proche.css("left")) > base) $(".note").css("left", "-="+dist);
		else $(".note").css("left", "+="+dist);
		
		choix = proche.data("freq");
	}
});