class Portal extends GameObject{
	constructor(message, img, x, y, sceneToOpen, levelRequired) {
		super(img, x, y);
		this.message = message;
		this.sceneToOpen = sceneToOpen;
		this.levelRequired = levelRequired;
	}

	draw() {
		image(this.img, this.x, this.y);
	}




	drawText() {

		noStroke();
    	fill(0);
    	rect(this.x, this.y - 70 , this.width,  65);

		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		text(this.message, this.x, this.y - this.height/2 - 60 , this.width + 20, this.height + 50);
		if (!this.levelRequired || level >= this.levelRequired) {
			noStroke();
    		fill(0);
    		rect(50, 60 , 140,  100);
    		fill(255);
			text("Hit ENTER to get in the room", 50, 60, 150, 100);
		} else {
			noStroke();
    		fill(0);
    		rect(5, 60 , 285,  150);
    		fill(255);
			text(" You need to complete the level before of this one! Come back once you won!", 0, 30, 300, 200);
		}
	

	}

	requestEntrance() {
		if (!this.levelRequired || level >= this.levelRequired) {
		return this.sceneToOpen;
		} else {
		return false;
		}
	}

}