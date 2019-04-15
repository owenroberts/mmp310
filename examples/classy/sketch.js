/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];
var lasers = [];

var asteroidProbability = 99;
var laserTimeout = 12;
var laserCounter = 0;

function preload() {
	// if you have images
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	spaceship = new Spaceship();
}

function draw() {
	background(51);
	
	// adds random asteroid
	if (random(100) > asteroidProbability) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	// add lasers
	if (laserCounter <= 0) {
		if (keyIsDown(32) || keyIsDown(88)) {
			lasers.push(new Laser());
			laserCounter = laserTimeout;
		}
	} else {
		laserCounter--;
	}
	
	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		
		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			// end game
			textAlign(CENTER, CENTER);
			textSize(100);
			fill('orange');
			text('YOU DIED', width/2, height/2);
			noLoop();
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
				asteroidProbability -= 0.1;
			}
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	}
	
	// clean up dead asteroids and lasers
	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].died) {
			asteroids[i].remove(asteroids);
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		if (lasers[i].died) {
			lasers[i].remove(lasers);
		}
	}
}















