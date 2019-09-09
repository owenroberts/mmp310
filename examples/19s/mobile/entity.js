/*
	entity super class
*/

class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = width * 0.15;
		this.speed = { x: 0, y: 0 };
		this.died = false;
		this.deadCount = 12;
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
		
		// below canvas
		if (this.y > height + this.size) {
			this.died = true;
		}
	}
	
	bounce() {
		// bounce off sides
		if (this.x <= 0 || this.x >= width) {
			if (!this.died) {
				this.speed.x *= -1;
				this.x += this.speed.x * 10;
			}
		}
	}
	
	collide(other) {
		if (!this.died && !other.died) {
			var d = dist(this.x, this.y, other.x, other.y);
			var size = this.size + other.size;
//			debug
//			fill(255, 0, 255, 10);
//			ellipse(this.x, this.y, this.size);
			if (d < size / 2) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	remove(list) {
		if (this.died && this.deadCount > 0) {
			this.deadCount--;
			this.size += 2;
		} else if (this.died && this.deadCount <= 0) {
			var index = list.indexOf(this);
			list.splice(index, 1);
		}
	}
	
	died() {
		this.died = true;
		this.speed.x = 0;
		this.speed.y = 1;
	}
}














