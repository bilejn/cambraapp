function registration (activity){
	var datum = new Date ();
	var day = datum.getDate(); if (day < 10) { day = "0" + day; }
	var month = datum.getMonth() + 1; if (month < 10) { month = "0" + month; }

	var item = activity + " " + day + "." + month + "." + datum.getFullYear();
	if ($.jStorage.get(item) != null && $.jStorage.get(item) != "" ){
		var value = parseInt($.jStorage.get(item));
		value += 1;
		$.jStorage.set(item, value);
	} else {
		$.jStorage.set(item, "1");
	}
		listOutput();

		
		alert("Registered.");
		return false;
}