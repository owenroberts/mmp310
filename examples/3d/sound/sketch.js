/*
	3d example 4.5.2020
*/

let particleSystem;
let meows = [];
let boxSize = 250;

function preload() {
	meows.push(loadSound('meow_1.wav'));
	meows.push(loadSound('meow_2.wav'));
	meows.push(loadSound('meow_3.wav'));
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	// noStroke();
	particleSystem = new System(createVector(0, 0, 0));
	// frameRate(30);
}


function keyPressed() {
	particleSystem.add();
}

function draw() {
	background(0);
	
	orbitControl();

	push();
	stroke('lightgreen');
	noFill();
	box(boxSize);
	pop();

	directionalLight(250, 250, 250, 1, 1, -1);
	pointLight(200, 200, 255, mouseX - width/2, mouseY - height/2, 200);

	// floor
	ambientMaterial(255);
	push();
	translate(0, boxSize/2, 0);
	rotateX(HALF_PI);
	plane(boxSize, boxSize);
	pop();
	
	particleSystem.update();
}
