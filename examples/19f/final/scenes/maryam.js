class maryam extends Scene {

	preload() {
		this.character = new Character();
		this.character.img = loadImage('images/maryam/orange.png');
	}
	
	draw() {
		background('blue');
		
		this.character.update();
		this.character.move();
		this.character.display();
	}
    
}