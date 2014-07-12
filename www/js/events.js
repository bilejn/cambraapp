




/*================================================ form initialization =============================================*/



$.jStorage.listenKeyChange("submit_form", function(){

    document.generalData.first_name.value = $.jStorage.get("firstname");
    document.generalData.last_name.value = $.jStorage.get("lastname");
	document.generalData.yearpicker.value = $.jStorage.get("age");
	document.generalData.gender.value = $.jStorage.get("gender");

	
	entry = ["visible_cavities", "radiographic", "white_spots", "last_3_years", "ms_lb", "visible_plaque", "frequent_snack", "pits_and_fissures", "drug_use", "inadequate_saliva", "saliva_reducing_factors", "exposed_roots", "orthodontic_appliances", "fluoridated_community", "fluoride_paste_once", "fluoride_paste_twice", "fluoride_mouthrinse", "fluoride_5000", "fluoride_varnish", "topical_fluoride","chlorhexidine", "xylitol", "tooth_mousse", "adequate_saliva", "chlorhexidine_th", "xylitol_th", "fluoride_paste_otc_th", "fluoride_paste_5000_th", "fluoride_mouthrinse_th", "fluoride_mouthrinse_extra_th", "fluoride_mouthrinse_xerostomia_th", "ph_th", "phgum_th", "cap_th"];
	var p;
	for (p = 0; p < entry.length; p++){
		if ($.jStorage.get(entry[p]) == "true") {
			$("#"+entry[p]).prop('checked',true);
		} else {
			$("#"+entry[p]).prop('checked',false);
		}	
	}
});

/*================================================ Home page buttons =============================================*/



$(document).on('pageshow','#home', function() {

		if ($.jStorage.get("recallExam") != null && $.jStorage.get("recallExam") != ""){
			var deadline = new Date ($.jStorage.get("recallExam")) 
			$("#time").html("next dental visit: " +$.jStorage.get("recallExam"));
		 } else {
			$("#time").html("You should schedule an appointment with your dentist!");
		 }	

		if ($.jStorage.get("xylitol_th") == "true"){
			$(".xylitol_th_b").show();
		 } else {
			$(".xylitol_th_b").hide();
		 }



		 if ($.jStorage.get("chlorhexidine_th") == "true"){
			$(".chlorhexidine_th_b").show();
		 } else {
			$(".chlorhexidine_th_b").hide();
		 }




	 if ($.jStorage.get("fluoride_paste_otc_th") == "true"){
			$(".fluoride_paste_otc_th_b").show();
		 } else {
			$(".fluoride_paste_otc_th_b").hide();
		 }


		 
		 if ($.jStorage.get("fluoride_paste_5000_th") == "true"){
			$(".fluoride_paste_5000_th_b").show();
		 } else {
			$(".fluoride_paste_5000_th_b").hide();
		 }


		 
		 if ($.jStorage.get("fluoride_mouthrinse_th") == "true"){
			$(".fluoride_mouthrinse_th_b").show();
		 } else {
			$(".fluoride_mouthrinse_th_b").hide();
		 }

	 

		if ($.jStorage.get("fluoride_mouthrinse_extra_th") == "true"){
			$(".fluoride_mouthrinse_extra_th_b").show();
		 } else {
			$(".fluoride_mouthrinse_extra_th_b").hide();
		 } 

		 
	 
		if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th") == "true"){
			$(".fluoride_mouthrinse_xerostomia_th_b").show();
		 } else {
			$(".fluoride_mouthrinse_xerostomia_th_b").hide();
		 } 
	 
		 
	 
		if ($.jStorage.get("ph_th") == "true"){
			$(".ph_th_b").show();
		 } else {
			$(".ph_th_b").hide();
		 } 

		 
		if ($.jStorage.get("phgum_th") == "true"){
			$(".phgum_th_b").show();
		 } else {
			$(".phgum_th_b").hide();
		 } 


	 
		if ($.jStorage.get("cap_th") == "true"){
			$(".cap_th_b").show();
		 } else {
			$(".cap_th_b").hide();
		 }
		 
	
});





/*================================ Prescribed therapy ===========================*/
 

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



/*================================ Risk level ====================================*/

