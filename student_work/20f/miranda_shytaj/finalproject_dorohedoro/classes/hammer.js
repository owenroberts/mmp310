class Hammer extends GameObject {
	constructor(x,y){
		super(hammerImage, x, y);
		this.speed = 4;
		hammerImage.delay(1000);
	}

	update() {
		this.x -= this.speed;
		

	}
}