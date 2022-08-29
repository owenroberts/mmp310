class Question {
	constructor(question, answer, options) {

		this.answered = false;

		this.container = createElement('div', 'question-container');

		this.questionDiv = createElement('h2','question', question);
		this.container.appendChild(this.questionDiv);

		this.answersDiv = createElement('div', 'answers');

		for (let i = 0; i < options.length; i++) {
			let option = createElement('div', 'option', options[i]);

			option.onclick = function() {
				option.classList.add('wrong');
				this.answer(false);
			}.bind(this);

			this.answersDiv.appendChild(option);
		}

		let answerDiv = createElement('div', 'option', answer);
		answerDiv.onclick = function() {
			answerDiv.classList.add('right');
			this.answer(true);
		}.bind(this);
		this.answersDiv.appendChild(answerDiv);

		// shuffle
		for (let i = this.answersDiv.children.length; i >= 0; i--) {
			let child = this.answersDiv.children[Math.floor(Math.random() * i)]
			this.answersDiv.appendChild(child);
		}
		this.container.appendChild(this.answersDiv);
	}

	answer(isCorrect) {
		if (!this.answered) {
			if (isCorrect) {
				score++;
				message.textContent = "Correct!";
			}  else {
				message.textContent = "Nope!";
			}
			this.answered = true;
			nextButton.classList.add('active');
		}
	}

	add(parent) {
		parent.appendChild(this.container);
	}

	remove() {
		this.container.remove();
	}
}