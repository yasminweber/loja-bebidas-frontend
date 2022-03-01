$(document).ready(function () {

    //Adicionar classe ao menu - evento scroll
    $(function () {
        $(document).scroll(function () {
            var $menu = $(".menu");
            $menu.toggleClass('scroll', $(this).scrollTop() > $menu.height());
        });
    });

    $('.navbar-toggler').click(function () {
        $(this).toggleClass('ativo');
        $('.menu').toggleClass('ativo');
        $('html').toggleClass('overflow-hidden');
        $('.banner-1').toggleClass('below')
    });

    //Carrossel Banner (banner 1)
    $('.slick-banner').slick({
        infinite: false
    });

    //Carrossel Seção Produto 01 (módulo 1)
    $('.slick-produto-01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true
    });

    //Carrossel Seção Produto 02 (módulo 2)
    $('.slick-produto-02').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
            breakpoint: 998,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true
            }
        }]
    });

    //Carrossel Seção Posts (módulo 4)
    $('.slick-posts').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    });

    //Carrossel Downloads (módulo 23)
    $('.slick-downloads').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        variableWidth: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    AOS.init({
        once: true,
        duration: 600
    });

});