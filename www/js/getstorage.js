$(function (){

	ls=["firstname", "lastname", "age", "gender",
	"visible_cavities", "radiographic", "white_spots","last_3_years",
	"ms_lb", "visible_plaque", "frequent_snack", "pits_and_fissures", "drug_use", "inadequate_saliva","saliva_reducing_factors", "exposed_roots", "orthodontic_appliances",
	"fluoridated_community", "fluoride_paste_once", "fluoride_paste_twice", "fluoride_mouthrinse", "fluoride_5000", "fluoride_varnish", "topical_fluoride","chlorhexidine", "xylitol", "tooth_mousse", "adequate_saliva",
	"recallExam",
	"chlorhexidine_th", "xylitol_th",
	"fluoride_paste_otc_th", "fluoride_paste_5000_th", "fluoride_mouthrinse_th", "fluoride_mouthrinse_extra_th", "fluoride_mouthrinse_xerostomia_th",
	"ph_th", "phgum_th",
	"cap_th",
	

	
	"snack_taken", "teeth_brushing_done", "teeth_flossing_done", "xylitol_taken", "chlorhexidine_taken", "fluoride_mouthrinse_taken","fluoride_mouthrinse_extra_taken", "fluoride_mouthrinse_xerostomia_taken", "cap_taken", "ph_taken","phgum_taken",
	
	"disease_count", "risk_count", "protective_count","risk_level", 
	
	"snack_statistics", "brushing_statistics","flossing_statistics", "oral_hygiene_statistics", "xylitol_th_statistics", "chlorhexidine_th_statistics", "fluoride_paste_otc_th_statistics", "fluoride_paste_5000_th_statistics", "fluoride_mouthrinse_th_statistics", "fluoride_mouthrinse_extra_th_statistics", "fluoride_mouthrinse_xerostomia_th_statistics", "cap_th_statistics", "ph_th_statistics", "phgum_th_statistics",
	
	"to_do","track", "as_needed", "tracking_day",
	"submit_form","submit_form_status"];

	values=["","","","",
	"false","false","false","false",
	"false","false","false","false","false","false","false","false","false",
	"false","false","false","false","false","false","false","false","false","false","false",
	"",
	"false","false",
	"false","false","false","false","false",
	"false","false",
	"false",
	

	
	"","","","","","","","","","","",
	
	"0","0","0","undefined",
	
	"undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined",
	[], ["teeth_brushing","teeth_flossing"], [], "",
	"submit", "submit"];

	for(var i=0; i < ls.length; i++){
		if($.jStorage.get(ls[i]) == null){
			$.jStorage.set(ls[i],values[i]);	
		}else{
			$.jStorage.set(ls[i],$.jStorage.get(ls[i]));
		}
	}


	
/*======================= Registration dates setup ======================*/	

	activities = ["snack_taken", "teeth_brushing_done", "teeth_flossing_done", "xylitol_taken", "chlorhexidine_taken", "fluoride_mouthrinse_taken","fluoride_mouthrinse_extra_taken", "fluoride_mouthrinse_xerostomia_taken", "cap_taken", "ph_taken","phgum_taken",
	];
	
	var today = Date.today();
	
	for (i = 0; i < activities.length; i++){
		if ($.jStorage.get("last_"+activities[i]) != null && $.jStorage.get("last_"+activities[i]) != "" ){
			var last = Date.parseExact($.jStorage.get("last_"+activities[i]),"dd.MM.yyyy");
			last = last.add(1).days();

			while(last.compareTo(today) == -1){
				
				registration_missed (activities[i], last.toString("dd.MM.yyyy"));
				
				$.jStorage.set("last_"+activities[i], last.toString("dd.MM.yyyy"));
				
				last = last.add(1).days();
			}
		}
		
	}
	

/*======================= Registration dates setup ======================	*/	



		

	var track = $.jStorage.get("track");
	var as_needed = $.jStorage.get("as_needed");
	var output = '<li data-role="list-divider">Every day:</li>';
	for (var i =0; i < track.length; i++){
		var string;
		if (track[i] == "teeth_brushing") string = 'Brush your teeth: <span id="teeth_brushing_count"></span>';
		if (track[i] == "teeth_flossing") string = 'Floss your teeth: <span id="teeth_flossing_count"></span>';
		if (track[i] == "chlorhexidine_th") string = 'Use chlorhexidine solution: <span id="chlorhexidine_count"></span>';
		if (track[i] == "xylitol_th") string = 'Eat xylitol candy: <span id="xylitol_count"></span>';
		if (track[i] == "fluoride_mouthrinse_th") string = 'Use standard fluoride mouthrinse: <span id="fluoride_mouthrinse_count"></span>';
		if (track[i] == "fluoride_mouthrinse_extra_th") string = 'Use 0,2% fluoride mouthrinse: <span id="fluoride_mouthrinse_extra_count"></span>';
		if (track[i] == "cap_th") string = 'Use Calcium phopsphate paste: <span id="cap_count"></span>';
		output = output + "<li>"+string+"</li>";
	}
	output = output + '<li data-role="list-divider">As needed:</li>';
	if (as_needed != null){
			for (var i =0; i < as_needed.length; i++){
					if (as_needed[i] == "fluoride_mouthrinse_xerostomia_th") string = 'Rinse mouth with fluoride rinse when mouth feels dry';
					if (as_needed[i] == "ph_th") string = 'Rinse mouth with baking soda solution when mouth feels dry';
					if (as_needed[i] == "phgum_th") string = 'Chew baking soda gum when mouth feels dry';
			output = output + "<li>"+string+"</li>";
			}
	} else {
		output = output + "<li>empty</li>";
	}		
	$("#to_do_list").html(output);
	$("#to_do_count").html(track.length);
	


		if($.jStorage.get("tracking_day") != Date.today().toString("dd.MM.yyyy")){
			var track = $.jStorage.get("track");
			var to_do = [];
			for (var i = 0; i < track.length; i++ ){
			
				if (track[i]=="teeth_brushing"){
					to_do.push("teeth_brushing_done");
					to_do.push("teeth_brushing_done");
				}
				if (track[i]=="teeth_flossing"){
					to_do.push("teeth_flossing_done");
				}
				if (track[i]=="chlorhexidine_th"){
					to_do.push("chlorhexidine_taken");
				}	
				if (track[i]=="xylitol_th"){
					to_do.push("xylitol_taken");
					to_do.push("xylitol_taken");
					to_do.push("xylitol_taken");
					to_do.push("xylitol_taken");
				}
				if (track[i]=="fluoride_mouthrinse_th"){
					to_do.push("fluoride_mouthrinse_taken");
				}
				if (track[i]=="fluoride_mouthrinse_extra_th"){
					to_do.push("fluoride_mouthrinse_extra_taken");
				}
				if (track[i]=="cap_th"){
					to_do.push("cap_taken");
					to_do.push("cap_taken");
				}
			}
			$.jStorage.set("to_do", to_do);
			$.jStorage.set("tracking_day", Date.today().toString("dd.MM.yyyy"));
			
			$.jStorage.set("snack_count",0);
		} else {
		
		$.jStorage.set("to_do", $.jStorage.get("to_do"));
		$.jStorage.set("snack_count",$.jStorage.get("snack_count"));
		}
		
		
		
		listOutput();	
});

	
		
		
	
		
		
		
		
		
		
		
		
