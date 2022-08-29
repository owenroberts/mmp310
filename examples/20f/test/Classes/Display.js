class Display {

	setup() {

	}

	draw() {
		textAlign(LEFT, CENTER);
		textSize(20);
		textFont('Andale Mono');
		fill('yellow');
		text('Level ' + level, 10, 20);
		text('Score ' + score, 10, 40);
		
		text('I for Items', 10, 80);

		// player lives
		for (let i = 0; i < player.lives; i++) {
			fill('red');
			noStroke();
			ellipse(20 + i * 30, 60, 16);
		}
	}
}