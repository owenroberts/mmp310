/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];
var sprite;
var strike;
var terror;
var outterspace;
var sound;

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

var chapter = 'intro'; // game

function preload() {
    sprite = loadImage("sprite.png");
    strike = loadImage("strike.png");
    terror = loadImage("terror.png");
    outterspace = loadImage("outterspace.jpg");
    sound = loadSound("sound/8bitspeedrun.mp3");
}

function setup() {
    createCanvas(960, 640);
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
    spaceship = new Spaceship();

    frameRate(60);
}

function draw() {
    if (chapter == 'intro') {
        intro();
    } else if (chapter  == 'game') {
        game();
    }
    
}
function mouseClicked(){
    if (chapter == "intro"){
         sound.loop();
        chapter = "game";
    } 
   
}
function intro() {
    background('black');
    fill("red");
    text('DARK SLAYER', width/2, height/2);
}

function game() {
    image(outterspace, width / 2, height / 2);

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
        if (mouseIsPressed ) {
            
            lasers.push(new Laser());
            laserCounter = laserTimeout;
        }
    } else {
        laserCounter -= 1;
    }


    spaceship.controls();
    spaceship.display();
    spaceship.update();

    for (let i = 0; i < powerups.length; i++) {
        if (powerups[i].collide(spaceship)) {
            // power up applied
            laserTimeout -= 2;
            powerups[i].died = true;
            laserRed += 20;
            if (lives < 6) lives++;
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
            lives -= 1;
            if (lives == 0) {
                endGame();
            }
        }

        // detect all lasers
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;

                // increment score
                score += 1;

                // after player hits asteroid, increase probability
                asteroidProb -= 0.1;
                if (asteroidProb <= 97) {
                    asteroidProb += 2;
                }
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
    fill('orange');
    textSize(40);
    text('Score: ' + score, width - 100, 20);

    // lives
    //	text('Lives: ' + lives, 70, 20);
    for (let i = 0; i < lives; i++) {
        var x = 20 + i * 30;
        rect(x, 20, 20, 20);
    }
}
//
function endGame() {
    textSize(100);
    fill('orange');
    text('YOU DIED', width / 2, height / 2);
    noLoop();
}
