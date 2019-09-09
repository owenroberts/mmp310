/*
	power up class
*/

class Powerup extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-2, 2);
		this.speed.y = 4; // random(10, 20);
		this.size /= 2;
		this.deadCount = 24;
	}
	
	display() {
		fill(map(laserTimeout, 0, 24, 255, 0), 0, 255);
		noStroke();
		for (let i = 0; i < 4; i++) {
			const x = i % 2 == 0 ? this.size/4 : -this.size/4;
			const y = i < 2 ? -this.size/4 : this.size/4;
			rect(this.x + x, this.y + y, this.size/4, this.size/8);
			rect(this.x + x, this.y + y, this.size/8, this.size/4);
		}
		
	}
	
	update() {
		super.update();
		super.bounce();
	}
}




