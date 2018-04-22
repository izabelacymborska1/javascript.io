'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}

console.log(jsonOsoby.osoby[0].zainteresowania);


//for (var i=0; i<3; ++i) {
//    console.log("Element z Indeksem" + i + "ma wartość" + tablica[i]);
//}
    


var osoby = jsonOsoby.osoby;
osoby.forEach(function(osoba, index) {
    console.log("Osoba: " + osoba.imie);
    
    var zainteresowania = osoba.zainteresowania;
    zainteresowania.forEach(function(zainteresowanie, i) {
        console.log("Zainteresowanie: " + zainteresowanie.nazwa);
    })
    
    
});
    




//jsonOsoby.osoby.forEach( function( element, index){
//    console.log(element);
//    
//})





//jsonOsoby.osoby[2].zainteresowania.forEach( function (element, index) {
//    console.log(element.nazwa);
//});

//console.log(jsonOsoby.osoby[2].zainteresowania);







//jsonOsoby.osoby[0].zainteresowania.forEach( function(zainteresowanie, index) {
//    console.log("index: " + index + " zainteresowanie: " + zainteresowanie.nazwa)
//});