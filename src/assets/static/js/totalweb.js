$(function() {
	
	menuFn();
    
    if( $('footer').css('display') == 'block'){
        
        rsvtFn();
    }

});

//menu Function
function menuFn() {
    var bkMenu = $('.bk-menu');
    
    bkMenu.find('a[class*="btn-bk"]').on('mouseover', function(){
        bkMenu.find('.bk-list').stop().slideDown();
    });
    
     bkMenu.on('mouseleave', function(){
        $(this).find('.bk-list').stop().slideUp();
    });
}

function rsvtFn(){
    var leftBn = $("#left_banner");
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var f_scr = $('footer').offset().top - 850;

        if(scrollTop > 100) {																			
            leftBn.css({"position":"fixed", "top" : "180px"});
        } 
        if(scrollTop < 100) {																	
            leftBn.css({"position":"absolute", "top":"auto"});
        }
    });

    //상담배너 예약문의 버튼 클릭 시
    leftBn.find('.btn-cst').on('click', function(){
        if( $(this).hasClass('open') ){
            $(this).addClass('off');
            leftBn.find('.cst-box-2').addClass('on');
        }else{ // 도움요청 버튼 클릭 시
            $(this).parents().find('.off').removeClass('off');
            leftBn.find('.cst-box-2').removeClass('on');
        }
    });
}