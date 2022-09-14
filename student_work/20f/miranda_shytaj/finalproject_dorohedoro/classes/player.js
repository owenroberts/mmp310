class Player extends GameObject {
	constructor(x,y) {
		super(shinMask, x, y);
		
		this.img = shinMask;
		this.isWalking = false;
		
		this.speed = 2;
		this.ySpeed = 5;

		this.lives = 3;
	}

	draw() {
		image(this.img, this.x, this.y);
		
	}
}