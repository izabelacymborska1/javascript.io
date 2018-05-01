'use strict';

/*  Funkcja For  */

function sumPowArrayFor (arrayFor){                 // funkcja z parametrem tablica            
    var sumPow = 0;                                 // przypisanie wyniku sumy  
    for (var i = 0; i < arrayFor.length; i++){      // pętla For o dlugosci tablicy (arrayFor.length)
      sumPow += Math.pow(arrayFor[i],2);            // dodawanie kwadratu nastepnego elementu tablicy w kolejnej iteracji
  }
  console.log ('suma kwadratów wynosi ' + sumPow);                      // wyswietlenie wyniku sumy kwadratow
}
sumPowArrayFor([1,2,3,4,5,6]);                                          // wywolanie funkcji ztablicą

/*  Funkcja ForEach  */

function sumPowArrayForEach (arrayForEach){         // funkcja z parametrem tablica     
    var sumPow = 0;                                 // przypisanie wyniku sumy
    arrayForEach.forEach (function(elm, i) {        // pętla forEach (wszystkie elementy tablicy)
      sumPow += Math.pow(arrayForEach[i],2)         // dodawanie kwadratu nastepnego elementu tablicy w kolejnej iteracji
    });
  console.log ('suma kwadratów wynosi ' + sumPow);                     // wyswietlenie wyniku sumy kwadratow
} 
sumPowArrayForEach([1,2,3,4,5,6]);                                    // wywolanie funkcji ztablicą





