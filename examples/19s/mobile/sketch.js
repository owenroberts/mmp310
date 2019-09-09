/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];
var lifes = [];

var lifeSize, unit;

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time

// score
// one point for every asteroid destroyed
var score = 0;

// player lives
var lives = 3;

// coutner
var asteroidTime = 100;
var asteroidCount = 0;
var asteroidNum = 2;

var gameOver = false;

function preload() {
	// if you have images
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	spaceship = new Spaceship();
//	frameRate(24);
	
	lifeSize = width / 40;
	unit = width / 100;
}

function draw() {

	background(16);
	
	// add random power ups
	if (random(1000) > 998) {
		if (laserTimeout > 0) powerups.push(new Powerup());
	}
	
	if (asteroidCount == asteroidTime) {
		for (let i = 0; i < asteroidNum; i++) {
			asteroids.push(new Asteroid());
		}
		asteroidCount = 0;
		asteroidNum += 0.1;
	}
	asteroidCount++;
	
	// add lasers
	if (laserCounter <= 0) {
		// shoot a laser
		if (keyIsDown(32) || keyIsDown(88)) {
			lasers.push(new Laser(0, -40));
			laserCounter = laserTimeout;
		}
	} else {
		laserCounter -= 1;	
	}
	
	if (laserTimeout < 24 && laserTimeout > 0) laserTimeout += 0.001;
	
	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < powerups.length; i++) {
		if (powerups[i].collide(spaceship)) {
			// power up applied
			if (laserTimeout > 0) laserTimeout -= 4;
			powerups[i].died = true;
		}
		powerups[i].display();
		powerups[i].update();
	}
	
	for (let i = 0; i < lifes.length; i++) {
		if (lifes[i].collide(spaceship)) {
			lifes[i].died = true;
			lives++;
		}
		lifes[i].display();
		lifes[i].update();
	}
	
	var len = asteroids.length;
	for (let i = 0; i < asteroids.length; i++) {
//		console.log('len', asteroids.length)
		asteroids[i].display();
		asteroids[i].update();
		
		// collision with other asteroids
		for (let j = 0; j < asteroids.length; j++) {
			if (i != j) {
				if (asteroids[i].collide(asteroids[j])) {
					asteroids[i].bounce();
					asteroids[j].bounce();
				}
			}
		}
		
		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			asteroids[i].died = true;
			lives -= 1;
			lifes.push( new Life() );		
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
				
				// increment score
				score += 1;
			}
		}
		
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	}
	
	// clean up dead asteroids and lasers
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].remove(asteroids);
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].remove(lasers);
	}
	
	for (let i = 0; i < powerups.length; i++) {
		powerups[i].remove(powerups);
	}
	for (let i = 0; i < lifes.length; i++) {
		lifes[i].remove(lifes);
	}
	
	if (lives == 0) endGame();
	
	/* user display */
	
	// score
	fill('orange');
	textSize( height/30 );
	text('Score: ' + score, width - width/6, unit * 3);
	
	// lives
//	text('Lives: ' + lives, 70, 20);
	for (let i = 0; i < lives; i++) {
		var x = lifeSize + i * (lifeSize * 3/2);
		rect(x, lifeSize, lifeSize, lifeSize);
	}
	
	// laser counter
	fill(map(laserTimeout, 0, 24, 255, 0), 51, 200);
	rect(width/2 + unit * 3, unit * 3, (laserTimeout - laserCounter + (24 - laserTimeout)) * unit/2, unit * 3);
	text('Laser', width/2 - unit * 12, unit * 3);
}

function endGame() {
	textSize(width * 0.15);
	fill('orange');
	text('YOU DIED', width/2, height/2);
	textSize(width * 0.05);
	text('Enter to tap to restart', width/2, height/2 + 100);
	gameOver = true;
//	noLoop();
	spaceship.died = true;
}

function keyPressed() {
	if (keyCode == 13 && gameOver) restart();
}

function restart() {
	asteroids = [];
	lasers = [];
	powerups = [];
	laserTimeout = 24;
	laserRed = 0;
	asteroidCount = 0;
	asteroidNum = 2;
	score = 0;
	lives = 3;
	spaceship.died = false;
	spaceship.deadCount = 12;
	spaceship.x = width/2;
	spaceship.speed.x = 0;
	gameOver = false;
	loop();
}

// touch events
var touch = {};

function touchStarted() {
	if (touches[0]) {
		touch.x = touches[0].x;
		touch.y = touches[0].y;
		touch.px = touches[0].x;
		touch.py = touches[0].y;
	}
}

function touchMoved() {
	if (touches[0]) {
		touch.x = touches[0].x;
		touch.y = touches[0].y;
	}
}

// below threshold is tap, above is a swipe
var threshold = 20;
function touchEnded() {
	
	// delta is change between touch start and end
	var delta = touch.x - touch.px;
	
	if (delta > threshold) {
		// swipe right
		spaceship.setSpeed(5);
	} else if (delta < -threshold) {
		// swipe left
		spaceship.setSpeed(-5);	
	} else {
		// tap	
		lasers.push(new Laser(0, -40));
		laserCounter = laserTimeout;
//		spaceship.setSpeed(0);
		
		// restart game
		if (gameOver) restart();
	}
		
}






























