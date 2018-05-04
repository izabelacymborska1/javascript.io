'use strict';


$(document).ready(function(){
 $('#count-sum').click(function(){
     var suma = 0;
     $('.salary').each(function(index, element) {
         suma += parseInt($(this).html());
console.log('Index pracownika: ' + index + ' ,' + 'Kwota: ' + $(this).html());         
     });
    console.log('Suma wypłat: ' + suma);
     $('#sum').html(suma);
 });
});



//Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
//Uzyskany wynik wyświetl w elemencie o ID #sum.
//
//Zadanie zrób z wykorzystaniem biblioteki jQuery.
//
//Podpowiedzi:
//- oprogramuj zdarzenie "click" przycisku #count-sum
//- pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
//- pobierz element o ID #sum i podmień mu treść na obliczoną sumę