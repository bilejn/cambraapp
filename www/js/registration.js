function registration (activity){
	var datum = new Date ();
	var day = datum.getDate(); if (day < 10) { day = "0" + day; }
	var month = datum.getMonth() + 1; if (month < 10) { month = "0" + month; }
	var item = activity + " " + day + "." + month + "." + datum.getFullYear();
	if (window.localStorage.getItem(item) != undefined && window.localStorage.getItem(item) != "" ){
		var value = parseInt(window.localStorage.getItem(item));
		value += 1;
		window.localStorage.setItem(item, value);
	} else {
			window.localStorage.setItem(item, "1");
	}
		window.location.reload(true);
		return false;
}