	$(function (){
	
		if (window.localStorage.getItem("risk_level") == "low"){
			$("#low_risk").show();
		 } else {
			$("#low_risk").hide();
		 }
	
		if (window.localStorage.getItem("risk_level") == "moderate"){
			$("#moderate_risk").show();
		 } else {
			$("#moderate_risk").hide();
		 }

		if (window.localStorage.getItem("risk_level") == "high"){
			$("#high_risk").show();
		 } else {
			$("#high_risk").hide();
		 }		 
	
	
		if (window.localStorage.getItem("recallExam") != undefined && window.localStorage.getItem("recallExam") != ""){
			var deadline = new Date (window.localStorage.getItem("recallExam")) 
			$("#time").html("next dental visit: " + deadline.getDate()+"."+deadline.getMonth() + "." + deadline.getFullYear());
		 } else {
			$("#time").hide();
		 }	

	
		if (window.localStorage.getItem("recallExam") != undefined && window.localStorage.getItem("recallExam") != ""){
			var deadline = new Date (window.localStorage.getItem("recallExam")) 
			$("#time").html("next dental visit: " + deadline.getDate()+"."+deadline.getMonth() + "." + deadline.getFullYear());
		 } else {
			$("#time").hide();
		 }

		if (window.localStorage.getItem("xylitol_th") == "true"){
			$("#xylitol_button").show();
		 } else {
			$("#xylitol_button").hide();
		 }

		 if (window.localStorage.getItem("chlorhexidine_th") == "true"){
			$("#chlorhexidine_rinse").show();
		 } else {
			$("#chlorhexidine_rinse").hide();
		 }

		 if (window.localStorage.getItem("fluoride_paste_otc_th") == "true"){
			$("#fluoride_paste_otc").show();
		 } else {
			$("#fluoride_paste_otc").hide();
		 }
		 
		 if (window.localStorage.getItem("fluoride_paste_5000_th") == "true"){
			$("#fluoride_paste_5000").show();
		 } else {
			$("#fluoride_paste_5000").hide();
		 }
		 
		 if (window.localStorage.getItem("fluoride_mouthrinse_th") == "true"){
			$("#fluoride_mouthrinse_standard").show();
		 } else {
			$("#fluoride_mouthrinse_standard").hide();
		 }
		 
		if (window.localStorage.getItem("fluoride_mouthrinse_extra_th") == "true"){
			$("#fluoride_mouthrinse_extra").show();
		 } else {
			$("#fluoride_mouthrinse_extra").hide();
		 } 
		 
		 
		if (window.localStorage.getItem("fluoride_mouthrinse_xerostomia_th") == "true"){
			$("#fluoride_mouthrinse_xerostomia").show();
		 } else {
			$("#fluoride_mouthrinse_xerostomia").hide();
		 } 
		 
		 
		var output = ''; 
		for (var key in localStorage) {
			output = output+(key + ": " +localStorage[key])+"<br />";
			}
		$("#list_output").html(output);
    });
	

     