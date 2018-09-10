const video = document.getElementById('js');
const caption = document.getElementById('caption');
const playButton = document.getElementById('playButton');

// play video
playButton.addEventListener('click', function() {
	if (video.paused) {
		video.play();
		playButton.textContent = "Pause";
	} else {
		video.pause();
		playButton.textContent = "Play";
	}
});


// loop the video
video.addEventListener('ended', function(event) {
	video.currentTime = 0;
	video.play();
	captionCount = 0;
});

// captions
const captions = ["Hello", "I'm a cat", "Meow"];
let captionCount = 0;

video.addEventListener('timeupdate', function(event) {
	const time = video.currentTime;
	if (time > 3 * captionCount) {
		caption.textContent = captions[captionCount];
		captionCount++;
	}
});
