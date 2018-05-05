'use strict';

function ajax( method, url ) {
    //tworze obiekt XMLHttpRequest
    var httpReq = new XMLHttpRequest();
    
    console.log(httpReq);
    
//    otwieram połączednie
    httpReq.open(method,url);
    
//    sprawdzam status połęczenia przezdarzenie i nasłuchuję statusu - jak wychwyci 4 to zacznie z tym cos robic   - zdarzenie zmiany statusu połęczenia 
    
    httpReq.addEventListener('readystatechange', function() {
        
        
        
    })
    
    
}

ajax('GET'