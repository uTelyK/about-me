document.getElementById('nutCopylink').addEventListener('click', function() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(function() {
 
        const button = document.getElementById('nutCopylink');
        const originalText = button.textContent;
        button.textContent = 'Copied';
    // debounce cua copy button set bang 2 giay
        setTimeout(function() {
            button.textContent = originalText;
        }, 2000);
    // debug code khi ma khong the copy ra link
    }).catch(function(err) {
        console.error('khong the copy: ', err);
    });
});
// ---------------------------------------
var player;
var isPlaying = false;
var playButton = document.getElementById("playPauseButton");

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '6juEaeArPBI', // YT Id của bài nhạc
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange // Detect khi hết nhạc
        }
    });
}

function onPlayerReady(event) {
    console.log("YouTube Player is ready!");
}

// Detect when the video ends
function onPlayerStateChange(event) {
    if (event.data === 0) { // 0 = Ended
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
        playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
        isPlaying = true;
    } else {
        player.pauseVideo();
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
        isPlaying = false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    playButton.addEventListener("click", togglePlay);
});
// --------------------------------------------------------

var progressBar = document.getElementById("progressBar");

// Cập nhật progress bar theo thời gian
function updateProgressBar() {
    if (player && player.getCurrentTime) {
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();
        if (duration) {
            progressBar.value = (currentTime / duration) * 100;
        }
    }
}

// Kiểm tra mỗi giây để cập nhật progress bar
setInterval(updateProgressBar, 1000);

// Sự kiện tua bài hát khi người dùng kéo thanh
var player;
var isPlaying = false;
var playButton = document.getElementById("playPauseButton");

// Initialize YouTube Player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '6juEaeArPBI', // Replace with actual video ID
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange // Detect state change
        }
    });
}

// Called when YouTube player is ready
function onPlayerReady(event) {
    console.log("YouTube Player is ready!");
}

// Detect when the video ends
function onPlayerStateChange(event) {
    if (event.data === 0) { // 0 = Ended
        isPlaying = false;
        playButton.innerHTML = "▶"; // Reset button to play
    }
}

// Chạy/Ngừng Function
var progressBar = document.getElementById("progressBar");

// Cập nhật progress bar theo thời gian
function updateProgressBar() {
    if (player && player.getCurrentTime) {
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();
        if (duration) {
            progressBar.value = (currentTime / duration) * 100;
        }
    }
}
// Kiểm tra mỗi giây để cập nhật progress bar
setInterval(updateProgressBar, 1000);

// Sự kiện tua bài hát khi người dùng kéo thanh
progressBar.addEventListener("input", function () {
    if (player && player.seekTo) {
        var duration = player.getDuration();
        var seekTime = (progressBar.value / 100) * duration;
        player.seekTo(seekTime, true);
    }
});
