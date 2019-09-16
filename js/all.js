$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });

  $('.top a').click(function (e) { 
     e.preventDefault();

     $('html, body').animate({
      scrollTop: 0}, 800 , 'easeInOutCubic');
    
})
});