var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);

var subtitles = [
	{
		text: "Hello!",
		time: 5,
		duration: 10
	}, 
	{
		text: "I'm a cat!",
		time: 15,
		duration: 5
	}, 
	{
		text: "Goodbye",
		time: 25,
		duration: 10
	}
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
}

function onPlayerReady(event) {
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
	
	function nextSubtitle() {
		var titled = false;
		
		for (var i = 0; i < subtitles.length; i++) {
			var time = player.getCurrentTime();
			if (time > subtitles[i].time && time < subtitles[i].time + subtitles[i].duration) {
				subtitleDiv.textContent = subtitles[i].text;
				titled = true;
			}
		}
		
		if (!titled) {
			subtitleDiv.textContent = "";	
		}
	}
	setInterval(nextSubtitle, 1000 / 24);
}







