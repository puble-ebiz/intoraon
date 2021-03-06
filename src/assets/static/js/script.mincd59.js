var windowWidth = $(window).width();
if (br_check() == 'Chrome') windowWidth = windowWidth + 17;
var windowScrollTop = $(window).scrollTop();
var topNavi = $('.top_navi>.navi_scroll');
var side = topNavi.find('.list');
$(document).ready(function () {
    $('.word_break').wordBreakKeepAll();
    $('input,textarea').placeholder();
    $('.tooltip').tooltip();
    var chkin = $('.datepicker_in');
    var chkot = $('.datepicker_ot');
    var datepicker_ot = new Object;
    var datepicker_in = new Object;
    var period = $('.set_period_date');
    if (chkin.length !== 0) {
        var opt = {
            format: 'yyyy-mm-dd',
            language: 'tm',
            autoclose: !0,
            startDate: get_today()
        }
        datepicker_in = chkin.datepicker(opt);
    }
    if (chkot.length !== 0) {
        var opt = {
            format: 'yyyy-mm-dd',
            language: 'tm',
            autoclose: !0,
        };
        opt.startDate = chkin.length !== 0 ? calculation_date(chkin.val(), 1, '+') : $('[name*="v_sttdate"]').val();
        datepicker_ot = chkot.datepicker(opt);
    }
    if (chkin.length !== 0 && chkot.length !== 0) {
        datepicker_in.on('changeDate', function () {
            var click = new convert_date($(this));
            var click_date = click.getUnix();
            var out_date = date_unix(datepicker_ot.val());
            datepicker_ot.datepicker('setStartDate', false);
            datepicker_ot.datepicker('setDate', click.getOpdt(+1));
            datepicker_ot.datepicker('setStartDate', click.getOpdt(+1));
            if ($('.set_period_date').length !== 0) {
                $('.set_period_date').val(get_period($('.datepicker_in').val(), $('.datepicker_ot').val()));
            }
        });
        if ($('.set_period_date').length !== 0) {
            datepicker_ot.on('changeDate', function () {
                $('.set_period_date').val(get_period($('.datepicker_in').val(), $('.datepicker_ot').val()));
            });
        }
    }
    if ($('.set_period_date').length !== 0) {
        $('.set_period_date').bind('change keyup', function (
            event) {
            var period = $(this).val();
            if (period != '' && period != 0 && period <= 100) {
                var date = calculation_date($('.datepicker_in').val(), parseInt(period), '+');
                datepicker_ot.datepicker('setDate', date);
            } else {
                var date = calculation_date($('.datepicker_in').val(), 1, '+');
                datepicker_ot.datepicker('setDate', date);
            }
        });
    }
    $('.icon-101').click(function () {
        $(this).prev('input').focus();
    });
    $('input,textarea').placeholder();
    if ($('#slider_main').length !== 0) {
        var option = {
            $AutoPlay: !0,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: [{
                    $Duration: 1200,
                    $Opacity: 2
                }],
                $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1,
                $AutoCenter: 2,
                $Steps: 1
            }
        }
        var option2 = {
            $AutoPlay: !0,
            $SlideWidth: 1000,
            $Cols: 3,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            }
        }
        var option3 = {
            $AutoPlay: !0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1,
                $AutoCenter: 2,
                $Steps: 1
            },
        }
        option2['$Align'] = !detectmob() ? 460 : 0;
        var jssor_main = new $JssorSlider$('slider_main', option);
        var jssor_mmain = new $JssorSlider$('slider_mmain', option);
        var jssor_footer = new $JssorSlider$('slider_footer', option2);
        if ($('#slider_pop').length !== 0) {
            var jssor_pop = new $JssorSlider$('slider_pop', option);
        }
        var ScaleSlider = function () {
            jssor_main.$ScaleWidth(Math.min($(window).width(), 1922));
            jssor_mmain.$ScaleWidth(Math.min($(window).width(), 720));
            jssor_footer.$ScaleWidth(Math.min($(window).width(), 1922));
            if ($('#slider_pop').length !== 0) {
                jssor_pop.$ScaleWidth(Math.min(jssor_pop.$Elmt.parentNode.clientWidth, 450));
            }
        }
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
    }
    if ($('#slider_about1').length !== 0) {
        var jssor_main2 = new $JssorSlider$('slider_about1', {
            $AutoPlay: !0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1,
                $AutoCenter: 2,
                $Steps: 1
            }
        });
        var ScaleSlider2 = function () {
            jssor_main2.$ScaleWidth(Math.min($('.main_about > div').width(), 550))
        }
        $(window).bind("resize", ScaleSlider2);
    }
    if ($('#slider_about2').length !== 0) {
        var jssor_main3 = new $JssorSlider$('slider_about2', {
            $AutoPlay: !0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1,
                $AutoCenter: 2,
                $Steps: 1
            }
        });
        var ScaleSlider3 = function () {
            jssor_main3.$ScaleWidth(Math.min($('.main_best > div').width(), 550))
        }
        $(window).bind("resize", ScaleSlider3);
    }
    if ($('#slider_room').length !== 0) {
        var op = {
            $AutoPlay: !0,
            $SlideWidth: 1000,
            $Cols: 3,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            }
        }
        op['$Align'] = !detectmob() ? 460 : 0;
        var jssor_main = new $JssorSlider$('slider_room', op);
        var ScaleSlider2 = function () {
            jssor_main.$ScaleWidth(Math.min($(window).width(), 1922));
        }
        $(window).bind("resize", ScaleSlider2);
    }
    if ($('#map_box').length !== 0) {
        var container = document.getElementById('map_box');
        var options = {
            center: new daum.maps.LatLng(37.889384, 128.825703),
            level: 4
        };
        var map = new daum.maps.Map(container, options);
        var markerPosition = new daum.maps.LatLng(37.889384, 128.825703);
        var marker = new daum.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }
    var imgView = $('.image_view');
    imgView.click(function () {
        var ivc = $('.image_view_container');
        var view = ivc.find('.view');
        var img_url = $(this).css('background-image').substring(5);
        img_url = img_url.substring(0, img_url.length - 2);
        ivc.show();
        view.append('<img src="' + img_url + '" class="pop-img" />');
        var img = $('.pop-img');
        if (windowWidth < view.innerWidth() + 35) {
            view.css({
                left: 10 + 'px'
            });
        } else {
            view.css({
                marginLeft: -((img.width() + 60) / 2)
            });
        }
        if ($(window).height() < view.innerHeight()) {
            view.css({
                top: 10 + 'px'
            });
        } else {
            view.css({
                marginTop: -((img.height() + 60) / 2)
            });
        }
        $('.img-remove').click(function () {
            ivc.find('img').remove();
            view.removeAttr('style');
            ivc.hide();
        });
    });
    $(window).resize(function (e) {
        windowWidth = $(window).width();
        if (br_check() == 'Chrome') windowWidth = windowWidth + 17;
        naviFixed();
        box_right();
    }).resize();
    $(window).scroll(function () {
        windowScrollTop = $(window).scrollTop();
        naviFixed();
        box_right();
    });
    $('.side_toggle, .left_overlay').unbind('click').click(function () {
        var over = $('.left_overlay');
        if (side.css("left") === '-350px') {
            side.animate({
                'left': 0
            }, 'fast', function () {
                over.fadeIn();
            });
        } else {
            side.animate({
                'left': -350 + 'px'
            }, 'fast');
            over.fadeOut('fast');
        }
    });
    topNavi.find('.title').click(function () {
        if (windowWidth < 767) {
            var tg = $(this);
            if (tg.next().is(':visible') === false) {
                topNavi.find('.sub').slideUp(300);
            }
            tg.next().slideToggle(300);
        }
    });
    $('.s_input input, .s_input textarea').focus(function () {
        $(this).closest('.s_input').css({
            'border-bottom': '2px solid #095589'
        });
    }).focusout(function () {
        $(this).closest('.s_input').css({
            'border-bottom': '2px solid #F1F1F1'
        });
    });
    if ($('.inputDate').length !== 0) {
        $('.inputDate').datepicker({
            format: 'yyyy-mm-dd',
            language: 'tm',
            todayHighlight: !0,
            autoclose: !0,
        });
    }
    if ($('.slick_basic').length !== 0) {
        $('.slick_basic').slick({
            autoplay: !0,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            arrows: !0,
            prevArrow: $('.icon-prev'),
            nextArrow: $('.icon-next')
        });
    }
    if ($('#faq_list').length !== 0) {
        $("#faq_list .faq_q").on("click", function () {
            $(this).parent().toggleClass('active');
        });
    }
});
$(window).load(function () {
    $('.navi_scroll').css({
        'visibility': 'visible'
    }).hide().fadeIn('fast');
    $('.main-visibility').css({
        'visibility': 'visible'
    }).hide().fadeIn();
    $('.footer-visibility').css({
        'visibility': 'visible'
    }).hide().fadeIn();
    $('.room-visibility').css({
        'visibility': 'visible'
    }).hide().fadeIn();
    $('.jssor-sprite').css({
        'visibility': 'visible'
    });
    $('.main_info').css({
        'margin-left': -($('.main_info').width() / 2) + 'px'
    }).show();
    if (windowWidth > 600) {
        $(".parallax>div").parallax("50%", 0.4);
        $(".parallax>div").css("visibility", "visible");
        $(".about_value_bg_content").parallax("50%", 0.4);
    } else {
        $(".parallax>div").css("visibility", "visible");
    }
    if ($('.map_info').length !== 0) $('html, body').stop().animate({
        scrollTop: $('.map_info').offset().top - 40
    }, 500);
    if (page('svc/rsv/reservation')) {
        available_check_step01();
    }
    cookiedata = document.cookie;
    var pop = $('.event_pop');
    var cbx = pop.find('input[type=checkbox]');
    cbx.click(function () {
        setPopCookie("maindiv", "done", 12);
        pop.hide();
    });
    pop.find('button').click(function () {
        pop.hide();
    });
    if (cookiedata.indexOf("maindiv=done") < 0) {
        pop.show();
    }

    function setPopCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setHours(todayDate.getHours() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toLocaleString() + ";"
    }
    $('.item_list').fadeIn();
    $('.event_item_wrap').fadeIn();
    $('.brd_cont').css({
        'visibility': 'visible'
    });
    $('.brd_cont img').css({
        'width': '100%',
        'height': 'auto'
    });
    $('.brd_cont input').css({
        'width': '100%',
        'height': 'auto'
    });
});

