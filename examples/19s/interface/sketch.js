/*
	week 6
	dom library
	ui 
*/

/* global variables */
var bg = "green";
var g = 255;
var columns = 8;
var rows = 8;

function setup() {
	createCanvas(windowWidth, windowHeight/2);
	pattern();
	
	var button = createButton("Save Image");
	button.mousePressed(saveImage);
//	button.style('color', bg);
	button.style('font-family', 'monaco');
	button.id('my-button');
	button.class('interface');
//	button.position(0, height - 50);
	
	var generatePattern = createButton("Generate Pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('interface');
//	generatePattern.position(180, height - 50);
	
	// columns slider
	createDiv("Number of Columns");
	var columnSlider = createSlider(2, 100, columns);
	columnSlider.input(setColumn);
	
	// rows 
	
	// bg color
	createDiv("Background Color");
	var colorSlider = createSlider(0, 255, g);
	colorSlider.input(setColor);
	
	
}

function setColumn() {
	columns = this.value();
	pattern();
}

function setColor() {
	g = this.value();
	pattern();
}

function pattern() {
	background(0, g, 127);
	
	var w = width / columns;
	var h = height / rows;
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			// drawing 
			
			var r = random(3);
			if (r > 2) {
				noStroke();
				ellipse(x, y, w);
			} else if (r > 1) {
				rect(x + w/2, y + h/2, h, w);
			} else {
				strokeWeight(2);
				stroke(255);
				line(x, y, x + w, y + random(h));
			}
			
			
			// end drawing
		}
	}
}

function saveImage() {
	save("pattern.png");
}