$.jStorage.listenKeyChange("risk_level", function(){	
		if ($.jStorage.get("risk_level") == "low"){
			$("#place_holder").html('<div id="low_risk" class="risk"><img src="img/low.png" height="100px"><p>Your current caries risk level is: LOW.</p></div>');
			$("#overall_caries_risk span").html("LOW");
			$("#overall_caries_risk span").attr("class", "low");
			
		} else if ($.jStorage.get("risk_level") == "moderate"){
			$("#place_holder").html('<div id="moderate_risk" class="risk"><img src="img/moderate.png" height="100px"><p>Your current caries risk level is: MODERATE.</p></div>');
			$("#overall_caries_risk span").html("MODERATE");
			$("#overall_caries_risk span").attr("class", "moderate");
		} else if ($.jStorage.get("risk_level") == "high"){
			$("#place_holder").html('<div id="high_risk" class="risk"><img src="img/high.png" height="100px"><p>Your current caries risk level is: HIGH.</p></div>');
			$("#overall_caries_risk span").html("high");
			$("#overall_caries_risk span").attr("class", "high");
			
		} else {
			$("#place_holder").html('<div id="undefined_risk" class="risk"><img src="img/undefined.png" height="100px"><p>Your current caries risk level is: UNDEFINED.</p></div>');
			$("#overall_caries_risk span").html("UNDEFINED");
			$("#overall_caries_risk span").attr("class", "undefined");	
		}	


		$("#disease_indicators_presence span").html($.jStorage.get("disease_count"));
		$("#disease_indicators_presence span").attr("class", "high");

		

		$("#risk_factors_presence span").html($.jStorage.get("risk_count"));
		$("#risk_factors_presence span").attr("class", "high");
		
		

		$("#protective_factors_presence span").html($.jStorage.get("protective_count"));
		$("#protective_factors_presence span").attr("class", "low");


		
});


	
	
/*================================ Compliance/achievement/warning ====================================*/


/*== snack==*/
$.jStorage.listenKeyChange("snack_statistics", function(){
	if($.jStorage.get("snack_statistics") != "undefined"){
		if($.jStorage.get("snack_statistics") == "good"){
				$("#eating_habits span").html("good");
				$("#eating_habits span").attr("class", "low");					
		} else{
				$("#eating_habits span").html("bad");
				$("#eating_habits span").attr("class", "high");	
		}
	}	
});	
	
/*== oral hygiene ==*/

$.jStorage.listenKeyChange("oral_hygiene_statistics", function(){
	if($.jStorage.get("oral_hygiene_statistics") != "undefined"){
		if($.jStorage.get("oral_hygiene_statistics") == "good"){
				$("#oral_hygiene_habits span").html("good");
				$("#oral_hygiene_habits span").attr("class", "low");				
		}else{
				$("#oral_hygiene_habits span").html("bad");
				$("#oral_hygiene_habits span").attr("class", "high");
		}
	}
});		


