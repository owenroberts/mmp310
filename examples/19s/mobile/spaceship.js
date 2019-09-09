/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width / 2, height - height/6);
		this.size /= 2;
	}

	display() {
		if (!this.died) {
			fill('pink');
			triangle(
				this.x, this.y - this.size,
				this.x - this.size, this.y + this.size,
				this.x + this.size, this.y + this.size
			);

			fill(255, 0, 255, 127);
			ellipse(this.x, this.y, this.size);
		} else {
			const r = random(this.deadCount, this.deadCount + 2);
			for (let i = 0; i < r; i++) {
				fill('pink');
				push();
				translate(this.x, this.y);
				rotate(random(PI));
				triangle(
					random(-this.deadCount * this.size, this.deadCount * this.size), -this.size,
					random(-this.deadCount * this.size, this.deadCount * this.size) - this.size, this.size,
					random(-this.deadCount * this.size, this.deadCount * this.size) + this.size, this.size
				);
				pop();
			}
			this.deadCount--;
		}
	}

	update() {
		super.update();
		if (this.x > width) this.x = 0;
		if (this.x < 0) this.x = width;
	}

	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
		} else {
			//			this.speed.x = 0;	
		}
	}

	setSpeed(speed) {
		this.speed.x = speed;
	}
}