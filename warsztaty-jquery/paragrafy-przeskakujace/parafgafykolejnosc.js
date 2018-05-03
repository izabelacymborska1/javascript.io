'use strict';

$(document).ready(function(){
  
  $('#wdol').click(function(){
    $('p:last').insertBefore($('p:first'));
    
});
    
  $('#wgore').click(function(){
    $('p:first').insertAfter($('p:last'));
  
 });
});