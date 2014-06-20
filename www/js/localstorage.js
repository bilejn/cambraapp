
	
	
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
		$.mobile.changePage( "#general_data", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fDiseaseIndicators() {
	
		if (document.diseaseIndicators.visible_cavities.checked == true){
			if (!$.jStorage.get("visible_cavities"))
			$.jStorage.set("visible_cavities", "true");
		} else {
			if ($.jStorage.get("visible_cavities"))
			$.jStorage.deleteKey("visible_cavities");
		}
		
		if (document.diseaseIndicators.radiographic.checked == true){
			if (!$.jStorage.get("radiographic"))
			$.jStorage.set("radiographic", "true");
		} else {
			if ($.jStorage.get("radiographic"))
			$.jStorage.deleteKey("radiographic");
		}	

		if (document.diseaseIndicators.white_spots.checked == true){
			if (!$.jStorage.get("white_spots"))
			$.jStorage.set("white_spots", "true");
		} else {
			if ($.jStorage.get("white_spots"))
			$.jStorage.deleteKey("white_spots");
		}	
		
		if (document.diseaseIndicators.last_3_years.checked == true){
			if (!$.jStorage.get("last_3_years"))
			$.jStorage.set("last_3_years", "true");
		} else {
			if ($.jStorage.get("last_3_years"))
			$.jStorage.deleteKey("last_3_years");
		}	

		alert("submitted");		
		$.mobile.changePage( "#disease_indicators", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fRiskFactors() {
	
		if (document.riskFactors.ms_lb.checked == true){
			if (!$.jStorage.get("ms_lb"))
			$.jStorage.set("ms_lb", "true");
		} else {
			if ($.jStorage.get("ms_lb"))
			$.jStorage.deleteKey("ms_lb");
		}	
		
		if (document.riskFactors.visible_plaque.checked == true){
			if (!window.localStorage.visible_plaque)
			$.jStorage.set("visible_plaque", "true");
		} else {
			if (window.localStorage.visible_plaque)
			$.jStorage.deleteKey("visible_plaque");
		}		
		
		if (document.riskFactors.frequent_snack.checked == true){
			if (!$.jStorage.get("frequent_snack"))
			$.jStorage.set("frequent_snack", "true");
		} else {
			if ($.jStorage.get("frequent_snack"))
			$.jStorage.deleteKey("frequent_snack");
		}

		if (document.riskFactors.pits_and_fissures.checked == true){
			if (!$.jStorage.get("pits_and_fissures"))
			$.jStorage.set("pits_and_fissures", "true");
		} else {
			if ($.jStorage.get("pits_and_fissures"))
			$.jStorage.deleteKey("pits_and_fissures");
		}		
		
		if (document.riskFactors.drug_use.checked == true){
			if (!$.jStorage.get("drug_use"))
			$.jStorage.set("drug_use", "true");
		} else {
			if ($.jStorage.get("drug_use"))
			$.jStorage.deleteKey("drug_use");
		}
		
		if (document.riskFactors.inadequate_saliva.checked == true){
			if (!$.jStorage.get("inadequate_saliva"))
			$.jStorage.set("inadequate_saliva", "true");
		} else {
			if ($.jStorage.get("inadequate_saliva"))
			$.jStorage.deleteKey("inadequate_saliva");
		}
		
		if (document.riskFactors.saliva_reducing_factors.checked == true){
			if (!$.jStorage.get("saliva_reducing_factors"))
			$.jStorage.set("saliva_reducing_factors", "true");
		} else {
			if ($.jStorage.get("saliva_reducing_factors"))
			$.jStorage.deleteKey("saliva_reducing_factors");
		}
		
		if (document.riskFactors.exposed_roots.checked == true){
			if (!$.jStorage.get("exposed_roots"))
			$.jStorage.set("exposed_roots", "true");
		} else {
			if ($.jStorage.get("exposed_roots"))
			$.jStorage.deleteKey("exposed_roots");
		}
		
		
		if (document.riskFactors.orthodontic_appliances.checked == true){
			if (!$.jStorage.get("orthodontic_appliances"))
			$.jStorage.set("orthodontic_appliances", "true");
		} else {
			if ($.jStorage.get("orthodontic_appliances"))
			$.jStorage.deleteKey("orthodontic_appliances");
		}		
	
		alert("submitted");	
		$.mobile.changePage( "#risk_factors", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fProtectiveFactors(){

		if (document.protectiveFactors.fluoridated_community.checked == true){
			if (!$.jStorage.get("fluoridated_community"))
			$.jStorage.set("fluoridated_community", "true");
		} else {
			if ($.jStorage.get("fluoridated_community"))
			$.jStorage.deleteKey("fluoridated_community");
		}
		
		if (document.protectiveFactors.fluoride_paste_once.checked == true){
			if (!$.jStorage.get("fluoride_paste_once"))
			$.jStorage.set("fluoride_paste_once", "true");
		} else {
			if ($.jStorage.get("fluoride_paste_once"))
			$.jStorage.deleteKey("fluoride_paste_once");
		}
		
		if (document.protectiveFactors.fluoride_paste_twice.checked == true){
			if (!$.jStorage.get("fluoride_paste_twice"))
			$.jStorage.set("fluoride_paste_twice", "true");
		} else {
			if ($.jStorage.get("fluoride_paste_twice"))
			$.jStorage.deleteKey("fluoride_paste_twice");
		}
	
		if (document.protectiveFactors.fluoride_mouthrinse.checked == true){
			if (!$.jStorage.get("fluoride_mouthrinse"))
			$.jStorage.set("fluoride_mouthrinse", "true");
		} else {
			if ($.jStorage.get("fluoride_mouthrinse"))
			$.jStorage.deleteKey("fluoride_mouthrinse");
		}
	
		if (document.protectiveFactors.fluoride_5000.checked == true){
			if (!$.jStorage.get("fluoride_5000"))
			$.jStorage.set("fluoride_5000", "true");
		} else {
			if ($.jStorage.get("fluoride_5000"))
			$.jStorage.deleteKey("fluoride_5000");
		}
	
		if (document.protectiveFactors.fluoride_varnish.checked == true){
			if (!$.jStorage.get("fluoride_varnish"))
			$.jStorage.set("fluoride_varnish", "true");
		} else {
			if ($.jStorage.get("fluoride_varnish"))
			$.jStorage.deleteKey("fluoride_varnish");
		}
	
		if (document.protectiveFactors.topical_fluoride.checked == true){
			if (!$.jStorage.get("topical_fluoride"))
			$.jStorage.set("topical_fluoride", "true");
		} else {
			if ($.jStorage.get("topical_fluoride"))
			$.jStorage.deleteKey("topical_fluoride");
		}
	
		if (document.protectiveFactors.chlorhexidine.checked == true){
			if (!$.jStorage.get("chlorhexidine"))
			$.jStorage.set("chlorhexidine", "true");
		} else {
			if ($.jStorage.get("chlorhexidine"))
			$.jStorage.deleteKey("chlorhexidine");
		}
	
		if (document.protectiveFactors.xylitol.checked == true){
			if (!$.jStorage.get("xylitol"))
			$.jStorage.set("xylitol", "true");
		} else {
			if ($.jStorage.get("xylitol"))
			$.jStorage.deleteKey("xylitol");
		}
		
		if (document.protectiveFactors.tooth_mousse.checked == true){
			if (!$.jStorage.get("tooth_mousse"))
			$.jStorage.set("tooth_mousse", "true");
		} else {
			if ($.jStorage.get("tooth_mousse"))
			$.jStorage.deleteKey("tooth_mousse");
		}
		
		if (document.protectiveFactors.adequate_saliva.checked == true){
			if (!$.jStorage.get("adequate_saliva"))
			$.jStorage.set("adequate_saliva", "true");
		} else {
			if ($.jStorage.get("adequate_saliva"))
			$.jStorage.deleteKey("adequate_saliva");
		}
		
		alert("submitted");		
		$.mobile.changePage( "#protective_factors", { allowSamePageTransition: true } );
		return false;
	
	}
	
	
	/* ============================ THERAPY RECOMMENDATIONS FUNCTIONS ================ */
	
	
	function fRecallExams () {
	
	var _RecallExamsFrequency = document.recallExams.recalls.value;
	var date = new Date();
    date.setMonth(date.getMonth() + parseInt(_RecallExamsFrequency));
	$.jStorage.set("recallExam", date);

		alert("submitted");	
		$.mobile.changePage( "#recall_exams", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fAntibacterials () {
	
		if (document.antibacterials_th.chlorhexidine_th.checked == true){
			if (!$.jStorage.get("chlorhexidine_th"))
			$.jStorage.set("chlorhexidine_th", "true");
		} else {
			if ($.jStorage.get("chlorhexidine_th"))
			$.jStorage.deleteKey("chlorhexidine_th");
		}
		
		if (document.antibacterials_th.xylitol_th.checked == true){
			if (!$.jStorage.get("xylitol_th"))
			$.jStorage.set("xylitol_th", "true");
		} else {
			if ($.jStorage.get("xylitol_th"))
			$.jStorage.deleteKey("xylitol_th");
		}
		
		alert("submitted");	
		$.mobile.changePage( "#antibacterials", { allowSamePageTransition: true } );
		return false;
	}
	
	function fFluoride () {
	
		if (document.fluoride_th.fluoride_paste_otc_th.checked == true){
			if (!$.jStorage.get("fluoride_paste_otc_th"))
			$.jStorage.set("fluoride_paste_otc_th", "true");
		} else {
			if ($.jStorage.get("fluoride_paste_otc_th"))
			$.jStorage.deleteKey("fluoride_paste_otc_th");
		}
		
		if (document.fluoride_th.fluoride_paste_5000_th.checked == true){
			if (!$.jStorage.get("fluoride_paste_5000_th"))
			$.jStorage.set("fluoride_paste_5000_th", "true");
		} else {
			if ($.jStorage.get("fluoride_paste_5000_th"))
			$.jStorage.deleteKey("fluoride_paste_5000_th");
		}

		if (document.fluoride_th.fluoride_mouthrinse_th.checked == true){
			if (!$.jStorage.get("fluoride_mouthrinse_th"))
			$.jStorage.set("fluoride_mouthrinse_th", "true");
		} else {
			if ($.jStorage.get("fluoride_mouthrinse_th"))
			$.jStorage.deleteKey("fluoride_mouthrinse_th");
		}
		
		
		if (document.fluoride_th.fluoride_mouthrinse_extra_th.checked == true){
			if (!$.jStorage.get("fluoride_mouthrinse_extra_th"))
			$.jStorage.set("fluoride_mouthrinse_extra_th", "true");
		} else {
			if ($.jStorage.get("fluoride_mouthrinse_extra_th"))
			$.jStorage.deleteKey("fluoride_mouthrinse_extra_th");
		}
		
		if (document.fluoride_th.fluoride_mouthrinse_xerostomia_th.checked == true){
			if (!$.jStorage.get("fluoride_mouthrinse_xerostomia_th"))
			$.jStorage.set("fluoride_mouthrinse_xerostomia_th", "true");
		} else {
			if ($.jStorage.get("fluoride_mouthrinse_xerostomia_th"))
			$.jStorage.deleteKey("fluoride_mouthrinse_xerostomia_th");
		}
	
		alert("submitted");	
		$.mobile.changePage( "#fluoride", { allowSamePageTransition: true } );
		return false;
	}
	
	
	
	
	
function fPhControl () {
	
		if (document.ph_control.ph_th.checked == true){
			if (!$.jStorage.get("ph_th"))
			$.jStorage.set("ph_th", "true");
		} else {
			if ($.jStorage.get("ph_th"))
			$.jStorage.deleteKey("ph_th");
		}
		
		if (document.ph_control.phgum_th.checked == true){
			if (!$.jStorage.get("phgum_th"))
			$.jStorage.set("phgum_th", "true");
		} else {
			if ($.jStorage.get("phgum_th"))
			$.jStorage.deleteKey("phgum_th");
		}
	
		alert("submitted");	
		$.mobile.changePage( "#ph_control", { allowSamePageTransition: true } );
		return false;
	}
	
	
	function fCaPPaste() {
	
		if (document.cap_paste.cap_th.checked == true){
			if (!$.jStorage.get("cap_th"))
			$.jStorage.set("cap_th", "true");
		} else {
			if ($.jStorage.get("cap_th"))
			$.jStorage.deleteKey("cap_th");
		}
	
		alert("submitted");		
		$.mobile.changePage( "#cap_paste", { allowSamePageTransition: true } );
		return false;
	}
	


	
	
	

	/*                                                         ============================ C  A  L  C  U  L  A  T  E ============================ */





	
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
			if ($.jStorage.get(diseaseIndicatorsArray[i]) != undefined){
			disease_count = disease_count + 1;
			}
		 }
		 
		for (i=0; i < riskFactorsArray.length; i++){
			if ($.jStorage.get(riskFactorsArray[i]) != undefined){
			risk_count = risk_count + 1;
			}
		} 
		
		for (i=0; i < protectiveFactorsArray.length; i++){
			if ($.jStorage.get(protectiveFactorsArray[i]) != undefined){
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
	
	$.jStorage.set("risk_level", riskLevel());
	

	
	
	
	
	
	
	
	
	
	