class Splash extends Scene {
	draw() {
		background(0);
		textSize(60);
		noFill();
		textAlign(CENTER, CENTER);
		strokeWeight(2);
		stroke('pink')
		text('mmp 310 final projects', width/2, 100);

		textSize(50);

		text('press key to play scene', width/2, 200);
		text('a - who is faster?', width/2, 300);
		text('b - marsii', width/2, 400);
		text('c - nelson', width/2, 500);
		text('d - nick', width/2, 600);
		text('e - collosseum', width/2, 700);



		if (keyIsPressed) {
			if (key == 'a') changeScene('ekaterinaStart');
			if (key == 'b') changeScene('marsii');
			if (key == 'c') changeScene('nelson');
			if (key == 'd') changeScene('nick');
			if (key == 'e') changeScene('collosseum');

		}
	}
}