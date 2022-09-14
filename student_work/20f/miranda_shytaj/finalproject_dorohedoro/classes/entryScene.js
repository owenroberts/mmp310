class EntryScene {
	constructor(x, y) {

		this.x = x;
		this.y = y;
		this.tab = [];
		this.background = [];

		for ( let x = 0; x < width; x += 150 ) {
			for ( let y = 0; y < height; y += 150) {
				 this.background.push(new GameObject(mushTwo, x, y));
				 mushTwo.delay(1500);
				
			}
		}

		for ( let x = 75; x < width; x += 150 ) {
			for ( let y = 0; y < height; y += 100) {
				 this.background.push(new GameObject(mushThree, x, y));
				 mushThree.delay(1500);
			}
		}

		this.tab.push(new GameObject(startGameTab, width/2 - 100, height/2 + 70));
		this.tab.push(new GameObject(dorohedoroTitle, width/2 - 280 , height/2 - 150 ));

		

	}


	setup() {

	}

	draw() {
		background(20, 20, 20);

			for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}


		for (let i = 0; i < this.tab.length; i ++) {
			this.tab[i].draw();
		}

	}




	mousePressed() {
		let tab = this.tab[0];
		if (mouseX > tab.x && mouseX < tab.x + tab.width &&
   		 mouseY > tab.y && mouseY < tab.y + tab.height) {
    		currentScene = characters;
		}
		
		
	
		}
}
