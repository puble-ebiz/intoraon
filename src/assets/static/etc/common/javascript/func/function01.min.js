var double_click = !1;

function validation(data, func) {
    var msg1 = '중복 클릭방지';
    var msg2 = '이메일을 다시 확인해주세요.';
    var msg3 = '영어 또는 자음, 모음만 있는 한글은 처리하지 않습니다.';
    var msg4 = '번호만 입력가능합니다.';
    var msg5 = '영문성은 영문만 가능합니다.';
    var msg6 = '영문이름은 영문만 가능합니다.';
    var msg7 = '비밀번호는 문자, 숫자, 특수문자의 조합만 가능합니다.';
    var msg8 = '입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다.';
    var msg9 = '는 영문 , 숫자 조합으로만 가능합니다.';
    var msg10 = '입력해 주세요.';
    var msg11 = '선택해주세요.';
    var msg12 = '자 여야 합니다.';
    var msg13 = '자 이상';
    var msg14 = '자 이하여야 합니다.';
    var msg15 = '가 체크되지 않았습니다.';
    switch (get_cookie('lang')) {
        case 'english':
            msg1 = 'Prevent duplicate clicks';
            msg2 = 'Please check your email again.';
            msg3 =
                'It does not handle Korean with only consonants and vowels or English';
            msg4 = 'Only numbers can be entered';
            msg5 = 'English Last name is in English only';
            msg6 = 'English name is in English only';
            msg7 = 'The password can only be a combination of letters, numbers and special characters';
            msg8 = 'The password you entered and the confirm password do not match';
            msg9 = 'can only be a combination of alphanumeric characters';
            msg10 = 'should be entered';
            msg11 = 'should be selected';
            msg12 = 'letters only';
            msg13 = 'letters over';
            msg14 = 'letters lower';
            msg15 = 'should be checked';
            break;
        case 'japan':
            msg1 = 'クリック重複防止';
            msg2 = 'メールを再確認してください。';
            msg3 = '英語または、子音・母音のみの韓国語は処理されません。';
            msg4 = '番号のみ入力可能です。';
            msg5 = '英字の姓は英文字のみ可能です。';
            msg6 = '英字の名字は英文字のみ可能です。';
            msg7 = 'パスワードは文字、数字、特殊文字の組合せのみ可能です。';
            msg8 =
                '入力されたパスワードとパスワードの確認が一致しません。';
            msg9 = 'は英字、数字の組合せのみ可能です。';
            msg10 = '入力してください。';
            msg11 = '選択してください。';
            msg12 = '字でなければなりません。';
            msg13 = '字以上';
            msg14 = '字以下でなければなりません。';
            msg15 = 'がチェックされていません。';
    }
    $('.ajax_loader').removeClass('b_hide');
    if (double_click === true) {
        alert(msg1);
        return false;
    } else {
        double_click = !0;
    }
    var state = !0,
        myForm, old_pwd = '';
    var options = {
        EM: {
            alt: msg2,
            exp: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            bln: !1,
            min: 1,
            max: 40
        },
        HG: {
            alt: msg3,
            exp: /([^가-힣\x20])|[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g,
            bln: !0,
            min: 2,
            max: 15
        },
        NB: {
            alt: msg4,
            exp: /^[0-9]*$/,
            bln: !1,
            min: 10,
            max: 11
        },
        U1: {
            alt: msg5,
            exp: /^[a-zA-Z]+$/,
            bln: !1,
            min: 1,
            max: 15
        },
        U2: {
            alt: msg6,
            exp: /^[a-zA-Z\s]+$/,
            bln: !1,
            min: 1,
            max: 20
        },
        PW: {
            alt: msg7,
            exp: /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/,
            bln: !1,
            min: 1,
            max: 15
        },
        PR: {
            alt: msg8,
            exp: function (new_pwd) {
                if (old_pwd !== new_pwd) {
                    return false;
                }
                return true;
            }
        },
        ID: {
            alt: msg9,
            exp: function (prm) {
                var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (i = 0; i < prm.length; i++) {
                    ch = prm.charAt(i);
                    for (j = 0; j < checkOK.length; j++)
                        if (ch == checkOK.charAt(j)) break;
                    if (j == checkOK.length) {
                        return (false);
                        break;
                    }
                }
                return (true);
            }
        }
    };
    $.each(data, function (key, value) {
        var max = 40;
        var min = 1;
        var select = value[0];
        var string = value[1];
        var option = value[2];
        myForm = select.closest('form');
        if ($.trim(select.val()) === '') {
            var alt = ' ' + msg10;
            if (select.find('option').length > 0) alt = ' ' + msg11;
            alert(string + alt);
            select.val('').focus();
            return state = !1;
        }
        if (option !== undefined && option !== 'TX' && option !== 'AG') {
            if (options[option].max !== undefined) {
                max = options[option].max;
                min = options[option].min;
            }
            if (select.val().length < min || select.val().length > max) {
                if (min === max) {
                    alert(string + ' ' + max + msg12);
                } else {
                    var alt = min + msg13 + ' ';
                    if (min === 1) {
                        alt = '';
                    }
                    alert(string + ' ' + alt + max + msg14);
                }
                select.val('').focus();
                return state = !1;
            }
            if (typeof options[option].exp === 'function' && !options[option].exp(select.val())) {
                alert(string + options[option].alt);
                select.val('').focus();
                return state = !1;
            }
            if (typeof options[option].exp !== 'function' && options[option].exp.test(select.val()) === options[option].bln) {
                alert(options[option].alt);
                select.val('').focus();
                return state = !1;
            }
        } else {
            if (option === 'AG' && !select.is(':checked')) {
                alert(string + msg15);
                return state = !1;
            }
        }
        if (old_pwd.length === 0 && select.attr('type') === 'password') {
            old_pwd = select.val();
        }
    });
    old_pwd = '';
    if (state === true) {
        if (func !== undefined) {
            func();
            double_click = !1;
            return false;
        }
        myForm.submit();
    } else {
        double_click = !1;
        $('.ajax_loader').addClass('b_hide');
        return state;
    }
};
if ($('#v_post').length != 0) document.write('<script type="text/javascript" src="http://dmaps.daum.net/map_js_init/postcode.v2.js"><' + '/script>');

function post_search() {
    new daum.Postcode({
        oncomplete: function (data) {
            var fullAddr = '';
            var extraAddr = '';
            if (data.userSelectedType === 'R') {
                fullAddr = data.roadAddress;
            } else {
                fullAddr = data.jibunAddress;
            }
            if (data.userSelectedType === 'R') {
                if (data.bname !== '') {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
            }
            document.getElementById('v_post').value = data.zonecode;
            document.getElementById('v_addr1').value = fullAddr;
            document.getElementById('v_addr2').focus();
        }
    }).open();
}

function on_submit() {
    $('.ajax_loader').removeClass('b_hide');
    $("#myForm").submit();
}
var dateConverter = function (data) {
    var n = new Date();
    var o = data;
    var a = o.datepicker('getDate');
    var v = o.datepicker('getFormattedDate');
    var w = a.getDay();
    var h = zr(n.getHours());
    var m = zr(n.getMinutes());
    var s = zr(n.getSeconds());
    var f = v + ' ' + h + ':' + m + ':' + s;
    var t = (a.getTime()) / 1000;

    function zr(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
    return {
        getThis: function () {
            return a;
        },
        getDate: function () {
            return v;
        },
        getDttm: function () {
            return f;
        },
        getUnix: function () {
            return t;
        },
        getWeek: function () {
            return w;
        },
        getOpdt: function (day) {
            var date = new Date(Date.parse(a) + day * 1000 * 60 * 60 * 24)
            return [zr(date.getFullYear()), zr(date.getMonth() + 1), zr(date.getDate())].join('-');
        }
    }
}
var convert_date = function (data) {
    var n = new Date();
    var o = data;
    var a = o.datepicker('getDate');
    var v = o.datepicker('getFormattedDate');
    var w = a.getDay();
    var h = zr(n.getHours());
    var m = zr(n.getMinutes());
    var s = zr(n.getSeconds());
    var f = v + ' ' + h + ':' + m + ':' + s;
    var t = (a.getTime()) / 1000;

    function zr(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
    return {
        getThis: function () {
            return a;
        },
        getDate: function () {
            return v;
        },
        getDttm: function () {
            return f;
        },
        getUnix: function () {
            return t;
        },
        getWeek: function () {
            return w;
        },
        getOpdt: function (day) {
            var date = new Date(Date.parse(a) + day * 1000 * 60 * 60 * 24)
            return [zr(date.getFullYear()), zr(date.getMonth() + 1), zr(date.getDate())].join('-');
        }
    }
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function SetPriceInput(str) {
    str = str.replace(/,/g, '');
    var retValue = "";
    for (i = 1; i <= str.length; i++) {
        if (i > 1 && (i % 3) == 1) {
            retValue = str.charAt(str.length - i) + "," + retValue;
        } else {
            retValue = str.charAt(str.length - i) + retValue;
        }
    }
    return retValue;
}

function get_today() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    var day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
    var chan_val = year + '-' + mon + '-' + day;
    return chan_val;
}

function getParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}

function get_cookie(name) {
    var found = !1;
    var start, end;
    var i = 0;
    while (i <= document.cookie.length) {
        start = i;
        end = start + name.length;
        if (document.cookie.substring(
                start, end) == name) {
            found = !0;
            break;
        }
        i++;
    }
    if (found == true) {
        start = end + 1;
        end = document.cookie.indexOf(";", start);
        if (end < start) {
            end = document.cookie.length;
        }
        return document.cookie.substring(start, end);
    } else {
        return "";
    }
}

function set_cookie(name, value) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function del_cookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function br_check() {
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("chrome") != -1) return 'Chrome';
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1)
        return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("msie") != -1) return 'Internet Explorer';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
}

