/*
	drawing with arrays
	10.28.2019
*/

var points = [];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);
	
	noStroke();
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 25);
		points.push([mouseX, mouseY]);
	}
	
	for (let i = 0; i < points.length; i++) {
		var x = points[i][0];
		var y = points[i][1];
		
		fill('plum');
		ellipse(x, y, 25);
		
		fill('green');
		rect(x, y + 20, 25, 25);
	}
}




