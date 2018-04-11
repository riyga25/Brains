$(document).ready(function () {
    // работа бургера
    $('.burger').on('click',function () {
        $(this).toggleClass('burger_active');
        $(this).parent().find('.nav_mobile').toggleClass('nav_active');
    });

    // клик по меню должен закрывать меню
    $('.nav__item').on('click',function () {
        $(this).parent().removeClass('nav_active');
        $(this).closest('.home').find('.burger').removeClass('burger_active');
    });

    // плавный скролл при клике на ссылки
    $('a').on('click',function () {
        var link = $(this).attr("href");
        $('html, body').animate({scrollTop:$(link).position().top}, 1000);
    });

    // прилипание меню при скролле
    $(function(){
        var block = $('.home').height();
        $(window).scroll(function() {
            if($(this).scrollTop() >= block) {
                $('nav').addClass('nav_scroll');
            }
            else{
                $('nav').removeClass('nav_scroll');
            }
        });
    });

    // слайдер партнеры
    $('.partners .slider').owlCarousel({
        items : 1,
        margin : 20,
        nav : true,
        dots : false,
        navText : [],
        navContainer : '.partners__slider',
        autoplay : true,
        loop : true,
        responsive : {
            640 : {
                items: 3,
                margin: 20
            },
            1024 : {
                items: 5,
                margin: 50
            },
        }
    });

    var moreItems =[
        "<div class=\"card\" style=\"background-image: url('assets/img/1.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/2.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/3.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/7.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/6.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/5.png')\"></div>",
        "<div class=\"card\" style=\"background-image: url('assets/img/4.png')\"></div>"
    ];

    $('.portfolio__button').one('click',function () {
        $('.porfolio__row_two').append(moreItems);
    });

    // показать/скрыть элементы
    $('.portfolio__button').on('click',function () {

        if($(this).text() === 'Скрыть'){
            $(this).text('Показать все');
            $('.porfolio__row_two').hide('.porfolio__row_two');
        }
        else{
            $(this).text('Скрыть');
            $('.porfolio__row_two').show('.porfolio__row_two');
        }
    });

});

