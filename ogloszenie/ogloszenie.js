'use strict';

$(function () {

    var jsonUrl = "http://leguralnie.pl/json/ogloszenia-json.json";

    var getData = function () {
        var myHTML = "";
        var output = $(".offers");

        $.ajax({
            url: jsonUrl,
            dataType: "json",
            success: function (response) {
                response.forEach(function (el, ind) {
                    console.log(el);

                    myHTML += "<div class='offer'>";
                        myHTML += "<figure class='offer__image'>";
                            myHTML += "<img src='" + el.image + "'>";
                        myHTML += "</figure>";
                        myHTML += "<div class= 'offer__description'>";
                        myHTML += "<small> ID: " + el.id + "</small>";
                        myHTML += "<h1>" +el.title + "</h1>";
                        myHTML += "<p>" +el.description + "</p>";
                        myHTML += "<small>";
                    myHTML += "Kategoria: " + el.category + "<br>";
                    myHTML += "Miasto: " + el.city + "<br>";
                    myHTML += "Kontakt: " + el.contact + "<br>";
                        myHTML += "</small>";
                    
                        myHTML += "</div>";
                    myHTML += "</div>";

                });
                output.html(myHTML);
            }
        });

        //        console.log(myHTML);
    }
    var btn = $("#get");

    btn.on("click", function (e) {
        getData();


    });

});



//
//
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
//
//var a= document.documentElement.offsetHeight
//var b = window.innerHeight
//var c = document.documentElement.scrollTop
//
//
//
//
//////wysokość całego dokumentu
////document.documentElement.offsetHeight
////
//////odległosc od poczatku strony
////document.documentElement.scrollTop
////
//////wysokość ekranu0przeglądarki
////window.innerHeight
