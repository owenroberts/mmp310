/*
	mmp 310 week 4
	loop example with random
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	rectMode(CENTER);
	noStroke();
	textAlign(100);
	
	// making a row of self portraits
	let faceSize = random(100, 300);
	let increment = faceSize;
	for (let x = 0; x <= width; x += increment) {
		
		let y = height/2 + random(-100, 100);
		
		faceSize = random(100, 300);
		
		let r = random(255);
		let g = random(200, 255);
		let b = random(255);
		fill(r, g, b);
		ellipse(x, y, faceSize); // face
		
		var randomChoice = random(3); // making random choices 
		if (randomChoice > 2) {
			fill('purple');
		} else if (randomChoice > 1) {
			fill('green');
		} else {
			fill('blue');
		}
		
		let eyeSize = faceSize / 5;
		
		if (random(1) > 0.5) {
			ellipse(x + eyeSize, y - eyeSize, eyeSize); // left eye
			ellipse(x - eyeSize, y - eyeSize, eyeSize); // right eye
		} else {
			rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
			rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
		}
		
		fill('yellow');
		let mouthSize = faceSize / 2;
		rect(x, y + mouthSize / 2 + random(20), mouthSize, mouthSize / 4, mouthSize/8);
		
		// text('x: ' + x, x, y); // x label
	}
	
}







