/*
	array drawing
	week 7 mmp 310
*/

var points = []; // empty array
var r = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(51);
	
	if (mouseIsPressed) {
		points.push([mouseX, mouseY]);	
	}
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0];
		let y = points[i][1];
		fill('plum');
		ellipse(x, y, 20);
		
//		points[i][1]++; // increment the y value
	}
	
	translate(width/2, height/2);
	scale(r);
	r += 0.01;
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0] - width/2;
		let y = points[i][1] - height/2;
		fill('gold');
		rect(x, y, 20, 20);
	}
	
	if (random(100) > 99) r = 0;
}









