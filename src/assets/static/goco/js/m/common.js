$(function() {
	
	headerFunc();
	// scrollFunc();
	
});

function headerFunc () {
	var navTab	= $(".nav-tab"),
		gNav	= $(".g-nav"),
		bgDrop	= $(".bg-drop");
	navTab.on('click', function() {
		gNav.addClass("on");
	});
	gNav.find(".bg-drop, .i-x, .menu > li > a").on('click', function() {
		gNav.removeClass("on");
	});
}

function scrollFunc () {
	var gnb	= $(".gnb"),
		btnTop	= $("#btnTop"),
		top		= $(".visual .slide").outerHeight();
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		// console.log(scr);
		// console.log(top);
		// 상단 해더 고정 배경 클래스 추가
		if ( scr == 0 ) {
			gnb.removeClass('on');
		} else if ( scr > 0 ) {
			gnb.addClass('on');
		} 
		// top 버튼 display
		if ( scr > top ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	});
	btnTop.on('click', function() {
		$('html, body').stop().animate({scrollTop: '0'}, 500);
	});
}