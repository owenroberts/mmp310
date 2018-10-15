const container = document.getElementById("container");
const response = document.getElementById("response");
const animals = [
	"images/dog.jpg",
	"images/cat.jpg",
	"images/bird.jpg",
	"images/fish.jpg"
];

const cities = [
	"images/dog.jpg",
	"images/cat.jpg",
	"images/bird.jpg",
	"images/fish.jpg"
];

const animalDiv = document.getElementById('animals');
const citiesDiv = document.getElementById('cities');
const answers = [];
let score = 0;

for (let i = 0; i < animals.length; i++) {
	animalDiv.appendChild(buildImage(animals[i], i));
}

for (let i = 0; i < cities.length; i++) {
	citiesDiv.appendChild(buildImage(cities[i], i));
}

function buildImage(path, index) {
	const image = new Image();
	image.src = path;
	image.id = index;
	image.onclick = answer;
	return image;
}


function answer(event) {
	answers.push(+event.target.id);
	if (answers.length > 1) {
		let score = 0;
		for (let i = 0; i < 2; i++) {
			score += answers[i];
		}
		if (score > 3) {
			response.textContent = "You're a Blank";
		} else {
			response.textContent = "You're a blaurk";
		}
		
	}
}