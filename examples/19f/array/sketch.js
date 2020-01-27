/*
	array example
	10.23.2019
*/

var sizes = [100, 80, 120, 90, 100, 110];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		pumpkin(50 + i * 100, 100, sizes[i]);
	}
}

function pumpkin(x, y, s) {
	fill('green');
	rect(x, y - s/2, s/20, s/5); // stem
	
	fill('orange');
	ellipse(x, y, s, s - 25); // base
	
	
	fill('black');
	triangle(x - s/4, y - s/4, x - s/3, y, x - s/5, y); // eye
	triangle(x + s/4, y - s/4, x + s/3, y, x + s/5, y); // eye

	for (let i = 0; i < 5; i++) {
		rect(x - s/4 + i * (s/10), y + s/5, s/20, s/10);	
	}
}









