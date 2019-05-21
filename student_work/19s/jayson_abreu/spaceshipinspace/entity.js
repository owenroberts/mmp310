/*
	entity super class
*/

class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 100;
		this.speed = { x: 0, y: 0 };
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		var size = this.size / 2 + other.size / 2;
		
		if (d < size) {
			return true;
		} else {
			return false;
		}
	}
	
	remove(list) {
		var index = list.indexOf(this);
		list.splice(index, 1);
	}
}
