    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
		  function onDeviceReady() {
        // Now safe to use the Cordova API

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
    }

     