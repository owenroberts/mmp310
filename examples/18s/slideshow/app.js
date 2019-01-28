const images = [
	"images/cat.jpg", 
	"images/dog.jpg", 
	"images/bird.jpg", 
	"images/lizard.jpg"
];
const captions = [
	"I'm a cat.", 
	"I'm a dog", 
	"Hello, I'm a bird", 
	"I'm a lizard."
];

const container = document.getElementById("container");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer = document.createElement('div');
	
	const img = new Image();
	img.src = images[i];
	img.id = "img"+i;
	img.classList.add("slide");
	
	img.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	};
	
	imgContainer.appendChild(img);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer.appendChild(caption);
	
	container.appendChild(imgContainer);
}






