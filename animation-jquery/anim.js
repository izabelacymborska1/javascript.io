'use strict';

$(function(){

$('#btn-animuj').on('click', function() {
    console.log('Działa');
    
    $('#anim').animate({
        
        'top': '200px',
        'left': '300px',
        'width': '500px',
        'height': '350px',
        'border-radius':'50%'
        
        
        
    },1500,function(){
        $('#anim').addClass('new_background');
//        bu zmienic kolor diva dodajemy klasę
        
        $('#anim').delay(2000).animate({
//    tu animujemy diva 
        'top': '0',
        'left': '200px',
        'width': '100px',
        'height': '150px',
        'border-radius':'0%'
            

        },3000);
        
    });
    
    
});
    
});





//$('#btn-animuj').click('click', function () {
//    console.log('Działa');
//
//});
//
//$('#btn-animuj').mouseenter('click', function () {
//    console.log('Działa');
//
//});
//
//
//$('#btn-animuj').mouseleave('click', function () {
//    console.log('Działa');
//    
//});
//
//
//$('#btn-animuj').on({
//        'click': function () {},
//        'mouseenter': function () {},
//        'mouseleave': function () {},
//
//    }
//
//    console.log('Działa');
//
//);
