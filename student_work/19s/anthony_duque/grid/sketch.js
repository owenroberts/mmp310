function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
	strokeWeight(2);


	// draw a line at each column
	for (let x = 0; x <= width; x += 60) {
		for (let y = 0; y <= height; y += 60) {
			triangle(x, y, x + 50, y + 50);
			r = random(0, 255);
			g = random(0, 255);
			b = random(0, 255);
			randX = random(width);
			randY = random(width);
			randW = random(5, 30)
			fill(r,g,b);
			ellipse(randX, randY, randW);
		}
	}
}

function mouseClicked() {
	save('grid.jpg');
}
