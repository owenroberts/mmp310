/*
	random + loop sketch 
	10.7.2019
*/

function setup() {
	createCanvas(640, 360);
	drawCharacters();
}

function mouseClicked() {
//	drawCharacters();
	console.log(mouseX, width/2);
	
	
	if (mouseX < width/2) {
		// user clicked left
	} else {
		// user clicked right
		drawCharacters();
	}
}

function drawCharacters() {
	background('black');
	
	for (let x = 0; x < width; x += 100) {
		
		var r = random(100);
		var g = random(200, 255);
		var b = random(200);
		
		var s = random(20, 60); // size 
		var y = random(height/3, height * 2/3);
		
		fill(r, g, b);
		ellipse(x, y, 100); // face
		
		ellipse(x + s/2, y - 20, s, s/2); // right eye
		ellipse(x - s/2, y - 20, s, s/2); // left eye
	}
}







