const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionsContainer = document.getElementById('questions-container');
const message = document.getElementById('message');

startButton.addEventListener('click', function() {
	loadQuestion();
	startButton.remove();
});
nextButton.addEventListener('click', nextQuestion);

// add questions
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("What is 1 + 1?", "2", ["1", "0"]));
questions.push(new Question("What is 2 + 2?", "4", ["3", "2"]));


function loadQuestion() {
	questions[currentQuestion].add(questionsContainer);
}

function nextQuestion() {
	if (questions[currentQuestion].answered) {
		questions[currentQuestion].remove();
		if (questions.length - 1 > currentQuestion) {
			currentQuestion++;
			loadQuestion();
		} else {
			message.textContent = "You got " + score + " out of " + questions.length + " corrent.";
		}
	} else {
		message.textContent = "Answer the question first!";
	}
	
	
}

function createElement(tagName, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;
}

// loadQuestion();