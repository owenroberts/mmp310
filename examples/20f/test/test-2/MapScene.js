class MapScene {
	constructor() {
		this.background = [];
		this.foreground = [];
		this.clouds = [];
		this.portals = [];

		this.playerX = player.x;
		this.playerY = player.y;
	}

	setup() {
		player.x = this.playerX;
		player.y = this.playerY;
	}

	draw() {
		background(220);
		for (let i = 0; i < this.background.length; i++) {
			this.background[i].draw();
		}

		/* player keyboard events */
		player.isWalking = false;

		if (keyIsDown(RIGHT_ARROW)) {
			player.x += player.speed;
			player.isWalking = true;
		}

		if (keyIsDown(LEFT_ARROW)) {
			player.x -= player.speed;
			player.isWalking = true;
		}

		if (keyIsDown(UP_ARROW)) {
			player.y -= player.speed;
			player.isWalking = true;
		}

		if (keyIsDown(DOWN_ARROW)) {
			player.y += player.speed;
			player.isWalking = true;
		}

		/* draw portals */
		let enterPortal;
		for (let i = 0; i < this.portals.length; i++) {
			this.portals[i].draw();

			if (this.portals[i].collide(player)) {
				this.portals[i].drawText();

				/* enter event */
				if (keyIsDown(ENTER)) {
					enterPortal = this.portals[i].sceneToOpen;
				}
			}
		}

		if (enterPortal) {
			// save current player position
			if (player.level >= scenes[enterPortal].level - 1) {
				this.playerX = player.x;
				this.playerY = player.y;
				changeScene(enterPortal);
			}
		}

		player.draw();

		for (let i = 0; i < this.foreground.length; i++) {
			this.foreground[i].draw();
		}


		for (let i = 0; i < this.clouds.length; i++) {
			this.clouds[i].draw();
			this.clouds[i].update();
		}


	}
}