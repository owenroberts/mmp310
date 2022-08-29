class ExtraLife extends GameObject {
	constructor(x, y) {
		super(extraLifeImage, x, y);
	}

	update() {
		player.lives++;
		changeScene('extraLife', currentScene);
		return true;
	}
}