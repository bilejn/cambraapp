	$(function (){
	
/*================================ Local storage initialization ====================================*/






















	
		
/*================================ Risk level ====================================*/
		calculate ();
		if ($.jStorage.get("risk_level") == "low"){
			$("#low_risk").show();
			$("#overall_caries_risk span").html("low");
			$("#overall_caries_risk span").attr("class", "low");
			$("<li />", { text: "Caries risk level: low"}).appendTo("#achievements_list");

		 } else {
			$("#low_risk").hide();
		 }
	
		if ($.jStorage.get("risk_level") == "moderate"){
			$("#moderate_risk").show();
			$("#overall_caries_risk span").html("MODERATE");
			$("#overall_caries_risk span").attr("class", "moderate");
		 } else {
			$("#moderate_risk").hide();
		 }

		if ($.jStorage.get("risk_level") == "high"){
			$("#high_risk").show();
			$("#overall_caries_risk span").html("HIGH");
			$("#overall_caries_risk span").attr("class", "high");
			$("<li />", { text: "Caries risk level: high"}).appendTo("#warnings_list");
		 } else {
			$("#high_risk").hide();
		 }		 
	
	
	
		if ($.jStorage.get("disease_count")){
		$("#disease_indicators_presence span").html($.jStorage.get("disease_count"));
		$("#disease_indicators_presence span").attr("class", "high");
			if($.jStorage.get("disease_count")=="0") $("<li />", { text: "Disease indicators: 0"}).appendTo("#achievements_list");
			if($.jStorage.get("disease_count")!="0") $("<li />", { text: "Disease indicators: " +$.jStorage.get("disease_count")}).appendTo("#warnings_list");
		}
		
		if ($.jStorage.get("risk_count")){
		$("#risk_factors_presence span").html($.jStorage.get("risk_count"));
		$("#risk_factors_presence span").attr("class", "high");
			if($.jStorage.get("risk_count")=="0") $("<li />", { text: "Risk factors: 0"}).appendTo("#achievements_list");
			if($.jStorage.get("risk_count")!="0") $("<li />", { text: "Risk factors: " +$.jStorage.get("risk_count")}).appendTo("#warnings_list");
		}
		
		if ($.jStorage.get("protective_count")){
		$("#protective_factors_presence span").html($.jStorage.get("protective_count"));
		$("#protective_factors_presence span").attr("class", "low");
			if($.jStorage.get("protective_count")!="0") $("<li />", { text: "Protective factors: " +$.jStorage.get("protective_count")}).appendTo("#achievements_list");
			if($.jStorage.get("protective_count")=="0") $("<li />", { text: "Risk factors: 0"}).appendTo("#warnings_list");

		}
/*================================ Next dental visit ====================================*/	
	
	
		if ($.jStorage.get("recallExam") != null && $.jStorage.get("recallExam") != ""){
			var deadline = new Date ($.jStorage.get("recallExam")) 
			$("#time").html("next dental visit: " +$.jStorage.get("recallExam"));
		 } else {
			$("#time").html("You should schedule an appointment with your dentist!");
		 }	

		
/*================================ Prescribed therapy ====================================*/	

	prescribed_th=["chlorhexidine_th", "xylitol_th", "fluoride_paste_otc_th", "fluoride_paste_5000_th", "fluoride_mouthrinse_th", "fluoride_mouthrinse_extra_th", "fluoride_mouthrinse_xerostomia_th", "ph_th", "phgum_th", "cap_th"];
	
	list_text=["Chlorhexidine usage: ", "Xylitol usage: ", "OTC fluoride paste usage: ", "5000ppm fluoride paste usage: ", "Standard fluoride mouthrinse usage: ", "Extra fluoride mouthrinse usage: ", "Fluoride mouthrinse for dry mouth usage: ", "Baking soda solution usage: ", "Baking soda gum usage: ", "Calcium phosphate paste usage: "];


	for (var b = 0; b < prescribed_th.length; b++){
		if ($.jStorage.get(prescribed_th[b]) == "true") {
			$("."+prescribed_th[b]).show();
			if($.jStorage.get(prescribed_th[b]+"_statistics") == "good"){
				$("."+prescribed_th[b]+" span").html("good");
				$("."+prescribed_th[b]+" span").attr("class", "low");
					$("<li />", { text: list_text[b]+ "good"}).appendTo("#achievements_list");				
			}else{
				$("."+prescribed_th[b]+" span").html("bad");
				$("."+prescribed_th[b]+" span").attr("class", "high");
					$("<li />", { text: list_text[b]+ "bad"}).appendTo("#warnings_list");				
			}
		 } else {
			$("."+prescribed_th[b]).hide();
		 }
	}

		 
		 
/*================================================ form initialization =============================================*/




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
	 
/*================================================ statistics initialization =============================================*/

/*== snack==*/
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
	

/*== oral hygiene ==*/

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



/*================================================ achievements and warnings count =============================================*/

	$("#achievements_count").html($("#achievements_list li").length);
	$("#warnings_count").html($("#warnings_list li").length);
		
		
		
    });
	

     