function registration (activity){
	var datum = new Date ();
	var day = datum.getDate(); if (day < 10) { day = "0" + day; }
	var month = datum.getMonth() + 1; if (month < 10) { month = "0" + month; }

	var date_of_registration = day + "." + month + "." + datum.getFullYear();

	if ($.jStorage.get(activity) != null && $.jStorage.get(activity) != "" ){	

		var object = JSON.parse($.jStorage.get(activity));
		
		for ( var i = 0; i < object.dates.length; i++){
			
			if (object.dates[i][date_of_registration]){
				
				object.dates[i][date_of_registration] +=1;
				
			}else {
				
				object.dates[i][date_of_registration] =1;
			}			
		}

		/*$.jStorage.set(activity, JSON.stringify(json_object));*/
		$.jStorage.set(activity,JSON.stringify(object));
		
	} else {
	var object = {dates : [{}]};
	object.dates[0][date_of_registration] =1;

	/*$.jStorage.set(activity, JSON.stringify(json_object));*/
	$.jStorage.set(activity, JSON.stringify(object));
}	
	
		alert("Registered.");
		return false;
}
