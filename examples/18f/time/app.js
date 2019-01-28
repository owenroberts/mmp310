const submit = document.getElementById('submit');
submit.addEventListener('click', function() {
	console.log("You got an A!");
//	clearTimeout(quizTimer);
	clearInterval(quizTimer);
});

const countDisplay = document.getElementById('countdown');
const quizTimer = setInterval(countDown, 1000);
let count = 10;

function countDown() {
	if (count > 0) {
		count--;
		countDisplay.textContent = count;
	} else {
		console.log("The quiz is over!");
		clearInterval(quizTimer);
	}
}


function endQuiz() {
	console.log("The quiz is over.");
}