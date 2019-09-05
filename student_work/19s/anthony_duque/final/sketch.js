var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];
var stars = [];
var starSpeed;
var galaxy;
var bg2;
var bg3;
var star;
var laser;
var ship;
var bgm;
var bgm2;
var asteroidImg;
var laserSound;
var hit;
var explode;
var engine;
var alien;

// probability asteroid spawned in each frame
var asteroidProb = 99;

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time
var laserRed = 0;

// score
// one point for every asteroid destroyed
var score = 0;

// player lives
var lives = 3;
var lifeImg;
var playSong = false;
var song2 = false;

function preload() {
	// Load Images
	laser = loadImage("fireball.png");
	lifeImg = loadImage("heart.png");
	health = loadImage("life.png");
	ship = loadImage("spaceship.png");
	asteroidImg = loadImage("asteroid.png");
	star = loadImage("star.png");
	alien = loadImage("alien.png");
	galaxy = loadImage("galaxy.jpg");
	bg2 = loadImage("bg2.jpg");
	bg3 = loadImage("bg3.jpeg");

	// Load Sounds
	bgm = loadSound("PHARO.wav")
	bgm2 = loadSound("missin.mp3")
	laserSound = loadSound("laserSound.wav")
	hit = loadSound("hit.wav");
	explode = loadSound("explode.mp3");
	// engine = loadSound("engine.wav");
	laserSound.amp(.1);
	hit.amp(.1);
	explode.amp(.1);
	// engine.amp(.1);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	starSpeed = createVector(0, 0.10);
	spaceship = new Spaceship();
	for (let i = 0; i < 10; i++){
		asteroids.push(new Asteroid());
	}
//	frameRate(24);
}


function draw() {
	bgm.amp(.3);
	if(playSong == false){
		bgm.loop();
		bgm.play();
		playSong = true;
	}
	// if(song2 == true){
	// 	bgm.loop();
	// 	bgm.play();
	// }
	if(score < 20){
		background(galaxy);
	}
	else if(score >= 20 && score < 40){
		background(bg2)
		fill('white');
		text('Level 2', width/2, height/2);
	}
	else if(score >= 40 && score < 60){
		background(bg3)
		fill('white');
		text('Level 3', width/2, height/2);
	}
	else if(score >= 60 && score < 80){
		fill('white');
		text('Level 4', width/2, height/2);
	}

	// add random power ups
	if (random(1000) > 998) {
		powerups.push(new Powerup());
	}

	// adds random asteroid
	if (random(100) > asteroidProb) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}

	// add lasers
	if (laserCounter <= 0) {
		// shoot a laser
		if (keyIsDown(32) || keyIsDown(88)) {
			lasers.push(new Laser(-8,0));
			lasers.push(new Laser(120, 0));
			laserSound.play();;
			laserCounter = laserTimeout;
		}
	} else {
		laserCounter -= 1;
	}


	spaceship.controls();
	spaceship.display();
	spaceship.update();

	stars.push(new Star(10, 10));
	for (let i = 0; i < stars.length; i++) {
		stars[i].display();
		stars[i].update();
	}

	for (let i = 0; i < powerups.length; i++) {
		if (powerups[i].collide(spaceship)) {
			// power up applied
			laserTimeout -= 2;
			powerups[i].died = true;
			laserRed += 20;
			lives++;
		}
		powerups[i].display();
		powerups[i].update();
	}

	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();

		// collision with other asteroids
		for (let j = 0; j < asteroids.length; j++) {
			if (i != j) {
				if (asteroids[i].collide(asteroids[j])) {
					asteroids[i].speed.x *= -1;
					asteroids[j].speed.x *= -1;
				}
			}
		}

		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			asteroids[i].died = true;
			hit.play();
			lives -= 1;
			if (lives == 0) {
				explode.play();
				endGame();
			}
		}

		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;

				// increment score
				if(asteroids[i].died == true && asteroids[i].size > 75 && asteroids[i].size < 80){
					score += 3;
				}else{
					score += 1;
				}

				// after player hits asteroid, increase probability
				asteroidProb -= 0.5;
				if (laserTimeout < 24) {
					laserTimeout += 0.5;
				}
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

	for (let i = 0; i < powerups.length; i++) {
		if (powerups[i].died) {
			powerups[i].remove(powerups);
		}
	}


	/* user display */

	// score
	fill('white');
	textSize(40);
	text('Score: ' + score, width - 100, 20);

	// lives
//	text('Lives: ' + lives, 70, 20);
	for (let i = 0; i < lives; i++) {
		var x = 20 + i * 30;
		image(lifeImg,x, 20, 20, 20);
	}
}

function endGame() {
	textSize(100);
	fill('orange');
	text('YOU DIED', width/2, height/2);
	noLoop();
}
