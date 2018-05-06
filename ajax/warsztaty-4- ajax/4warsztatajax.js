'use strict';
  
window.addEventListener('scroll', function(){
    
//    pobieram do zmiennej element html
    var doc = document.documentElement;
    
//    pbieram wysokosc elementu HTML
    var docHeight = doc.offsetHeight;
    
//    pobieram odgelglosc biezacej pozycji okna wzgledem pocz dokumentu
    
    var top_ = doc.scrollTop;
    
    
//    obliczam bieżące połpozenie okna przegladarli
    var windowHeight = window.innerHeight;
    
//    obliczam bieżące polozenie okna przegladarki
    
    var topOffset = top_ + windowHeight;
    
//    jesi biezace polozenie okna przregladraki == wysokośc xcałego dokumnetu wykonuje zapytanie AJAX i dostawiam na koncu listy nowe dane
    
    if (topOffset == docHeight) {    
//        console.log("Jestem na końcu strony");
        
        
        
//        zapytanie AJAX
        
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data){
        console.log(document.getElementById('my_list'));
        var newListElement = "";      
              data.forEach(function(elem, ind){
newListElement += '<div class="my_item">';
newListElement += '<div class="my_id">' + elem.id + '</div>';
newListElement += '<div calss="my_name">'+ elem.name +'</div>';
newListElement += '<div class="my_url">' + elem.website + '</div>';
newListElement += '<hr>';
    
        newListElement += '</div>';
        
        
    });
              
    document.getElementById('my_list').insertAdjacentHTML('beforeend', newListElement);         
              

     });
    }
    
  
});








//            
//window.onscroll = function() {
//  var d = document.documentElement;
//  var offset = d.scrollTop + window.innerHeight;
//  var height = d.offsetHeight;
//
//  console.log('offset = ' + offset);
//  console.log('height = ' + height);
//
//  if (offset === height) {
//    console.log('At the bottom');
//      
// $.getJSON("<p>User Id: " + data.userId + "</p>" + 
//                                "<p>User Name: " + data.userName + "</p>" + 
//                                "<p>User Url: " + data.userURL + "</p>" ;   ",
//function (data) {
//    var daneTabeli =   "<p>User Id: " + data.userId + "</p>" + 
//                                "<p>User Name: " + data.userName + "</p>" + 
//                                "<p>User Url: " + data.userURL + "</p>" ;      
//             
//    $('#wyswietl').append(daneTabeli);     
//      
//            
//     
//  }
//};
//
//
//}
//);
//                   

var a= document.documentElement.offsetHeight
var b = window.innerHeight
var c = document.documentElement.scrollTop




////wysokość całego dokumentu
//document.documentElement.offsetHeight
//
////odległosc od poczatku strony
//document.documentElement.scrollTop
//
////wysokość ekranu0przeglądarki
//window.innerHeight