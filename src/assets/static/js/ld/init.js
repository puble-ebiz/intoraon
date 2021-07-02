$(function() {
    
    //함수실행
    scrollFn();
    
    //pop close btn
    $('.btn-pop-close').on('click', function(){
        var pop = $(this).parents('.ld-popup');
        
        pop.hide();
        $('body').css({'overflow': 'auto', 'height': '100%'});
    });
});

/* pop function */
function popFn(){
    var pop = $('.ld-popup .popup-wrap');
    var windowHt = $(window).height();
    var popHt = pop.height();
    //console.log(popHt, windowHt);
    
    $(window).resize(function(){
        if( windowHt <= popHt ){
            pop.css({'top' : 0+'px', 'margin-top' : 0+'px'});
        }else {
            //세로 가운데 정렬
            pop.css({'top' : '50%', 'margin-top' : -(popHt/2)+'px'});
        }
    }).resize();
    
    $('body').css({'overflow': 'hidden', 'height': '100%'});
    
    /*pop.on('scroll touchmove mousewheel', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    }); */
}

/* 스크롤 탭메뉴 */
function scrollFn() {
    var windowWid = $(window).width();
    
    $(window).scroll(function(){
        var scr = $(window).scrollTop(),
            poolTop = $('#ld-pool-sect').offset().top; //pool top
        //console.log(windowWid);
        
        if( windowWid < '992' ){ 
            //console.log('m');
            /*$(windeow).resize(function(){
            }).resize();*/
            var visualTop = $('#ld-visual').height(); //visual
            var tabH = $('#ld-tab').height(); 
            
            if( scr <= (visualTop+tabH)) { 
                //console.log('up');
                $('#ld-tab').removeClass('on').css({'bottom' : 'auto', 'margin-bottom' : '0'});
            }else {
                //console.log('down'); 
                //$('#ld-tab').addClass('on').css({'bottom' : '-'+tabH+'px'}).animate({'bottom' : 0+'px'}, 100);
                $('#ld-tab').addClass('on').css({'bottom' : '-'+tabH+'px', 'margin-bottom' : tabH+'px'});
            }
        }else {
            //console.log('pc');
            
            if( scr <= poolTop) {
                //console.log('up')
                $('#ld-bn, #ld-tab').removeClass('on');
            }else {
                //console.log('down');
                $('#ld-bn, #ld-tab').addClass('on');
            }
        }
    });
    
    
}