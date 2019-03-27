/*
	objects mobile example
*/
var player;
var asteroids = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('midnightblue');

	if (random(100) > 99) asteroids.push(new Asteroid());
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
	}

}












