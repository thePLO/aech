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
		"<ul>"+
		"  <li>Ana Cerqueira</li>"+
		"  <li>Arnau Pérez</li>"+
		"  <li>Dani Balongo</li>"+
		"  <li>Sónia Camarasa</li>"+
		"  <li>Víctor Dieste</li>"+
		"</ul>";
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
		"<ul>"+
		"  <li>Mireia Sanromà</li>"+
		"  <li>Dani Barrientos</li>"+
		"  <li>Erica Tena</li>"+
		"  <li>Edgar Soriano</li>"+
		"  <li>Andrea González</li>"+
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
		"<h2>Monitors</h2>"
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
		"      <td></td><td></td>Activitat de matí</tr>"+
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
		"<ul>"+
		"  <li>Pol</li>"+
		"  <li>Axel</li>"+
		"  <li>Núria</li>"+
		"  <li>David</li>"+
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
//ro
if(document.getElementById("navR2")){
	document.getElementById("navR2").innerHTML =
	"<ul id='submenu'>" +
	"<li><a href='5_rovers.html'>Qui som?</a></li>" +
	"<li><a href='#' onClick='changeRovers(0)'>Calendari</a></li>" +
	"<li><a href='#' onClick='changeRovers(1)'>Objectius</a></li>" +
	"<li><a href='#' onClick='changeRovers(2)'>Monitors</a></li>" +
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
		"<h2>Monitors</h2>"+
		"<ul>"+
		"  <li>RSS</li>"+
		"  <li>Formulari</li>"+
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
		document.getElementById("text").innerHTML =
		"<h2>Dades Bancàries</h2>"+
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
		"<h2>Càrrecs</h2>"+
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
		"<h2>Enllaços</h2>"+
		"<ul>"+
		"  <li>RSS</li>"+
		"  <li>Formulari</li>"+
		"</ul>";
	}else if (i==3){
		document.getElementById("text").innerHTML =
		"<h2>S.A.P.</h2>"+
		"<ul>"+
		"  <li>Picasa</li>"+
		"  <li>Youtube</li>"+
		"</ul>";
	}
};