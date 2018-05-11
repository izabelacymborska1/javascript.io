'use strict';

$("#button").click(function(e){
	e.preventDefault();
	
	var ajax = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";
	$.ajax({
		url: ajax,
		dataType: "json",
		success: function(element, index){
		console.log(element);
            
			var newElement = document.getElementById("miejsce");
			newElement.innerHTML += '<div id="dane-programisty">' + 
				'<p>Imię: ' + element.imie + '</p>' +
				'<p>Nazwisko: ' + element.nazwisko + '</p>' +
				'<p>Zawód: ' + element.zawod + '</p>' +
				'<p>Firma: ' + element.firma + '</p>' +
				'</div>';
		}  
	});
});
