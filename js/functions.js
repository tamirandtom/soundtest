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
    $('body').scrollTo('.third-section','3s');
        
      });



    
});