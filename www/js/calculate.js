
/* ====================================== snack statistics =======================================*/


$.jStorage.listenKeyChange("snack_taken", function(){	 
	if($.jStorage.get("snack_taken") != ""){
	
		var last = Date.parseExact($.jStorage.get("last_snack_taken"), "dd.MM.yyyy");
		var today = Date.today();
	/*	if(!last.equals(today)){
			
		
		}*/
		
		var snack = JSON.parse($.jStorage.get("snack_taken"));
		var sum = 0;
		var days = snack.dates.length;
		for (var i = 0; i < snack.dates.length; i ++){
			for (key in snack.dates[i]){
			sum += snack.dates[i][key];
			}
		}
		
		var result = sum / days;
		var mark;
		if (result > 3) {mark = "bad"; achwar ("Snack statistics","war");}
		if (result <= 3) {mark = "good"; achwar ("Snack statistics","ach");}
		$.jStorage.set("snack_statistics",mark);
	}
});	
	
	
/* ====================================== oral hygiene statistics =======================================*/

$.jStorage.listenKeyChange("teeth_brushing_done", function(){
	if($.jStorage.get("teeth_brushing_done") != ""){
		var brushing = JSON.parse($.jStorage.get("teeth_brushing_done"));
		var sum = 0;
		var days = brushing.dates.length;
		for (var i = 0; i < brushing.dates.length; i ++){
			for (key in brushing.dates[i]){
			sum += brushing.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result >= 2) mark = "good";
		if (result < 2) mark = "bad";
		$.jStorage.set("brushing_statistics",mark);
		oralhygiene ();
	}	
});
	
	
$.jStorage.listenKeyChange("teeth_flossing_done", function(){	
	if($.jStorage.get("teeth_flossing_done") != ""){
		var flossing = JSON.parse($.jStorage.get("teeth_flossing_done"));
		var sum = 0;
		var days = flossing.dates.length;
		for (var i = 0; i < flossing.dates.length; i ++){
			for (key in flossing.dates[i]){
			sum += flossing.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) mark = "bad";
		if (result >= 1) mark = "good";
		$.jStorage.set("flossing_statistics",mark);
		oralhygiene ();
	}	
});

function oralhygiene (){

		if($.jStorage.get("flossing_statistics")=="good" && $.jStorage.get("brushing_statistics")=="good" ){
					$.jStorage.set("oral_hygiene_statistics", "good"); achwar ("Oral hygiene", "ach");
					if ($.jStorage.get("fluoride_paste_otc_th")=="true") $.jStorage.set("fluoride_paste_otc_th_statistics", "good");
					if ($.jStorage.get("fluoride_paste_5000_th")=="true") $.jStorage.set("fluoride_paste_5000_th_statistics", "good");
		}else{
					$.jStorage.set("oral_hygiene_statistics", "bad"); achwar ("Oral hygiene", "war");	
					if ($.jStorage.get("fluoride_paste_otc_th")=="true") $.jStorage.set("fluoride_paste_otc_th_statistics", "bad");
					if ($.jStorage.get("fluoride_paste_5000_th")=="true") $.jStorage.set("fluoride_paste_5000_th_statistics", "bad");

	}
}

/* ====================================== xylitol statistics =======================================*/	
$.jStorage.listenKeyChange("xylitol_taken", function(){
	if ($.jStorage.get("xylitol_taken") != ""){
		var xylitol = JSON.parse($.jStorage.get("xylitol_taken"));
		var sum = 0;
		var days = xylitol.dates.length;
		for (var i = 0; i < xylitol.dates.length; i ++){
			for (key in xylitol.dates[i]){
			sum += xylitol.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 4){ mark = "bad"; achwar ("Xylitol statistics", "war");}
		if (result >= 4) { mark = "good";  achwar ("Xylitol statistics", "ach");}
		$.jStorage.set("xylitol_th_statistics",mark);
	}
});	



/* ====================================== chlorhexidine statistics =======================================*/	

$.jStorage.listenKeyChange("chlorhexidine_taken", function(){
	if ($.jStorage.get("chlorhexidine_taken") != ""){
		var object = JSON.parse($.jStorage.get("chlorhexidine_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad"; achwar ("chlorhexidine statistics", "war");}
		if (result >= 1) {mark = "good"; achwar ("chlorhexidine statistics", "ach");}
		$.jStorage.set("chlorhexidine_th_statistics",mark);
	}
});		
	
/* ====================================== fluoride mouthrinse statistics =======================================*/	

$.jStorage.listenKeyChange("fluoride_mouthrinse_taken", function(){
	if ($.jStorage.get("fluoride_mouthrinse_taken")!=""){
		var object = JSON.parse($.jStorage.get("fluoride_mouthrinse_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad"; achwar ("fluoride mouthrinse statistics", "war");}
		if (result >= 1) {mark = "good";  achwar ("fluoride mouthrinse statistics", "ach");}
		$.jStorage.set("fluoride_mouthrinse_th_statistics",mark);
	}
});		
	
	/* ====================================== fluoride mouthrinse  extra statistics =======================================*/	
	
$.jStorage.listenKeyChange("fluoride_mouthrinse_extra_taken", function(){
	if ($.jStorage.get("fluoride_mouthrinse_extra_taken")!=""){
		var object = JSON.parse($.jStorage.get("fluoride_mouthrinse_extra_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad";  achwar ("fluoride extra mouthrinse statistics", "war");}
		if (result >= 1) {mark = "good";  achwar ("fluoride extra mouthrinse statistics", "ach");}
		$.jStorage.set("fluoride_mouthrinse_extra_th_statistics",mark);
	}
});	

		/* ====================================== fluoride mouthrinse  xerostomia statistics ==============================*/
		
$.jStorage.listenKeyChange("fluoride_mouthrinse_xerostomia_taken", function(){		
	if ($.jStorage.get("fluoride_mouthrinse_xerostomia_taken")!=""){
		var object = JSON.parse($.jStorage.get("fluoride_mouthrinse_xerostomia_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad";  achwar ("fluoride mouthrinse for dry mouth statistics", "war");}
		if (result >= 1) {mark = "good"; achwar ("fluoride mouthrinse for dry mouth statistics", "ach");}
		$.jStorage.set("fluoride_mouthrinse_xerostomia_th_statistics",mark);
	}
});	
	
		/* ====================================== cap statistics =======================================*/
		
$.jStorage.listenKeyChange("cap_taken", function(){		
	if ($.jStorage.get("cap_taken")!=""){
		var object = JSON.parse($.jStorage.get("cap_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 2) {mark = "bad"; achwar ("calcium phosphate paste statistics", "war");}
		if (result >= 2) {mark = "good"; achwar ("calcium phosphate paste statistics", "ach");}
		$.jStorage.set("cap_th_statistics",mark);
	}
});		

		/* ====================================== ph therapy statistics =======================================*/

$.jStorage.listenKeyChange("ph_taken", function(){			
	if ($.jStorage.get("ph_taken")!=""){
		var object = JSON.parse($.jStorage.get("ph_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad"; achwar ("baking soda solution statistics", "war");}
		if (result >= 1) {mark = "good"; achwar ("baking soda solution statistics", "ach");}
		$.jStorage.set("ph_th_statistics",mark);
	}	
});		

	
		/* ====================================== ph gum therapy statistics =======================================*/

$.jStorage.listenKeyChange("phgum_taken", function(){		
	if ($.jStorage.get("phgum_taken")!=""){
		var object = JSON.parse($.jStorage.get("phgum_taken"));
		var sum = 0;
		var days = object.dates.length;
		for (var i = 0; i < object.dates.length; i ++){
			for (key in object.dates[i]){
			sum += object.dates[i][key];
			}
		}
		var result = sum / days;
		var mark;
		if (result < 1) {mark = "bad"; achwar ("baking soda gum statistics", "war");}
		if (result >= 1) {mark = "good"; achwar ("baking soda gum statistics", "ach");}
		$.jStorage.set("phgum_th_statistics",mark);
	}	
	
});



		/* ====================================== achievements/warnings =======================================	*/
	
	function achwar (string, mark){
	
		var achievements = $.jStorage.get("achievements");
		var warnings = $.jStorage.get("warnings");
		
		if (mark == "ach"){
			if(achievements.indexOf(string) == -1) achievements.push(string);
			if(warnings.indexOf(string) != -1)	warnings.splice(warnings.indexOf(string),1);
		} else {
			if(achievements.indexOf(string) != -1) achievements.splice(warnings.indexOf(string),1);
			if(warnings.indexOf(string) == -1)	warnings.push(string);
		}	
		
		$.jStorage.set("achievements", achievements);
		$.jStorage.set("warnings", warnings);
	}
	

	
	/* ============================ RISK LEVEL DETERMINATION ================ */	
	
function riskLevel() {

		diseaseIndicatorsArray = ["visible_cavities", "radiographic", "white_spots", "last_3_years"];
		riskFactorsArray = ["ms_lb", "visible_plaque", "frequent_snack", "pits_and_fissures", "drug_use", "inadequate_saliva", "saliva_reducing_factors", "exposed_roots", "orthodontic_appliances"];
		protectiveFactorsArray = ["fluoridated_community", "fluoride_paste_once", "fluoride_paste_twice", "fluoride_mouthrinse", "fluoride_5000", "fluoride_varnish", "topical_fluoride", "chlorhexidine", "xylitol", "tooth_mousse", "adequate_saliva"];


		var risk_level = "";

		
		var disease_count = 0;
		var risk_count = 0;
		var protective_count = 0;
		
		 for (var a=0; a < diseaseIndicatorsArray.length; a++){
			if ($.jStorage.get(diseaseIndicatorsArray[a]) == "true"){
			disease_count = disease_count + 1;
			}
		 }
		 
		for (var b=0; b < riskFactorsArray.length; b++){
			if ($.jStorage.get(riskFactorsArray[b]) == "true"){
			risk_count = risk_count + 1;
			}
		} 
		
		for (var i=0; i < protectiveFactorsArray.length; i++){
			if ($.jStorage.get(protectiveFactorsArray[i]) == "true"){
			protective_count = protective_count + 1;
			}
		} 

		if (disease_count != 0){
			risk_level = "high";
			achwar ("Caries risk level","war");
		} else {
			if (risk_count > protective_count){
				risk_level = "high";
				achwar ("Caries risk level","war");
				
			}else if (risk_count == protective_count){
				risk_level = "moderate";
			}else {
				risk_level = "low";
				achwar ("Caries risk level","ach");
			}
		}
		

		$.jStorage.set("disease_count", disease_count);
		$.jStorage.set("risk_count", risk_count);
		$.jStorage.set("protective_count", protective_count);	
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
	
