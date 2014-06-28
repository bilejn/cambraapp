	$(function (){
	
/*================================ Local storage initialization ====================================*/






















	
		
/*================================ Risk level ====================================*/
		calculate ();
		if ($.jStorage.get("risk_level") == "low"){
			$("#low_risk").show();
			$("#overall_caries_risk span").html("low");
			$("#overall_caries_risk span").attr("class", "low");

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
		 } else {
			$("#high_risk").hide();
		 }		 
	
	
	
/*================================ Next dental visit ====================================*/	
	
	
		if ($.jStorage.get("recallExam") != null && $.jStorage.get("recallExam") != ""){
			var deadline = new Date ($.jStorage.get("recallExam")) 
			$("#time").html("next dental visit: " +$.jStorage.get("recallExam"));
		 } else {
			$("#time").html("You should schedule an appointment with your dentist!");
		 }	

		
/*================================ Registration buttons ====================================*/	

	buttons = ["chlorhexidine_th", "xylitol_th", "fluoride_paste_otc_th", "fluoride_paste_5000_th", "fluoride_mouthrinse_th", "fluoride_mouthrinse_extra_th", "fluoride_mouthrinse_xerostomia_th", "ph_th", "phgum_th", "cap_th"];
	

	var b;
	for (b = 0; b < buttons.length; b++){
		if ($.jStorage.get(buttons[b]) == "true") {
			$("#"+buttons[b]+"_button").show();
		 } else {
			$("#"+buttons[b]+"_button").hide();
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

	if($.jStorage.get("snack_statistics") < 3){
			$("#eating_habits span").html("good");
			$("#eating_habits span").attr("class", "low");		
	}
	
	if($.jStorage.get("snack_statistics") == 3){
			$("#eating_habits span").html("moderate");
			$("#eating_habits span").attr("class", "moderate");
		
	}

	if($.jStorage.get("snack_statistics") > 3){
			$("#eating_habits span").html("bad");
			$("#eating_habits span").attr("class", "high");		
		
	}
	
/*== oral hygiene ==*/

	if($.jStorage.get("brushing_statistics") >= 2 && $.jStorage.get("flossing_statistics") >= 1){
			$("#oral_hygiene_habits span").html("good");
			$("#oral_hygiene_habits span").attr("class", "low");		
	}else{
			$("#oral_hygiene_habits span").html("bad");
			$("#oral_hygiene_habits span").attr("class", "high");
	}

	
	
/*== xylitol ==*/	
	if ($.jStorage.get("xylitol_th") == "true"){
			$("#xylitol_taking_habits").show();		
			if($.jStorage.get("xylitol_statistics") >= 4){
				$("#xylitol_taking_habits span").html("good");
				$("#xylitol_taking_habits span").attr("class", "low");		
			}
			if($.jStorage.get("xylitol_statistics") < 4){
				$("#xylitol_taking_habits span").html("bad");
				$("#xylitol_taking_habits span").attr("class", "high");		
			}
	
	}else{
			$("#xylitol_taking_habits").hide();
	}

/*================================================ local storage list initialization =============================================*/

	

		
		
		
    });
	

     