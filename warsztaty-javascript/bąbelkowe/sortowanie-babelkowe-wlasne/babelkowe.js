'use strict';

//tworzę zmienną z tablicą 
var sortArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

//wywołuję dane w kosoli

console.log("Dane przed sortowaniem");
console.log(sortArray);

//tworzę pętlę dla funkcji for dla i - do przejścia wszystkich elementów w tablicy oraz dla funcji for dla j - do sortowania oraz do warunek if do  "przeskakiwania elementow w tablicy- sortowanie się j-tów (rozpoznawanie czy kolejne elementy j są od siebie większe lub mniejsze)


for (var i = 0; i < sortArray.length; i++) {
    for (var j = 0; j < sortArray.length - 1; j++) {

        
        if (sortArray[j] > sortArray[j + 1]) {
            temp
            var temp = sortArray[j];
            sortArray[j] = sortArray[j + 1];
            sortArray[j + 1] = temp;
        }
    }
}
//wywołuję wyniki posortowania z fukcji if w konsoli


console.log("Dane po posortowaniu");
console.log(sortArray);