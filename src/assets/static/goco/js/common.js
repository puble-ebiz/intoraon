$(function() {
    
    // scrollFunc();
    
});

// 스크롤 기능
function scrollFunc() {
    var bnRsv = $('#rsv-mipic'),
        gnb = $('.gnb'),
        pd = 30,
        setTop, std, bnTop ;
        
    // #setTop 여부 존재 확인
    if ( $('#setTop').length > 0 ) {
        setTop = $('#setTop').offset().top;
        std = setTop - gnb.outerHeight();
        bnTop = setTop  + pd ;

        // console.log(setTop);
        // console.log(bnTop);
        bnRsv.show();
        // 기본 bn 높이 설정
        bnRsv.css({
            'top': bnTop
        });
    } else {
        bnRsv.hide();
    }
    $(window).on('scroll', function() {
        var scr = $(window).scrollTop();
            
        if ( scr == 0 ) {
            gnb.removeClass('on');
        } else {
            gnb.addClass('on');
        }

        if ( scr >= std) {
            bnRsv.css({
                'top': (scr + gnb.outerHeight() + pd)
            });
        } 
        if ( scr < std ) {
            bnRsv.css({
                'top': bnTop
            });
        }
    });
}