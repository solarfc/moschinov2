"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      fancybox settings
   */
  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.animationEffect = 'fade';
  /*
      review slider
   */

  $('.review__content-slider').owlCarousel({
    items: 3,
    margin: 35,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<img src="../img/arrow.png" alt="">', '<img src="../img/arrow.png" alt="">']
  }); // $('.review__content-slider').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //     centerMode: true,
  //     centerPadding: 0,
  //     rows: 0,
  //     speed: 300,
  //     arrows: true
  // })
  // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};