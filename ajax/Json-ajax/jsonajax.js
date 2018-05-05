'use strict';
$(function(){
    
    
    function showData(arrData) {
   var html = "";
        
    arrData.forEach(function( elem, index) {
        
       html += "<p>Tytuł: <strong>" + elem.title + " </strong></p>";
        
        
        
//        console.log(elem.title);
//        
//        console.log("===================")
    });
    
    
//    wyswietla w body co petla zrobiła czyli utwirzuył 100 paragrafów z trescią 
    document.body.innerHTML = html;
}
    
    
    $.getJSON("https://jsonplaceholder.typicode.com/posts",function(data) {
        
       showData( data);
    
});
});