function page(page) {
    return location.href.match(page);
}

function view_map(x, y, nm, z) {
    var myLatlng = new google.maps.LatLng(x, y);
    var mapOptions = {
        zoom: z,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map_box'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: nm
    });
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}

function parallax() {
    var wh = $(window).height();
    var value = $(this).scrollTop() + wh;
    $('.box').css({
        'visibility': 'visible'
    });
    $('.parallax').each(function () {
        var tg = $(this);
        var top = parseInt(tg.offset().top);
        if (value >= top) {
            var tt = ((value - top) / 5) + 100;
            tg.find('.box').css({
                'background-position': 'center ' + tt + 'px'
            });
        }
    });
}

function ie_check() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}

function page(page) {
    return location.href.match(page);
}

function toUnix(date) {
    return new Date(date).getTime() / 1000;
}

function openFtc(no) {
    var url = "http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=" + no;
    window.open(url, "communicationViewPopup", "width=750, height=700;");
}

function number_check(object) {
    if (isNaN(object.value)) {
        alert("숫자만 입력해 주십시요");
        object.value = '';
        object.focus();
    }
}

function calculation_date(sDate, nDays, pm) {
    var yy = parseInt(sDate.substr(0, 4), 10);
    var mm = parseInt(sDate.substr(5, 2), 10);
    var dd = parseInt(sDate.substr(8), 10);
    if (pm === '+') {
        d = new Date(yy, mm - 1, dd + nDays);
    } else {
        d = new Date(yy, mm - 1, dd - nDays);
    }
    yy = d.getFullYear();
    mm = d.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;
    dd = d.getDate();
    dd = (dd < 10) ? '0' + dd : dd;
    return '' + yy + '-' + mm + '-' + dd;
}

function get_period(val1, val2) {
    var FORMAT = "-";
    if (val1.length != 10 || val2.length != 10) return null;
    if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0) return null;
    var start_dt = val1.split(FORMAT);
    var end_dt = val2.split(FORMAT);
    start_dt[1] = (Number(start_dt[1]) - 1) + "";
    end_dt[1] = (Number(end_dt[1]) - 1) + "";
    var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
    var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);
    return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

function date_obj(date) {
    var a_date = date.split('-');
    a_date[1] = (Number(a_date[1]) - 1) + '';
    return new Date(a_date[0], a_date[1], a_date[2]);
}

function date_unix(date) {
    var obj = date_obj(date);
    return obj.getTime() / 1000;
}

function sum_data() {
    var value = arguments[0];
    for (var i in arguments) {
        if (i != 0) value += '|^^|' + arguments[i];
    }
    return value;
}

function array_data(tg) {
    return tg.split("|^^|");
}

function set_lang(lang) {
    var msg = '준비중입니다.';
    switch (get_cookie('lang')) {
        case 'english':
            msg = 'Coming soon.';
            break;
        case 'japan':
            msg = '準備中です。';
            break;
    }
    set_cookie('lang', lang);
    location.reload();
}