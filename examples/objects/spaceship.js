class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 100, 60);
	}
	update() {
		super.update();
		if (this.speed.x > 0)
			this.speed.x -= 0.02;
		else if (this.speed.x < 0)
			this.speed.x += 0.02;
		if (this.x > width || this.x < 0)
			this.speed.x = 0;
	}
	display() {
		fill('white');
		noStroke();
		triangle(
			this.x, this.y,
			this.x - this.size/2, this.y + this.size,
			this.x + this.size/2, this.y + this.size
			);
	}
}