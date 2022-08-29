class PlatformScene {
	constructor(bgColor, minObstacles, maxObstacles, level) {
		this.clouds = [];
		this.obstacles = [];
		this.bgColor = bgColor;
		this.min = minObstacles;
		this.max = maxObstacles;
		this.level = level;

		this.groundY = 200;
		this.gravity = 2;

		this.clouds.push(new Cloud(100, 100));
		this.clouds.push(new Cloud(width/2, 150));
		this.clouds.push(new Cloud(width - 100, 50));
	}

	setup() {
		player.x = 200;
		player.y = height - this.groundY;
		player.isWalking = true;

		// add obstacles
		this.obstacles = [];
		var n = random(this.min, this.max);

		for (let i = 0; i < n; i++) {
			let snake = new Snake(random(width/2, width) + i * width / 2, height - this.groundY);
			this.obstacles.push(snake);
		}
	}

	draw() {
		background(this.bgColor);
		noStroke();
		fill('lightgreen');
		rect(0, height - this.groundY, width, this.groundY);


		for (let i = 0; i < this.clouds.length; i++) {
			this.clouds[i].draw();
			this.clouds[i].update();
		}

		/* player physics */
		if (player.y < height - this.groundY) {
			player.ySpeed += this.gravity;
		} else {
			player.ySpeed = 0;
			player.isJumping = false;
		}

		// 32 is space key for jump
		if (!player.isJumping && keyIsDown(32)) {
			player.ySpeed = -30;
			player.isJumping = true;
		}

		player.y += player.ySpeed;
		player.draw();

		for (let i = 0; i < this.obstacles.length; i++) {
			let snake = this.obstacles[i];
			snake.draw();
			snake.update();

			if (snake.collide(player)) {
				player.isJumping = false;
				changeScene('lose', currentScene);
			}

			// wait for last snake to go off the left side of canvas
			if (i == this.obstacles.length - 1 && snake.x - snake.width/2 < 0) {
				player.isJumping = false;
				if (player.level < this.level) player.level = this.level;
				changeScene('win');
			}
		}
	}


}