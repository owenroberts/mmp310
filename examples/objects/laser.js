class Laser extends Entity {
	constructor() {
		super(player.x, player.y, 10);
		this.speed.y = -5;
	}
	display() {
		fill('lightblue');
		noStroke();
		rect(this.x, this.y, this.size/5, this.size, 1);
	}
	update() {
		super.update();
		if (this.y < 0) this.remove(lasers);
	}
}