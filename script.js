// Version: v.1.0.0
// Last Updated: 2025-2-3

var player;
var isPlaying = false;
var playButton = document.getElementById("playPauseButton");

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '6juEaeArPBI',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("YouTube Player is ready!");
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
        isPlaying = false;
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function togglePlay() {
    if (!player || typeof player.getPlayerState !== 'function') {
        console.error("YouTube Player not ready yet!");
        return;
    }
    if (!isPlaying) {
        player.playVideo();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    } else {
        player.pauseVideo();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    playButton.addEventListener("click", togglePlay);
});

var progressBar = document.getElementById("progressBar");

function updateProgressBar() {
    if (player && player.getCurrentTime) {
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();
        if (duration) {
            progressBar.value = (currentTime / duration) * 100;
        }
    }
}

setInterval(updateProgressBar, 1000);
