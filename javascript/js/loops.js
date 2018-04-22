'use strict';

//pętla for - wyswietli od 10 do 1

//for ( var i=10; i>0; i--) {
//    console.log(i);
//}

//wyswietli od 1 do 5

for ( var i=1; i<=5; i++) {
    console.log(i);
}

//petrla for each

var tablica = ["krystian", "Monika","Danuta", "Agata"];
//
//for (var i=0; i<3; ++i) {
//    console.log("Element z Indeksem" + i + "ma wartość" + tablica[i]);
//}


//for (var i=0; i<tablica.length; ++i) {
//    console.log("Element z Indeksem " + i + "ma wartość " + tablica[i]);
//}



tablica.forEach (function (element, index) {
    console.log("Element z Indeksem " + index + "ma wartość " + element); 
    
});


//pętla while

var it = 0;
while (it <10) {
    console.log(it);
    it++;
}



//pętla do while

    var iter = 20;
do {
    console.log(iter);
    iter++;

} while (iter <10)
    
    
//    przerywanie pętli
    var a = 0;
while (a<10) {
    console.log(++a);
    
    if (a == 5) {
        break;
    }
}
//    przeskakiwanie do kolejnej interacji - contunue


for (var b =0; b<10; ++b) {
    if (b==5) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--");
}


    
    
    
    
    
    
    
    
