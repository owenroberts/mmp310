const textInput = document.getElementById("question");
const eightBall = document.getElementById("magic");
const response = document.getElementById("response");

const answers = ["No way, idiot.", "Nope!", "Sure :)", "Maybe ¯\_(ツ)_/¯"];

eightBall.addEventListener("click", generateResponse);

function generateResponse() {
	
	if (textInput.value) {
		const answer = answers[Math.floor(Math.random() * answers.length)];
		response.textContent = answer;
	} else {
		alert("You have to ask a question!");	
	}
}