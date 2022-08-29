const queryInput = document.getElementById('query');
const numCardsInput = document.getElementById('num-cards');
const submitBtn = document.getElementById('submit');
const gameBoard = document.getElementById('game');
const errorMsg = document.getElementById('error-message');
const apiKey = 'BW6rKqXJOzSESTHHR8G8h1bLcq9LKqyC';

let cards = [];



submitBtn.addEventListener('click', submitQuery);
queryInput.addEventListener('keydown', ev => {
	if (ev.which == 13) {
		submitQuery();
	}
})

function submitQuery() {

	// reset cards
	for (let i = 0; i < cards.length; i++) {
		cards[i].elem.remove();
	}
	cards = [];
	
	const query = queryInput.value;
	if (query) {
		const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=${numCardsInput.value/2}`;
		fetch(url)
			.then(response => response.json())
			.then(json => addGifs(json))
			.catch(error => console.error(error));
	} else {
		errorMsg.textContent = "Please enter a search term.";
	}
}

function addGifs(data) {

	let urls = [];
	for (let i = 0; i < data.data.length; i++) {
		urls.push(data.data[i].images.downsized.url);
		urls.push(data.data[i].images.downsized.url);
	}

	// sorting algorithm?
	// cards.sort(function() { return 0.5 - Math.random() });
	urls = shuffle(urls);

	for (let i = 0; i < urls.length; i++) {
		let card = new Card(urls[i]);
		gameBoard.appendChild(card.elem);
		cards.push(card);
	}
}

function shuffle(array) {
	let currentIndex = array.length, tempValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		tempValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = tempValue;
	}
	return array;
}

/* game logic */
let userClickNumber = 0;
let lastCard;
let timeout, func;

function userClicked(card) {

	if (card == lastCard || card.isMatched) {
		return;
	}
	

	if (userClickNumber == 0) {
		lastCard = card;
		card.reveal();
		userClickNumber = 1;
	} 

	else if (userClickNumber == 1) {
		userClickNumber = 2;

		// cards match
		if (card.imgUrl == lastCard.imgUrl) {
			card.reveal();
			card.isMatched = true;
			lastCard.isMatched = true;
			lastCard = undefined;
			userClickNumber = 0;

			let allMatched = true;
			for (let i = 0; i < cards.length; i++) {
				if (!cards[i].isMatched) {
					allMatched = false;
				}
			}

			if (allMatched) {
				errorMsg.textContent = "You win!";
			}

			
		} 

		// cards don't match
		else {
			card.reveal();
			func = function() {
				lastCard.hide();
				card.hide();
				lastCard = undefined;
				userClickNumber = 0;
			};
			timeout = setTimeout(func, 1000);
		}
	}

	else {
		clearTimeout(timeout);
		func();
		userClickNumber = 1;
		card.reveal();
		lastCard = card;
	}
}
