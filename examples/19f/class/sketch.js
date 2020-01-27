/*
	class example
	asteroids
	10.30.2019
*/

var asteroids = []; // empty array
var spaceship;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for (let i = 0; i < 50; i++) {
		asteroids.push( new Asteroid() );
	}
	
	spaceship = new Spaceship();
}

function draw() {
	background('black');
	
	spaceship.move();
	spaceship.update();
	spaceship.display();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].update();
		asteroids[i].display();
		asteroids[i].collide(spaceship);
	}
}


function mousePressed() {
	asteroids.push( new Asteroid(mouseX, mouseY) );
}



