class Entity {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.speed = {
			x: 0,
			y: 0
		};
		this.size = size;
	}
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	collide(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		var s = this.size > other.size ? this.size : other.size;
		if (d < s/2) return true;
		else return false;
	}
}