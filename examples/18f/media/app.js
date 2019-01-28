const cat = document.getElementById('cat');
const caption = document.getElementById('caption');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
	if (cat.paused) {
		cat.play();
		playButton.textContent = "Pause";
	} else {
		cat.pause();
		playButton.textContent = "Play";
	}
});

const captions = [
	{ caption: "Hello.", time: 2 },
	{ caption: "I'm a cat.", time: 5 },
	{ caption: "Goodbye.", time: 8 }
];

cat.addEventListener('ended', function() {
	cat.currentTime = 0;
//	cat.play();
});

cat.addEventListener('timeupdate', function() {
	for (let i = 0; i < captions.length; i++) {
		if (cat.currentTime > captions[i].time) {
			caption.textContent = captions[i].caption;
		} 
	}
});




