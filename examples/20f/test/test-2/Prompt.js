class Prompt {
	constructor(title, instruction, nextScene) {
		this.title = title;
		this.instruction = instruction;
		this.nextScene = nextScene;
		this.keyPressStarted = false;
	}

	setup(nextScene) {
		if (nextScene) {
			this.nextScene = nextScene;
		}
	}

	draw() {
		textSize(100);
		fill('white');
		text(this.title, width / 2, height / 2);

		textSize(50);
		text(this.instruction, width / 2, height / 2 + 100);

		// enter to accept instruction
		if (!this.keyPressStarted && keyIsDown(ENTER)) {
			this.keyPressStarted = true;
		}

		if (this.keyPressStarted && !keyIsPressed) {
			this.keyPressStarted = false;
			changeScene(this.nextScene);
		}
	}
}