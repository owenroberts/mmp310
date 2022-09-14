class ChooseCharacter extends GameObject{
	constructor(img, x, y, characterName, sceneToOpen) {
		super(img, x, y);
		this.characterName = characterName;
		this.sceneToOpen = sceneToOpen;

	}

	draw() {
		image(this.img, this.x, this.y);
	}

	mousePressed() {
		if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width &&
			mouseY > this.y - this.height / 2 && mouseY < this.y + this.height) {
			player.img = this.characterName;
			currentScene = this.sceneToOpen;
	}

	
}
}