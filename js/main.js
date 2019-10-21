$(document).ready(function () {
    var headerEl = $('#header');
    var section1El = $('#main .section1');
    var section2El = $('#main .section2');
    var section3El = $('#main .section3');
    var section5El = $('#main .section5');
    var gnbLi = $('#header .bottom_header .gnb .gnb_bar');

    $('#header .bottom_header .gnb').on('mouseenter', function () {
        headerEl.addClass('on');
    });

    $('#header').on('mouseleave', function () {
        headerEl.removeClass('on');

    });

    // 메인슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        speed: 900,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // 프리뷰,넥스트 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'button',
        },
    });
    $('#main .main_slider .btn_toggle').on('click', function () {
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            mySwiper.autoplay.stop();
        } else {
            mySwiper.autoplay.start();
        }
    });

    // 스크롤탑 효과처리
    $(window).scroll(function () {
        var posY = $(this).scrollTop();
        console.log(posY);
        // 섹션1 스크롤탑 온클래스
        if (posY >= 230) {
            section1El.addClass('on');
        }
        // 섹션2 스크롤탑 온클래스
        if (posY >= 1020) {
            section2El.addClass('on');
        }
        // 섹션3 스크롤탑 온클래스
        if (posY >= 1400) {
            section3El.addClass('on');
        }
        // 섹션5 스크롤탑 온클래스
        if (posY >= 3100) {
            section5El.addClass('on');
        }

        if (posY == 0) {
            $('#main .section1').removeClass('on');
            $('#main .section2').removeClass('on');
            $('#main .section3').removeClass('on');
            $('#main .section5').removeClass('on');
        }
    });
    // 서브페이지 메뉴소개 슬라이더
    var mySwiper2 = new Swiper('.menu_slider', {
        loop: true,
        speed: 700,
        slidesPerView:'auto',
        simulateTouch: false,
            // 프리뷰,넥스트 버튼
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    });
    // 서브페이지 세트메뉴보기 버튼 토글
    $('#container.menu_page .menu_cover .btn_set').on('click',function(e) {
        e.preventDefault(); //a태그 기본이벤트 막기
        // 세트메뉴보기 버튼 클릭시 세트메뉴팝업 열기
        $('#container.menu_page .menu_popup').show();
    });    
    $('#container.menu_page .menu_popup .popup_wrap .btn_close').on('click',function(e) {
        // X버튼 클릭시 세트메뉴팝업 닫기
       $('#container.menu_page .menu_popup').hide();
    });
    // 체크박스 전체 클릭시 모두 클릭되게
    $('#all').on('click',function() {
	   $(this).siblings('input').prop('checked',this.checked);
    });
});













