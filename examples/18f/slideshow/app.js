const container = document.getElementById("container");
const images = [
	"images/dog.jpg",
	"images/cat.jpg",
	"images/bird.jpg",
	"images/fish.jpg"
];

for (let i = 0; i < images.length; i++) {
	const image = new Image();
	image.src = images[i];
	image.id = images[i].split('/')[1].split('.')[0];
	image.onclick = function(event) {
		alert("You're a " + event.target.id);
	};
	container.appendChild(image);
}





