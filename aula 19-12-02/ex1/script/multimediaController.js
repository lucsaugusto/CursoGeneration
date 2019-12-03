
var videoPlayer = document.getElementById("videoPlayer");

function playVideo(){
    videoPlayer.play();
}


function pauseVideo(){
    videoPlayer.pause();
}

function restartVideo(){
    if(videoPlayer.paused == true)
        videoPlayer.play();
}