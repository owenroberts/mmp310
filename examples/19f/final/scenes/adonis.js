class adonis extends Scene {

	preload() {
		this.character = new Character();
		this.character.img = loadImage('images/character.png');
	}
	
	draw() {
		background('black');
		textSize(100);
		textAlign(CENTER, CENTER);
		text("Hi Welcome to Adonis's scene Esssskettiiittt!", width/2, height/2);
		text("Okurrrr", width/2, height/2 + 100);
		
		
		this.character.update();
		this.character.move();
		this.character.display();
	}
}