var options = {
	TYPE: "Banner",
	REFRESH_RATE: 30,
	APP_ID: "Personnal_TheTuner_other"
};

var myAd, toggleAd = true;

$(function(){
	myAd = Inneractive.createAd(options);
	myAd.placement("bottom", "center");
	if(localStorage.getItem("ads") != "false"){ 
		myAd.addTo(document.getElementById("tuner"));
		localStorage.setItem("ads", "true"); 
	} else {
		$("#disable-ads").html("Enable ads");
		toggleAd = false;
	}
	
	$("#disable-ads").click(function(){
		if(toggleAd == true){
			toggleAd = false;
			myAd.remove();
			$(this).html("Enable ads");
			localStorage.setItem("ads", "false"); 
		} else {
			toggleAd = false;
			myAd.addTo(document.getElementById("tuner"));
			$(this).html("Disable ads")
			localStorage.setItem("ads", "true"); 
		}
	});
});