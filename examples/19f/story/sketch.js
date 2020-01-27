/*
	story sketch
	9.5.2019
	owen roberts
	mmp 310
*/

// character variables -- jenny
var x = 200;
var y = 100;
var faceSize = 200;
var eyeSize = 20;
var eyeOffset = 50;
var c = 'purple'; // color
var greeting = '"Hi!"';

// second character -- jerry
var jerryX = 700;
var jerryY = 200;
var jerrySize = 200;
var jerryColor = 'green';
var jerryGreeting = '"Hello."';

var story1 = "Once upon a time, Jerry and Jenny met in a black void.";


function setup() {
	createCanvas(windowWidth, 600);
	background('black');
	
	// jenny character
	fill(c);
	ellipse(x, y, faceSize); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye
	
	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);
	
	// jerry character
	fill(jerryColor);
	stroke('white');
	// face
	arc(jerryX, jerryY, jerrySize, jerrySize, PI, HALF_PI + QUARTER_PI, PIE);
	// left eye
	fill('black');
	triangle(
		jerryX - 50, jerryY - 75, 
		jerryX, jerryY - 50, 
		jerryX - 50, jerryY - 25
	);
	
	// right eye
	quad(
		jerryX + 30, jerryY - 75, 
		jerryX + 25, jerryY - 25, 
		jerryX + 75, jerryY - 50, 
		jerryX + 75, jerryY - 60, 
	);
		
	fill('white');
	noStroke();
	text(jerryGreeting, jerryX - 200, jerryY + 150);
	
	
	textAlign(CENTER);
	text(story1, width/4, height - 100, width/2, 200);
}








