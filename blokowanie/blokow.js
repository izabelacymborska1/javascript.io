'use strict';
var btn= document.getElementById('wyslij');

var output = document.querySelector('#output');


//do funkcji musi byc wpisany parametr np e, a potem odwołanie e.prevent 
btn.addEventListener('click', function(e){
e.preventDefault();
 var imie = document.getElementById("imie").value;
 var nazwisko = document.getElementById("nazwisko").value;
//    console.log(imie, nazwisko);
//   
//    wypluwa w divie co wpiszę w formularz i po przycisku wyslij
    output.innerHTML = "<p class='myClass' style='font-size: 2rem'>Imię: " + imie +"</p><p>Nazwisko: " + nazwisko + "</p>";
    
//  przez innerHTML wstawiamy tagi do html np paragrafy  
//    można tez wstawić styl przez innerTHML np, czcionkę itp. poprzez klasę i style - styl jest do paragrafu nie do klasy
    
    
    
});