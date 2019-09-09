/*
	add a life powerup
*/

class Life extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-3, 3);
		this.speed.y = 2;
		this.size /= 2;
		this.deadCount *= 2;
		this.color = {
			r: 255,
			g: 100,
			b: 100,
			speed: 2
		}
	}

	display() {
		fill(this.color.r, this.color.g, this.color.b);
		rect(this.x, this.y, this.size, this.size / 2);
		rect(this.x, this.y, this.size / 2, this.size);
		this.color.r += this.color.speed;
		if (this.color.r >= 255 || this.color.r <= 0) {
			this.color.speed *= -1;
		}
	}
	
	update() {
		super.update();
		super.bounce();
	}
}