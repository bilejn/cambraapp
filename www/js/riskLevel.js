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
		
		 for (i=0; i < diseaseIndicatorsArray; i++){
			if (window.localStorage.getItem(diseaseIndicatorsArray[i]) != undefined){
			disease_count = disease_count + 1;
			}
		 }
		 
		for (i=0; i < riskFactorsArray; i++){
			if (window.localStorage.getItem(riskFactorsArray[i]) != undefined){
			risk_count = risk_count + 1;
			}
		} 
		
		for (i=0; i < protectiveFactorsArray; i++){
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