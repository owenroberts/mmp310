const responses = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	
	"Ask again later",
	"Cannot predict now",
	
	"Don't count on it",
	"My reply is no"
];

const eightBall = document.getElementById("eight-ball");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
eightBall.onclick = function() {
	
	if (question.value) {
		const response = responses[Math.floor(Math.random() * responses.length)];
		answer.textContent = response;
	} else {
		answer.textContent = "You have to ask a question first.";	
	}
};









