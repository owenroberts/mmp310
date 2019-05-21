var b;

var columns = 12;
var rows = 16;

function setup(){
	createCanvas(windowWidth, windowHeight/2);
	pattern();

	var button = createButton("Save Image");
	button.mousePressed(saveImage);

	var generatePattern = createButton("Generate Pattern");
	generatePattern.mousePressed(pattern);

	// column slider
	createDiv("Number of Columns");
	var columnSlider = createSlider(0, 50, columns);
	columnSlider.input(setColumn);

	// rows
    createDiv("Number of Rows");
	var rowSlider = createSlider(0, 50, rows);
	rowSlider.input(setRow);

	// bg color
	createDiv("Background Color");
	var colorSlider = createSlider(0, 255, b);
	colorSlider.input(setColor);
}

function setColumn(){
	columns = this.value();
	pattern();
}

function setRow(){
	rows = this.value();
	pattern();
}

function setColor(){
	b = this.value();
	pattern();
}

function pattern(){
	background(150,127, b);
	var w = width / columns;
	var h = height / rows;

	// draw a line at each column
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h){

			var r = random(0, 255);
			var g = random(0, 255);
			var randX = random(width);
			var randY = random(width);
			var randW = random(5, 30)
			fill(r,g,b);
			ellipse(x, y, w, h);
			triangle(x, y, x + 50, y + 50);

		}
	}
}

function saveImage(){
	save('grid.jpg');
}
