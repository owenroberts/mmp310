class ParalaxScene extends Scene {
	preload() {
		this.map = new ParalaxMap();
		this.map.preload('data/paralax.json');
		
		var spriteSheet = loadSpriteSheet('images/paralax/another_cat.png', 100, 88, 1);
		this.cat = new ParalaxScenery(300, 0, spriteSheet, 0.015);
		this.map.addSprite('cat', this.cat, 'scenery');
		
	}
	
	setup() {
		this.map.setup();
		
		this.cat.setup();
		this.cat.onClick = function() {
			console.log('cat', this);
			changeScene('owen');	
		};
	}
	
	start() {
		this.map.start();	
	}
	
	draw(paralaxScroll) {
		background('pink');
		this.map.paralax(paralaxScroll);
		this.map.display();
		this.cat.update();
		this.cat.display();
	}
}