$(function () {
    window.addEventListener('load', function () {
        var spinner = document.querySelector('.cssload-ball');
        var wrapSpin = document.querySelector('.wrap_load');
        setTimeout(function () {
            console.log('Страница загружена');
            wrapSpin.style.display = 'none';
            spinner.className = 'spinning';
        }, 3000)
    });
    var menuNavLink = $('.menu_nav_link');
    var apearNavLink = $('.apear_nav_link');
    var apear_list = $('.apear_list');
    $(menuNavLink).on('click', function () {
        apear_list.animate({
            'height': 'toggle',
        })
        // apearNavLink.animate({
        //     'display': 'block',
        // })
    });
    var newsLink = $('.news_link');
    var newsNavigate = $('.news_navigate');
    var newsNavItem = $('.news_nav_item');
    $(newsLink).on('click', function () {
        newsNavigate.slideToggle(500)
        // newsNavItem.animate({
        //     'display': 'block',
        //     'height': 'toggle',
        // })
    });
    var portfolioLink = $('.portfolio_link');
    var portfolioNavigate = $('.portfolio_navigate');
    var portfolioNavItem = $('.portfolio_nav_item');
    $(portfolioLink).on('click', function () {
        portfolioNavigate.slideToggle(500)
        // portfolioNavItem.animate({
        //     'display': 'block',
        //     'height': 'toggle',
        // })
    });

    // $('a').on('click', function (event) {
    //     event.preventDefault();
        
    // })


    // var apearNewsLink = $('.apear_news_link');
    // var newsNavigate = $('.news_navigate');
    var navToggle = $('.apear_nav_link');
    $(navToggle).on('click', function () {
        $(this).next().slideToggle(500);
        // newsNavLink.animate({
        //     'height': 'toggle',
        //     'display': 'block',
        // })
    });
    // var apearPortfolioLink = $('.apear_portfolio_link')
    // var portfolioNavLink = $('.portfolio_nav_link');
    // $(apearPortfolioLink).on('click', function () {
    //     portfolioNavigate.animate({
    //         'height': 'toggle',
    //         'display': 'block',
    //     }),
    //         portfolioNavLink.animate({
    //             'height': 'toggle',
    //             'display': 'block',
    //         })
    // });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        }
    })
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        // let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})