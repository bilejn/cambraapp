
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
			window.localStorage.setItem("visibleCavities", true);
		} else {
			window.localStorage.setItem("visibleCavities", false);
		}
		
		if (document.diseaseIndicators.radiographic.checked == true){
			window.localStorage.setItem("radiographic", true);
		} else {
			window.localStorage.setItem("radiographic", false);
		}	
	
		if (document.diseaseIndicators.white_spots.checked == true){
			window.localStorage.setItem("white_spots", true);
		} else {
			window.localStorage.setItem("white_spots", false);
		}
		
		if (document.diseaseIndicators.last_3_years.checked == true){
			window.localStorage.setItem("last_3_years", true);
		} else {
			window.localStorage.setItem("last_3_years", false);
		}
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fRiskFactors() {
	
		if (document.riskFactors.ms_lb.checked == true){
			window.localStorage.setItem("mslbCount", true);
		} else {
			window.localStorage.setItem("mslbCount", false);
		}	
		
		if (document.riskFactors.visible_plaque.checked == true){
			window.localStorage.setItem("visiblePlaque", true);
		} else {
			window.localStorage.setItem("visiblePlaque", false);
		}	
		
		if (document.riskFactors.frequent_snack.checked == true){
			window.localStorage.setItem("frequentSnack", true);
		} else {
			window.localStorage.setItem("frequentSnack", false);
		}

		if (document.riskFactors.pits_and_fissures.checked == true){
			window.localStorage.setItem("pitsAndFissures", true);
		} else {
			window.localStorage.setItem("pitsAndFissures", false);
		}		
		
		if (document.riskFactors.drug_use.checked == true){
			window.localStorage.setItem("drugUse", true);
		} else {
			window.localStorage.setItem("drugUse", false);
		}
		
		if (document.riskFactors.inadequate_saliva.checked == true){
			window.localStorage.setItem("inadequateSaliva", true);
		} else {
			window.localStorage.setItem("inadequateSaliva", false);
		}
		
		if (document.riskFactors.saliva_reducing_factors.checked == true){
			window.localStorage.setItem("salivaReducingFactors", true);
		} else {
			window.localStorage.setItem("salivaReducingFactors", false);
		}
		
		if (document.riskFactors.exposed_roots.checked == true){
			window.localStorage.setItem("exposedRoots", true);
		} else {
			window.localStorage.setItem("exposedRoots", false);
		}
		
		if (document.riskFactors.orthodontic_appliances.checked == true){
			window.localStorage.setItem("orthodonticAppliances", true);
		} else {
			window.localStorage.setItem("orthodonticAppliances", false);
		}		
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fProtectiveFactors(){
	
		if (document.protectiveFactors.fluoridated_community.checked == true){
			window.localStorage.setItem("fluoridatedCommunity", true);
		} else {
			window.localStorage.setItem("fluoridatedCommunity", false);
		}
		
		if (document.protectiveFactors.fluoride_paste_once.checked == true){
			window.localStorage.setItem("fluoridePasteOnce", true);
		} else {
			window.localStorage.setItem("fluoridePasteOnce", false);
		}
		
		if (document.protectiveFactors.fluoride_paste_twice.checked == true){
			window.localStorage.setItem("fluoridePasteTwice", true);
		} else {
			window.localStorage.setItem("fluoridePasteTwice", false);
		}
	
		if (document.protectiveFactors.fluoride_mouthrinse.checked == true){
			window.localStorage.setItem("fluorideMouthrinse", true);
		} else {
			window.localStorage.setItem("fluorideMouthrinse", false);
		}
		if (document.protectiveFactors.fluoride_5000.checked == true){
			window.localStorage.setItem("fluoride5000", true);
		} else {
			window.localStorage.setItem("fluoride5000", false);
		}	
		if (document.protectiveFactors.fluoride_varnish.checked == true){
			window.localStorage.setItem("fluorideVarnish", true);
		} else {
			window.localStorage.setItem("fluorideVarnish", false);
		}
		if (document.protectiveFactors.topical_fluoride.checked == true){
			window.localStorage.setItem("topicalFluoride", true);
		} else {
			window.localStorage.setItem("topicalFluoride", false);
		}
	
		if (document.protectiveFactors.chlorhexidine.checked == true){
			window.localStorage.setItem("chlorhexidine", true);
		} else {
			window.localStorage.setItem("chlorhexidine", false);
		}
	
		if (document.protectiveFactors.xylitol.checked == true){
			window.localStorage.setItem("xylitol", true);
		} else {
			window.localStorage.setItem("xylitol", false);
		}
		
		if (document.protectiveFactors.tooth_mousse.checked == true){
			window.localStorage.setItem("toothMousse", true);
		} else {
			window.localStorage.setItem("toothMousse", false);
		}
		
		if (document.protectiveFactors.adequate_saliva.checked == true){
			window.localStorage.setItem("adequateSaliva", true);
		} else {
			window.localStorage.setItem("adequateSaliva", false);
		}
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	