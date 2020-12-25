"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  setTimeout(function () {
    document.querySelector('html').style.overflowY = 'scroll';
    document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5;';
  }, 2000);
  /*
      increase date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('p output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year);
  }
  /*
      fancybox settings
   */


  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.animationEffect = 'fade';
  /*
      catalog photo slider
   */

  var sliderSettings = {
    items: 2,
    margin: 10,
    loop: false,
    nav: false,
    dots: true,
    responsive: {
      577: {
        items: 4,
        loop: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  };
  $('.catalog__shoe.boots .catalog__shoe-img .images').owlCarousel(sliderSettings);
  $('.catalog__shoe.sneakers .catalog__shoe-img .images').owlCarousel(sliderSettings);
  /*
      change active size in catalog
   */

  var allSize = document.querySelectorAll('.size p');

  var _loop = function _loop(_i2) {
    var _loop4 = function _loop4(j) {
      allSize[j].addEventListener('click', function () {
        allSize[_i2].classList.remove('active');

        allSize[j].classList.add('active');
      });
    };

    for (var j = 0; j < allSize.length; j++) {
      _loop4(j);
    }
  };

  for (var _i2 = 0; _i2 < allSize.length; _i2++) {
    _loop(_i2);
  }
  /*
      change active color and photo in catalog
   */


  var bootsColors = document.querySelectorAll('.catalog__shoe.boots .color span'),
      bootsBigImg = document.querySelector('.catalog__shoe.boots img.big'),
      bootsSmallImg = document.querySelectorAll('.catalog__shoe.boots .images a img'),
      bootsSmallImgLink = document.querySelectorAll('.catalog__shoe.boots .images a'),
      sneakersColors = document.querySelectorAll('.catalog__shoe.sneakers .color span'),
      sneakersBigImg = document.querySelector('.catalog__shoe.sneakers img.big'),
      sneakersSmallImg = document.querySelectorAll('.catalog__shoe.sneakers .images a img'),
      sneakersSmallImgLink = document.querySelectorAll('.catalog__shoe.sneakers .images a'),
      change = function change(color, img, images, link, type) {
    var _loop2 = function _loop2(_i3) {
      var _loop3 = function _loop3(j) {
        color[j].addEventListener('click', function () {
          if (color[j].classList.contains('active')) {
            color[_i3].classList.remove('active');

            color[j].classList.add('active');
          } else {
            var activeColor = color[j].className;

            color[_i3].classList.remove('active');

            color[j].classList.add('active');
            img.style.opacity = '0';

            for (var _i4 = 0; _i4 < link.length; _i4++) {
              link[_i4].style.opacity = '0';
            }

            setTimeout(function () {
              img.src = "img/catalog/".concat(type, "-").concat(activeColor, "/big.png");

              for (var _i5 = 0; _i5 < link.length; _i5++) {
                link[_i5].href = "img/catalog/".concat(type, "-").concat(activeColor, "/").concat(_i5 + 1, "-1000.jpg");
                link[_i5].dataset.fancybox = "".concat(type, "-").concat(activeColor);
                images[_i5].src = "img/catalog/".concat(type, "-").concat(activeColor, "/").concat(_i5 + 1, ".jpg");
              }
            }, 500);
            setTimeout(function () {
              img.style.opacity = '1';

              for (var _i6 = 0; _i6 < link.length; _i6++) {
                link[_i6].style.opacity = '1';
              }
            }, 1000);
          }
        });
      };

      for (var j = 0; j < color.length; j++) {
        _loop3(j);
      }
    };

    for (var _i3 = 0; _i3 < color.length; _i3++) {
      _loop2(_i3);
    }
  };

  change(bootsColors, bootsBigImg, bootsSmallImg, bootsSmallImgLink, 'boots');
  change(sneakersColors, sneakersBigImg, sneakersSmallImg, sneakersSmallImgLink, 'sneakers'); // class Shoe {
  //     constructor(color, bigImg) {
  //         this.color = color;
  //         this.bigImg = bigImg;
  //     }
  //
  //     change() {
  //         let color = this.color;
  //         for(let i = 0; i < color.length; i++) {
  //             for(let j = 0; j < color.length; j++) {
  //                 color[j].addEventListener('click', () => {
  //                     if(color[j].classList.contains('active')) {
  //                         color[i].classList.remove('active');
  //                         color[j].classList.add('active');
  //                     } else {
  //                         let activeColor = color[j].className;
  //                         color[i].classList.remove('active');
  //                         color[j].classList.add('active');
  //
  //                     }
  //                 })
  //             }
  //         }
  //     }
  // }
  //
  // const boots = new Shoe(document.querySelectorAll('.catalog__shoe.boots .color span'));
  // boots.change();

  /*
      review slider
   */

  $('.review__content-slider').owlCarousel({
    items: 1,
    margin: 35,
    loop: true,
    dots: true,
    nav: false,
    responsive: {
      577: {
        items: 2
      },
      980: {
        items: 3,
        dots: false,
        nav: true,
        navText: ['<img src="../img/arrow.png" alt="">', '<img src="../img/arrow.png" alt="">']
      }
    }
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

  /*
      toggle bucket
   */

  var toggleCart = function toggleCart() {
    var bucket = document.querySelector('a.cart'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        photoTopPosition = document.querySelector('.photo').offsetTop,
        informationPosition = $('.information ').offset().top;

    if (topOfWindow > catalogTopPosition && topOfWindow < photoTopPosition || topOfWindow > informationPosition) {
      bucket.style.cssText = 'opacity: 0; z-index: -5;';
    } else {
      bucket.style.cssText = 'opacity: 1; z-index: 999;';
    }
  };
  /*
      slow scroll
   */


  var slowScroll = function slowScroll(href) {
    $('.to-order a, a.cart').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
      return false;
    });
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight;
    slowScroll(href);
    window.addEventListener('scroll', function () {
      toggleCart();
    });
    window.addEventListener('resize', function () {
      toggleCart();
    });
  } else {
    var _href = $('#catalog').offset().top;
    slowScroll(_href);
  }
};