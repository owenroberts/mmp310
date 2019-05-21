class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-2, 2);
		this.speed.y = random(4);
		this.size = random(20, 100);
		this.color = color(random(255), random(255), random(255));
	}

	display() {
		fill(this.color);
		noStroke();
		if(this.size > 75 && this.size < 80){
			image(alien, this.x, this.y, this.size, this.size);
		}else {
			image(asteroidImg, this.x, this.y, this.size, this.size);
		}
	}

	update() {
		super.update();

		// remove asteroids below the canvas
		if (this.y > height + this.size) {
			this.remove(asteroids);
		}

		// bounce asteroids off sides
		if (this.x <= 0 || this.x >= width) {
			this.speed.x *= -1;
		}


	}
}
