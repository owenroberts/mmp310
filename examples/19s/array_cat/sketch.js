/*
	week 7 mmp 310
	array cat
*/

var cats = []; // empty cats

function mousePressed() {
	cats.push([mouseX, mouseY]);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	for (let i = 0; i < cats.length; i++) {
		cat(cats[i][0], cats[i][1], 100);
		cats[i][1] += 2;
	}
}

function cat(x, y, s) {
	// cat drawing
	fill(s, 0, s);
	triangle(x - s*0.75, y - s/4, x + s*0.75, y - s/4, x, y + s/2); // ears
	ellipse(x, y, s); // face
	fill(255);
	ellipse(x - s/4, y, s/4, s/2); // left eye
	ellipse(x + s/4, y, s/4, s/2); // right eye
}