'use strict';

var jsonPracownicy = { "pracownicy": [
{
  firstName: "Krystian", 
  lastName: "Dziopa"
  }, 
{
  firstName: "Anna", 
  lastName: "Szapiel"
  },
{
  firstName: "Piotr", 
  lastName: "Żmuda"
  }
]}

console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(pracownik, index) {
   console.log("index: " + index + " imię: " + firstName + "nazwisko: " + lastName)
});


//  Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.