function naviFixed() {
    if (windowWidth > 767) {
        if (windowScrollTop > 139) {
            topNavi.css({
                'position': 'fixed'
            });
        } else {
            topNavi.css({
                'position': 'relative'
            });
        }
    } else {
        topNavi.css({
            'position': 'fixed'
        });
    }
}

function box_right() {
    var box_right = $('.box_right');
    if (box_right.length !== 0) {
        var box_center = box_right.closest('.box_center');
        var top = box_center.offset().top;
        var left = box_center.offset().left + box_center.outerWidth() - box_right.outerWidth();
        var bottom = box_center.outerHeight();
        if (box_right.css('display') === 'none') box_right.show();
        if (windowWidth <= 767) {
            box_right.css({
                'position': 'static',
                'top': 'auto',
                'left': 'auto',
                'right': 'auto'
            });
        } else {
            if (top - 80 < windowScrollTop) {
                box_right.css({
                    'position': 'fixed',
                    'top': 80,
                    'left': left,
                    'right': 'auto'
                });
            } else {
                box_right.css({
                    'position': 'absolute',
                    'top': 0,
                    'left': 'auto',
                    'right': 0
                });
            }
        }
    }
}

function amenity_more() {
    var amenitys = $('.amenitys');
    if (amenitys.css('height') === '90px') {
        amenitys.css({
            'height': '100%'
        });
    } else {
        amenitys.css({
            'height': '90px'
        });
    }
}

function sned_inquiry() {
    if (!$('#v_Agree').is(':checked')) {
        alert('???????????? ?????? ??? ????????? ?????? ????????? ?????????????????? ????????????.');
        return false;
    }
    return validation({
        v_Name: [$('#v_Name'), '?????????'],
        v_Phone: [$('#v_Phone'), '?????????'],
        v_Email: [$('#v_Email'), '????????????', 'EM'],
        v_Title: [$('#v_Title'), '??????'],
        v_Content: [$('#v_Content'), '??????'],
    }, function () {
        $('.ajax_loader').addClass('b_hide');
        $.ajax({
            type: "POST",
            url: BASE + "brd/ajax_send_mail",
            dataType: "json",
            data: $('#myForm').serialize(),
            success: function (obj) {
                if (obj.status === 'OK') {
                    alert('??????????????? ??????????????????.');
                    location.reload();
                }
            },
            beforeSend: function () {
                $('.ajax_loader').removeClass('b_hide');
            },
            error: function (e) {
                console.log(e.responseText);
                console.log('response error - ????????? ?????? ?????? : cancel_bkg');
            }
        });
    });
}

function go_lang(tg) {
    set_cookie('lang', tg);
    location.reload();
}