function registration (activity){
	var datum = new Date ();
	var day = datum.getDate(); if (day < 10) { day = "0" + day; }
	var month = datum.getMonth() + 1; if (month < 10) { month = "0" + month; }

	var date_of_registration = day + "." + month + "." + datum.getFullYear();

	console.log(date_of_registration)
	if ($.jStorage.get(activity) != null && $.jStorage.get(activity) != "" ){	

		var json_object = JSON.parse($.jStorage.get(activity));
		
		for ( var i = 0; i < json_object.dates.length; i++){
			
			if (json_object.dates[i][date_of_registration]){
				
				json_object.dates[i][date_of_registration] +=1;
				
			}else {
				
				json_object.dates[i][date_of_registration] =1;
			}			
		}

		/*$.jStorage.set(activity, JSON.stringify(json_object));*/
		$.jStorage.set(activity,JSON.stringify(json_object));
		
	} else {
	var json_object = {dates : [{}]};
	json_object.dates[0][date_of_registration] =1;

	/*$.jStorage.set(activity, JSON.stringify(json_object));*/
	$.jStorage.set(activity, JSON.stringify(json_object));
}	
	
	
	
/*	var item = activity + " " + day + "." + month + "." + datum.getFullYear();
	if ($.jStorage.get(item) != null && $.jStorage.get(item) != "" ){
		var value = parseInt($.jStorage.get(item));
		value += 1;
		$.jStorage.set(item, value);
	} else {
		$.jStorage.set(item, "1");
	}
		listOutput();

*/	
		alert("Registered.");
		return false;
}
