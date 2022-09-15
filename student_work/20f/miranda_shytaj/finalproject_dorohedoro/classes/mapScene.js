class MapScene {
	constructor() {
		this.background = [];
	}

  setup() {
    player.x = 200;
    player.y = height/2;

  }

	draw() {
		background(20, 20, 20);

    if ( currentScene == holeScene) {
      for (let x = 0; x <+ width; x += 160) {
          for (let y = 0; y <= height; y += 160) {
            image(rain, x, y);
         
          }
      }
    }

    if ( currentScene == magicScene ) {

    

        for (let x = 0; x <+ width; x += 400) {
            image(grassImage, x, 150);      
          }

            image(treeImage, 20 , 50);
            image(treeImage, 130 , 30);
            image(treeImage, 200 , 20);
            image(treeImage, 300 , 10);
            image(treeImage, 500 , 20);
            image(treeImage, 750 , 30);
            image(treeImage, 620 , 50);
            image(treeImage, 800 , 70);
            image(treeImage, 970 , 20);
            image(treeImage, 1100 , 30);
            image(treeImage, 1250 , 20);
            image(treeImage, 1300 , 30);
            image(treeImage, 1400 , 30);
            image(treeImage, 1530 , 30);
            
      for (let x = 0; x <+ width; x += 200) {
            image(fenceImage, x, 220);      
        }
    }

     

    noStroke();
    fill("grey");
    rect(0, 270 , width, height);

		/* draw portal */
     

		let enterPortal;

		for (let i = 0; i < this.background.length; i ++) {
  			let bg = this.background[i]; // easier to use
  			bg.draw();

 		 // its a portal if it has drawText
  			if (bg.drawText) {
    			if (bg.collide(player)) {
      			bg.drawText();

      			// user input
      			if (keyIsDown(ENTER)) {
       				enterPortal = bg.requestEntrance();
      			}
    		}
  	}

  	if (enterPortal) {
  	   changeScene(enterPortal);
        currentScene.setup();
	}

}
	
	player.draw();

	}

}