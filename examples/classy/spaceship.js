/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 300);
		this.rocket = {
			duration: 24,
			frame: 0
		};
	}
	
	display() {
		fill(255, 127, 0, 200);
		ellipse(this.x, this.y + this.size * 2, this.rocket.frame * 2, this.rocket.frame * 6);
		fill(255, 0, 0, 127);
		ellipse(this.x, this.y + this.size * 2, this.rocket.frame , this.rocket.frame * 3);
		if (this.rocket.frame > 0) this.rocket.frame--;

		fill('pink');
		triangle(
			this.x, this.y, 
			this.x - this.size, this.y + this.size * 2, 
			this.x + this.size, this.y + this.size * 2
		);

	}
	
	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
			this.rocket.frame = this.rocket.duration;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
			this.rocket.frame = this.rocket.duration;
		} else {
			this.speed.x = 0;	
		}
	}
}