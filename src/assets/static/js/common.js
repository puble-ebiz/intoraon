$(function () {

    headerFunc();
    scrollFunc();

});

function headerFunc() {
    var navTab = $(".nav-tab"),
        gNav = $(".gnb .nav"),
        bgDrop = $(".bg-drop");
    navTab.on('click', function () {
        gNav.addClass("on");
    });
    gNav.find(".bg-drop, .i-x").on('click', function () {
        gNav.removeClass("on");
    });
    if ($('.page-home').length) {
        $('.header').addClass('vid');
    }
}

function scrollFunc() {
    var gnb = $(".gnb"),
        header = $(".header"),
        evtPop = $('.event_pop'),
        btnTop = $("#btnTop"),
        top = $(".visual .slide").outerHeight(),
        gnbTop = gnb.height(),
        windowWid = $(window).width();
    var winHt, mainRestH, mainTop;

    $(window).scroll(function () {
        var scr = $(window).scrollTop();
        // console.log(scr);
        // console.log(top); 
        // 상단 해더 고정 배경 클래스 추가
        //console.log(windowWid);

        //메인일때
        if ($('div').hasClass('main')) {
            //console.log('vid');
            winHt = $(window).height(),
                mainRestH = $('#mainRest').height()
            // mainTop = $('.vid-wrap').height();
            mainTop = $('.slider_section.main-visual').height();
            var mainMg = 30,
                mrMg = 6,
                mrMgM = 15;

            if (windowWid < '992') {
                //메인
                if (scr <= (mainTop - gnbTop)) {
                    //console.log('off');
                    gnb.removeClass('on');
                    header.addClass('vid');
                } else if (scr > (mainTop - gnbTop)) {
                    //console.log('on'); 
                    gnb.addClass('on');
                    header.removeClass('vid');
                }

                //메인 팝업
                if (scr <= (mainTop + (mainRestH - mainMg))) {
                    evtPop.removeClass('on');
                    evtPop.css({
                        'top': (Number(winHt) + mainRestH + mainMg) + 'px'
                    });
                } else if (scr > (mainTop + (mainRestH - mainMg))) {
                    evtPop.addClass('on');
                    evtPop.css({
                        'top': (mainMg + mainMg) + 'px'
                    });
                }
            } else {
                //메인
                if (scr <= (mainTop - (gnbTop + mrMg))) {
                    //console.log('off');
                    gnb.removeClass('on');
                    header.addClass('vid');
                } else if (scr > (mainTop - (gnbTop + mrMg))) {
                    //console.log('on');
                    gnb.addClass('on');
                    header.removeClass('vid');
                }

                //메인 팝업
                if (scr <= (mainTop - (mainRestH - mainMg))) {
                    evtPop.removeClass('on');
                    evtPop.css({
                        'top': (Number(winHt) + 90) + 'px'
                    });
                } else if (scr > (mainTop - (mainRestH - mainMg))) {
                    evtPop.addClass('on');
                    evtPop.css({
                        'top': 120 + 'px'
                    });
                }
            }

        } else {
            //console.log('non');
            if (windowWid < '992') {
                if (scr == 0) {
                    gnb.removeClass('on');
                } else if (scr > 0) {
                    gnb.addClass('on');
                }
            } else {
                if (scr <= gnbTop) {
                    gnb.removeClass('on');
                } else if (scr > gnbTop) {
                    //console.log('on_non');
                    gnb.addClass('on');
                }
            }
        }

        // top 버튼 display
        if (scr > top) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    });
    btnTop.on('click', function () {
        $('html, body').stop().animate({
            scrollTop: '0'
        }, 500);
    });
}