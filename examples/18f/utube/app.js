/* loads the YouTube API script */
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);

/* subtitles */
var subtitles = [
	{text: "Hello!", time: 1, duration: 2 }, 
	{text: "I'm a cat!", time: 4, duration: 2 }, 
	{text: "Goodbye!", time: 8, duration: 3 }
];
var currentSubtitle = 0;
var subtitleDiv = document.getElementById('subtitles');

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		events: {
			'onReady': onPlayerReady
		}
	});
	console.log(player);
}


function onPlayerReady() {
	
	function nextSubtitle() {
		var titled = false;
		
		for (var i = 0; i < subtitles.length; i++) {
			var time = player.getCurrentTime();
			var subtitle = subtitles[i];
			if (time > subtitle.time &&
				time < subtitle.time + subtitle.duration) {
				subtitleDiv.textContent = subtitle.text;
				titled = true;
			}
		}
		if (!titled) {
			subtitleDiv.textContent = "";
		}
	}
	setInterval(nextSubtitle, 1000 / 30);
	
	document.getElementById('play').addEventListener('click', function() {
		player.playVideo();	
	});
	
	document.getElementById('stop').addEventListener('click', function() {
		player.stopVideo();
	});
	
	document.getElementById('jump').addEventListener('click', function() {
		if (player && player.getCurrentTime) {
			player.seekTo(player.getCurrentTime() + 5);	
		}
	});
	
	document.getElementById('rate').addEventListener('change', function() {
		player.setPlaybackRate(+this.value);
	});
}















