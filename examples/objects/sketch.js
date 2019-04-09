/*
	objects mobile example
*/
var player;
var asteroids = [];
var lasers = [];
var s = {
	spawnAsteroid: 99,
	scene: {
		game: true,
		over: false
	}
}; // settings
function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Spaceship();
	textAlign(CENTER, CENTER);
	textSize(50);
}

function draw() {
	background('midnightblue');
	if (s.scene.game) game();
	else if (s.scene.over) gameOver();
	s.counter--;
}

function game() {

	player.display();
	player.update();

	/* spawn asteroids */
	if (random(100) > s.spawnAsteroid) 
		asteroids.push(new Asteroid());
	
	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].collide(player)) {
			s.scene.game = false;
			s.scene.over = true;
			player.speed.x = 0;
			s.counter = 60;
			asteroids[i].died = true;
		}
		for (let j = 0; j < lasers.length; j++) {
			if (lasers[j].collide(asteroids[i])) {
				asteroids[i].died = true;
				lasers[j].died = true;
			}
		}		
	}


	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
	}

	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	}

	for (let i = 0; i < lasers.length; i++) {
		if (lasers[i].died) lasers[i].remove(lasers);
	}

	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].died) asteroids[i].remove(asteroids);
	}

	
}

function gameOver() {
	fill('white');
	noStroke();
	text('game over', width/2, height/2);
	if (s.counter > 0) text(s.counter, width/2, height/2 + 50);
	else text('tap to play', width/2, height/2  + 50);
}


/* events */
let touch = {};
function touchStarted() {
	if (touches[0]) {
		touch.x = touches[0].x;
		touch.y = touches[0].y;
		touch.px = touch.x;
		touch.py = touch.y;
	}
}

function touchMoved() {
	touch.x = touches[0].x;
	touch.y = touches[0].y;
}

function touchEnded() {
	if (s.scene.over && s.counter <= 0) {
		asteroids = [];
		s.scene.game = true;
		s.scene.over = false;
	} else if (s.scene.game) {

		const delta = touch.x - touch.px;

		if (delta > 20) {
			player.speed.x = 5;
		} else if (delta < -20) {
			player.speed.x = -5;
		} else {
			player.speed.x = 0;
			lasers.push(new Laser());
		}
	}

	touch.px = touch.x;
	touch.py = touch.y;
}








