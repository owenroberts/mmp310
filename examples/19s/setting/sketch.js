/*
	mmp 310 week 2
	interactive story
	adding three settings
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

// settings: day, evening, night - lightblue, mediumslateblue, darkblue
var currentSetting = "day";
var fruitEaten;
var orangeWasClicked = false;
var bananaWasClicked = false;
var bgColor = "lightblue";
var sunX;
var sunY = 100;
var sunSize = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);
	storyX = width / 2;
	storyY = height - 50;
	
	sunX = width - 100;
}

function draw() {
	// settings
	background(bgColor);
	
	if (currentSetting == "day") {
		fill('gold');
		noStroke();
		ellipse(sunX, sunY, sunSize);
		
		// to change the scene
		if (mouseIsPressed) {
			currentSetting = "evening";
			bgColor = "mediumslateblue";
		}
		
	} else if (currentSetting == "evening") {
		fill('orange');
		noStroke();
		ellipse(sunX, sunY + 100, sunSize);
		
		// click on a character to eat it
		if (mouseIsPressed) {
			var orangeDistance = dist(mouseX, mouseY, orangeX, orangeY);
			if (orangeDistance < orangeSize / 2) {
				fruitEaten = "orange";
				orangeWasClicked = true;
				currentSetting = "night";
				bgColor = "darkblue";
			}
			var bananaDistance = dist(mouseX, mouseY, bananaX, bananaY);
			if (bananaDistance < bananaSize / 2) {
				fruitEaten = "banana";
				bananaWasClicked = true;
				currentSetting = "night";
				bgColor = "darkblue";
			}
		}
		
	} else if (currentSetting == "night") {
		fill('crimson');
		noStroke();
		ellipse(sunX, sunY + 200, sunSize);
	}
	
	
	
	// first character orange
	if (!orangeWasClicked) {
		fill('DARKORANGE');
		noStroke();
		ellipse(orangeX, orangeY, orangeSize);  	// body

		stroke(0);
		ellipse(orangeX + orangeEyeSize * 3, orangeY - orangeEyeSize, orangeEyeSize);  // left eye
		ellipse(orangeX, orangeY - orangeEyeSize, orangeEyeSize); 		// right eye
	}
	
	// second character banana
	if (!bananaWasClicked) {
		fill('yellow');
		noStroke();
		arc(bananaX, bananaY, bananaSize, bananaSize, -HALF_PI, HALF_PI); // banana background

		// match the background color to create banana cutout
		fill(bgColor);
		arc(bananaX, bananaY, bananaSize / 2, bananaSize, -HALF_PI, HALF_PI); // banana foreground
		noFill();
		stroke(0);
		arc(bananaX, bananaY, bananaSize * 3/4, bananaSize, -HALF_PI, HALF_PI); // banana contour
	}
	
	stroke(255);
	text(story, storyX, storyY);
}








