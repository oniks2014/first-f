$(document).ready(function(){
 
   



 $(".top_menu_button").click(function () {
      $(".main_menu li").slideToggle();
    });

  
  $(".owl-carousel").owlCarousel({
    
      items:1,
  loop:true,
  
 dotsData:false,
 nav:false,
  dots:false,

   
  });
   


              new WOW().init();
          
});
$('.navbar-toggler').on('click', function(e) {
  e.preventDefault;
  
        $(this).toggleClass('active');

});