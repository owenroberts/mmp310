class WinScene extends MapScene{
	constructor() {
		super();

		this.background.push(new GameObject(youWon, width/2 - 100, height/2 - 70));
	}

	setup(){

	}

	draw(){
		background(20,20,20);

		for (let i = 0; i < this.background.length; i ++) {
  			this.background[i].draw();
		}


		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Hit SPACEBAR to go to main menu", width / 2 - 420 , height/ 2 + 20 , width/2 + 20, height/2 +10);
		text("If you came from HOLE World, hit ENTER to go proceed to the next level" , width/2 - 420 , height/ 2 - 80, width/ 2 + 100, height/2 + 10);
		text("If you came from MAGIC World, hit BACKSPACE to go proceed to the next level", width/2 - 420 , height/ 2 - 30, width/ 2 + 100, height/2 + 10);

			if (keyIsDown(ENTER)) {
				currentScene = holeScene;
       		}

			if (keyIsDown(8)) {
				currentScene = magicScene;
			}

	}
}