var playerState;
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        //videoId: '-5gWcHBdXWE',
        /*playerVars : {
            'controls': 0, //플레이어 컨드롤러 표시여부
            'rel': 0, //연관동영상 표시여부
            'playsinline': 1, //ios환경에서 전체화면으로 재생하지 않게하는 옵션
            'autoplay': 1, //자동재생 여부(모바일에서 작동하지 않습니다. mute설정을 하면 작동합니다.)
            'loop': 0,
            //'mute': 1
        },*/
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    player.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    playerState = event.data == YT.PlayerState.ENDED ? '종료됨' :
            event.data == YT.PlayerState.PLAYING ? '재생 중' :
            event.data == YT.PlayerState.PAUSED ? '일시중지 됨' :
            event.data == YT.PlayerState.BUFFERING ? '버퍼링 중' :
            event.data == YT.PlayerState.CUED ? '재생준비 완료됨' :
            event.data == -1 ? '시작되지 않음' : '예외';

    //console.log('onPlayerStateChange 실행: ' + playerState);
    
    if(playerState == '종료됨'){
        //console.log('end');
        $('#player').css('opacity', '0');
        $('.vid-txt-box').addClass('end');
        $('.weather').addClass('end');
    }else if(playerState == '시작되지 않음'){
        //console.log('yet');
        player.mute();
        player.playVideo();
    }
}