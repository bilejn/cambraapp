
	
	
	function generalForm() {
		if (document.generalData.first_name.value != null  && document.generalData.first_name.value != ""){
			var fname = document.generalData.first_name.value;
			window.localStorage.setItem("firstname", fname);
		}
		
		if (document.generalData.last_name.value != null && document.generalData.last_name.value != ""){
			var lname = document.generalData.last_name.value;
			window.localStorage.setItem("lastname", lname);		
		}	

		if 	( document.generalData.yearpicker.value != "Please Choose"){
				var _age = document.generalData.yearpicker.value;
				window.localStorage.setItem("age", _age);			
		}
	
		var _gender = document.generalData.gender.value;
		window.localStorage.setItem("gender", _gender);

		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fDiseaseIndicators() {
	
		if (document.diseaseIndicators.visible_cavities.checked == true){
			window.localStorage.setItem("visibleCavities", "true");
		} else {
			window.localStorage.setItem("visibleCavities", "false");
		}
		
		if (document.diseaseIndicators.radiographic.checked == true){
			window.localStorage.setItem("radiographic", "true");
		} else {
			window.localStorage.setItem("radiographic", "false");
		}	
	
		if (document.diseaseIndicators.white_spots.checked == true){
			window.localStorage.setItem("white_spots", "true");
		} else {
			window.localStorage.setItem("white_spots", "false");
		}
		
		if (document.diseaseIndicators.last_3_years.checked == true){
			window.localStorage.setItem("last_3_years", "true");
		} else {
			window.localStorage.setItem("last_3_years", "false");
		}
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fRiskFactors() {
	
		if (document.riskFactors.ms_lb.checked == true){
			window.localStorage.setItem("mslbCount", "true");
		} else {
			window.localStorage.setItem("mslbCount", "false");
		}	
		
		if (document.riskFactors.visible_plaque.checked == true){
			window.localStorage.setItem("visiblePlaque", "true");
		} else {
			window.localStorage.setItem("visiblePlaque", "false");
		}	
		
		if (document.riskFactors.frequent_snack.checked == true){
			window.localStorage.setItem("frequentSnack", "true");
		} else {
			window.localStorage.setItem("frequentSnack", "false");
		}

		if (document.riskFactors.pits_and_fissures.checked == true){
			window.localStorage.setItem("pitsAndFissures", "true");
		} else {
			window.localStorage.setItem("pitsAndFissures", "false");
		}		
		
		if (document.riskFactors.drug_use.checked == true){
			window.localStorage.setItem("drugUse", "true");
		} else {
			window.localStorage.setItem("drugUse", "false");
		}
		
		if (document.riskFactors.inadequate_saliva.checked == true){
			window.localStorage.setItem("inadequateSaliva", "true");
		} else {
			window.localStorage.setItem("inadequateSaliva", "false");
		}
		
		if (document.riskFactors.saliva_reducing_factors.checked == true){
			window.localStorage.setItem("salivaReducingFactors", "true");
		} else {
			window.localStorage.setItem("salivaReducingFactors", "false");
		}
		
		if (document.riskFactors.exposed_roots.checked == true){
			window.localStorage.setItem("exposedRoots", "true");
		} else {
			window.localStorage.setItem("exposedRoots", "false");
		}
		
		if (document.riskFactors.orthodontic_appliances.checked == true){
			window.localStorage.setItem("orthodonticAppliances", "true");
		} else {
			window.localStorage.setItem("orthodonticAppliances", "false");
		}		
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fProtectiveFactors(){
	
		if (document.protectiveFactors.fluoridated_community.checked == true){
			window.localStorage.setItem("fluoridatedCommunity", "true");
		} else {
			window.localStorage.setItem("fluoridatedCommunity", "false");
		}
		
		if (document.protectiveFactors.fluoride_paste_once.checked == true){
			window.localStorage.setItem("fluoridePasteOnce", "true");
		} else {
			window.localStorage.setItem("fluoridePasteOnce", "false");
		}
		
		if (document.protectiveFactors.fluoride_paste_twice.checked == true){
			window.localStorage.setItem("fluoridePasteTwice", "true");
		} else {
			window.localStorage.setItem("fluoridePasteTwice", "false");
		}
	
		if (document.protectiveFactors.fluoride_mouthrinse.checked == true){
			window.localStorage.setItem("fluorideMouthrinse", "true");
		} else {
			window.localStorage.setItem("fluorideMouthrinse", "false");
		}
		if (document.protectiveFactors.fluoride_5000.checked == true){
			window.localStorage.setItem("fluoride5000", "true");
		} else {
			window.localStorage.setItem("fluoride5000", "false");
		}	
		if (document.protectiveFactors.fluoride_varnish.checked == true){
			window.localStorage.setItem("fluorideVarnish", "true");
		} else {
			window.localStorage.setItem("fluorideVarnish", "false");
		}
		if (document.protectiveFactors.topical_fluoride.checked == true){
			window.localStorage.setItem("topicalFluoride", "true");
		} else {
			window.localStorage.setItem("topicalFluoride", "false");
		}
	
		if (document.protectiveFactors.chlorhexidine.checked == true){
			window.localStorage.setItem("chlorhexidine", "true");
		} else {
			window.localStorage.setItem("chlorhexidine", "false");
		}
	
		if (document.protectiveFactors.xylitol.checked == true){
			window.localStorage.setItem("xylitol", "true");
		} else {
			window.localStorage.setItem("xylitol", "false");
		}
		
		if (document.protectiveFactors.tooth_mousse.checked == true){
			window.localStorage.setItem("toothMousse", "true");
		} else {
			window.localStorage.setItem("toothMousse", "false");
		}
		
		if (document.protectiveFactors.adequate_saliva.checked == true){
			window.localStorage.setItem("adequateSaliva", "true");
		} else {
			window.localStorage.setItem("adequateSaliva", "false");
		}
		
		alert("submitted");
		window.location.reload(true);
		return false;
	
	}
	
	
	/* ============================ THERAPY RECOMMENDATIONS FUNCTIONS ================ */
	
	
	function fRecallExams () {
	
	var _RecallExamsFrequency = document.recallExams.recalls.value
	window.localStorage.setItem("recallExamsFrequency", _RecallExamsFrequency);
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fAntibacterials () {
	
		if (document.antibacterials_th.chlorhexidine_th.checked == true){
			window.localStorage.setItem("chlorhexidine_th", "true");
		} else {
			window.localStorage.setItem("chlorhexidine_th", "false");
		}
		
		if (document.antibacterials_th.xylitol_th.checked == true){
			window.localStorage.setItem("xylitol_th", "true");
		} else {
			window.localStorage.setItem("xylitol_th", "false");
		}
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	function fFluoride () {
	
		if (document.fluoride_th.fluoride_paste_otc_th.checked == true){
			window.localStorage.setItem("fluoride_paste_otc_th", "true");
		} else {
			window.localStorage.setItem("fluoride_paste_otc_th", "false");
		}
		
		if (document.fluoride_th.fluoride_paste_5000_th.checked == true){
			window.localStorage.setItem("fluoride_paste_5000_th", "true");
		} else {
			window.localStorage.setItem("fluoride_paste_5000_th", "false");
		}

		if (document.fluoride_th.fluoride_mouthrinse_th.checked == true){
			window.localStorage.setItem("fluoride_mouthrinse_th", "true");
		} else {
			window.localStorage.setItem("fluoride_mouthrinse_th", "false");
		}
		
		
		if (document.fluoride_th.fluoride_mouthrinse_extra_th.checked == true){
			window.localStorage.setItem("fluoride_mouthrinse_extra_th", "true");
		} else {
			window.localStorage.setItem("fluoride_mouthrinse_extra_th", "false");
		}
		
		if (document.fluoride_th.fluoride_mouthrinse_xerostomia_th.checked == true){
			window.localStorage.setItem("fluoride_mouthrinse_xerostomia_th", "true");
		} else {
			window.localStorage.setItem("fluoride_mouthrinse_xerostomia_th", "false");
		}
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	
	
	
function fPhControl () {
	
		if (document.ph_control.ph_th.checked == true){
			window.localStorage.setItem("ph_th", "true");
		} else {
			window.localStorage.setItem("ph_th", "false");
		}
		
		if (document.ph_control.phgum_th.checked == true){
			window.localStorage.setItem("phgum_th", "true");
		} else {
			window.localStorage.setItem("phgum_th", "false");
		}
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fCaPPaste() {
	
		if (document.cap_paste.cap_th.checked == true){
			window.localStorage.setItem("cap_th", "true");
		} else {
			window.localStorage.setItem("cap_th", "false");
		}
		
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	

	
	
	
	
	
	
	
	
	
	