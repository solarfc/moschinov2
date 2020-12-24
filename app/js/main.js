"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      catalog photo slider
   */

  /*
      change active size in catalog
   */

  var allSize = document.querySelectorAll('.size p');

  var _loop = function _loop(i) {
    var _loop4 = function _loop4(j) {
      allSize[j].addEventListener('click', function () {
        allSize[i].classList.remove('active');
        allSize[j].classList.add('active');
      });
    };

    for (var j = 0; j < allSize.length; j++) {
      _loop4(j);
    }
  };

  for (var i = 0; i < allSize.length; i++) {
    _loop(i);
  }
  /*
      change active color and photo in catalog
   */


  var Shoe = /*#__PURE__*/function () {
    function Shoe(color, bigImg) {
      _classCallCheck(this, Shoe);

      this.color = color;
      this.bigImg = bigImg;
    }

    _createClass(Shoe, [{
      key: "change",
      value: function change() {
        var color = this.color;

        var _loop2 = function _loop2(_i) {
          var _loop3 = function _loop3(j) {
            color[j].addEventListener('click', function () {
              if (color[j].classList.contains('active')) {
                color[_i].classList.remove('active');

                color[j].classList.add('active');
              } else {
                var activeColor = color[j].className;

                color[_i].classList.remove('active');

                color[j].classList.add('active');
              }
            });
          };

          for (var j = 0; j < color.length; j++) {
            _loop3(j);
          }
        };

        for (var _i = 0; _i < color.length; _i++) {
          _loop2(_i);
        }
      }
    }]);

    return Shoe;
  }();

  var boots = new Shoe(document.querySelectorAll('.catalog__shoe.boots .color span'));
  boots.change();
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
};