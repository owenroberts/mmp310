/*
	3d example 4.5.2020
*/

var music, amp;

function preload() {
	music = loadSound('background.mp3');
}


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	music.setVolume(0.5);
	amp = new p5.Amplitude();
}

function keyPressed() {
	if (keyCode == 32) { // spacebar
		if (music.isPlaying()) {
			music.pause();
		} else {
			music.play();
		}
	}
}

function draw() {
	background(51);

	orbitControl();

	// music controls
	var pan = map(mouseX, 0, width, -1, 1);
	music.pan(pan);

	var level = map(amp.getLevel(), 0, 1, 100, 200);


	// lights
  	directionalLight(250, 250, 250, 1, 1, -1);
  	pointLight(200, 200, 255, mouseX - width/2, mouseY - height/2, 200);
	ambientMaterial(255);

	// floor
	push();
	translate(0, 300, 0);
	rotateX(HALF_PI);
	plane(1000, 1000);
	pop();

	// cat composition

	noStroke();
	ambientMaterial(221, 160, 221);
	
	// head
	sphere(level);

	// ears
	push();
	translate(75, -75, 0);
	rotateZ(PI * 1.25);
	cone(50, 100, 4);
	pop();


	push();
	translate(-75, -75, 0);
	rotateZ(PI * -1.25);
	cone(50, 100, 4);
	pop();

	// fill('gold');
	ambientMaterial(255, 215, 0);
	push();
	translate(50, -50, 80);
	torus(20);
	pop();

	push();
	translate(-50, -50, 80);
	torus(20);
	pop();

	// fill('plum');

	// fill(255);
	specularMaterial(200, 200, 255);
	shininess(100);
	push();
	translate(0, 30, 90);
	for (let x = -50; x < 60; x += 20) {
		push();
		translate(x, 0, 0);
		box(10, 20);
		pop();
	}
	



	// translate(objX.value(), objY.value(), objZ.value());
	// rotateX(objRX.value());
	// rotateY(objRY.value());
	// rotateZ(objRZ.value());
}
