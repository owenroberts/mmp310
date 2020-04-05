/*
	3d example 4.5.2020
*/

let camX, camY, camZ;
let rotX, rotY, rotZ;

let objX, objY, objZ;
let objRX, objRY, objRZ;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	// camX = createSlider(-400, 400, 0);
	// camX.position(10, 10);

	// camY = createSlider(10, 400, 200);
	// camY.position(10, 30);

	// camZ = createSlider(-400, 400, 0);
	// camZ.position(10, 50);

	createP("Scene controls").position(10, 0);
	rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotX.position(10, 30);

	rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotY.position(10, 50);

	rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotZ.position(10, 70);

	// createP("Object controls").position(width - 150, 0);

	// objX = createSlider(-100, 100, 0);
	// objX.position(width - 150, 30);

	// objY = createSlider(-100, 100, 0);
	// objY.position(width - 150, 50);

	// objZ = createSlider(-100, 100, 0);
	// objZ.position(width - 150, 70);

	// objRX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	// objRX.position(width - 150, 100);

	// objRY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	// objRY.position(width - 150, 120);

	// objRZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	// objRZ.position(width -150, 140);
}

function draw() {
	background(51);

	// lights();
	// let dirX = (mouseX / width - 0.5) * 2;
  // let dirY = (mouseY / height - 0.5) * 2;
  // console.log(dirX, dirY);
  	// directionalLight(250, 250, 0, 1, 1, -1);

  	// pointLight(200, 200, 255, mouseX - width/2, mouseY - height/2, 200);

	// ambientMaterial(255);

	push();
	translate(0, 300, 0);
	rotateX(HALF_PI);
	plane(1000, 1000);
	pop();

	noStroke();

	rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

	// noFill();
	ambientMaterial(221, 160, 221);
	// specularMaterial(221, 160, 221);
	// shininess(255);
	
	// head
	sphere(100);

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
