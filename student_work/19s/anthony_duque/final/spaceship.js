class Spaceship extends Entity {
	constructor() {
		super(width/3, height - 100);
        this.color = color(random(255), random(255), random(255));
        this.color2 = color(random(255), random(255), random(255));
		;
	}

	display() {
		fill(this.color);
		image(ship, this.x, this.y + 20, 150, 100);
	}

	update() {
		super.update();
		if (this.x > width) {
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = width;
		}
	}

	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
			// engine.play();
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
			// engine.play();
		} else {
			// engine.stop();
			this.speed.x = 0;
		}
	}
}
