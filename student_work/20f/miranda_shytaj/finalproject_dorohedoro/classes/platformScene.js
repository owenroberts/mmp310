class PlatformScene {
	constructor(img, minObstacles, maxObstacles) {
		this.img = img;
		this.minObstacles = minObstacles;
		this.maxObstacles = maxObstacles;
		this.obstacles = [];
		this.background = [];
		this.obstaclesPassed = 0;
		this.playerWon = false;

		this.groundY = 200;
		this.gravity = 2;
		this.acceleration = 1;


	}

	setup() {
		player.x = 300;
		player.y = height/2;
		this.obstaclesPassed = 0;

		//this.nextScene = nextScene; 
		this.obstacles = [];

		var n = random(this.minObstacles, this.maxObstacles);
		
		for (let i = 0; i < n; i++) {
			let x = random(width/2, width) + i * width / 2;
			this.obstacles.push(new Gyoza(x, height - this.groundY + 50, 5));
			
				} 
		}

		

	draw() {

		background(20, 20, 20);
		
		
		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}

		fill(0);
    	rect(40, 70 , 320,  100);

		fill("white");
		textSize(20);
		textFont('Roboto Mono');
		var s = "Press SPACEBAR to dodge the obstacle! One touch and the game is over!";
		text(s, 50, 20, 300, 200);



		//apply gravity 
		if (player.y < height - this.groundY) {
 			player.ySpeed += this.gravity;
 		} else {
 			player.ySpeed = 0;
 			player.shinIsJumping = false;
 		}

	 	//32 spacebar for jumping
	 	if (!player.shinIsJumping && keyIsDown(32)) {
	 		player.ySpeed = -30;
	 		player.shinIsJumping = true;
	 	}

	 	player.y += player.ySpeed;
	 	player.draw();

	 	//score++;

	 	for (let i = 0; i < this.obstacles.length; i++) {
	 		this.obstacles[i].update();
	 		this.obstacles[i].draw();
	 		

	 		if (this.obstacles[i].collide(player)) {
	 			player.lives -=1;
	 			currentScene = loseScene;

	 			if (player.lives == 0) {
	 				score = 0;
	 				player.lives = 3;
	 				level = 1;
					currentScene = main;
	 			}
	 		}


	 		// passes each obstacles
	 		if (player.x > this.obstacles[i].x && i >= this.obstaclesPassed && !this.playerWon) {
	 			score += 10;
	 			this.obstaclesPassed++;
 				 for (let j = this.obstaclesPassed; j < this.obstacles.length; j++) {
    				this.obstacles[j].speed += this.acceleration;
  				}
	 		}

	 		// player passes last obstacle
	 		if (i == this.obstacles.length - 1 && player.x > this.obstacles[i].x) {
	 				if (!this.playerWon) {
	 					level++;
						this.playerWon = true;
	 				}

	 			currentScene = winScene;
	 		}
	 			
	 	} 
	}	
}