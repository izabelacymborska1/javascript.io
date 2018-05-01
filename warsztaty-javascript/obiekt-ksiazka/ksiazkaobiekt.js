'strict use';

// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek


class ksiazka {
    'use strict';
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;

  }
  opiszKsiazke() {
     console.log( "Książka ma tytuł " + this.tytul + ", " + "autorem jest " + this.autor + " i została " + this.przeczytana);
  } 
}
var pierwszaKsiazka = new ksiazka('Wiedźmin','Andrzej Sapkowski', 'przeczytana');
console.log(pierwszaKsiazka.opiszKsiazke())
var pierwsza = [];
pierwsza[0] = pierwszaKsiazka['tytul'];
pierwsza[1] = pierwszaKsiazka['autor'];
pierwsza[2] = pierwszaKsiazka['przeczytana'];
//Nie wiem jak zrobic typ boolean w js..
var drugaKsiazka = new ksiazka('tytul_2', 'autor_2', 'nieprzeczytana');
var druga = [];
druga[0] = drugaKsiazka['tytul'];
druga[1] = drugaKsiazka['autor'];
druga[2] = drugaKsiazka['przeczytana'];
var trzeciaKsiazka = new ksiazka('tytul_3', 'autor_3', 'przeczytana');
var trzecia = [];
trzecia[0] = trzeciaKsiazka['tytul'];
trzecia[1] = trzeciaKsiazka['autor'];
trzecia[2] = trzeciaKsiazka['przeczytana'];

var arr = [pierwsza, druga, trzecia];
console.log(arr);

console.log(pierwszaKsiazka.opiszKsiazke(), drugaKsiazka.opiszKsiazke(), trzeciaKsiazka.opiszKsiazke());


function iloscPrzeczytanych() {
  ileRazy = 0;
  for (var i = 0; i < pierwsza.length; i++){
    console.log(i);
    console.log(arr[i][2])
    
    if (arr[i][2]=='przeczytana') ileRazy += 1;
    else continue;
  }
  console.log(ileRazy);
}
iloscPrzeczytanych()



