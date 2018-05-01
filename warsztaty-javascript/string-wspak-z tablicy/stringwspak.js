'use strict';

//zadeklarowanie zmiennej z tablicą

var tablica = ['A', 'k', 'a', 'd', 'e', 'm', 'i', 'a', '1', '0', '8'];

//dla sprawdzenia - drukowanie tablicy od początku do końca 

console.log(tablica);



//odwrócenie tablicy od końca do początku w poziomie

tablica.reverse();
console.log(tablica);


//drukowanie tablicy od końca do początku w pionie
var size = tablica.length;
for(var i = size; i>0; i--){
    console.log(tablica[i-1]);
}


//
////sortowanie stringa 
//'use strict';
//
////zadeklarowanie zmiennej z tablicą
//
//var tablica = ['A', 'k', 'a', 'd', 'e', 'm', 'i', 'a', '1', '0', '8']
//
////sortowanie parametrów tablicy
//
//tablica.sort();
//console.log(tablica);