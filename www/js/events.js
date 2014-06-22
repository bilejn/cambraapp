

/*================================ Risk level ====================================*/
$.jStorage.listenKeyChange("risk_level", function(){	
		if ($.jStorage.get("risk_level") == "low"){
			$("#low_risk").show();
		 } else {
			$("#low_risk").hide();
		 }
	
		if ($.jStorage.get("risk_level") == "moderate"){
			$("#moderate_risk").show();
		 } else {
			$("#moderate_risk").hide();
		 }

		if ($.jStorage.get("risk_level") == "high"){
			$("#high_risk").show();
		 } else {
			$("#high_risk").hide();
		 }	
});


/*================================ Date ====================================*/

$.jStorage.listenKeyChange("recallExam", function(){
		if ($.jStorage.get("recallExam") != null && $.jStorage.get("recallExam") != ""){
			var deadline = new Date ($.jStorage.get("recallExam")) 
			$("#time").html("next dental visit: " +$.jStorage.get("recallExam"));
		 } else {
			$("#time").html("You should schedule an appointment with your dentist!");
		 }	
});


/*========================================== buttons ====================================*/


$.jStorage.listenKeyChange("xylitol_th", function(){
		if ($.jStorage.get("xylitol_th") == "true"){
			$("#xylitol_th_button").show();
		 } else {
			$("#xylitol_th_button").hide();
		 }
});

$.jStorage.listenKeyChange("chlorhexidine_th", function(){
		 if ($.jStorage.get("chlorhexidine_th") == "true"){
			$("#chlorhexidine_th_button").show();
		 } else {
			$("#chlorhexidine_th_button").hide();
		 }
});


$.jStorage.listenKeyChange("fluoride_paste_otc_th", function(){
	 if ($.jStorage.get("fluoride_paste_otc_th") == "true"){
			$("#fluoride_paste_otc_th_button").show();
		 } else {
			$("#fluoride_paste_otc_th_button").hide();
		 }
});

$.jStorage.listenKeyChange("fluoride_paste_5000_th", function(){		 
		 if ($.jStorage.get("fluoride_paste_5000_th") == "true"){
			$("#fluoride_paste_5000_th_button").show();
		 } else {
			$("#fluoride_paste_5000_th_button").hide();
		 }
});

$.jStorage.listenKeyChange("fluoride_mouthrinse_th", function(){		 
		 if ($.jStorage.get("fluoride_mouthrinse_th") == "true"){
			$("#fluoride_mouthrinse_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_th_button").hide();
		 }
});
	 
$.jStorage.listenKeyChange("fluoride_mouthrinse_extra_th", function(){
		if ($.jStorage.get("fluoride_mouthrinse_extra_th") == "true"){
			$("#fluoride_mouthrinse_extra_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_extra_th_button").hide();
		 } 
});
		 
$.jStorage.listenKeyChange("fluoride_mouthrinse_xerostomia_th", function(){	 
		if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th") == "true"){
			$("#fluoride_mouthrinse_xerostomia_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_xerostomia_th_button").hide();
		 } 
});		 
		 
$.jStorage.listenKeyChange("ph_th", function(){		 
		if ($.jStorage.get("ph_th") == "true"){
			$("#ph_th_button").show();
		 } else {
			$("#ph_th_button").hide();
		 } 
});

$.jStorage.listenKeyChange("phgum_th", function(){		 
		if ($.jStorage.get("phgum_th") == "true"){
			$("#phgum_th_button").show();
		 } else {
			$("#phgum_th_button").hide();
		 } 
});

$.jStorage.listenKeyChange("cap_th", function(){		 
		if ($.jStorage.get("cap_th") == "true"){
			$("#cap_th_button").show();
		 } else {
			$("#cap_th_button").hide();
		 }
});		 
		 
		 
		 
		 