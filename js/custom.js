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
        autoplaySpeed: 5000,
    })


    let st = true
    $('.main_promotion .promotion_slide .slick-dots::before').on('click', function () {

        if (st) {
            $('.main_promotion .promotion_slide').slick('slickPause')
        } else {
            $('.main_promotion .promotion_slide').slick('slickPlay')
        }

        st = !st;
    })
})