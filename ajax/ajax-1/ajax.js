function showData(arrData) {
    arrData.forEach(function( elem, index) {
        console.log(elem.title);
        
        console.log("===================")
    });
}





function ajax(method, url) {
    'use strict';
    //tworze obiekt XMLHttpRequest
    var httpReq = new XMLHttpRequest();

//    console.log(httpReq);

    //    otwieram połączednie
    httpReq.open(method, url);

    //    sprawdzam status połęczenia przezdarzenie i nasłuchuję statusu - jak wychwyci 4 to zacznie z tym cos robic   - zdarzenie zmiany statusu połęczenia 

    httpReq.addEventListener('readystatechange', function () {

        //jesli readystate ==4  - dane zwrócone i gotowe do użycia

        if (httpReq.readyState == 4) {
            //sprawdzam kod statusu odpwowiedzi - interesuje nas najbardziej 200

            if (httpReq.status == 200) {
                var data = httpReq.responseText;
                var jsonData = JSON.parse(data);

                showData( jsonData )
            }
        }

    });


    httpReq.send();

}
ajax('GET', "https://jsonplaceholder.typicode.com/posts");


//
//ajax('GET', 'http:echo.jsontest.com/userID/108/userName/Akademia108/userURL/Akademia108.pl');
