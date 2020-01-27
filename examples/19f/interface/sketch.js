/*
	character designer
	user interface
	10.16.2019
*/

var num = 10;
var nameInput;

function setup() {
	createCanvas(windowWidth, 600);
	pattern();
	
	var button = createButton("Generate Pattern");
	button.mouseClicked(pattern);
	
	nameInput = createInput("Name the file");
	var saveButton = createButton("Save Image");
	saveButton.mouseClicked(saveImage);
	
	createP("Change pattern");
	var numSlider = createSlider(2, 100, num);
	numSlider.input(getNum);
	
}

function getNum() {
	num = this.value();
	pattern();
}

function saveImage() {
	save(nameInput.value() + ".png");
}


function pattern() {
	background('plum');
	noStroke();
	fill('lightblue');
	
	for (let i = 0; i < num; i++) {
		ellipse(random(width), random(height), random(50, 100));
	}

//	for (let x = 0; x < width; x += 100) {
//		ellipse(x, random(height), random(50, 100));
//	}
}







