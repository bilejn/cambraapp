function timer (interval){
	window.plugins.insomnia.keepAwake();
	$("#timer-button").addClass('ui-disabled');
	var secTrue= interval;
	var sec;
	var min;
	var zero;
	
function delayedLoop(){
	min = Math.floor(secTrue / 60);
	sec = secTrue % 60;


	$("#timer").html(pad2(min)+":"+pad2(sec));
	secTrue = secTrue - 1;

	if (secTrue<0) { 
	$("#timer").html("00:00");
	registration("teeth_brushing_done");
	$("#timer-button").removeClass('ui-disabled'); 
	$("#timer").html("02:00");
	window.plugins.insomnia.allowSleepAgain();
	return; 
	}
	window.setTimeout(delayedLoop, 1000);
}
delayedLoop();
			
}

function pad2(n){

  return n < 10 ? '0' + n : n;
  
}