$(document).ready(function() { 
   
    $(".carrousel").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false
    });

    $( ".button" ).click(function() {
    $('html, body').animate({
        scrollTop: $(".third-section").offset().top
     }, 1500);

      });

  
    
});