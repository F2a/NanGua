/* 
* @Author: Marte
* @Date:   2015-10-29 20:12:26
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-16 13:13:13
*/

$(document).ready(function(){
    $('#banner').css({
      height: document.documentElement.clientHeight-60
    });     
    $('.footer').css({
      height: document.documentElement.clientHeight
    });     

    $(window).bind("scroll",function() {
      var scrollTop = window.pageYOffset   
                || document.documentElement.scrollTop    
                || document.body.scrollTop    
                || 0;
      if (scrollTop>parseInt($('#banner').css('height'))) {
        $('nav').css({
          position: 'fixed',
          background: '#eee'
        });; 
        $('.logo').removeClass('hidden');
        $('.phone').removeClass('hidden');
        $('nav ul.navtop').addClass('hidden');
        $('nav ul.navbuttom').removeClass('hidden');
        $('.nav-moblie').css('height','34px');
      }else{
        $('nav').css({
          position: 'static',
          background: '#19233C'
        });; 
        $('.logo').addClass('hidden');
        $('.phone').addClass('hidden');
        $('nav ul.navtop').removeClass('hidden');
        $('nav ul.navbuttom').addClass('hidden');
        $('.nav-moblie').css('height','0');
      }
    });
    $('.slidebtn').on('click mouseover', 'li', function() {
      $(this).addClass('active');
      $(this).siblings('li').removeClass('active');
      var width = parseInt($('.slidebox').css('width'));
      $('.slideblock').css('left', $(this).data('i')*-width);
    });
    $('.nav-moblie>a').on('click', function(e) {
      e.preventDefault();
      $('.navbuttom').toggle(300);
    });

    if(document.documentElement.clientWidth<=766){
      $(window).bind("scroll",function() {
        $('.navbuttom').hide(300);
      });
    }
    $('.ncontainer ul').on('click', 'a', function(event) {
      event.preventDefault();
      if($(this).data('i')==1){
        $("html,body").animate({
         scrollTop: $('.section'+$(this).data('i')).offset().top+1
         }, 500);
      }else{
        $("html,body").animate({
         scrollTop: $('.section'+$(this).data('i')).offset().top-60
         }, 500);
      }
    });
    $('.title>a').on('click', function(event) {
      event.preventDefault();
      $("body").animate({
       scrollTop: 735
       }, 500);
      $("html").animate({
       scrollTop: 685
       }, 500);
    });
    $('.phone').on('click', function(event) {
      event.preventDefault();
       $("html,body").animate({
        scrollTop: $('.footer').offset().top-60
        }, 500);
    });
});