$.jStorage.listenKeyChange("xylitol_th_statistics", function(){
	if($.jStorage.get("xylitol_th_statistics") != "undefined"){
		if($.jStorage.get("xylitol_th_statistics") == "good"){
				$(".xylitol_th span").html("good");
				$(".xylitol_th span").attr("class", "low");				
		}else{
				$(".xylitol_th span").html("bad");
				$(".xylitol_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("chlorhexidine_th_statistics", function(){
	if($.jStorage.get("chlorhexidine_th_statistics") != "undefined"){
		if($.jStorage.get("chlorhexidine_th_statistics") == "good"){
				$(".chlorhexidine_th span").html("good");
				$(".chlorhexidine_th span").attr("class", "low");				
		}else{
				$(".chlorhexidine_th span").html("bad");
				$(".chlorhexidine_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("fluoride_paste_otc_th_statistics", function(){
	if($.jStorage.get("fluoride_paste_otc_th_statistics") != "undefined"){
		if($.jStorage.get("fluoride_paste_otc_th_statistics") == "good"){
				$(".fluoride_paste_otc_th span").html("good");
				$(".fluoride_paste_otc_th span").attr("class", "low");				
		}else{
				$(".fluoride_paste_otc_th span").html("bad");
				$(".fluoride_paste_otc_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("fluoride_paste_5000_th_statistics", function(){
	if($.jStorage.get("fluoride_paste_5000_th_statistics") != "undefined"){
		if($.jStorage.get("fluoride_paste_5000_th_statistics") == "good"){
				$(".fluoride_paste_5000_th span").html("good");
				$(".fluoride_paste_5000_th span").attr("class", "low");				
		}else{
				$(".fluoride_paste_5000_th span").html("bad");
				$(".fluoride_paste_5000_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("fluoride_mouthrinse_th_statistics", function(){
	if($.jStorage.get("fluoride_mouthrinse_th_statistics") != "undefined"){
		if($.jStorage.get("fluoride_mouthrinse_th_statistics") == "good"){
				$(".fluoride_mouthrinse_th span").html("good");
				$(".fluoride_mouthrinse_th span").attr("class", "low");				
		}else{
				$(".fluoride_mouthrinse_th span").html("bad");
				$(".fluoride_mouthrinse_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("fluoride_mouthrinse_extra_th_statistics", function(){
	if($.jStorage.get("fluoride_mouthrinse_extra_th_statistics") != "undefined"){
		if($.jStorage.get("fluoride_mouthrinse_extra_th_statistics") == "good"){
				$(".fluoride_mouthrinse_extra_th span").html("good");
				$(".fluoride_mouthrinse_extra_th span").attr("class", "low");				
		}else{
				$(".fluoride_mouthrinse_extra_th span").html("bad");
				$(".fluoride_mouthrinse_extra_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("fluoride_mouthrinse_xerostomia_th_statistics", function(){
	if($.jStorage.get("fluoride_mouthrinse_xerostomia_th_statistics") != "undefined"){
		if($.jStorage.get("fluoride_mouthrinse_xerostomia_th_statistics") == "good"){
				$(".fluoride_mouthrinse_xerostomia_th span").html("good");
				$(".fluoride_mouthrinse_xerostomia_th span").attr("class", "low");				
		}else{
				$(".fluoride_mouthrinse_xerostomia_th span").html("bad");
				$(".fluoride_mouthrinse_xerostomia_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("cap_th_statistics", function(){
	if($.jStorage.get("cap_th_statistics") != "undefined"){
		if($.jStorage.get("cap_th_statistics") == "good"){
				$(".cap_th span").html("good");
				$(".cap_th span").attr("class", "low");				
		}else{
				$(".cap_th span").html("bad");
				$(".cap_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("ph_th_statistics", function(){
	if($.jStorage.get("ph_th_statistics") != "undefined"){
		if($.jStorage.get("ph_th_statistics") == "good"){
				$(".ph_th span").html("good");
				$(".ph_th span").attr("class", "low");				
		}else{
				$(".ph_th span").html("bad");
				$(".ph_th span").attr("class", "high");
		}
	}
});

$.jStorage.listenKeyChange("phgum_th_statistics", function(){
	if($.jStorage.get("phgum_th_statistics") != "undefined"){
		if($.jStorage.get("phgum_th_statistics") == "good"){
				$(".phgum_th span").html("good");
				$(".phgum_th span").attr("class", "low");				
		}else{
				$(".phgum_th span").html("bad");
				$(".phgum_th span").attr("class", "high");
		}
	}
});

	/* achievements & warnings */

$.jStorage.listenKeyChange("achievements", function(){
	var achievements = $.jStorage.get("achievements");
	var output = '';
	for (var i =0; i < achievements.length; i++){
		output = output + "<li>"+achievements[i]+"</li>";
	}

	$("#achievements_list").html(output);
	$("#achievements_count").html(achievements.length);
	
});	


$.jStorage.listenKeyChange("warnings", function(){
	var warnings = $.jStorage.get("warnings");
	var output = '';
	for (var i =0; i < warnings.length; i++){
		output = output + "<li>"+warnings[i]+"</li>";
	}

	$("#warnings_list").html(output);
	$("#warnings_count").html(warnings.length);

});	

$(document).on('pageshow','#warnings', function() {
  $("#warnings_list").listview("refresh");
});

$(document).on('pageshow','#achievements', function() {
  $("#achievements_list").listview("refresh");
});


