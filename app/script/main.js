let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

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


    class Shoe {
        constructor(color, bigImg) {
            this.color = color;
            this.bigImg = bigImg;
        }

        change() {
            let color = this.color;
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

                        }
                    })
                }
            }
        }
    }

    const boots = new Shoe(document.querySelectorAll('.catalog__shoe.boots .color span'));
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
                items: 2,
            },
            980: {
                items: 3,
                dots: false,
                nav: true,
                navText: ['<img src="../img/arrow.png" alt="">', '<img src="../img/arrow.png" alt="">'],
            }
        }
    });

    // $('.review__content-slider').slick({
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
