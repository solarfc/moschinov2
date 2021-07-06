let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    // setTimeout(() => {
    //     document.querySelector('html').style.overflowY = 'scroll';
    //     document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5;';
    // }, 2000);

    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('p output');

    tomorrow.setDate(today.getDate() + i);
    day = tomorrow.getDate() > 9 ? tomorrow.getDate() : `0${tomorrow.getDate()}`
    month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear();

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year}`;
    }

    /*
        fancybox settings
     */

    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.animationEffect = 'fade';

    /*
        catalog photo slider
     */

    const sliderSettings = {
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
    }

    $('.catalog__shoe.boots .catalog__shoe-img .images').owlCarousel(sliderSettings);
    $('.catalog__shoe.sneakers .catalog__shoe-img .images').owlCarousel(sliderSettings);

    /*
        change active size in catalog
     */

    const allSize = document.querySelectorAll('.size p');

    for(let i = 0; i < allSize.length; i++) {
        for (let j = 0; j < allSize.length; j++) {
            allSize[j].addEventListener('click', () => {
               allSize[i].classList.remove('active');
               allSize[j].classList.add('active');
            });
        }
    }

    /*
        change active color and photo in catalog
     */

    const bootsColors = document.querySelectorAll('.catalog__shoe.boots .color span'),
        bootsBigImg = document.querySelector('.catalog__shoe.boots img.big'),
        bootsSmallImg = document.querySelectorAll('.catalog__shoe.boots .images a img'),
        bootsSmallImgLink = document.querySelectorAll('.catalog__shoe.boots .images a'),
        sneakersColors = document.querySelectorAll('.catalog__shoe.sneakers .color span'),
        sneakersBigImg = document.querySelector('.catalog__shoe.sneakers img.big'),
        sneakersSmallImg = document.querySelectorAll('.catalog__shoe.sneakers .images a img'),
        sneakersSmallImgLink = document.querySelectorAll('.catalog__shoe.sneakers .images a'),
        change = (color, img, images, link, type) => {
            for(let i = 0; i < color.length; i++) {
                for(let j = 0; j < color.length; j++) {
                    color[j].addEventListener('click', () => {
                        if(color[j].classList.contains('active')) {
                            color[i].classList.remove('active');
                            color[j].classList.add('active');
                        } else {
                            let activeColor = color[j].className;
                            color[i].classList.remove('active');
                            color[j].classList.add('active');
                            img.style.opacity = '0';
                            for(let i = 0; i < link.length; i++) {
                                link[i].style.opacity = '0'
                            }
                            setTimeout(() => {
                                img.src = `img/catalog/${type}-${activeColor}/big.png`;
                                for(let i = 0; i < link.length; i++) {
                                    link[i].href = `img/catalog/${type}-${activeColor}/${i + 1}-1000.jpg`;
                                    link[i].dataset.fancybox = `${type}-${activeColor}`;
                                    images[i].src = `img/catalog/${type}-${activeColor}/${i + 1}.jpg`;
                                }
                            }, 500);
                            setTimeout(() => {
                                img.style.opacity = '1';
                                for(let i = 0; i < link.length; i++) {
                                    link[i].style.opacity = '1'
                                }
                            }, 1000);
                        }
                    })
                }
            }
        };
    change(bootsColors, bootsBigImg, bootsSmallImg, bootsSmallImgLink, 'boots');
    change(sneakersColors, sneakersBigImg, sneakersSmallImg, sneakersSmallImgLink, 'sneakers');

    /*
        the same height of the review text
     */

    $(function() {
        $('.review__content-slider figure p').matchHeight(
            {
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            }
        );
    });


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
                items: 2,
            },
            980: {
                items: 3,
                dots: false,
                nav: true,
                navText: ['<img src="img/arrow.png" alt="">', '<img src="img/arrow.png" alt="">'],
            }
        }
    });

    /*
        toggle bucket
     */

    const toggleCart = () => {
        let bucket = document.querySelector('a.cart'),
            topOfWindow = window.pageYOffset + innerHeight,
            catalogTopPosition = document.querySelector('.catalog').offsetTop,
            photoTopPosition = document.querySelector('.photo').offsetTop,
            informationPosition = $('.information ').offset().top;

        if(topOfWindow > catalogTopPosition && topOfWindow < photoTopPosition || topOfWindow > informationPosition) {
            bucket.style.cssText = 'opacity: 0; z-index: -5;'
        } else {
            bucket.style.cssText = 'opacity: 1; z-index: 999;'
        }
    };

    /*
        slow scroll
     */

    const slowScroll = (href) => {
        $('.to-order a, a.cart').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
            return false;
        })
    }

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
        let href = $('#mobile-order').offset().top - innerHeight;
        slowScroll(href);

        window.addEventListener('scroll', () => {
            toggleCart();
        });
        window.addEventListener('resize', () => {
            toggleCart();
        });

    } else {
        let href = $('#catalog').offset().top;
        slowScroll(href);
    }
};



// $.ajax(`https://repetitora.net/api/JS/Images`, {
//     success: function (data) {
//         data.forEach(el => {
//             const img = document.createElement('img');
//             img.src = el.thumbnail;
//             document.querySelector('body').append(img);
//         });
//     }
// });