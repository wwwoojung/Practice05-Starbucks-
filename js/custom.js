$(function () {
    $('.main_visual .visual_page').addClass('on');

    $(window).on('scroll', function () {
        const sct = $(this).scrollTop()

        if (sct > 0) {
            $('.header_wrap').addClass('on');
        } else {
            $('.header_wrap').removeClass('on');
        }
    })

    $('.main_promotion .promotion_slide').slick({
        autoplay: true,
        pauseOnHover: false,
        dots: false,
        centerMode: true,
        centerPadding: '170px',
        autoplaySpeed: 4000,
    })

    let st = true
    $('.main_promotion .control_dots .play_btn').on('click', function () {
        $(this).toggleClass('on');

        if (st) {
            $('.main_promotion .promotion_slide').slick('slickPause')
        } else {
            $('.main_promotion .promotion_slide').slick('slickPlay')
        }

        st = !st;
    })

    $('.main_promotion .promotion_slide').on('afterChange', function (e, s, c) {
        $('.main_promotion .control_dots .dot').removeClass('on')
        $('.main_promotion .control_dots .dot').eq(c).addClass('on')
    })


    $('.main_promotion .control_dots .dot').on('click', function () {
        let idx = $(this).index() - 1
        $('.main_promotion .promotion_slide').slick('slickGoTo', idx)
    })
})