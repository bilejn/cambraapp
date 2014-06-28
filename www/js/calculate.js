	
	
	/*============================ C  A  L  C  U  L  A  T  E ============================ */

	function calculate() {

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
		
		
		
/* ====================================== snack statistics =======================================*/


	if ($.jStorage.get("snack_taken")){
		var snack = JSON.parse($.jStorage.get("snack_taken"));
		var sum = 0;
		var days = snack.dates.length;
		for (var i = 0; i < snack.dates.length; i ++){
			for (key in snack.dates[i]){
			sum += snack.dates[i][key];
			}
		}
		var result = sum / days;
		$.jStorage.set("snack_statistics",result);
	}
	
	
	
/* ====================================== oral hygiene statistics =======================================*/

	if ($.jStorage.get("teeth_brushing_done")){
		var brushing = JSON.parse($.jStorage.get("teeth_brushing_done"));
		var sum = 0;
		var days = brushing.dates.length;
		for (var i = 0; i < brushing.dates.length; i ++){
			for (key in brushing.dates[i]){
			sum += brushing.dates[i][key];
			}
		}
		var result = sum / days;
		$.jStorage.set("brushing_statistics",result);
	}
	
	
	if ($.jStorage.get("teeth_flossing_done")){
		var flossing = JSON.parse($.jStorage.get("teeth_flossing_done"));
		var sum = 0;
		var days = flossing.dates.length;
		for (var i = 0; i < flossing.dates.length; i ++){
			for (key in flossing.dates[i]){
			sum += flossing.dates[i][key];
			}
		}
		var result = sum / days;
		$.jStorage.set("flossing_statistics",result);
	}
	






	

/* ====================================== xylitol statistics =======================================*/	

	if ($.jStorage.get("xylitol_taken")){
		var xylitol = JSON.parse($.jStorage.get("xylitol_taken"));
		var sum = 0;
		var days = xylitol.dates.length;
		for (var i = 0; i < xylitol.dates.length; i ++){
			for (key in xylitol.dates[i]){
			sum += xylitol.dates[i][key];
			}
		}
		var result = sum / days;
		$.jStorage.set("xylitol_statistics",result);
	}
	
	}



























	
	
	