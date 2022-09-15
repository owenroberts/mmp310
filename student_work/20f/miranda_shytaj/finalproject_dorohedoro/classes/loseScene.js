class LoseScene extends MapScene{
	constructor() {
		super();

		this.background.push(new GameObject(youLost, width/2 - 100, height/2 - 70));
	}

	setup(){

	}

	draw() {
		background('red');

		for (let i = 0; i < this.background.length; i ++) {
  			this.background[i].draw();
	}


		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		
		text("Hit SPACEBAR to go to main menu", width / 2 - 420 , height/ 2, width/2 + 20, height/2 +10);
		text("If you came from the HOLE World, hit BACKSPACE to try again" , width/2 - 420 , height/ 2 - 70, width/ 2 + 20, height/2 + 10);
		text("If you came from the MAGIC World, hit ENTER to try again" , width/2 - 420 , height/ 2 - 40, width/ 2 + 20, height/2 + 10);



				if (keyIsDown(8)) {
					 currentScene = holeScene;
				}
			
				if (keyIsDown(ENTER)) {
					currentScene = magicScene;
				}

			if (keyIsDown(32)) {
       			currentScene = main;
       		}


	}
}