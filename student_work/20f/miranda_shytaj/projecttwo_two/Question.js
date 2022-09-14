class Question {
	constructor(question, answer, options) {

		let answerAttempted = false;

		this.questionContainer = createElement('div', 'question-container');

		const questionHeader = createElement('h2', 'question', question);
		this.questionContainer.appendChild(questionHeader);

		const answers = createElement('div','answers');
		this.questionContainer.appendChild(answers);

		const answerDiv = createElement('div', 'option', answer);
		answers.appendChild(answerDiv);
		
		// correct option
		answerDiv.addEventListener('click', function() {
			if (!answerAttempted) {
				answerDiv.classList.add('correct-answer');
				answerAttempted = true;
				questionAnswered(true);
			}
		});

		for (let i = 0; i < options.length; i++) {
			let option = createElement('div', 'option', options[i]);
			answers.appendChild(option);

			// wrong option
			option.addEventListener('click', function() {
				if (!answerAttempted) {
					option.classList.add('wrong-answer');
					answerAttempted = true;
					questionAnswered(false);
				}
			})
		} 

		 // shuffle questions randomly
		 for (let i = answers.children.length; i >= 0; i--) {
		 	let index = Math.floor(Math.random() * i);
		 	let child = answers.children[index];
		 	answers.appendChild(child);
		 }
	}

	getHTML() {
		return this.questionContainer;
	}
}