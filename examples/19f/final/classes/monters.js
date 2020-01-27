class monters extends Thing {
	constructor(x, y) {
		var x = x || random(width);
		var y = y || -100;
		var size = random(50, 100);
		var speedX = random(-1, 1);
		var speedY = random(0, 3);
		super(x, y, size, speedX, speedY);
	}
	
	display() {
		

	}
}