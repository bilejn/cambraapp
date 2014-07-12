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
	
	"submit_form",
	
	"snack_taken", "teeth_brushing_done", "teeth_flossing_done", "xylitol_taken", "chlorhexidine_taken", "fluoride_mouthrinse_taken","fluoride_mouthrinse_extra_taken", "fluoride_mouthrinse_xerostomia_taken", "cap_taken", "ph_taken","phgum_taken",
	
	"disease_count", "risk_count", "protective_count","risk_level", 
	
	"snack_statistics", "brushing_statistics","flossing_statistics", "oral_hygiene_statistics", "xylitol_th_statistics", "chlorhexidine_th_statistics", "fluoride_paste_otc_th_statistics", "fluoride_paste_5000_th_statistics", "fluoride_mouthrinse_th_statistics", "fluoride_mouthrinse_extra_th_statistics", "fluoride_mouthrinse_xerostomia_th_statistics", "cap_th_statistics", "ph_th_statistics", "phgum_th_statistics",
	
	"achievements","warnings"];

	values=["","","","",
	"false","false","false","false",
	"false","false","false","false","false","false","false","false","false",
	"false","false","false","false","false","false","false","false","false","false","false",
	"",
	"false","false",
	"false","false","false","false","false",
	"false","false",
	"false",
	
	"submit",
	
	"","","","","","","","","","","",
	
	"0","0","0","undefined",
	
	"undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined","undefined",
	[],[]];

	for(var i=0; i < ls.length; i++){
		if($.jStorage.get(ls[i]) == null){
			$.jStorage.set(ls[i],values[i]);	
		}else{
			$.jStorage.set(ls[i],$.jStorage.get(ls[i]));
		}
	}

	listOutput();
	
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
	
	
});


