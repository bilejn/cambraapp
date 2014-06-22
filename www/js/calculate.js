	
	
	/*============================ C  A  L  C  U  L  A  T  E ============================ */

	function calculate() {
		$.jStorage.set("snack",'{"dates":[{"22.06.2014":2},{"23.06.2014":4},{"24.06.2014":3}]}');
		riskLevel();
		listOutput();
		statistics ();
	}



	
	/* ============================ RISK LEVEL DETERMINATION ================ */	
	
		function riskLevel() {

		diseaseIndicatorsArray = ["visible_cavities", "radiographic", "white_spots", "last_3_years"];
		riskFactorsArray = ["ms_lb", "visible_plaque", "frequent_snack", "pits_and_fissures", "drug_use", "inadequate_saliva", "saliva_reducing_factors", "exposed_roots", "orthodontic_appliances"];
		protectiveFactorsArray = ["fluoridated_community", "fluoride_paste_once", "fluoride_paste_twice", "fluoride_mouthrinse", "fluoride_5000", "fluoride_varnish", "topical_fluoride", "chlorhexidine", "xylitol", "tooth_mousse", "adequate_saliva"];


		var risk_level = "";
		var a = 0;
		var b = 0;
		var c = 0;
		
		var disease_count = 0;
		var risk_count = 0;
		var protective_count = 0;
		
		 for (i=0; i < diseaseIndicatorsArray.length; i++){
			if ($.jStorage.get(diseaseIndicatorsArray[i]) != null){
			disease_count = disease_count + 1;
			}
		 }
		 
		for (i=0; i < riskFactorsArray.length; i++){
			if ($.jStorage.get(riskFactorsArray[i]) != null){
			risk_count = risk_count + 1;
			}
		} 
		
		for (i=0; i < protectiveFactorsArray.length; i++){
			if ($.jStorage.get(protectiveFactorsArray[i]) != null){
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
		
		$.jStorage.set("risk_level", risk_level);
	}
	
	
	function listOutput() {	
		var output ="";
		var index = $.jStorage.index();
		var indexCounter;
		for (indexCounter = 0; indexCounter < index.length; indexCounter++ ){
		output = output + index[indexCounter] + ": "+ $.jStorage.get(index[indexCounter]) + "<br />";
		}

		$("#list_output").html(output);
	}




	
	/* ============================ STATISTICS ===================================== */

	function statistics () {
	var snack = JSON.parse($.jStorage.get("snack"));
	var output = "";
	for (var i = 0; i < snack.dates.length; i ++){
		for (key in snack.dates[i]){
		output += key +":  "+snack.dates[i][key] + "<br />";
		}
	}
	$("#statistics_entry").html(output);
	
	
	
	}



























	
	
	