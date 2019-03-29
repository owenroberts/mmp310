class Asteroid extends Entity {
	constructor() {
		const size = random(50, 100);
		const x = random(size/2, width - size/2);
		const y = random(-size, -100);
		super(x, y, size);
		this.speed.x = random(-0.25, 0.25);
		this.speed.y = random(1, 2);
	}
	update() {
		if (this.y > height) this.remove();
		if (this.x > width || this.x < 0) this.speed.x *= -1;
		super.update();
	}
	display() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	remove() {
		const index = asteroids.indexOf(this);
		asteroids.splice(index, 1);
	}
}