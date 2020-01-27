class Test extends Scene {
	preload() {
		var spriteSheet = loadSpriteSheet('images/paralax/another_cat.png', 100, 88, 1);
		this.cat = new ParalaxScenery(300, 0, spriteSheet, 0.015);
	}

	setup() {
		this.cat.setup();
		this.cat.sprite.onMousePressed = function() {
			console.log('click');
			changeScene('owen');	
		};
	}

	draw(paralaxScroll) {
		background('lightgreen');
		this.cat.display();
	}
}