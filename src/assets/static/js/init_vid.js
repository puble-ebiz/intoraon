
$(document).on('ready', function () {
    // endVid();
    $(window).on('resize', function () {
        endVid();
    }).resize();
});

function endVid(){
    //console.log('loaded');
    var agent = navigator.userAgent.toLowerCase();
    var winWid = $(window).width();
    
    if( winWid <= '991' ){
        var mhtml = '<video id="vidM" playsinline="" webkit-playsinline="" preload="" autoplay="" muted=""><source src="http://img.hotelairsky.co.kr/svc/img/main/seabay_mobile.mp4" type="video/mp4" /></video>';
        
        $(".vid-area.m .vid-box").empty();
        //$("#vidPc, #player").remove(); 
        $(".vid-area.pc .vid-box").empty();
 
 
        if (agent.indexOf("iphone") >- 1 || agent.indexOf("ipad") >- 1 || agent.indexOf("ipod") >- 1 ) { 
            //IOS 일때 처리

        }else {
            //console.log('없음');
            var runtime = 17000; //영상 길이
            var delay = 1000;
            var time = runtime + delay;

            $('.vid-area.m .vid-box').append(mhtml);
            console.log('m');

            setTimeout(function () {
                //console.log('ended');
                $('#vidM').fadeOut();
            }, time);
        }

        
    }else {
        //console.log('pc');
        var pchtml = '<iframe id="vidPc" class="vidPc" src="https://www.youtube.com/embed/NupIKt3LM1Q?rel=0&amp;controls=0&amp;autoplay=1&modestbranding=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen=""></iframe>',
            pchtmlApi = '<iframe id="player" class="vidPc" src="https://www.youtube.com/embed/NupIKt3LM1Q?rel=0&enablejsapi=1&autoplay=1&mute=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen=""></iframe> <script type="text/javascript" src="http://static.seabay.co.kr/svc/js/init_player.js"></script>';
        
        $(".vid-area.m .vid-box").empty();
        //$("#vidPc, #player").remove(); 
        $(".vid-area.pc .vid-box").empty();
        
        if ( $('.vid-area.pc .vid-box iframe').length > 0 ) {
            //console.log('있음');
        }else {
            //console.log('없음');
            if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.indexOf("edge") != -1) ) {
                console.log('IE');
                $('.vid-area.pc .vid-box').append(pchtml);

                movieTime();
            }else if ( (agent.indexOf("chrome") != -1) || (agent.indexOf("safari") != -1) || (agent.indexOf("whale") != -1) ){
                //console.log("SAFARI");
                if( (agent.indexOf("chrome") != -1) || (agent.indexOf("whale") != -1) ){
                    console.log('chrome, whale, edge');
                    $('.vid-area.pc .vid-box').append(pchtmlApi);
                    movieTime();
                    /*if( (agent.indexOf("edge") != -1) ){
                        console.log('edge')
                    }*/
                }else {
                    //console.log('safari');
                    $("#vidPc").remove(); 
                    $('.vid-txt-box').addClass('end');
                    $('.weather').addClass('end');
                }
            }else {
                //console.log('other');

                $('.vid-area.pc .vid-box').append(pchtmlApi);
                movieTime();
            }
            
        }
    }
}

function movieTime(){ 
    var runtime = 17000; //영상 길이
    var delay = 1300;
    var time = runtime + delay;

    setTimeout(function () {
        //console.log('ended');
        $('#vidPc, #player').fadeOut();
        //$('#player').css('opacity', '0');
        $('.vid-txt-box').addClass('end');
        $('.weather').addClass('end');
    }, time);
}

