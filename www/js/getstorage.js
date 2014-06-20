	$(function (){
	
/*================================ Risk level ====================================*/
	
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
	
	
	
/*================================ Next dental visit ====================================*/	
	
	
		if ($.jStorage.get("recallExam") != null && $.jStorage.get("recallExam") != ""){
			var deadline = new Date ($.jStorage.get("recallExam")) 
			$("#time").html("next dental visit: " + deadline.getDate()+"."+deadline.getMonth() + "." + deadline.getFullYear());
		 } else {
			$("#time").hide();
		 }	

		
/*================================ Registration buttons ====================================*/	

		
		if ($.jStorage.get("xylitol_th") == "true"){
			$("#xylitol_th_button").show();
		 } else {
			$("#xylitol_th_button").hide();
		 }

		 if ($.jStorage.get("chlorhexidine_th") == "true"){
			$("#chlorhexidine_th_button").show();
		 } else {
			$("#chlorhexidine_th_button").hide();
		 }

		 if ($.jStorage.get("fluoride_paste_otc_th") == "true"){
			$("#fluoride_paste_otc_th_button").show();
		 } else {
			$("#fluoride_paste_otc_th_button").hide();
		 }
		 
		 if ($.jStorage.get("fluoride_paste_5000_th") == "true"){
			$("#fluoride_paste_5000_th_button").show();
		 } else {
			$("#fluoride_paste_5000_th_button").hide();
		 }
		 
		 if ($.jStorage.get("fluoride_mouthrinse_th") == "true"){
			$("#fluoride_mouthrinse_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_th_button").hide();
		 }
		 
		if ($.jStorage.get("fluoride_mouthrinse_extra_th") == "true"){
			$("#fluoride_mouthrinse_extra_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_extra_th_button").hide();
		 } 
		 
		 
		if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th") == "true"){
			$("#fluoride_mouthrinse_xerostomia_th_button").show();
		 } else {
			$("#fluoride_mouthrinse_xerostomia_th_button").hide();
		 } 
		 
		 
		 
		if ($.jStorage.get("ph_th") == "true"){
			$("#ph_th_button").show();
		 } else {
			$("#ph_th_button").hide();
		 } 
		 
		if ($.jStorage.get("phgum_th") == "true"){
			$("#phgum_th_button").show();
		 } else {
			$("#phgum_th_button").hide();
		 } 
		 
		if ($.jStorage.get("cap_th") == "true"){
			$("#cap_th_button").show();
		 } else {
			$("#cap_th_button").hide();
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
	 
	

/*================================================ local storage list initialization =============================================*/

	
		var output = ''; 
		for (var key in localStorage) {
			output = output+(key + ": " +localStorage[key])+"<br />";
			}
		$("#list_output").html(output);
		
		
		
    });
	

     