let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function () {
    $("#phone").mask("+7 (999) 99-99-999");
    $("#phone2").mask("+7 (999) 99-99-999");
    $('a[href^="#"]').click(function () {
        elementID = $(this).attr("href");
        position = $(elementID).offset().top;
        $('html, body').animate({ scrollTop: position }, 500);
        return false;
    });
    $(".header__burger").click(function () {
        $(".header__burger, .header__menu").toggleClass("active")
        $("body").toggleClass("lock")
    })
    $('.jsMenuLink').click(function () {
        $(".header__burger, .header__menu").removeClass("active")
        $("body").removeClass("lock")
    })

    // var tempScrollTop, currentScrollTop = $(window).scrollTop();
    // $(window).scroll(function () {
    //     currentScrollTop = $(window).scrollTop();
    //     if (currentScrollTop > $('header').height()) {
    //         $('body').addClass('fixed-header');
    //         if (tempScrollTop > currentScrollTop) {
    //             $('header').addClass('show')
    //         } else {
    //             $('header').removeClass('show');
    //         }
    //     } else {
    //         $('body').removeClass('fixed-header');
    //         $('header').removeClass('show');
    //     }
    //     tempScrollTop = currentScrollTop;
    // });
});

