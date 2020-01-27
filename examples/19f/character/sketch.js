/*
	character designer
	user interface
	10.16.2019
*/

/* color values for character face */
var r = 221;
var g = 160;
var b = 221;

var eyeOffset = 50;

function setup() {
	createCanvas(windowWidth, 600);
	character();
	
	createP("Face red color").style('color', 'red').position(10, 10);
	var redSlider = createSlider(0, 255, r);
	redSlider.input(updateRed);
	redSlider.position(10, 50);
	
	createP("Eye offset").position(width - 200, 10);
	var eyeSlider = createSlider(10, 100, eyeOffset);
	eyeSlider.input(updateEyes);
	eyeSlider.position(width - 200, 50);
}

function updateRed() {
	r = this.value();
	character();
}

function updateEyes() {
	eyeOffset = this.value();
	character();
}

function character() {
	background(51);
	
	noStroke();
	fill(r, g, b);
	ellipse(width/2, height/2, 200, 300); // face
	
	stroke("purple");
	strokeWeight(6);
	
	ellipse(width/2 - eyeOffset, height/2 - 20, 20, 100); // left eye
	ellipse(width/2 + eyeOffset, height/2 - 20, 20, 100); // right eye

}










