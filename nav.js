//calendaris
var defaultMes = 1;
var dadesCal=[
	[//castors
		[//1
			[//octubre
				["x-x","castors Activitat de matí11"],["x-x","Activitat de matí12"],["x-x","Activitat de matí13"],["x-x","Activitat de matí14"],["x-x","Activitat de matí15"]],
			[//novembre
				["x-x","Activitat de matí21"],["x-x","Activitat de matí22"],["x-x","Activitat de matí23"],["x-x","Activitat de matí24"],["x-x","Activitat de matí25"]],
			[//desembre
				["x-x","Activitat de matí31"],["x-x","Activitat de matí23"],["x-x","Activitat de matí33"],["x-x","Activitat de matí34"],["x-x","Activitat de matí35"]]],
		[//2
			[//gener
				["x-x","Activitat de matí11"],["x-x","Activitat de matí12"],["x-x","Activitat de matí13"],["x-x","Activitat de matí14"],["x-x","Activitat de matí15"]],
			[//febrer
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","4 febrer"],["x-x","Activitat de matí"]],
			[//març
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//3
			[//abril
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//maig
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//juny
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Campaments"]]]
	],[//llops
		[//1
			[//octubre
				["x-x","llops Activitat de matí11"],["x-x","Activitat de matí12"],["x-x","Activitat de matí13"],["x-x","Activitat de matí14"],["x-x","Activitat de matí15"]],
			[//novembre
				["x-x","Activitat de matí21"],["x-x","Activitat de matí22"],["x-x","Activitat de matí23"],["x-x","Activitat de matí24"],["x-x","Activitat de matí25"]],
			[//desembre
				["x-x","Activitat de matí31"],["x-x","Activitat de matí23"],["x-x","Activitat de matí33"],["x-x","Activitat de matí34"],["x-x","Activitat de matí35"]]],
		[//2
			[//gener
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//febrer
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//març
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//3
			[//abril
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//maig
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//juny
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Campaments"]]]
	],[//ràngers
		[//1
			[//octubre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//novembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//desembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//2
			[//gener
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//febrer
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//març
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//3
			[//abril
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//maig
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//juny
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Campaments"]]]
	],[//pios
		[//1
			[//octubre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//novembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//desembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//2
			[//gener
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//febrer
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//març
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//3
			[//abril
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//maig
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//juny
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Campaments"]]]
	],[//róvers
		[//1
			[//octubre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//novembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//desembre
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//2
			[//gener
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//febrer
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//març
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]]],
		[//3
			[//abril
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//maig
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"]],
			[//juny
				["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Activitat de matí"],["x-x","Campaments"]]]
	]
];
//<i class='fa fa-file-pdf-o'></i> PDF
//<i class='fa fa-info-circle'></i> INFO
//<i class='fa fa-calendar-check-o'></i> CAL

function setCal(b,n){
	for(var i = 0;i<3;i++){
		document.getElementById("ssm_"+(i+1)+"t").className = "";
	}
	document.getElementById("Cal").innerHTML = getCal(b,n);
	document.getElementById("ssm_"+n+"t").className = "active";
}
function getCal(b,n){

	var calendari;
	if(n==1) calendari = "<tr><th colspan='2' id='mesos'>OCTUBRE</th><th colspan='2' id='mesos'>NOVEMBRE</th><th colspan='2' id='mesos'>DESEMBRE</th></tr>";
	else if(n==2) calendari = "<tr><th colspan='2' id='mesos'>GENER</th><th colspan='2' id='mesos'>FEBRER</th><th colspan='2' id='mesos'>MARÇ</th></tr>";
	else calendari = "<tr><th colspan='2' id='mesos'>ABRIL</th><th colspan='2' id='mesos'>MAIG</th><th colspan='2' id='mesos'>JUNY</th></tr>";
	
	calendari += 
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][0][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][0][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][0][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][0][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][2][0][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][0][1]+"</td></tr>"+
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][1][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][1][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][1][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][1][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][2][1][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][1][1]+"</td></tr>"+
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][2][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][2][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][2][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][2][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][2][2][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][2][1]+"</td></tr>"+
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][3][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][3][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][3][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][3][1]+"</td>";
	if(n<3){
		calendari += 
			"<td id='dia'>"+dadesCal[b-1][n-1][2][3][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][3][1]+"</td></tr>"+
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][4][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][4][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][2][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][4][1]+"</tr>";
	}else{
		calendari += 
			"<th colspan='2' id='mesos'>JULIOL</th></tr>"+
		"<tr><td id='dia'>"+dadesCal[b-1][n-1][0][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][0][4][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][1][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][1][4][1]+"</td>"+
			"<td id='dia'>"+dadesCal[b-1][n-1][2][4][0]+"</td><td id='activitat'>"+dadesCal[b-1][n-1][2][4][1]+"</tr>";
	}
	return calendari;
}
//menu
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a id='m_in' href='../index.html'>AECH</a></li>" +
"<li><a id='m_ca' href='../castors/qui_som.html'>C/LL</a></li>" +
"<li><a id='m_ll' href='../llops/qui_som.html'>LL/D</a></li>" +
"<li><a id='m_ra' href='../rangers/qui_som.html'>R/G</a></li>" +
"<li><a id='m_pi' href='../pioners/qui_som.html'>P/C</a></li>" +
"<li><a id='m_ro' href='../rovers/qui_som.html'>R</a></li>" +
"<li><a id='m_kr' href='../kraal/monitors.html'>Kraal</a></li>" +
"</ul>";
//submenus
//castors
if(document.getElementById("navC2")){
	document.getElementById("navC2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../castors/qui_som.html'>Qui som?</a></li>" +
	"<li><a href='../castors/calendari.html'>Calendari</a></li>" +
	"<li><a href='../castors/objectius.html'>Objectius</a></li>" +
	"<li><a href='../castors/monitors.html'>Monitors</a></li>" +
	"<li><a href='../castors/media.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navCC")){
	document.getElementById("navCC").innerHTML =
	"<ul id='ssubmenu'>" +
	"<li><a id='ssm_1t' href='javascript:setCal(1,1);'>1er Trimestre</a></li>" +
	"<li><a id='ssm_2t' href='javascript:setCal(1,2);'>2on Trimestre</a></li>" +
	"<li><a id='ssm_3t' href='javascript:setCal(1,3);'>3er Trimestre</a></li>" +
	"</ul>";
	setCal(1,defaultMes);
}
//llops
if(document.getElementById("navL2")){
	document.getElementById("navL2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../llops/qui_som.html'>Qui som?</a></li>" +
	"<li><a href='../llops/calendari.html'>Calendari</a></li>" +
	"<li><a href='../llops/objectius.html'>Objectius</a></li>" +
	"<li><a href='../llops/monitors.html'>Monitors</a></li>" +
	"<li><a href='../llops/media.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navLC")){
	document.getElementById("navLC").innerHTML =
	"<ul id='ssubmenu'>" +
	"<li><a id='ssm_1t' href='javascript:setCal(2,1);'>1er Trimestre</a></li>" +
	"<li><a id='ssm_2t' href='javascript:setCal(2,2);'>2on Trimestre</a></li>" +
	"<li><a id='ssm_3t' href='javascript:setCal(2,3);'>3er Trimestre</a></li>" +
	"</ul>";
	setCal(2,defaultMes);
}
//ran
if(document.getElementById("navr2")){
	document.getElementById("navr2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../rangers/qui_som.html'>Qui som?</a></li>" +
	"<li><a href='../rangers/calendari.html'>Calendari</a></li>" +
	"<li><a href='../rangers/objectius.html'>Objectius</a></li>" +
	"<li><a href='../rangers/monitors.html'>Monitors</a></li>" +
	"<li><a href='../rangers/media.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navrC")){
	document.getElementById("navrC").innerHTML =
	"<ul id='ssubmenu'>" +
	"<li><a id='ssm_1t' href='javascript:setCal(3,1);'>1er Trimestre</a></li>" +
	"<li><a id='ssm_2t' href='javascript:setCal(3,2);'>2on Trimestre</a></li>" +
	"<li><a id='ssm_3t' href='javascript:setCal(3,3);'>3er Trimestre</a></li>" +
	"</ul>";
	setCal(3,defaultMes);
}
//pios
if(document.getElementById("navP2")){
	document.getElementById("navP2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../pioners/qui_som.html'>Qui som?</a></li>" +
	"<li><a href='../pioners/calendari.html'>Calendari</a></li>" +
	"<li><a href='../pioners/objectius.html'>Objectius</a></li>" +
	"<li><a href='../pioners/monitors.html'>Monitors</a></li>" +
	"<li><a href='../pioners/media.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navPC")){
	document.getElementById("navPC").innerHTML =
	"<ul id='ssubmenu'>" +
	"<li><a id='ssm_1t' href='javascript:setCal(4,1);'>1er Trimestre</a></li>" +
	"<li><a id='ssm_2t' href='javascript:setCal(4,2);'>2on Trimestre</a></li>" +
	"<li><a id='ssm_3t' href='javascript:setCal(4,3);'>3er Trimestre</a></li>" +
	"</ul>";
	setCal(4,defaultMes);
}
//ro
if(document.getElementById("navR2")){
	document.getElementById("navR2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../rovers/qui_som.html'>Qui som?</a></li>" +
	"<li><a href='../rovers/calendari.html'>Calendari</a></li>" +
	"<li><a href='../rovers/objectius.html'>Objectius</a></li>" +
	"<li><a href='../rovers/consellers.html'>Monitors</a></li>" +
	"<li><a href='../rovers/media.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navRC")){
	document.getElementById("navRC").innerHTML =
	"<ul id='ssubmenu'>" +
	"<li><a id='ssm_1t' href='javascript:setCal(5,1);'>1er Trimestre</a></li>" +
	"<li><a id='ssm_2t' href='javascript:setCal(5,2);'>2on Trimestre</a></li>" +
	"<li><a id='ssm_3t' href='javascript:setCal(5,3);'>3er Trimestre</a></li>" +
	"</ul>";
	setCal(5,defaultMes);
}
//kraal
if(document.getElementById("navK2")){
	document.getElementById("navK2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='../kraal/monitors.html'>Monitors</a></li>" +
	"<li><a href='../kraal/dadesB.html'>Dades Banc</a></li>" +
	"<li><a href='../kraal/carrecs.html'>Càrrecs</a></li>" +
	"<li><a href='../kraal/links.html'>Enllaços</a></li>" +
	"<li><a href='../kraal/sap.html'>S.A.P.</a></li>" +
	"</ul>";
}
