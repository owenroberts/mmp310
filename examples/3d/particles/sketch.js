/*
	3d example 4.5.2020
*/

let particleSystem

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	// noStroke();
	particleSystem = new System(createVector(0, 0, 0));

	frameRate(30);
}

function draw() {
	background(0);
	
	orbitControl();
	directionalLight(250, 250, 250, 1, 1, -1);
	pointLight(200, 200, 255, mouseX - width/2, mouseY - height/2, 200);

	particleSystem.add();
	particleSystem.update();
}
