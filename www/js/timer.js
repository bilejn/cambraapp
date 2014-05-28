function timer (){
	
	i=0;
	alert("press OK when ready.");
	document.getElementById("timer-button").onclick="";
	var TeethBrushingTimer = setInterval(function(){
	
			document.getElementById("timer").style.width=i+"%";
			i=i+1;
			if (i==100){
				alert("finished!");
				clearInterval(TeethBrushingTimer);
				document.getElementById("timer-button").onclick="timer()";
			}
		
		
	},1000)
	
	
}
