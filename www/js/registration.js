function registration (activity){
	
	var date_of_registration = Date.today().toString("dd.MM.yyyy");
	
	if ($.jStorage.get(activity) != "" ){	

		var object = JSON.parse($.jStorage.get(activity));
		var found;
		for ( var i = 0; i < object.dates.length; i++){

			for (name in object.dates[i]){
			
				if (date_of_registration == name){
					
					object.dates[i][name] += 1;
					found = true;
				}			
			}
		}
		
		if (!found){
			var new_obj = {};
			new_obj[date_of_registration] = 1;
			object.dates.push(new_obj);
		}
		
		$.jStorage.set(activity,JSON.stringify(object));
		
	} else {
			var object = {dates : [{}]};
			object.dates[0][date_of_registration] =1;

			$.jStorage.set(activity, JSON.stringify(object));
	}	

		last = "last_"+activity;
		$.jStorage.set(last, date_of_registration);
		
		alert("Registered.");
		return false;
}

function registration_missed (activity, date_of_registration){

	var object = JSON.parse($.jStorage.get(activity));
	var new_obj = {};
	new_obj[date_of_registration] = 0;

	object.dates.push(new_obj);
	
	$.jStorage.set(activity, JSON.stringify(object));

	return 	false;
}