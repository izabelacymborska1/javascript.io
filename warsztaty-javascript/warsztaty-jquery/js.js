'use strict';


////paragraf z jakimś tekstem
//korzystając z jquery wrzućcie ten tekst do konsoli
//zmieńcie tekst w tym paragrafie korzystając z funkcji text()
//i znowu wylogujcie
//
//W innym paragrafie, korzystając z jquery, dodajcie kod html
//Potem dodajcie mu coś na koniec korzystając z append()
//i na początek korzystając z prepend()
//wrzućcie kolejny paragraf po nim korzystając z after()
//
//zróbcie element h1 z zawartością w której będzie m.in. tag strong, a 
//potem usuńcie ten tag
//korzystając z jquery remove()
//
//na wszystkich paragrafach zmieńcie z poziomu jquery czcionkę na 30px i 
//kolor na czerwony
//Do elementu h1 dodajcie klasę blue (addClass), która bedzie zdefiniowana 
//w css i będzie
//zmieniać kolor na niebieski


//var tekstwkonsoli = $("#first");
//console.log(tekstwkonsoli.text());
//
//
//$("#first").text("dodaję paragraf do bieżącego");
//console.log(tekstwkonsoli.text());
////
////
////$("#second").text("<h3> Dodaję kod html</h3>");
////$("#second").html("<h3> Dodaję kod html</h3>");
////
////
////
////$("#second").append("dodaję append do kodu html");
////
////$("#second").prepend("dodaję prepend do kodu html");
////
////$("#second").after("dodaję siostrzany paragfaf za pomocą after");
//
//
//
//
//
////
////
////$(function() {
//////    debugger;
////
////
////    //alert('test');
////
////    $('#first').css({
////            color: 'red',
////                'background-color': 'green'
////            });
////    });
//
//
//
//
////znajdzcie element p, który jest drugi na stronie (korzystając z eq())
////i zmieńcie mu background-color na zielony
////
////dla każdego p na stronie dodajcie klasę zgodnie ze wzorcem "paragraf-" + numer paraftafu
////
////
//
//
//$('p').eq(1).css('background-color', 'green');
//
//$('p').each(function(index){
//    
//    $(this).addClass("paragraf-" + (index + 1));
//    
//})
//    
////lub 2-ga formuła na dodanie paragrafdu z użyciem return i wpisujemy ją tu gdzie jest $(this)...
////    i brzmi ona tak:
//////return "paragraf-" + (index + 1);
//
//    
//
////rozwiązanie to 3 foty z tel o 11.15 i  całe zadanie w 1 fukcji zostało  opisane 
//$(function () {
//    var paragraf = $(".p1");
//    console.log(paragraf.text());
//    paragraf.text("zmieniony tekst");
//    console.log(paragraf.text());
//
//
//    var innyParagraf = $(".p2");
//    innyParagraf.html("to jest <strong>HTML</strong>");
//    innyParagraf.append("coś na końcu");
////    innyParagraf.prepend("coś na początku");
////    innyParagraf.after("<p>kolejny paragraf wrzucony z jquery</p>");
////
////
////
////    $("h1>strong").remove();
////    $('p').css({
////        'font-size': '30px',
////        color: 'red'
////
////    })
////
////    $('h1').addClass('blue');
////})
////
////
////
////
////
//////zrobili paragraf z jakimś tekstem który zmieni kolor czcionki na pomaranczowy po kliknięciu
//////
//////zrobili button który po najechaniu na niego myszką zmieni kolor na zielony, a po wyjechaniu myszką na niebieski
////
////
////
//
//
//$('.p3').click(function (){
//    $(this).css("color", "orange");
//    
//})
//
//
//$("#button").on({
//    'mouseenter':function(){
//        $(this).css({
//            'color': 'green',
//            'background-color':'blue'
//        });
//        
//    },
//    
//        'mouseleave':function(){
//    $(this).css({
//            'color': 'blue',
//            'background-color':'green'
//});
//        }
//})
//
//ZADANIE Z ANIMACJI
//paragraf dajcie background i przycisk. Po kliknięciu przysisku paragraf ma się chować (hide) w przeciągu 3s (3000ms), a następnie pokazać w takim samym czasie
//    
//    
//    h1 (dajcie background) i przycisk. Tak jak yżej, ty;lko uzycwając fadeOut i fadeIn
//    
//    h2 i przycisk. Jak wyżej tylko slideUpo i slideDown (czyli bez przycisku)
//
//div i animacja ma się odpalać na załadowaniu strony.Div ma najpierw zwiększać height i width do 200px, a następnie zmniejszać do 100px i tak w kółko


$('p').css('background-color', 'green');


$('#buttonP').click(function () {
    $('p').hide(3000);
    $('p').show(3000);

});

$('#button1').click(function () {
    $('h1').fadeIn(3000);
    $('h1').fadeOut(1000);

});



$('#button2').click(function() {
    $('h2').slideUp(3000);
    $('h2').slideDown(1000);

});

animateDiv();

function animateDiv() {
    $('div')
        .animate({
            width: '200px',
            height: '200px'
        }, 2000)
        .animate({
            width: '100px',
            height: '100px'
        }, 2000, animateDiv)
}
