/*
	loop sketch 
	10.2.2019
*/

function setup() {
	createCanvas(640, 360);
	background('black');
	
	textSize(20);
	
	for (let x = 100; x < 600; x += 100) {
		fill(255);
//		ellipse(x, height/2, 100);
		
		fill(0);
//		text(x, x, height/2);
	}
	
	var x = 100;
	var y = height/2;
//	var s = x / 4;
	
	for (let i = 0; i < 5; i++) {
		
		var s = x / 4;
		var b = map(x, 0, width, 0, 255);
		
		fill(100, 100, b);
		ellipse(x, y, s); // face
		ellipse(x + 20, y - 20, 10); // right eye
		ellipse(x - 20, y - 20, 10); // left eye
		rectMode(CENTER);
		rect(x, y + 20, 40, 10, 10); // mouth
		x += 100;
	}
}







