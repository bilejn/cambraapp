
	
	
	function generalForm() {
		if (document.generalData.first_name.value != null  && document.generalData.first_name.value != ""){
			var fname = document.generalData.first_name.value;
			$.jStorage.set("firstname", fname);
		}

		if (document.generalData.last_name.value != null && document.generalData.last_name.value != ""){
			var lname = document.generalData.last_name.value;
			$.jStorage.set("lastname", lname);		
		}	

		if 	( document.generalData.yearpicker.value != "Please Choose"){
				var _age = document.generalData.yearpicker.value;
				$.jStorage.set("age", _age);			
		}
	
		var _gender = document.generalData.gender.value;
		$.jStorage.set("gender", _gender);

		
		alert("submitted");
		$.jStorage.set("submit_form", "submit");
		$.mobile.changePage( "#general_data", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fDiseaseIndicators() {
	
		if (document.diseaseIndicators.visible_cavities.checked == true){
			if ($.jStorage.get("visible_cavities")=="false")
			$.jStorage.set("visible_cavities", "true");
		} else {
			$.jStorage.set("visible_cavities", "false");
		}
		
		if (document.diseaseIndicators.radiographic.checked == true){
			if ($.jStorage.get("radiographic")=="false")
			$.jStorage.set("radiographic", "true");
		} else {
			$.jStorage.set("radiographic", "false");
		}	

		if (document.diseaseIndicators.white_spots.checked == true){
			if ($.jStorage.get("white_spots")=="false")
			$.jStorage.set("white_spots", "true");
		} else {
			$.jStorage.set("white_spots", "false");
		}	
		
		if (document.diseaseIndicators.last_3_years.checked == true){
			if ($.jStorage.get("last_3_years")=="false")
			$.jStorage.set("last_3_years", "true");
		} else {
			$.jStorage.set("last_3_years", "false");
		}	

		alert("submitted");		
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_status", "submit");
		riskLevel();
		$.mobile.changePage( "#disease_indicators", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fRiskFactors() {
	
		if (document.riskFactors.ms_lb.checked == true){
			if ($.jStorage.get("ms_lb")=="false")
			$.jStorage.set("ms_lb", "true");
		} else {
			$.jStorage.set("ms_lb", "false");
		}	
		
		if (document.riskFactors.visible_plaque.checked == true){
			if ($.jStorage.get("visible_plaque")=="false")
			$.jStorage.set("visible_plaque", "true");
		} else {
			$.jStorage.set("visible_plaque", "false");
		}		
		
		if (document.riskFactors.frequent_snack.checked == true){
			if ($.jStorage.get("frequent_snack")=="false")
			$.jStorage.set("frequent_snack", "true");
		} else {
			$.jStorage.set("frequent_snack", "false");
		}

		if (document.riskFactors.pits_and_fissures.checked == true){
			if ($.jStorage.get("pits_and_fissures")=="false")
			$.jStorage.set("pits_and_fissures", "true");
		} else {
			$.jStorage.set("pits_and_fissures", "false");
		}		
		
		if (document.riskFactors.drug_use.checked == true){
			if ($.jStorage.get("drug_use")=="false")
			$.jStorage.set("drug_use", "true");
		} else {
			$.jStorage.set("drug_use", "false");
		}
		
		if (document.riskFactors.inadequate_saliva.checked == true){
			if ($.jStorage.get("inadequate_saliva")=="false")
			$.jStorage.set("inadequate_saliva", "true");
		} else {
			$.jStorage.set("inadequate_saliva", "false");
		}
		
		if (document.riskFactors.saliva_reducing_factors.checked == true){
			if ($.jStorage.get("saliva_reducing_factors")=="false")
			$.jStorage.set("saliva_reducing_factors", "true");
		} else {
			$.jStorage.set("saliva_reducing_factors", "false");
		}
		
		if (document.riskFactors.exposed_roots.checked == true){
			if ($.jStorage.get("exposed_roots")=="false")
			$.jStorage.set("exposed_roots", "true");
		} else {
			$.jStorage.set("exposed_roots", "false");
		}
		
		
		if (document.riskFactors.orthodontic_appliances.checked == true){
			if ($.jStorage.get("orthodontic_appliances")=="false")
			$.jStorage.set("orthodontic_appliances", "true");
		} else {
			$.jStorage.set("orthodontic_appliances", "false");
		}		
	
		alert("submitted");
		riskLevel();
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_status", "submit");		
		$.mobile.changePage( "#risk_factors", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fProtectiveFactors(){

		if (document.protectiveFactors.fluoridated_community.checked == true){
			if ($.jStorage.get("fluoridated_community")=="false")
			$.jStorage.set("fluoridated_community", "true");
		} else {
			$.jStorage.set("fluoridated_community", "false");
		}
		
		if (document.protectiveFactors.fluoride_paste_once.checked == true){
			if ($.jStorage.get("fluoride_paste_once")=="false")
			$.jStorage.set("fluoride_paste_once", "true");
		} else {
			$.jStorage.set("fluoride_paste_once", "false");
		}
		
		if (document.protectiveFactors.fluoride_paste_twice.checked == true){
			if ($.jStorage.get("fluoride_paste_twice")=="false")
			$.jStorage.set("fluoride_paste_twice", "true");
		} else {
			$.jStorage.set("fluoride_paste_twice", "false");
		}
	
		if (document.protectiveFactors.fluoride_mouthrinse.checked == true){
			if ($.jStorage.get("fluoride_mouthrinse")=="false")
			$.jStorage.set("fluoride_mouthrinse", "true");
		} else {
			$.jStorage.set("fluoride_mouthrinse", "false");
		}
	
		if (document.protectiveFactors.fluoride_5000.checked == true){
			if ($.jStorage.get("fluoride_5000")=="false")
			$.jStorage.set("fluoride_5000", "true");
		} else {
			$.jStorage.set("fluoride_5000", "false");
		}
	
		if (document.protectiveFactors.fluoride_varnish.checked == true){
			if ($.jStorage.get("fluoride_varnish")=="false")
			$.jStorage.set("fluoride_varnish", "true");
		} else {
			$.jStorage.set("fluoride_varnish", "false");
		}
	
		if (document.protectiveFactors.topical_fluoride.checked == true){
			if ($.jStorage.get("topical_fluoride")=="false")
			$.jStorage.set("topical_fluoride", "true");
		} else {
			$.jStorage.set("topical_fluoride", "false");
		}
	
		if (document.protectiveFactors.chlorhexidine.checked == true){
			if ($.jStorage.get("chlorhexidine")=="false")
			$.jStorage.set("chlorhexidine", "true");
		} else {
			$.jStorage.set("chlorhexidine", "false");
		}
	
		if (document.protectiveFactors.xylitol.checked == true){
			if ($.jStorage.get("xylitol")=="false")
			$.jStorage.set("xylitol", "true");
		} else {
			$.jStorage.set("xylitol", "false");
		}
		
		if (document.protectiveFactors.tooth_mousse.checked == true){
			if ($.jStorage.get("tooth_mousse")=="false")
			$.jStorage.set("tooth_mousse", "true");
		} else {
			$.jStorage.set("tooth_mousse", "false");
		}
		
		if (document.protectiveFactors.adequate_saliva.checked == true){
			if ($.jStorage.get("adequate_saliva")=="false")
			$.jStorage.set("adequate_saliva", "true");
		} else {
			$.jStorage.set("adequate_saliva", "false");
		}
		
		alert("submitted");	
		riskLevel();
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_status", "submit");		
		$.mobile.changePage( "#protective_factors", { allowSamePageTransition: true } );
		return false;
	
	}
	
	
	
	
	
	
	/* ============================ THERAPY RECOMMENDATIONS FUNCTIONS ================ */
	
	
	function fRecallExams () {
	
	var _RecallExamsFrequency = document.recallExams.recalls.value;
	var broj = parseInt(_RecallExamsFrequency);
	var date = new Date();

	var day = date.getDate(); if (day < 10) { day = "0" + day; }
	var month = date.getMonth() + 1 + broj; 
	var year = date.getFullYear()
 		if (month > 12) {month = month % 12; year = year + 1}
		if (month < 10) { month = "0" + month; }
	var item = day + "." + month + "." + year + ".";

	$.jStorage.set("recallExam", item.toString());

		alert("submitted");
		$.jStorage.set("submit_form_th", "submit");
		$.jStorage.set("submit_form", "submit");		
		$.mobile.changePage( "#recall_exams", { allowSamePageTransition: true } );
		return false;
	}
	
	
	
	function fAntibacterials () {
	
		if (document.antibacterials_th.chlorhexidine_th.checked == true){
			if ($.jStorage.get("chlorhexidine_th") =="false"){
			$.jStorage.set("chlorhexidine_th", "true");
			track("chlorhexidine_th", "add");}
		} else {
			$.jStorage.set("chlorhexidine_th", "false");
			track("chlorhexidine_th", "remove");
		}
		
		if (document.antibacterials_th.xylitol_th.checked == true){
			if ($.jStorage.get("xylitol_th")=="false"){
			$.jStorage.set("xylitol_th", "true");
			track("xylitol_th", "add");}
		} else {
			$.jStorage.set("xylitol_th", "false");
			track("xylitol_th", "remove");
		}
		
		alert("submitted");	
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_th", "submit");
		$.mobile.changePage( "#antibacterials", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fFluoride () {
	
		if (document.fluoride_th.fluoride_paste_otc_th.checked == true){
			if ($.jStorage.get("fluoride_paste_otc_th")=="false")
			$.jStorage.set("fluoride_paste_otc_th", "true");
		} else {
			$.jStorage.set("fluoride_paste_otc_th", "false");
		}
		
		if (document.fluoride_th.fluoride_paste_5000_th.checked == true){
			if ($.jStorage.get("fluoride_paste_5000_th")=="false")
			$.jStorage.set("fluoride_paste_5000_th", "true");
		} else {
			$.jStorage.set("fluoride_paste_5000_th", "false");
		}

		if (document.fluoride_th.fluoride_mouthrinse_th.checked == true){
			if ($.jStorage.get("fluoride_mouthrinse_th")=="false"){
			$.jStorage.set("fluoride_mouthrinse_th", "true");
			track("fluoride_mouthrinse_th", "add");}
		} else {
			$.jStorage.set("fluoride_mouthrinse_th", "false");
			track("fluoride_mouthrinse_th", "remove");
		}
		
		
		if (document.fluoride_th.fluoride_mouthrinse_extra_th.checked == true){
			if ($.jStorage.get("fluoride_mouthrinse_extra_th")=="false"){
			$.jStorage.set("fluoride_mouthrinse_extra_th", "true");
			track("fluoride_mouthrinse_extra_th", "add");}
		} else {
			$.jStorage.set("fluoride_mouthrinse_extra_th", "false");
			track("fluoride_mouthrinse_extra_th", "remove");
		}
		
		if (document.fluoride_th.fluoride_mouthrinse_xerostomia_th.checked == true){
			if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th")=="false"){
			$.jStorage.set("fluoride_mouthrinse_xerostomia_th", "true");
			as_needed("fluoride_mouthrinse_xerostomia_th", "add");}
		} else {
			$.jStorage.set("fluoride_mouthrinse_xerostomia_th", "false");
			as_needed("fluoride_mouthrinse_xerostomia_th", "remove");
		}
	
		alert("submitted");	
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_th", "submit");
		$.mobile.changePage( "#fluoride", { allowSamePageTransition: true } );
		return false;
	}
	
	
	
	
	
function fPhControl () {
	
		if (document.ph_control.ph_th.checked == true){
			if ($.jStorage.get("ph_th")=="false"){
			$.jStorage.set("ph_th", "true");
			as_needed("ph_th", "add");}
		} else {
			$.jStorage.set("ph_th", "false");
			track("ph_th", "remove");
		}
		
		if (document.ph_control.phgum_th.checked == true){
			if ($.jStorage.get("phgum_th")=="false"){
			$.jStorage.set("phgum_th", "true");
			as_needed("phgum_th", "add");}
		} else {
			$.jStorage.set("phgum_th", "false");
			as_needed("phgum_th", "remove");
		}
	
		alert("submitted");	
		$.jStorage.set("submit_form", "submit");
		$.jStorage.set("submit_form_th", "submit");
		$.mobile.changePage( "#ph_control", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fCaPPaste() {
	
		if (document.cap_paste.cap_th.checked == true){
			if ($.jStorage.get("cap_th")=="false"){
			$.jStorage.set("cap_th", "true");
			track("cap_th", "add");}
		} else {
			$.jStorage.set("cap_th", "false");
			track("cap_th", "remove");
		}
	
		alert("submitted");	
		$.jStorage.set("submit_form", "submit");	
		$.jStorage.set("submit_form_th", "submit");		
		$.mobile.changePage( "#cap_paste", { allowSamePageTransition: true } );
		return false;
	}
	


/* ====================================== tracking list =======================================*/


	function track (string, mark){		

		
		var track = $.jStorage.get("track");
		
		if (mark == "add"){
			if(track.indexOf(string) == -1) track.push(string);
		} else {
			if(track.indexOf(string) != -1) track.splice(track.indexOf(string),1);
		}	
		
		$.jStorage.set("track", track);

	}
	
	
	function as_needed (string, mark){


			var as_needed = $.jStorage.get("as_needed");
			
			if (mark == "add"){
				if(as_needed.indexOf(string) == -1) as_needed.push(string);
			} else {
				if(as_needed.indexOf(string) != -1) as_needed.splice(as_needed.indexOf(string),1);
			}	
			
			$.jStorage.set("as_needed", as_needed);


	}

	
	

	
	
	
	
	
	
	
	
	
	