  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      autoplay:true,
      autoplayTimeout:2000,
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
   
  });