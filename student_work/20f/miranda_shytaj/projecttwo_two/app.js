/* 
		quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');

//quiz questions
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("1 - What will be the right answer?", "This one.", ["Maybe this one.", "Neither of them."]));
questions.push(new Question("2 - Choose a scent.", "Magnolia.", ["Coffee.", "Lavander."]));
questions.push(new Question("3 - Choose a color.", "Peacock.", ["Ash.", "Mulberry."]));
questions.push(new Question("4 - Which number is the lucky one?", "13", ["3", "7"]));
questions.push(new Question("5 - Choose a star.", "★", ["☆", "*"]));
questions.push(new Question("6 - Which door will lead you to your favorite place?", "First one.", ["Second one.", "Third one."]));
questions.push(new Question("7 - Who is trying to talk with you?", "The ghost sitting on your left side.", ["Your spirit guide.", "No one."]));
questions.push(new Question("8 - No question. Just select the word that you feel attracted to.", "Wanderlust.", ["Syzygy.", "Leitmotif."]));
questions.push(new Question("9 - Which direction are you taking?", "Left.", ["Right.", "I'm not going anywhere."]));
questions.push(new Question("10 - Choose one satellite.", "Phobos.", ["Deimos.", "Moon."]));


// events
startButton.addEventListener('click', function() {
		startButton.classList.add('disable');
		message.textContent = "Listen to your intuition!";
		loadNextQuestion();
		
});

nextButton.addEventListener('click', function() {
	quizContainer.textContent = '';
	nextButton.classList.add('disable');
	message.textContent = "Listen to your intuition!";
	currentQuestion++;
	loadNextQuestion();
})


endButton.addEventListener('click', function() {
		quizContainer.textContent = '';
		endButton.classList.add('disable');
		message.textContent = `You got ${score} out of ${questions.length}!`;

		if (score <= 4) {
			message.textContent += "You should pay more attention to your senses!";
		} else if (5 < score <= 7 ) {
			message.textContent += "You are really perceptive!";
		} else {
			message.textContent += "You are in tune with your senses!";
		}


})


// callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);
}

function questionAnswered(isCorrect) {
	if (isCorrect) {
		message.textContent = "You were right!";
		score++;
	} else {
		message.textContent = "Wrong answer, sorry!"
	}

	// more questions
	if (currentQuestion < questions.length - 1){
		nextButton.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}	

}


//helper function to create html elements
function createElement(tagName, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;
}
