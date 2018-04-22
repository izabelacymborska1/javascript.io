'use strict';

function aktualnyRok() {
    console.log("2018");
}

var aktualnyMiesiac = function() {
    console.log("Kwiecień");
}

console.log(aktualnyMiesiac);

aktualnyMiesiac();
aktualnyMiesiac();
aktualnyMiesiac();
aktualnyMiesiac();


aktualnyRok();
aktualnyRok();


function dodajLiczby(pierwszaLiczba, drugaLiczba) {
    var wynik = pierwszaLiczba + drugaLiczba;


//console.log(wynik);
    return wynik;
}

var wynikZFunkcji = dodajLiczby (4, 7);
console.log(wynikZFunkcji);



