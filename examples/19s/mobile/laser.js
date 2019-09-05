/*
	laser class
*/

class Laser extends Entity {
	constructor(x, y) {
		super(spaceship.x + x, spaceship.y + y);
		this.speed.y = random(-20, -10);
		this.width = unit;
		this.size = unit;
		this.height = unit * 3;
		this.color = {
			r: map(laserTimeout, 0, 24, 255, 0),
			g: 50,
			b: 255
		};
		this.deadCount = 1;
	}
	
	display() {
		fill(this.color.r, this.color.g, this.color.b, 127);
		noStroke();
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.height);
	}
	
	update() {
		super.update();
		
		// remove lasers above canvas
		if (this.y < -this.height) this.died = true;
	}
}









