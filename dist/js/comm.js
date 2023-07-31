var swiper = new Swiper(".slide-g", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".sale-slide", {});


// var splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   perPage: 3,
// } );

// splide.mount();

var splide = new Splide( '.splide', {
  perPage: 3,
  focus  : 0,
  omitEnd: true,
} );

splide.mount();