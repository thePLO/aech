document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Agrupament</a></li>" +
"<li><a href='1_castors.html'>C/LL</a></li>" +
"<li><a href='2_llops.html'>LL/D</a></li>" +
"<li><a href='3_rangers.html'>R/G</a></li>" +
"<li><a href='4_pioners.html'>P/C</a></li>" +
"<li><a href='5_rovers.html'>R</a></li>" +
"<li><a href='6_kraal.html'>Kraal</a></li>" +
"</ul>";

//submenus
//index
if(document.getElementById("navI2")){
	document.getElementById("navI2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='index.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(0)'>Xarxes</a></li>" +
	"<li><a href='index.html'>Inscripcions</a></li>" +
	"<li><a href='index.html'>Comissió de Pares</a></li>" +
	"<li><a href='index.html'>Històric de Fotos</a></li>" +
	"</ul>";
}
//index
if(document.getElementById("navC2")){
	document.getElementById("navC2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='1_castors.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(1)'>Calendari</a></li>" +
	"<li><a href='1_castors.html'>Objectius</a></li>" +
	"<li><a href='1_castors.html'>Monitors</a></li>" +
	"<li><a href='1_castors.html'>Fotos i Video</a></li>" +
	"</ul>";
}
//index
if(document.getElementById("navL2")){
	document.getElementById("navL2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='2_llops.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(2)'>Calendari</a></li>" +
	"<li><a href='2_llops.html'>Objectius</a></li>" +
	"<li><a href='2_llops.html'>Monitors</a></li>" +
	"<li><a href='2_llops.html'>Fotos i Video</a></li>" +
	"</ul>";
}
//index
if(document.getElementById("navr2")){
	document.getElementById("navr2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='3_rangers.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(3)'>Calendari</a></li>" +
	"<li><a href='3_rangers.html'>Objectius</a></li>" +
	"<li><a href='3_rangers.html'>Monitors</a></li>" +
	"<li><a href='3_rangers.html'>Fotos i Video</a></li>" +
	"</ul>";
}
if(document.getElementById("navP2")){
	document.getElementById("navP2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='4_pioners.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(4)'>Calendari</a></li>" +
	"<li><a href='4_pioners.html'>Objectius</a></li>" +
	"<li><a href='4_pioners.html'>Monitors</a></li>" +
	"<li><a href='4_pioners.html'>Fotos i Video</a></li>" +
	"</ul>";
}
//index
if(document.getElementById("navR2")){
	document.getElementById("navR2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='5_rovers.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='change2Calendari(5)'>Calendari</a></li>" +
	"<li><a href='5_rovers.html'>Objectius</a></li>" +
	"<li><a href='5_rovers.html'>Monitors</a></li>" +
	"<li><a href='5_rovers.html'>Fotos i Video</a></li>" +
	"</ul>";
}
//index
if(document.getElementById("navK2")){
	document.getElementById("navK2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='6_kraal.html'>Monitors</a></li>" +
	"<li><a href='6_kraal.html'>Dades Banc</a></li>" +
	"<li><a href='6_kraal.html'>Càrrecs</a></li>" +
	"<li><a href='6_kraal.html'>Enllaços</a></li>" +
	"<li><a href='6_kraal.html'>S.A.P.</a></li>" +
	"</ul>";
}

//functions per canviar text
change2Calendari = function(branca){
	if (branca==0){
		document.getElementById("text").innerHTML =
		"<h2>Xarxes</h2>"+
		"<div id='Html1' style='width:377px;height:322px;'>"+
		"<a class='twitter-timeline' data-dnt='true' href='https://twitter.com/aechampagnat'  data-widget-id='379676643125510144'>Tweets de @aechampagnat</a>"+
		"<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>"+
		"</div>";
	}else if (branca==1){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}else if (branca==2){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}else if (branca==3){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}else if (branca==4){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}else if (branca==5){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}else if (branca==6){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<ul>"+
		"  <li>Coffee</li>"+
		"  <li>Tea</li>"+
		"  <li>Milk</li>"+
		"</ul>";
	}

}	