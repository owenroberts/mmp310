/*
	asteroid class
*/

class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-1, 1);
		this.speed.y = random(5);
		// this.color = color(random(100, 200), random(200), random(200));
		this.color = {
			r: random(100, 200),
			g: random(200),
			b: random(200),
			min: 0,
			max: 255,
			speed: 10
		}
	}
	
	display() {
		fill(this.color.r, this.color.g, this.color.b);
		this.color.r += this.color.speed;
		if (this.color.r <= this.color.min || this.color.r >= this.color.max) this.color.speed *= -1;
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
}










