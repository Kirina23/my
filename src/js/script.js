$(document).ready(function(){
   $('.carousel__inner').slick({
      speed: 1200,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"> <img src="img/slider/arrowleft.png"> </button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="img/slider/arroowright.png"> </button>',
      responsive: [
   {
      breakpoint: 760,
      settings: {
      arrows: false,
      autoplay: true
      }
   }
]
   });
});