
'use strict';

       

$(function(){

    $("#get").click(function(){
     
       
        
        
        
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",function(data) {
             var daneTabeli = "<p>User Id: " + data.userId + "</p>" + 
                                "<p>User Name: " + data.userName + "</p>" + 
                                "<p>User Url: " + data.userURL + "</p>" ;     
//        console.log(data);
             
             $('#output').html(daneTabeli);
      
});
});
});
    

//
//
//$(function(){
//
//    $("#get").click(function(){
//     
//        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",function(data) { $('#output').html("<p>User Id: " + data.userId + "</p>" + 
//                                "<p>User Name: " + data.userName + "</p>" + 
//                                "<p>User Url: " + data.userURL + "</p>" );        
//            
//});
//});
});
              












    

    

//btn.addEventListener('click', pobierzDane)
    


//var btn = document.getElementById('get');
//var output = document.getElementById('output');
//
//function pobierzDane() {
//    ajax('GET', 'http:echo.jsontest.com/userID/108/userName/Akademia108/userURL/Akademia108.pl');
//
//}
//
//function ajax (method, url) {
//    var httpReq = new XMLHttpRequest();
//    httpReq.open( method, url );
//
//    httpReq.addEventListener('readystatechange', function () {
//        if (httpReq.readyState == 4) {
//            if (httpReq.status == 200) {
//                var data = httpReq.responseText;
////                console.log(data);
//                output.innerHTML = data;
//            }
//        }
//        
//    });
//
//
//httpReq.send();
//}
//
//btn.addEventListener('click', pobierzDane)

