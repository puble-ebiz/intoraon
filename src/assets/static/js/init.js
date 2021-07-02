
$(document).on('ready', function () {
    vidWH();
	$(window).on('resize', function(){
        vidWH(); 
	}).resize();
});
/*$(function() {
    vidWH();
	$(window).on('resize', function(){
        vidWH(); 
	}).resize();
    
}); */

function vidWH(){ 
    var winWid = $(window).width(),
        winHt = $(window).height(),
        // vid = $('.vid-wrap'),
        vid = $('.slider_section.main-visual'),
        evtPop = $('.event_pop'),
        evtPopWid = evtPop.width();
        
    $('.header').addClass('main');
    // 메인 동영상 변경시 풀 사이즈 적용
    // vid.css({'width' : winWid+'px', 'height' : winHt+'px'}); 
    
    if( winWid <= '991' ){
        //console.log('m');
        
        $('.vid-area.m .vid-box').css({'height' : winHt+'px'}); 
        evtPop.css({'margin-left' : '-'+(evtPopWid/2)+'px'}); 
        
        $('.vid-area.m .vid-box').fadeIn(500, function(){
            //$('#vidM').get(0).play();
            $(this).find('#vidM').on('ended',function(){
                $(this).parents('.vid-area.m .vid-box').fadeOut(500);
            });
        });
        
    }else {
        //console.log('pc');
        //var myPlayer;
        $('.weather').css({'cursor' : 'pointer'}); 
        $('.vid-wrap, .slider_section.main-visual, .weather').hover(function(){
            vid.find('.vid-txt-box').addClass('on');
            $('.weather').addClass('active');
        }, function(){
            vid.find('.vid-txt-box').removeClass('on');
            $('.weather').removeClass('active');
        });
        
        //vid.find('.vidPc').css({'width' : winWid+'px', 'height' : '100%'}); 
    }
	
    //텍스트 클릭시 이동
    $('body').on('click', '.vid-wrap, .slider_section.main-visual .vid-txt', function(){
		var mainRestTop =	$("#mainRest").offset().top,
            gnbH =	$(".gnb").height();
        var allVar;
        if( winWid <= '991' ){
            allVar = (mainRestTop-gnbH+4)
        }else{
            allVar = mainRestTop-gnbH
        }
        
		$('html, body').stop().animate({
			scrollTop: allVar
		}, 1300, 'easeInOutQuart');
    });
}
