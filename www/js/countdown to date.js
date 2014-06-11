var deadline = new Date (window.localStorage.getItem("recallExam"));
		var before="next dental visit.";
		var current="You should visit your dentist today.";
		var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

		function countdown(yr,m,d){
		var today=new Date()
		var todayy=today.getYear()
		if (todayy < 1000)
		todayy+=1900
		var todaym=today.getMonth()
		var todayd=today.getDate()
		var todaystring=montharray[todaym]+" "+todayd+", "+todayy
		var futurestring=montharray[m]+" "+d+", "+yr
		var difference=(Math.round((Date.parse(futurestring)-Date.parse(todaystring))/(24*60*60*1000))*1)
		if (difference==0)
		$("#time").html(current);
		else if (difference>0)
		$("#time").html("You have "+difference+" days until "+before);
		}
		//enter the count down date using the format year/month/day
		countdown(deadline.getFullYear(), dedline.getMonth(), deadline.getDay());