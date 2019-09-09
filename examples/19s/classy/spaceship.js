/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 200);
	}
	
	display() {
		fill('pink');
		triangle(
			this.x, this.y, 
			this.x - this.size, this.y + this.size * 2, 
			this.x + this.size, this.y + this.size * 2
		);
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
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
		} else {
			this.speed.x = 0;	
		}
	}
}