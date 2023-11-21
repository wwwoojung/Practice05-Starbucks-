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
        dots: true,
        centerMode: true,
        centerPadding: '180px',
        autoplaySpeed: 5000,
    })
})