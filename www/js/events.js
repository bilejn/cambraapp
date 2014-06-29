

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

$.jStorage.listenKeyChange("disease_count",function(){
		if ($.jStorage.get("disease_count")){
		$("#disease_indicators_presence span").html($.jStorage.get("disease_count"));
		$("#disease_indicators_presence span").attr("class", "high");
		}
});

$.jStorage.listenKeyChange("risk_count",function(){		
		if ($.jStorage.get("risk_count")){
		$("#risk_factors_presence span").html($.jStorage.get("risk_count"));
		$("#risk_factors_presence span").attr("class", "high");
		}
});

$.jStorage.listenKeyChange("protective_count",function(){	
		if ($.jStorage.get("protective_count")){
		$("#protective_factors_presence span").html($.jStorage.get("protective_count"));
		$("#protective_factors_presence span").attr("class", "low");
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



/*================================ Prescribed therapy ====================================*/	
 

$.jStorage.listenKeyChange("xylitol_th", function(){
		if ($.jStorage.get("xylitol_th") == "true"){
			$(".xylitol_th").show();
		 } else {
			$(".xylitol_th").hide();
		 }
});

$.jStorage.listenKeyChange("chlorhexidine_th", function(){
		 if ($.jStorage.get("chlorhexidine_th") == "true"){
			$(".chlorhexidine_th").show();
		 } else {
			$(".chlorhexidine_th").hide();
		 }
});


$.jStorage.listenKeyChange("fluoride_paste_otc_th", function(){
	 if ($.jStorage.get("fluoride_paste_otc_th") == "true"){
			$(".fluoride_paste_otc_th").show();
		 } else {
			$(".fluoride_paste_otc_th").hide();
		 }
});

$.jStorage.listenKeyChange("fluoride_paste_5000_th", function(){		 
		 if ($.jStorage.get("fluoride_paste_5000_th") == "true"){
			$(".fluoride_paste_5000_th").show();
		 } else {
			$(".fluoride_paste_5000_th").hide();
		 }
});

$.jStorage.listenKeyChange("fluoride_mouthrinse_th", function(){		 
		 if ($.jStorage.get("fluoride_mouthrinse_th") == "true"){
			$(".fluoride_mouthrinse_th").show();
		 } else {
			$(".fluoride_mouthrinse_th").hide();
		 }
});
	 
$.jStorage.listenKeyChange("fluoride_mouthrinse_extra_th", function(){
		if ($.jStorage.get("fluoride_mouthrinse_extra_th") == "true"){
			$(".fluoride_mouthrinse_extra_th").show();
		 } else {
			$(".fluoride_mouthrinse_extra_th").hide();
		 } 
});
		 
$.jStorage.listenKeyChange("fluoride_mouthrinse_xerostomia_th", function(){	 
		if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th") == "true"){
			$(".fluoride_mouthrinse_xerostomia_th").show();
		 } else {
			$(".fluoride_mouthrinse_xerostomia_th").hide();
		 } 
});		 
		 
$.jStorage.listenKeyChange("ph_th", function(){		 
		if ($.jStorage.get("ph_th") == "true"){
			$(".ph_th").show();
		 } else {
			$(".ph_th").hide();
		 } 
});

$.jStorage.listenKeyChange("phgum_th", function(){		 
		if ($.jStorage.get("phgum_th") == "true"){
			$(".phgum_th").show();
		 } else {
			$(".phgum_th").hide();
		 } 
});

$.jStorage.listenKeyChange("cap_th", function(){		 
		if ($.jStorage.get("cap_th") == "true"){
			$(".cap_th").show();
		 } else {
			$(".cap_th").hide();
		 }
});		 
	
	
/*================================ Compliance/achievement/warning ====================================*/


/*== snack==*/
$.jStorage.listenKeyChange("snack_statistics", function(){
	if($.jStorage.get("snack_statistics")){
		if($.jStorage.get("snack_statistics") == "good"){
				$("#eating_habits span").html("good");
				$("#eating_habits span").attr("class", "low");	
					$("<li />", { text: "Eating habits: good"}).appendTo("#achievements_list");					
		} else{
				$("#eating_habits span").html("bad");
				$("#eating_habits span").attr("class", "high");	
					$("<li />", { text: "Eating habits: bad"}).appendTo("#warnings_list");
		}
	}	
});	
	
/*== oral hygiene ==*/

$.jStorage.listenKeyChange("oral_hygiene_statistics", function(){
	if($.jStorage.get("oral_hygiene_statistics")){
		if($.jStorage.get("oral_hygiene_statistics") == "good"){
				$("#oral_hygiene_habits span").html("good");
				$("#oral_hygiene_habits span").attr("class", "low");
					$("<li />", { text: "Oral hygiene: good"}).appendTo("#achievements_list");				
		}else{
				$("#oral_hygiene_habits span").html("bad");
				$("#oral_hygiene_habits span").attr("class", "high");
					$("<li />", { text: "Oral hygiene: bad"}).appendTo("#warnings_list");
		}
	}
});		 
		 