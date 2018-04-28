'use strict';

//znajdz PARfIRST PO id
var parFirst = document.getElementById("parFirst");
console.log(parFirst);



//znajdz wszystko o klasie superlink
var linki = document.getElementsByClassName("superlink");
console.log(linki);

//znajdz wszystkie tagi a
var linkiPoTagu = document.getElementsByTagName("a");
          console.log(linkiPoTagu);                              
                                         
//elenemty o id parSecond, ale korztysrając z funkcji pobierającej po css (querySelector)
var divPoId= document.querySelector("#parSecond");
console.log(divPoId);
                                         
//pierwszy link używając selektora po klasie superlink
                                         
var pierwszyLinkPoSelektorze= document.querySelector("superlink"); 
console.log(pierwszyLinkPoSelektorze);

// wszystkie linki korzystając po klasie: 2 metody

var LinkiPoSelektorze= document.querySelectorAll("superlink"); 
console.log(LinkiPoSelektorze);


linkiPoSelektorze.forEach {function(link,i)
           console.log(link.outerHTML);               
                          }
                                         
                                         