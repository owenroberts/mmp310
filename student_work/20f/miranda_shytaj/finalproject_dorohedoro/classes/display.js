class Display {

	draw(){


		noStroke();
    	fill(20,20,20, 100);
    	rect(10, 300, 210, 90);

		fill(255);
		textSize(15);
		text( 'level' + level, 50, 320);
		text( 'score' + score, 150, 320);

		for (let i = 0; i < player.lives; i ++) {
			image(heartLives, 60 + i * 50, 330);
			heartLives.resize(36.9, 43.8);
		}
		
	}
}