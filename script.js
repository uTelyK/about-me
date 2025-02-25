document.getElementById('nutCopylink').addEventListener('click', function() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(function() {
        const button = document.getElementById('nutCopylink');
        const originalText = button.textContent;
        button.textContent = 'Copied';
        setTimeout(function() {
            button.textContent = originalText;
        }, 2000);
    }).catch(function(err) {
        console.error('khong the copy: ', err);
    });
});

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

progressBar.addEventListener("input", function () {
    if (player && player.seekTo) {
        var duration = player.getDuration();
        var seekTime = (progressBar.value / 100) * duration;
        player.seekTo(seekTime, true);
    }
});

const introDuration = 1.4; 

setTimeout(() => {
    let img = document.getElementById("animation");
    img.src = "https://cdn.discordapp.com/assets/profile_effects/effects/2025-02-04/heartstrings_theory_red/idle.png";
}, introDuration * 1000);
