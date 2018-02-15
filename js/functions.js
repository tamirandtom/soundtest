$(document).ready(function() { 
   
    $(".carrousel").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false
    });


    $('.carrousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.carrousel .slick-dots li').removeClass('slick-active').attr('aria-hidden','true');
        $('.carrousel .slick-dots li button').focus(function() {
        this.blur();
        });
        });


    $( ".button" ).click(function() {
    $('html, body').animate({
        scrollTop: $(".third-section").offset().top
     }, 1500);

      });

  
    
});