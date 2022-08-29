class Prompt {
	constructor(title, instruction) {
		this.title = title;
		this.instruction = instruction;
		this.enterStarted = false;
	}

	setup(sceneName, callback) {
		this.sceneToOpen = sceneName;
		this.callback = callback;
	}

	draw() {
		textFont("Comic Sans MS");
		textAlign(CENTER, CENTER);
		textSize(100);
		fill('white');
		text(this.title, width / 2, height / 2);

		textSize(50);
		text(this.instruction, width / 2, height / 2 + 100);

		// event
		if (keyIsDown(ENTER) && !this.enterStarted) {
			this.enterStarted = true;
		}

		if (this.enterStarted && !keyIsPressed) {
			changeScene(this.sceneToOpen);
			this.enterStarted = false;
			if (this.callback) {
				this.callback();
			}
		}
	}
}