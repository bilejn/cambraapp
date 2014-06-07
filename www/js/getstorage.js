

      $("document").ready(function (){
		 if (window.localStorage.getItem("xylitol_th") == "true"){
			$("#xylitol_button").removeAttr("style");
		 }
		 
		 if (window.localStorage.getItem("chlorhexidine_th") == "true"){
			$("#chlorhexidine_button").removeAttr("style");
		 }
      });