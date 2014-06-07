	$("document").ready(function (){
		
		if (window.localStorage.getItem("xylitol_th") == "true"){
			$("#xylitol_button").show();
		 } else {
			$("#xylitol_button").hide();
		 }
		 
		 if (window.localStorage.getItem("chlorhexidine_th") == "true"){
			$("#chlorhexidine_button").show();
		 } else {
			$("#chlorhexidine_button").hide();
		 }
    });

     