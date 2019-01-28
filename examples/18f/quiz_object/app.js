const quiz = [
	{
		question: "Which animal are you?",
		answers: [
			{ src: "images/dog.jpg", score: 2 },
			{ src: "images/cat.jpg", score: -2 },
			{ src: "images/bird.jpg", score: 0 },
			{ src: "images/fish.jpg", score: 1 }
		] 
	}, 
	{
		question: "What is your favorite drink?",
		answers: [
			{ src: "images/beer.jpg", score: 1 }, 
			{ src: "images/vodka.jpg", score: 2 }, 
			{ src: "images/whiskey.jpg", score: -1 }, 
			{ src: "images/wine.jpg", score: 0 }
		]
	},
	{
		question: "What is your favorite hobby?", 
		answers:[
			{ src: "images/golf.jpg", score: 2 },
			{ src: "images/sega.jpg", score: -2 },
			{ src: "images/music.png", score: 0 }
		]
	}
];



const container = document.getElementById('quiz');

// build quiz HTML
for (let i = 0; i < quiz.length; i++) {
	const q = quiz[i];
	
	// create question container 
	const questionDiv = document.createElement('div');
	questionDiv.classList.add('question');
	
	// add question
	const p = document.createElement('p');
	p.textContent = q.question;
	questionDiv.appendChild(p);
	
	
	// option div
	const options = document.createElement('div');
	options.classList.add('options');
	questionDiv.appendChild(options);
	
	// add answers
	for (let j = 0; j < q.answers.length; j++) {
		const a = q.answers[j];
		const img = new Image();
		img.src = a.src;
		options.appendChild(img);
		
		img.onclick = function() {
			q.score = a.score;
		};
	}
	// add to container
	container.appendChild(questionDiv);
}



// < 0 introvert - > 0 extrovert

const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += quiz[i].score;
	}
	const response = document.getElementById('response');
	if (score > 0) {
		response.textContent = "You are an extrovert.";
	} else {
		response.textContent = "You are an introvert.";
	}
};











