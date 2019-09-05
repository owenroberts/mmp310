/*
	mmp 310 week 1
	interactive story
	characters sketch
	by owen
*/

// global variables
var orangeX = 200;
var orangeY = 200;
var orangeSize = 200;
var orangeEyeSize = orangeSize / 10;

var bananaX = 600;
var bananaY = 100;
var bananaSize = 100;

var story = "Once upon a time, there was an orange and a banana.";
var storyX;
var storyY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);
	storyX = width / 2;
	storyY = height - 50;
}

function draw() {
	background(50);
	
	// first character orange
	fill('DARKORANGE');
	noStroke();
	ellipse(orangeX, orangeY, orangeSize);  	// body
	
	stroke(0);
	ellipse(orangeX + orangeEyeSize * 3, orangeY - orangeEyeSize, orangeEyeSize);  // left eye
	ellipse(orangeX, orangeY - orangeEyeSize, orangeEyeSize); 		// right eye
	
	// second character banana
	fill('yellow');
	noStroke();
	arc(bananaX, bananaY, bananaSize, bananaSize, -HALF_PI, HALF_PI); // banana background
	fill(50);
	arc(bananaX, bananaY, bananaSize / 2, bananaSize, -HALF_PI, HALF_PI); // banana foreground
	noFill();
	stroke(0);
	arc(bananaX, bananaY, bananaSize * 3/4, bananaSize, -HALF_PI, HALF_PI); // banana contour
	
	stroke(255);
	text(story, storyX, storyY);
}








