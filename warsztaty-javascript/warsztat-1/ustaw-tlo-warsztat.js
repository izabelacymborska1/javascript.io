'use strict';

document.getElementsByTagName("button")[0].onclick = ustawTlo;

function ustawTlo() {
    var pElements = document.body.getElementsByTagName("p");
    
    //pobierz pierwszy paragraf i ustaw tło
    
    var myp1 = pElements[0];
    myp1.style.background = "rgb(255,0,0)";
    
    
      //pobierz drugi paragraf i ustaw tło
    
    var myp2 = pElements[1];
    myp2.style.background = "rgb(255,255,0)";
}