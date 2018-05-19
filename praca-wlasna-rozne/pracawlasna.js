'use strict';
 function download() {
     $('#download').on({
         click: (function () {
             ajax({
                 type: 'GET',
                 url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
                 onError: function () {
                     console.log('Nie udalo mi sie nawiazac polaczenia');
                 },
                 onSuccess: function (response) {
                     console.log(response);

                     var jsonObj = JSON.parse(response);
                     console.log('Imie: ' + jsonObj.imie + ' Nazwisko: ' + jsonObj.nazwisko + ' zawod: ' + jsonObj.zawod + ' firma: ' + jsonObj.firma);

                     var paragraf = document.createElement('p');

                     paragraf.innerHTML = 'Imie: ' + jsonObj.imie + ' Nazwisko: ' + jsonObj.nazwisko + ' zawod: ' + jsonObj.zawod + ' firma: ' + jsonObj.firma;

                     document.getElementById('dane-programisty').appendChild(paragraf);
                 }
             })

         })
     })
 }
 
var $newdiv1 = $("<div id='dane-programisty'></div>");
 
$("button").after($newdiv1);