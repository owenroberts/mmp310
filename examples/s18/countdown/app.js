const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');
const answers = document.getElementsByClassName('answer');
const countDisplay = document.getElementById('countdown');

let countInterval;
let count = 10;

startBtn.addEventListener('click', function() {
	quiz.style.display = "block";
	this.style.display = "none";
	countInterval = setInterval(countdown, 1000);
});

submitBtn.addEventListener('click', checkAnswers);

function checkAnswers() {
	clearInterval(countInterval);
	let score = 0;
	for (let i = 0; i < answers.length; i++) {
		score += +answers[i].value;
	}
	countDisplay.textContent = "Your score is " + score;
}

function countdown() {
	if (count == 0) {
		checkAnswers();	
	} else {
		countDisplay.textContent = "Time left: " + count;
		count--;
	}
}




