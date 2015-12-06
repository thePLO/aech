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
	"<li><a href='#' onClick='changeIndex(0)'>Xarxes</a></li>" +
	"<li><a href='#' onClick='changeIndex(1)'>Inscripcions</a></li>" +
	"<li><a href='#' onClick='changeIndex(2)'>Comissió de Pares</a></li>" +
	"<li><a href='#' onClick='changeIndex(3)'>Històric de Fotos</a></li>" +
	"</ul>";
}
changeIndex = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Xarxes</h2>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Inscripcions</h2>"+
		"<p>Si et vols inscriure a l\'Agrupament l\'únic que has de fer es portar-nos emplenada, la inscripció (Botó de la dreta Inscripció General).</p>"+
		"<p>Per portar-ho ho pots fer entre setmana de 17.30 a 18.15 fins a l'octubre i després dissabtes de 10h a 13h. O en cas de que et fos molt complicat ho pots deixar a la recepció a l'atenció de l'Agrupament.</p>"+
		"<p>Castors - 3r i 4t de Primària.<br>"+
		"Llops - 5è i 6è de Primària.<br>"+
		"Ràngers - 1r i 2n d\'ESO.<br>"+
		"Pioners - 3r i 4t d\'ESO i 1r de Batxillerat.<br>"+
		"Róvers - a partir de 2n de Batxillerat.</p>"+
		"<p>Per qualsevol dubte o aclaració no dubtis en escriu-re\'ns: <a href='mailto:info@aech.cat'>info@aech.cat</a></p>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Comissió de pares</h2>"+
		"<ul>"+
		"  <li>RSS</li>"+
		"  <li>Formulari</li>"+
		"</ul>";
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Històric de Fotos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};
//castors
if(document.getElementById("navC2")){
	document.getElementById("navC2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='1_castors.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changeCastors(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changeCastors(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changeCastors(2)'>Monitors</a></li>" +
	"<li><a href='#' onClick='changeCastors(3)'>Fotos i Video</a></li>" +
	"</ul>";
}
changeCastors = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th colspan='2'>OCTUBRE</th><th colspan='2'>NOVEMBRE</th><th colspan='2'>DESEMBRE</th></tr>"+
		"  <tr><td>3-4</td><td>Activitat de matí</td>"+
		"	   <td>7-8</td><td>Activitat de matí</td>"+
		"      <td>5-6</td><td>Lliure</td></tr>"+
		"  <tr><td>10-11</td><td>Lliure</td>"+
		"	   <td>14-15</td><td>Activitat de matí</td>"+
		"      <td>12-13</td><td>Activitat de matí</td></tr>"+
		"  <tr><td>17-18</td><td>Activitat de matí</td>"+
		"	   <td>21-22</td><td>Activitat de matí</td>"+
		"      <td>19-20</td><td><i class='fa fa-calendar-check-o'></i> Pessebrada</td></tr>"+
		"  <tr><td>24-25</td><td><i class='fa fa-file-pdf-o'></i> Excursió d\' un dia</td>"+
		"	   <td>28-29</td><td><i class='fa fa-file-pdf-o'></i> Excursió de dos dies</td>"+
		"      <td></td><td></td></tr>"+
		"  <tr><td>31-1</td><td>Lliure</td>"+
		"	   <td></td><td></td>"+
		"      <td>27-30</td><td><i class='fa fa-file-pdf-o'></i> Excursió de Nadal</td></tr>"+
		"</table>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Objectius</h2>"+
		"<h3>Escoltisme</h3>"+
		"<ul>"+
		"  <li>Portar camisa i fulard</li>"+
		"  <li>Conèixer les contrasenyes</li>"+
		"  <li>Conèixer les branques de l\'agrupament</li>"+
		"</ul>"+
		"<h3>Natura</h3>"+
		"<ul>"+
		"  <li>Deixar els llocs però on passem millor de com els hem trobat</li>"+
		"  <li>Fixar-nos en la flora i la fauna del nostre entorn</li>"+
		"</ul>"+
		"<h3>Fe</h3>"+
		"<ul>"+
		"  <li>Participar activament de motivacions i revisions</li>"+
		"  <li>Treballar el lema de l\'any \"Amb tu, la novetat\"</li>"+
		"</ul>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Monitors</h2>"+
		"<table style='width:100%' id:'monis'>"+
		"<tr><td>Ana Cerqueira</td><td>Arnau Pérez</td><td>Dani Balongo</td><td>Sónia Camarasa</td><td>Víctor Dieste</td></tr>"+
		"<tr><td id='moni0'></td><td id='moni1'></td><td id='moni2'></td><td id='moni3'></td><td id='moni4'></td></tr>"+
		"<tr><td colspan='5'><i class='fa fa-envelope-o'></i> <a href='mailto:castors@aech.cat'>castors@aech.cat</a></td></tr>"+
		"</table>";
		var srcs = ["gfx/monis/ana_cerqueira.jpg",
					"gfx/monis/arnau_perez.jpg",
					"gfx/monis/dani_balongo.jpg",
					"gfx/monis/sonia_camarasa.jpg",
					"gfx/monis/victor_dieste.jpg"];
		var imgs=[];
		var list=[];
    	for(var j = 0;j<srcs.length;j++){
			list[j] = document.getElementById('moni'+j);
			imgs[j] = document.createElement("IMG");
		   	imgs[j].setAttribute("src", srcs[j]);
    		imgs[j].setAttribute("height", "170");
   			list[j].appendChild(imgs[j]);
   		}
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Fotos i Videos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>YouTube</li>"+
		"</ul>";
	}
};
//llops
if(document.getElementById("navL2")){
	document.getElementById("navL2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='2_llops.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changeLlops(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changeLlops(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changeLlops(2)'>Monitors</a></li>" +
	"<li><a href='#' onClick='changeLlops(3)'>Fotos i Video</a></li>" +
	"</ul>";
}
changeLlops = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th colspan='2'>OCTUBRE</th><th colspan='2'>NOVEMBRE</th><th colspan='2'>DESEMBRE</th></tr>"+
		"  <tr><td>3-4</td><td>Activitat de matí</td>"+
		"	   <td>7-8</td><td>Activitat de matí</td>"+
		"      <td>5-6</td><td>Lliure</td></tr>"+
		"  <tr><td>10-11</td><td>Lliure</td>"+
		"	   <td>14-15</td><td>Activitat de matí</td>"+
		"      <td>12-13</td><td>Activitat de matí</td></tr>"+
		"  <tr><td>17-18</td><td>Activitat de matí</td>"+
		"	   <td>21-22</td><td><i class='fa fa-file-pdf-o'></i> Excursió de dos dies</td>"+
		"      <td>19-20</td><td><i class='fa fa-calendar-check-o'></i> Pessebrada</td></tr>"+
		"  <tr><td>24-25</td><td><i class='fa fa-file-pdf-o'></i> Excursió d\' un dia</td>"+
		"	   <td>28-29</td><td>Activitat de matí</td>"+
		"      <td></td><td></td></tr>"+
		"  <tr><td>31-1</td><td>Lliure</td>"+
		"	   <td></td><td></td>"+
		"      <td>27-30</td><td><i class='fa fa-file-pdf-o'></i> Excursió de Nadal</td></tr>"+
		"</table>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Objectius</h2>"+
		"<h3>Escoltisme</h3>"+
		"<ul>"+
		"  <li>Formar un estol unit</li>"+
		"  <li>Tenir present el progrés escolta i la importància dels consells</li>"+
		"  <li>Treballar i aplicar les màximes</li>"+
		"</ul>"+
		"<h3>Natura</h3>"+
		"<ul>"+
		"  <li>Conèixer i respectar l'indret on anem</li>"+
		"  <li>Tenir una actitut positiva a les excursions</li>"+
		"</ul>"+
		"<h3>Fe</h3>"+
		"<ul>"+
		"  <li>Treure profit de les motivacions i reflexions</li>"+
		"</ul>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Monitors</h2>"+
		"<table style='width:100%' id:'monis'>"+
		"<tr><td>Mireia Sanromà</td><td>Dani Barrientos</td><td>Erica Tena</td><td>Edgar Soriano</td><td>Andrea González</td></tr>"+
		"<tr><td id='moni0'></td><td id='moni1'></td><td id='moni2'></td><td id='moni3'></td><td id='moni4'></td></tr>"+
		"<tr><td colspan='5'><i class='fa fa-envelope-o'></i> <a href='mailto:llops@aech.cat'>llops@aech.cat</a></td></tr>"+
		"</table>";
		var srcs = ["gfx/monis/mireia_sanroma.jpg",
					"gfx/monis/dani_barrientos.jpg",
					"gfx/monis/erica_tena.jpg",
					"gfx/monis/edgar_soriano.jpg",
					"gfx/monis/andrea_glez.jpg"];
		var imgs=[];
		var list=[];
    	for(var j = 0;j<srcs.length;j++){
			list[j] = document.getElementById('moni'+j);
			imgs[j] = document.createElement("IMG");
		   	imgs[j].setAttribute("src", srcs[j]);
    		imgs[j].setAttribute("height", "170");
   			list[j].appendChild(imgs[j]);
   		};
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Fotos i Videos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};
//ran
if(document.getElementById("navr2")){
	document.getElementById("navr2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='3_rangers.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changeRangers(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changeRangers(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changeRangers(2)'>Monitors</a></li>" +
	"<li><a href='#' onClick='changeRangers(3)'>Fotos i Video</a></li>" +
	"</ul>";
}
changeRangers = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th colspan='2'>OCTUBRE</th><th colspan='2'>NOVEMBRE</th><th colspan='2'>DESEMBRE</th></tr>"+
		"  <tr><td>3-4</td><td>Activitat de matí</td>"+
		"	   <td>7-8</td><td>Activitat de matí</td>"+
		"      <td>5-6</td><td>Lliure</td></tr>"+
		"  <tr><td>10-11</td><td>Lliure</td>"+
		"	   <td>14-15</td><td>Activitat de matí</td>"+
		"      <td>12-13</td><td>Activitat de matí</td></tr>"+
		"  <tr><td>17-18</td><td>Activitat de matí</td>"+
		"	   <td>21-22</td><td>Activitat de matí</td>"+
		"      <td>19-20</td><td><i class='fa fa-calendar-check-o'></i> Pessebrada</td></tr>"+
		"  <tr><td>24-25</td><td><i class='fa fa-file-pdf-o'></i> Excursió d\' un dia</td>"+
		"	   <td>28-29</td><td><i class='fa fa-file-pdf-o'></i> Excursió de dos dies</td>"+
		"      <td></td><td></td></tr>"+
		"  <tr><td>31-1</td><td>Lliure</td>"+
		"	   <td></td><td></td>"+
		"      <td>27-30</td><td><i class='fa fa-file-pdf-o'></i> Excursió de Nadal</td></tr>"+
		"</table>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Objectius</h2>"+
		"<h3>Escoltisme</h3>"+
		"<ul>"+
		"  <li>Conèixer la metodologia dels Ràngers i Guies.</li>"+
		"  <li>Ser un referent per a les branques més petites.</li>"+
		"  <li>Escoltar activament al kraal de monitors.</li>"+
		"  <li>Participar activament a la preparació i realització de l'operació.</li>"+
		"</ul>"+
		"<h3>Natura</h3>"+
		"<ul>"+
		"  <li>Ser conscients de la fragilitat del nostre entorn.</li>"+
		"  <li>Conèixer la flora i la fauna del indret on anem.</li>"+
		"</ul>"+
		"<h3>Fe</h3>"+
		"<ul>"+
		"  <li>Conèixer els membres de la tropa.</li>"+
		"  <li>Treballar el lema de l'any: Amb tu la novetat.</li>"+
		"</ul>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Monitors</h2>"+
		"<table style='width:100%' id:'monis'>"+
		"<tr><td>Edu González</td><td>Guille Balongo</td><td>Marta García</td><td>Mireia Manuel</td></tr>"+
		"<tr><td id='moni0'></td><td id='moni1'></td><td id='moni2'></td><td id='moni3'></td></tr>"+
		"<tr><td colspan='4'><i class='fa fa-envelope-o'></i> <a href='mailto:rangers@aech.cat'>rangers@aech.cat</a></td></tr>"+
		"</table>";
		var srcs = ["gfx/monis/edu_glez.jpg",
					"gfx/monis/guille_balongo.jpg",
					"gfx/monis/marta_garcia.jpg",
					"gfx/monis/mireia_manuel.jpg"];
		var imgs=[];
		var list=[];
    	for(var j = 0;j<srcs.length;j++){
			list[j] = document.getElementById('moni'+j);
			imgs[j] = document.createElement("IMG");
		   	imgs[j].setAttribute("src", srcs[j]);
    		imgs[j].setAttribute("height", "200");
   			list[j].appendChild(imgs[j]);
   		};
		"<h2>Monitors</h2>"+
		"<ul>"+
		"  <li>Edu González</li>"+
		"  <li>Marta García</li>"+
		"  <li>Guille Balongo</li>"+
		"  <li>Mireia Manuel</li>"+
		"</ul>";
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Fotos i Videos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};
//pios
if(document.getElementById("navP2")){
	document.getElementById("navP2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='4_pioners.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changePioners(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changePioners(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changePioners(2)'>Monitors</a></li>" +
	"<li><a href='#' onClick='changePioners(3)'>Fotos i Video</a></li>" +
	"</ul>";
}
changePioners = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th colspan='2'>OCTUBRE</th><th colspan='2'>NOVEMBRE</th><th colspan='2'>DESEMBRE</th></tr>"+
		"  <tr><td>3-4</td><td>Activitat de matí</td>"+
		"	   <td>7-8</td><td>Activitat de matí</td>"+
		"      <td>5-6</td><td>Lliure</td></tr>"+
		"  <tr><td>10-11</td><td>Lliure</td>"+
		"	   <td>14-15</td><td><i class='fa fa-file-pdf-o'></i> Excursió d\' un dia</td>"+
		"      <td>12-13</td><td>Activitat de matí</td></tr>"+
		"  <tr><td>17-18</td><td><i class='fa fa-file-pdf-o'></i> Excursió de dos dies</td>"+
		"	   <td>21-22</td><td>Activitat de matí</td>"+
		"      <td>19-20</td><td><i class='fa fa-calendar-check-o'></i> Pessebrada</td></tr>"+
		"  <tr><td>24-25</td><td>Activitat de matí</td>"+
		"	   <td>28-29</td><td>Activitat de matí</td>"+
		"      <td></td><td></td></tr>"+
		"  <tr><td>31-1</td><td>Lliure</td>"+
		"	   <td></td><td></td>"+
		"      <td>27-30</td><td><i class='fa fa-file-pdf-o'></i> <i class='fa fa-info-circle'></i> Ruta de Nadal</td></tr>"+
		"</table>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Objectius</h2>"+
		"<h3>Escoltisme</h3>"+
		"<ul>"+
		"  <li>Conèixer la metodologia escolta i el pionerisme.</li>"+
		"  <li>Participar activament en l’empresa.</li>"+
		"  <li>Ser constant en l’assistència i en la implicació al CAU.</li>"+
		"</ul>"+
		"<h3>Natura</h3>"+
		"<ul>"+
		"  <li>Adquirir uns coneixements bàsics de la natura que ens envolta.</li>"+
		"  <li>Deixar net i reverir l’entorn per on hem passat, passem i passarem.</li>"+
		"  <li>Aprendre les tècniques de muntanya.</li>"+
		"</ul>"+
		"<h3>Fe</h3>"+
		"<ul>"+
		"  <li>Fomentar l’assistència a la Pessebrada.</li>"+
		"  <li>Aprofitar moments de reflexió, tan individuals com en grup.</li>"+
		"  <li>Conèixer i representar els diferents valors de respecte vers els altres.</li>"+
		"</ul>"+
		"<h3>Unitat</h3>"+
		"<ul>"+
		"  <li>Integrar la unitat i fer pinya.</li>"+
		"  <li>Ser un exemple tant pels pioners com per les branques més petites.</li>"+
		"  <li>Cooperar per garantir el bon funcionament de l’activitat pionera.</li>"+
		"</ul>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Monitors</h2>"+
		"<table style='width:100%' id:'monis'>"+
		"<tr><td>Pol de Miguel</td><td>Axel Cols</td><td>Núria Diago</td><td>David Estefanell</td></tr>"+
		"<tr><td id='moni0'></td><td id='moni1'></td><td id='moni2'></td><td id='moni3'></td></tr>"+
		"<tr><td colspan='4'><i class='fa fa-envelope-o'></i> <a href='mailto:pioners@aech.cat'>pioners@aech.cat</a></td></tr>"+
		"</table>";
		var srcs = ["gfx/monis/pol_demiguel.jpg",
					"gfx/monis/axel_cols.jpg",
					"gfx/monis/nuria_diago.jpg",
					"gfx/monis/david_estefanell.jpg"];
		var imgs=[];
		var list=[];
    	for(var j = 0;j<srcs.length;j++){
			list[j] = document.getElementById('moni'+j);
			imgs[j] = document.createElement("IMG");
		   	imgs[j].setAttribute("src", srcs[j]);
    		imgs[j].setAttribute("height", "200");
   			list[j].appendChild(imgs[j]);
   		};
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Fotos i Videos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};
//ro
if(document.getElementById("navR2")){
	document.getElementById("navR2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='5_rovers.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changeRovers(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changeRovers(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changeRovers(2)'>Consellers</a></li>" +
	"<li><a href='#' onClick='changeRovers(3)'>Fotos i Video</a></li>" +
	"</ul>";
}
changeRovers = function(i){
	if (i==0){
		document.getElementById("text").innerHTML =
		"<h2>Calendari</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th colspan='2'>OCTUBRE</th><th colspan='2'>NOVEMBRE</th><th colspan='2'>DESEMBRE</th></tr>"+
		"  <tr><td>3-4</td><td>Activitat de matí</td>"+
		"	   <td>7-8</td><td>Activitat de matí</td>"+
		"      <td>5-6</td><td>Lliure</td></tr>"+
		"  <tr><td>10-11</td><td>Lliure</td>"+
		"	   <td>14-15</td><td><i class='fa fa-file-pdf-o'></i> Excursió d\' un dia</td>"+
		"      <td>12-13</td><td>Activitat de matí</td></tr>"+
		"  <tr><td>17-18</td><td>Activitat de matí</td>"+
		"	   <td>21-22</td><td>Activitat de matí</td>"+
		"      <td>19-20</td><td><i class='fa fa-calendar-check-o'></i> Pessebrada</td></tr>"+
		"  <tr><td>24-25</td><td>Activitat de tarda (div)</td>"+
		"	   <td>28-29</td><td>Excursió de dos dies</td>"+
		"      <td></td><td></td></tr>"+
		"  <tr><td>31-1</td><td>Lliure</td>"+
		"	   <td></td><td></td>"+
		"      <td>27-30</td><td><i class='fa fa-file-pdf-o'></i> Excursió de Nadal</td></tr>"+
		"</table>";
	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Objectius</h2>"+
		"<h3>Escoltisme</h3>"+
		"<ul>"+
		"  <li>Participar activament i visualment dins de l\'agrupament.</li>"+
		"  <li>Realitzar un servei vers la societat.</li>"+
		"  <li>Reduïr les activitats en xarxa durant les activitats.</li>"+
		"  <li>Tirar endavant les nostres proposicions.</li>"+
		"</ul>"+
		"<h3>Natura</h3>"+
		"<ul>"+
		"  <li>Millorar l\'estat d\'alguna de les grans rutes catalanes.</li>"+
		"  <li>Millorar el nostre coneixement sobre estris de montanya.</li>"+
		"</ul>"+
		"<h3>Fe</h3>"+
		"<ul>"+
		"  <li>Participar activament de la pessebrada.</li>"+
		"</ul>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Conseller</h2>"+
		"<table style='width:100%' id:'monis'>"+
		"<tr><td>Carlos Domínguez</td></tr>"+
		"<tr><td id='moni0'></td></tr>"+
		"<tr><td colspan='1'><i class='fa fa-envelope-o'></i> <a href='mailto:rovers@aech.cat'>rovers@aech.cat</a></td></tr>"+
		"</table>";
		var srcs = ["gfx/monis/carlos_dominguez.jpg"];
		var imgs=[];
		var list=[];
    	for(var j = 0;j<srcs.length;j++){
			list[j] = document.getElementById('moni'+j);
			imgs[j] = document.createElement("IMG");
		   	imgs[j].setAttribute("src", srcs[j]);
    		imgs[j].setAttribute("height", "200");
   			list[j].appendChild(imgs[j]);
   		};
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>Fotos i Videos</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};
//kraal
if(document.getElementById("navK2")){
	document.getElementById("navK2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='6_kraal.html'>Monitors</a></li>" +
	"<li><a href='#' onClick='changeKraal(0)'>Dades Banc</a></li>" +
	"<li><a href='#' onClick='changeKraal(1)'>Càrrecs</a></li>" +
	"<li><a href='#' onClick='changeKraal(2)'>Enllaços</a></li>" +
	"<li><a href='#' onClick='changeKraal(3)'>S.A.P.</a></li>" +
	"</ul>";
}
changeKraal = function(i){
	if (i==0){
		var t = document.getElementById("text");
		t.innerHTML =
		"<h2>Dades Bancàries</h2>"+
		"<table style='width:100%'>"+
		"  <tr><th id='banc_castors'>CASTORS - LLÚDRIGUES -></td><td> ES57 2100 0810 2702 0086 1703</td><td rowspan='6' id='logo'></td>"+
		"  <tr><th id='banc_llops'>LLOPS - DAINES -></td><td> ES94 2100 0810 2102 0086 1816</td>"+
		"  <tr><th id='banc_rangers'>RÀNGERS - GUIES -></td><td> ES31 2100 0810 2602 0086 1929</td>"+
		"  <tr><th id='banc_pios'>PIONERS - CARAVEL·LES -></td><td> ES85 2100 0810 2802 0086 2023</td>"+
		"  <tr><th id='banc_rovers'>RÓVERS -></td><td> ES25 2100 0810 2202 0086 2136</td>"+
		"  <tr><th id='banc_general'>GENERAL -></td><td> ES47 2100 0810 2502 0086 1690</td>";
		
		var l = document.getElementById("logo");
		var i = document.createElement("IMG");
		i.setAttribute("src", "gfx/lacaixa.jpg");
		l.appendChild(i);

	}else if (i==1){
		document.getElementById("text").innerHTML =
		"<h2>Càrrecs</h2>"+
		"<table style='width:100%'>"+
		"  <tr><td>Edu-Montse-Guille</td><td>Dani Balongo</td><td>Mireia Sanromà</td><td>Enric Martín</td><td>David Estefanell</td><td>Sónia Camarasa</td>"+
		"  <tr><td><a href='mailto:info@aech.cat'>info@aech.cat</a></td><td colspan='3'><a href='mailto:administracio@aech.cat'>administracio@aech.cat</a></td><td colspan='2'><a href='mailto:secretaria@aech.cat'>secretaria@aech.cat</a></td></tr>"+
		"  <tr><th>Caps</th><th colspan='3'>Administradors</th><th colspan='2'>Secretaris</th></tr>"+
		"</table>";
	}else if (i==2){
		document.getElementById("text").innerHTML =
		"<h2>Enllaços</h2>"+
		"<ul>"+
		"<li><a href='http://www.aegarbi.org/'>A.E. Garbí (Lleida)</a></li>"+
		"<li><a href='http://www.rubidigital.cat/entitats/aealbada/index.html'>A.E. Albada (Rubí)</a></li>"+
		"<li><a href='http://cauarrels.com/'>A.E. Arrels (Girona)</a></li>"+
		"<li><a href='http://www.aetorxa.com/'>A.E. Torxa (Igualada)</a></li>"+
		"<li><a href='http://www.aemontserrat.com/'>A.E. Montserrat (Barcelona - Sants)</a></li>"+
		"<li><a href='http://www.gech.cat/'>G.E. Champagnat (Badalona)</a></li>"+
		"<li><a href='http://www.aelasoca.cat/'>A.E. La Soca (Mataró)</a></li>"+
		"</ul>"+
		"<ul>"+
		"<li><a href='http://www.maristes.cat/cms/Inici.html'>C.M.S</a></li>"+
		"<li><a href='http://www.maristes.cat/cms/Projecte_Educatiu_files/Projecte%20educatiu.pdf'>Projecte Educatiu</a></li>"+
		"</ul>"+
		"Brownsea<br>"+
		"Material esportiu, fulards, camises<br>"+
		"Adreça: C/ Calàbria 88 (Nova adreça)<br>"+
		"08015 Barcelona<br>Tel: 93.424.25.66<br>"+
		"e-mail: <a href='mailto:info@brownsea.net'>info@brownsea.net</a><br>"+
		"Web: <a href='http://www.brownsea.net'>www.brownsea.net</a>"+
		"<ul>"+
		"<li><a href='http://www.maristes.cat/imma/'>Maristes La Immaculada</a></li>"+
		"<li><a href='http://immaculada.fajmacor.org/inici'>Ass. Ajmacor Immaculada</a></li>"+
		"</ul>";
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>S.A.P.</h2>"+
		"<ul>"+
		"  <li><a href='http://aech.cat/kraal/06_2015.pdf'>Juny 2015</a></li>"+
		"  <li><a href='http://aech.cat/kraal/03_2015.pdf'>Març 2015</a></li>"+
		"  <li><a href='http://aech.cat/kraal/12_2014.pdf'>Desembre 2014</a></li>"+
		"  <li><a href='http://aech.cat/kraal/09_2014.pdf'>Setembre 2014</a></li>"+
		"  <li><a href='http://aech.cat/kraal/04_2014.pdf'>Abril 2014</a></li>"+
		"  <li><a href='http://aech.cat/kraal/12_2013.pdf'>Desembre 2013</a></li>"+
		"  <li><a href='http://aech.cat/kraal/09_2013.pdf'>Setembre 2013</a></li>"+
		"  <li><a href='http://aech.cat/kraal/06_2013.pdf'>Juny 2013</a></li>"+
		"</ul>";
	}
};