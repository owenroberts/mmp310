/*
	array example
	week 7 mmp 310
*/

// height of my 10 cats
var cats = [10, 100, 50, 100, 150, 25, 75, 125, 175, 80, 100];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('plum');
	noStroke();
	
	for (let i = 0; i < cats.length; i++) {
		let x = i * width/cats.length;
		let s = cats[i]; // size
		cat(x, 200, s);
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












