'use strict';

// zadanie:
// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek


class ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;

  }
  
  opiszKsiazke() {
     console.log( "Książka ma tytuł " + this.tytul + ", " + "autorem jest " + this.autor + " i została " + this.przeczytana);
  } 
}

var pierwszaKsiazka = new ksiazka("Wiedźmin","Andrzej Sapkowski", "przeczytana");
console.log(pierwszaKsiazka.opiszKsiazke());
var pierwszaTablica = [];
pierwszaTablica[0] = pierwszaKsiazka["tytul"];
pierwszaTablica[1] = pierwszaKsiazka["autor"];
pierwszaTablica[2] = pierwszaKsiazka["przeczytana"];


var drugaKsiazka = new ksiazka("tytul 2", "autor 2", "nieprzeczytana");
var drugaTablica = [];
drugaTablica[0] = drugaKsiazka["tytul"];
drugaTablica[1] = drugaKsiazka["autor"];
drugaTablica[2] = drugaKsiazka["przeczytana"];

var trzeciaKsiazka = new ksiazka("tytul 3", "autor 3", "przeczytana");
var trzeciaTablica = [];
trzeciaTablica[0] = trzeciaKsiazka["tytul"];
trzeciaTablica[1] = trzeciaKsiazka["autor"];
trzeciaTablica[2] = trzeciaKsiazka["przeczytana"];

var array = [pierwszaTablica, drugaTablica, trzeciaTablica];
console.log(array);

console.log(pierwszaKsiazka.opiszKsiazke(), drugaKsiazka.opiszKsiazke(), trzeciaKsiazka.opiszKsiazke());


function iloscPrzeczytanych() {
  var ileRazy = 0;
  for (var i = 0; i < pierwszaTablica.length; i++){
   console.log(i); 
  console.log(array[i][2]);
    
    if (array [i][2]=="przeczytana") ileRazy += 1;
    else continue;
  }
  console.log(ileRazy);
}


iloscPrzeczytanych()                              
                                     
                                     
