const animalDiv = document.getElementById("animals");
const drinksDiv = document.getElementById("drinks");
const animals = [
	"images/dog.jpg",
	"images/cat.jpg",
	"images/bird.jpg",
	"images/fish.jpg"
];

const drinks = [
	"images/beer.jpg",
	"images/vodka.jpg",
	"images/whiskey.jpg",
	"images/wine.jpg"
];

// 0 introvert - extrovert
const animalScores = [2, -2, 0, 1];
const drinkScores = [1, 2, -1, 0];
const userAnswers = [0, 0];
let score = 0;

function answer(event) {
	if (this.dataset.question == 0) {
		userAnswers[0] = animalScores[this.dataset.index];
	} else {
		userAnswers[1] = drinkScores[this.dataset.index];
		
		for (let i = 0; i < 2; i++) {
			score += userAnswers[i];
		}
		if (score > 0) {
			document.getElementById("response").textContent = "You are an extrovert";
		} else {
			document.getElementById("response").textContent = "You are an introvert";	
		}
	}
}

function createImage(src, index, question) {
	const image = new Image();
	image.src = src;
	image.dataset.index = index;
	image.dataset.question = question;
	image.onclick = answer;
	return image;
}

for (let i = 0; i < drinks.length; i++) {
	drinksDiv.appendChild(createImage(drinks[i], i, 1));
}

for (let i = 0; i < animals.length; i++) {
	animalDiv.appendChild(createImage(animals[i], i, 0));
}














