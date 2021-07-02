$(function() {
    
    scrollFn();
    
});


/* 스크롤 탭메뉴 */
function scrollFn() {
    var windowWid = $(window).width();
    $(window).scroll(function(){
        var scr = $(window).scrollTop();
        
        if( windowWid < '992px' ){
            //M
        }else {
            //PC
            var pkgHt = $('#ld-pkg').offset().top; //호텔 pool 패키지 top
            
            //우측 배너 on off
            if( scr <= pkgHt) {
                $('#ld-banner').removeClass('on');
            }else {
                $('#ld-banner').addClass('on');
            }
        }
    });
    
    
}