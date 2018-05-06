'use strict';

//  var o = {
//      wlasciwosc1: [
//          0,1,2,3
//          
//      ],
//    wlasciwosc2: "string",
//      metoda1: function(){
//          console.log("Metoda");
//          
//      }
//  }


class Ogloszenie {
    constructor(tytul, opis, kategoria, autor, cena) {
        
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.autor = autor;
        this.cena = cena;
    }
    
    
    pobierzOgloszenie() {
        var ogl = "<h1>" + this.tytul + "<br><small>" + this.autor + "</small></h1>";
        ogl += "<h6>Cena: " + this.cena + "</h6>";
        ogl += "<p>" + this.opis + "</p>";
        ogl += "<p><em>Kategoria: " + this.kategoria + "</em></p>";
        ogl += "<hr>";
        
        document.body.insertAdjacentHTML("afterbegin", ogl);
        
    }
      
}

var ogloszenie = new Ogloszenie("Sprzedam Opla", "Niemiec płakał jak sprzedawał. Jeździł tylko w niedziele do Lidla", "Motoryzacja", "Helmut", 3000);


ogloszenie.pobierzOgloszenie();

console.log(ogloszenie);



ogloszenie = new Ogloszenie ("Sprzedam pralkę", "Programowalna Frania", "AGD", "Halina", 420);

ogloszenie.pobierzOgloszenie();



//pętla - tylko dane musze otrzymac w tablicy 

for (var i = 0; i<10; i++) {
  var ogloszenie = new Ogloszenie((i+1) + "Sprzedam Opla", "Niemiec płakał jak sprzedawał. Jeździł tylko w niedziele do Lidla", "Motoryzacja", "Helmut", 3000);

ogloszenie.pobierzOgloszenie();  
}








