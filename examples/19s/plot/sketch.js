/*
	mmp 310 week 3
	interactive story
	plot sketch, adding functions
*/

// global variables
var chapter = "morning"; // day, night
var whichFruit;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textFont('Hanalei Fill');
}

function draw() {
	background(50);
	
	if (chapter == "morning") {
		orange(100, 200);  // first character
		banana(200, 100); // second character
		narrative("Once upon a time, there was an orange and a banana.", "Click anywhere to continue.");
	} else if (chapter == "day") {
		orange(300, 150);  
		banana(400, 75);
		narrative("Then the user ate one of them.", "Click on one of the characters to eat it.");
	} else if (chapter == "night") {
		if (whichFruit == "banana") {
			orange(600, 100); 
			narrative("The orange was alone forever.", "Click anywhere to start over.");
		}
		if (whichFruit == "orange") {
			banana(700, 50);
			narrative("The banana was alone forever.", "Click anywhere to start over.");
		}
	}
}

function mouseClicked() {
	// change chapter
	if (chapter == "morning") chapter = "day";
//	else if (chapter == "day") chapter = "night";
	else if (chapter == "night") chapter = "morning";
	
	// detect which character is clicked
	else if (chapter == "day") {
		// clicked the orange
		var orangeDist = dist(mouseX, mouseY, 300, 200);
		if (orangeDist < 150 / 2) {
			whichFruit = "orange";
			chapter = "night";
		}
		// clicked banana
		var bananaDist = dist(mouseX, mouseY, 400, 100);
		if (bananaDist < 75 / 2) {
			whichFruit = "banana";
			chapter = "night";
		}
	}
}

function orange(x, s) {
	var eyeSize = s / 10;
	fill('DARKORANGE');
	noStroke();
	ellipse(x, 200, s);  	// body
	
	stroke(0);
	ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize);  // left eye
	ellipse(x, 200 - eyeSize, eyeSize); 		// right eye
	
//	rect(100, 220, s / 2, s / 4); // mouth
}

function banana(x, s) {
	fill('yellow');
	noStroke();
	arc(x, 100, s, s, -HALF_PI, HALF_PI); // banana background
	fill(50);
	arc(x, 100, s / 2, s, -HALF_PI, HALF_PI); // banana foreground
	noFill();
	stroke(0);
	arc(x, 100, s * 3/4, s, -HALF_PI, HALF_PI); // banana contour
}

function narrative(story, instructions) {
	// narrative
	stroke(255);
	textSize(30);
	text(story, width / 2, height - 100);
	// instructions
	textSize(20);
	text(instructions, width / 2, height - 50);
}





