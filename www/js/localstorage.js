
	
	
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
			if (!window.localStorage.visible_cavities)
			window.localStorage.setItem("visible_cavities", "true");
		} else {
			if (window.localStorage.visible_cavities)
			window.localStorage.removeItem("visible_cavities");
		}
		
		if (document.diseaseIndicators.radiographic.checked == true){
			if (!window.localStorage.radiographic)
			window.localStorage.setItem("radiographic", "true");
		} else {
			if (window.localStorage.radiographic)
			window.localStorage.removeItem("radiographic");
		}	
	
		if (document.diseaseIndicators.white_spots.checked == true){
			if (!window.localStorage.white_spots)
			window.localStorage.setItem("white_spots", "true");
		} else {
			if (window.localStorage.white_spots)
			window.localStorage.removeItem("white_spots");
		}	
		
		if (document.diseaseIndicators.last_3_years.checked == true){
			if (!window.localStorage.last_3_years)
			window.localStorage.setItem("last_3_years", "true");
		} else {
			if (window.localStorage.last_3_years)
			window.localStorage.removeItem("last_3_years");
		}	
		
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fRiskFactors() {
	
		if (document.riskFactors.ms_lb.checked == true){
			if (!window.localStorage.ms_lb)
			window.localStorage.setItem("ms_lb", "true");
		} else {
			if (window.localStorage.ms_lb)
			window.localStorage.removeItem("ms_lb");
		}	
		
		if (document.riskFactors.visible_plaque.checked == true){
			if (!window.localStorage.visible_plaque)
			window.localStorage.setItem("visible_plaque", "true");
		} else {
			if (window.localStorage.visible_plaque)
			window.localStorage.removeItem("visible_plaque");
		}		
		
		if (document.riskFactors.frequent_snack.checked == true){
			if (!window.localStorage.frequent_snack)
			window.localStorage.setItem("frequent_snack", "true");
		} else {
			if (window.localStorage.frequent_snack)
			window.localStorage.removeItem("frequent_snack");
		}

		if (document.riskFactors.pits_and_fissures.checked == true){
			if (!window.localStorage.pits_and_fissures)
			window.localStorage.setItem("pits_and_fissures", "true");
		} else {
			if (window.localStorage.pits_and_fissures)
			window.localStorage.removeItem("pits_and_fissures");
		}		
		
		if (document.riskFactors.drug_use.checked == true){
			if (!window.localStorage.drug_use)
			window.localStorage.setItem("drug_use", "true");
		} else {
			if (window.localStorage.drug_use)
			window.localStorage.removeItem("drug_use");
		}
		
		if (document.riskFactors.inadequate_saliva.checked == true){
			if (!window.localStorage.inadequate_saliva)
			window.localStorage.setItem("inadequate_saliva", "true");
		} else {
			if (window.localStorage.inadequate_saliva)
			window.localStorage.removeItem("inadequate_saliva");
		}
		
		if (document.riskFactors.saliva_reducing_factors.checked == true){
			if (!window.localStorage.saliva_reducing_factors)
			window.localStorage.setItem("saliva_reducing_factors", "true");
		} else {
			if (window.localStorage.saliva_reducing_factors)
			window.localStorage.removeItem("saliva_reducing_factors");
		}
		
		if (document.riskFactors.exposed_roots.checked == true){
			if (!window.localStorage.exposed_roots)
			window.localStorage.setItem("exposed_roots", "true");
		} else {
			if (window.localStorage.exposed_roots)
			window.localStorage.removeItem("exposed_roots");
		}
		
		
		if (document.riskFactors.orthodontic_appliances.checked == true){
			if (!window.localStorage.orthodontic_appliances)
			window.localStorage.setItem("orthodontic_appliances", "true");
		} else {
			if (window.localStorage.orthodontic_appliances)
			window.localStorage.removeItem("orthodontic_appliances");
		}		
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fProtectiveFactors(){
	
		if (document.protectiveFactors.fluoridated_community.checked == true){
			if (!window.localStorage.fluoridated_community)
			window.localStorage.setItem("fluoridated_community", "true");
		} else {
			if (window.localStorage.fluoridated_community)
			window.localStorage.removeItem("fluoridated_community");
		}
		
		if (document.protectiveFactors.fluoride_paste_once.checked == true){
			if (!window.localStorage.fluoride_paste_once)
			window.localStorage.setItem("fluoride_paste_once", "true");
		} else {
			if (window.localStorage.fluoride_paste_once)
			window.localStorage.removeItem("fluoride_paste_once");
		}
		
		if (document.protectiveFactors.fluoride_paste_twice.checked == true){
			if (!window.localStorage.fluoride_paste_twice)
			window.localStorage.setItem("fluoride_paste_twice", "true");
		} else {
			if (window.localStorage.fluoride_paste_twice)
			window.localStorage.removeItem("fluoride_paste_twice");
		}
	
		if (document.protectiveFactors.fluoride_mouthrinse.checked == true){
			if (!window.localStorage.fluoride_mouthrinse)
			window.localStorage.setItem("fluoride_mouthrinse", "true");
		} else {
			if (window.localStorage.fluoride_mouthrinse)
			window.localStorage.removeItem("fluoride_mouthrinse");
		}
	
		if (document.protectiveFactors.fluoride_5000.checked == true){
			if (!window.localStorage.fluoride_5000)
			window.localStorage.setItem("fluoride_5000", "true");
		} else {
			if (window.localStorage.fluoride_5000)
			window.localStorage.removeItem("fluoride_5000");
		}
	
		if (document.protectiveFactors.fluoride_varnish.checked == true){
			if (!window.localStorage.fluoride_varnish)
			window.localStorage.setItem("fluoride_varnish", "true");
		} else {
			if (window.localStorage.fluoride_varnish)
			window.localStorage.removeItem("fluoride_varnish");
		}
	
		if (document.protectiveFactors.topical_fluoride.checked == true){
			if (!window.localStorage.topical_fluoride)
			window.localStorage.setItem("topical_fluoride", "true");
		} else {
			if (window.localStorage.topical_fluoride)
			window.localStorage.removeItem("topical_fluoride");
		}
	
		if (document.protectiveFactors.chlorhexidine.checked == true){
			if (!window.localStorage.chlorhexidine)
			window.localStorage.setItem("chlorhexidine", "true");
		} else {
			if (window.localStorage.chlorhexidine)
			window.localStorage.removeItem("chlorhexidine");
		}
	
		if (document.protectiveFactors.xylitol.checked == true){
			if (!window.localStorage.xylitol)
			window.localStorage.setItem("xylitol", "true");
		} else {
			if (window.localStorage.xylitol)
			window.localStorage.removeItem("xylitol");
		}
		
		if (document.protectiveFactors.tooth_mousse.checked == true){
			if (!window.localStorage.tooth_mousse)
			window.localStorage.setItem("tooth_mousse", "true");
		} else {
			if (window.localStorage.tooth_mousse)
			window.localStorage.removeItem("tooth_mousse");
		}
		
		if (document.protectiveFactors.adequate_saliva.checked == true){
			if (!window.localStorage.adequate_saliva)
			window.localStorage.setItem("adequate_saliva", "true");
		} else {
			if (window.localStorage.adequate_saliva)
			window.localStorage.removeItem("adequate_saliva");
		}
		
		alert("submitted");
		window.location.reload(true);
		return false;
	
	}
	
	
	/* ============================ THERAPY RECOMMENDATIONS FUNCTIONS ================ */
	
	
	function fRecallExams () {
	
	var _RecallExamsFrequency = document.recallExams.recalls.value;
	var date = new Date();
    date.setMonth(date.getMonth() + parseInt(_RecallExamsFrequency) + 1);
	window.localStorage.setItem("recallExam", date);
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fAntibacterials () {
	
		if (document.antibacterials_th.chlorhexidine_th.checked == true){
			if (!window.localStorage.chlorhexidine_th)
			window.localStorage.setItem("chlorhexidine_th", "true");
		} else {
			if (window.localStorage.chlorhexidine_th)
			window.localStorage.removeItem("chlorhexidine_th");
		}
		
		if (document.antibacterials_th.xylitol_th.checked == true){
			if (!window.localStorage.xylitol_th)
			window.localStorage.setItem("xylitol_th", "true");
		} else {
			if (window.localStorage.xylitol_th)
			window.localStorage.removeItem("xylitol_th");
		}
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	function fFluoride () {
	
		if (document.fluoride_th.fluoride_paste_otc_th.checked == true){
			if (!window.localStorage.fluoride_paste_otc_th)
			window.localStorage.setItem("fluoride_paste_otc_th", "true");
		} else {
			if (window.localStorage.fluoride_paste_otc_th)
			window.localStorage.removeItem("fluoride_paste_otc_th");
		}
		
		if (document.fluoride_th.fluoride_paste_5000_th.checked == true){
			if (!window.localStorage.fluoride_paste_5000_th)
			window.localStorage.setItem("fluoride_paste_5000_th", "true");
		} else {
			if (window.localStorage.fluoride_paste_5000_th)
			window.localStorage.removeItem("fluoride_paste_5000_th");
		}

		if (document.fluoride_th.fluoride_mouthrinse_th.checked == true){
			if (!window.localStorage.fluoride_mouthrinse_th)
			window.localStorage.setItem("fluoride_mouthrinse_th", "true");
		} else {
			if (window.localStorage.fluoride_mouthrinse_th)
			window.localStorage.removeItem("fluoride_mouthrinse_th");
		}
		
		
		if (document.fluoride_th.fluoride_mouthrinse_extra_th.checked == true){
			if (!window.localStorage.fluoride_mouthrinse_extra_th)
			window.localStorage.setItem("fluoride_mouthrinse_extra_th", "true");
		} else {
			if (window.localStorage.fluoride_mouthrinse_extra_th)
			window.localStorage.removeItem("fluoride_mouthrinse_extra_th");
		}
		
		if (document.fluoride_th.fluoride_mouthrinse_xerostomia_th.checked == true){
			if (!window.localStorage.fluoride_mouthrinse_xerostomia_th)
			window.localStorage.setItem("fluoride_mouthrinse_xerostomia_th", "true");
		} else {
			if (window.localStorage.fluoride_mouthrinse_xerostomia_th)
			window.localStorage.removeItem("fluoride_mouthrinse_xerostomia_th");
		}
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	
	
	
function fPhControl () {
	
		if (document.ph_control.ph_th.checked == true){
			if (!window.localStorage.ph_th)
			window.localStorage.setItem("ph_th", "true");
		} else {
			if (window.localStorage.ph_th)
			window.localStorage.removeItem("ph_th");
		}
		
		if (document.ph_control.phgum_th.checked == true){
			if (!window.localStorage.phgum_th)
			window.localStorage.setItem("phgum_th", "true");
		} else {
			if (window.localStorage.phgum_th)
			window.localStorage.removeItem("phgum_th");
		}
	
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	function fCaPPaste() {
	
		if (document.cap_paste.cap_th.checked == true){
			if (!window.localStorage.cap_th)
			window.localStorage.setItem("cap_th", "true");
		} else {
			if (window.localStorage.cap_th)
			window.localStorage.removeItem("cap_th");
		}
	
		
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	/* ============================ RISK LEVEL DETERMINATION ================ */	
	
		function riskLevel() {

		var diseaseIndicatorsArray = ["visible_cavities", "radiographic", "white_spots", "last_3_years"];
		var riskFactorsArray = ["ms_lb", "visible_plaque", "frequent_snack", "pits_and_fissures", "drug_use", "inadequate_saliva", "saliva_reducing_factors", "exposed_roots", "orthodontic_appliances"];
		var protectiveFactorsArray = ["fluoridated_community", "fluoride_paste_once", "fluoride_paste_twice", "fluoride_mouthrinse", "fluoride_5000", "fluoride_varnish", "topical_fluoride", "chlorhexidine", "xylitol", "tooth_mousse", "adequate_saliva"];


		var risk_level = "";
		var a = 0;
		var b = 0;
		var c = 0;
		
		var disease_count = 0;
		var risk_count = 0;
		var protective_count = 0;
		
		 for (i=0; i < diseaseIndicatorsArray.length; i++){
			if (window.localStorage.getItem(diseaseIndicatorsArray[i]) != undefined){
			disease_count = disease_count + 1;
			}
		 }
		 
		for (i=0; i < riskFactorsArray.length; i++){
			if (window.localStorage.getItem(riskFactorsArray[i]) != undefined){
			risk_count = risk_count + 1;
			}
		} 
		
		for (i=0; i < protectiveFactorsArray.length; i++){
			if (window.localStorage.getItem(protectiveFactorsArray[i]) != undefined){
			protective_count = protective_count + 1;
			}
		} 
		
		if (disease_count != 0){
			risk_level = "high";
		} else {
			if (risk_count > protective_count){
				risk_level = "high";
			}else if (risk_count = protective_count){
				risk_level = "moderate";
			}else {
				risk_level = "low";
			}
		}
		
		return risk_level;
	}
	
	window.localStorage.setItem("risk_level", riskLevel());
	

	
	
	
	
	
	
	
	
	
	