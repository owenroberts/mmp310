/*
	laser class
*/

class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
	}
	
	display() {
		fill('red');
		noStroke();
		rectMode(CENTER);
		rect(this.x, this.y, 10, 25);
	}
}