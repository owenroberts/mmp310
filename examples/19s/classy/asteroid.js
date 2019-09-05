/*
	asteroid class
*/

class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-2, 2);
		this.speed.y = random(5);
		this.color = color(random(100, 200), random(200), random(200));
	}
	
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size);
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










