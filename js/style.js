$(function(){
	function style(){
		console.log("Coucou !");
		
		$(".note").each(function(index){
			$(this).css("left", index*80+$("body").width()/2+"px");
		});
		$("#note-choice").css("top", $("body").height()/6+"px");
		$("#cache-right").css("width", $("#note-choice").width()/2+"px");
		$("#cache-left").css("width", $("#note-choice").width()/2+"px");
		$(".play-pause-button").css("top", $("body").height()/3+"px");
		
		$("#indicator").css("top", parseInt($("#note-choice").css("top"))+20+"px");
	}
	
	//$(window).resize(style);
	
	style();
	
	$(".ut-settings").click(function(){
		$('section').css("left", "-="+$("section").width());
	});
	
	$(".ui-back").click(function(){
		$('section').css("left", "+="+$("section").width());
	});
});