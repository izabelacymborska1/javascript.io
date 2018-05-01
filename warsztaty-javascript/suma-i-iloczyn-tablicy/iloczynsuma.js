'use strict';

//zadeklarowanie zmiennej z tablicą oraz unkcja sumy parametrów tablicy z for

function suma(tablica = [1, 2, 3, 4, 5, 6]) {
    var suma = 0;
    for (var i = 0; i < tablica.length; i++) {
        suma = suma + tablica[i];
    }
    console.log('Suma parametrów tablicy wynosi: ' + suma);
}
suma();
console.log('...................');


// zadeklarowanie zmiennej dla iloczynu oraz funcji iloczyn z for
function iloczyn(tablica = [1, 2, 3, 4, 5, 6]) {
    var iloczyn = 1;
    for (var j = 0; j < tablica.length; j++) {
        iloczyn = iloczyn * tablica[j];
    }
    console.log('Iloczyn parametów tablicy wynosi: ' + iloczyn);
}
iloczyn();
