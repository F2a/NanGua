/* 
* @Author: Marte
* @Date:   2015-11-03 18:52:05
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-15 09:19:07
*/

$('.nav-moblie').on('click', function(e) {
  e.preventDefault();
  $('.navpaging').toggle(300);
  $('.titlep').fadeToggle(300);

});
if(document.documentElement.clientWidth<=766){
  $(window).scroll(function() {
    $('.navpaging').hide(300);
    $('.titlep').show(300);
  });
}
$(window).scroll(function() {
  var scrollTop = window.pageYOffset   
            || document.documentElement.scrollTop    
            || document.body.scrollTop    
            || 0;  if (scrollTop>340) {
    $('nav').css({
      background: '#eee',
      boxShadow: '0 1px 8px 1px #333'
    });
    $('.navpaging').css({
      background: '#eee'
    });
    $('nav a').css({
      color:'#333'
    });
  }else{
    $('nav').css({
      background: 'transparent',
      boxShadow: 'none'
    });
    $('.navpaging').css({
      background: 'transparent',
    });
    $('nav a').css({
      color:'#ddd'
    });
  }
});
$(function(){
  $('.footer').css({
    height: document.documentElement.clientHeight
  });     
});
$('.hlist').on('click', 'a', function(event) {
  event.preventDefault();
  $('.hcontainer div').addClass('hidden');
  $('.hcontainer div:nth-child('+$(this).data('i')+')').removeClass('hidden');
  console.log($('.hcontainer div:nth-child('+$(this).data('i')+')'))
  $('.hlist').children('li').removeClass('active');
  $(this).parent().addClass('active');
  $('.crumbs li:nth-child(3)').html($(this).html());
});



