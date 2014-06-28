function timer (){
	
	i=0;
	document.getElementById("timer-button").onclick="";
	var TeethBrushingTimer = setInterval(function(){
	
			document.getElementById("timer").style.width=i+"%";
			i=i+1;
			if (i==100){
				registration('teeth_brushing_done'); 
				document.getElementById("timer-button").onclick="timer()";
				clearInterval(TeethBrushingTimer);
				i=0;
			}

	},100)
			

}
