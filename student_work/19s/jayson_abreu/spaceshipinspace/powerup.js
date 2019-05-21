/*
	power up class
*/

class Powerup extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-2, 2);
		this.speed.y = 4; // random(10, 20);
		this.size /= 2;
	}
	
	display() {
		fill('blue');
		noStroke();
		rect(this.x, this.y, this.size, this.size);
	}
	
	update() {
		super.update();
		
		if (this.y > height + this.size) {
			this.remove(powerups);	
		}
		
		if (this.x <= 0 || this.x >= width) {
			this.speed.x *= -1;	
		}
		
	}
}


