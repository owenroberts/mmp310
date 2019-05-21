var bg = "green";
var g = 255;
var columns = 8;
var rows = 8;

function setup() {
    createCanvas(windowWidth, windowHeight/2);
    background(51);
    textSize(50);
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
            noFill();
            stroke(255);
            var r = random(3);
            if (r > 2) {
                bezier(x, y, x + w, y, x, y + h, x + w, y + h);
                ellipse(x + w, y, 15);
                ellipse(x, y + h, 25);
                ellipse(x, y, 35);
                ellipse(x + w, y + h, 45);
            } else if (r > 1) {
                bezier(x, y , x + w, y+30, x+ 20, y + h, x + w, y + h);
            } else {
                bezier(x, y, x + w, y-50, x-80, y + h, x + w, y + h);
            }

        }
    }
}

function saveImage() {
    save('save_image.jpg');
}