
'use strict';
  
            
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;

  console.log('offset = ' + offset);
  console.log('height = ' + height);

  if (offset === height) {
    console.log('At the bottom');
      
 $.getJSON("<p>User Id: " + data.userId + "</p>" + 
                                "<p>User Name: " + data.userName + "</p>" + 
                                "<p>User Url: " + data.userURL + "</p>" ;   ",
function (data) {
    var daneTabeli =   "<p>User Id: " + data.userId + "</p>" + 
                                "<p>User Name: " + data.userName + "</p>" + 
                                "<p>User Url: " + data.userURL + "</p>" ;      
             
    $('#wyswietl').append(daneTabeli);     
      
            
     
  }
};


}
);
                   

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