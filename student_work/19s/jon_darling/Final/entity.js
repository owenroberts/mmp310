/*
	entity super class
*/

class Entity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		// this.r = random(0, 4);
		this.size = width * 0.06;
  	this.speed = { x: 0, y: 0 };
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		var size;
		if (this.size > other.size) {
			size = this.size;
		} else {
			size = other.size / 3;
		}
		if (d < size * 1.5) {
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



