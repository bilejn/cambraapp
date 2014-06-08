function fForm() {
	
		if (document.myForm.checkbutton1.checked == true){
			if (!window.localStorage.button1)
			window.localStorage.setItem("button1", "true");
			window.localStorage.setItem("buttons") = Number(window.localStorage.getItem("buttons")) + 1;
		} else {
			if (window.localStorage.button1)
			window.localStorage.removeItem("button1");
			window.localStorage.setItem("buttons") = Number(window.localStorage.getItem("buttons")) - 1;
		}
		
		if (document.myForm.checkbutton2.checked == true){
			if (!window.localStorage.button2)
			window.localStorage.setItem("button2", "true");
			window.localStorage.setItem("buttons") = Number(window.localStorage.getItem("buttons")) + 1;
		} else {
			if (window.localStorage.button2)
			window.localStorage.removeItem("button2");
			window.localStorage.setItem("buttons") = Number(window.localStorage.getItem("buttons")) - 1;
		}
	
		alert("submitted");
		window.location.reload(true);
		return false;
	}
	
	
	$(function (){

		if (window.localStorage.button1){
			$("#button1").show();
		 } else {
			$("#button1").hide();
		 }

		 if (window.localStorage.button2){
			$("#button2").show();
		 } else {
			$("#button2").hide();
		 }
		 
		 $("#count").html(window.localStorage.getItem("buttons"));
    });
	