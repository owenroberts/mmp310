/* global variables */ 
var bg = "black";
var r = 0;
var b = 255; 
var columns = 3;
var rows = 2;

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
	
	var generatePattern = createButton("Create Pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('interface');
//	generatePattern.position(180, height - 50);
	
	// columns slider
	createDiv("Number of Columns");
	var columnSlider = createSlider(2, 50, columns);
	columnSlider.input(setColumn);
	
	// rows 
	
	// bg color (red)
	createDiv("Background Color");
	var colorSlider = createSlider(0, 255, r);
	colorSlider.input(setRed);
    
    //bg color (blue)
    createDiv("Background Color");
	var colorSlider = createSlider(0, 255, b);
	colorSlider.input(setBlue);
}



function setColumn() {
    columns = this.value();
        pattern(); 
}

function setRed() {
    r = this.value();
    pattern(); 
}

function setBlue() {
    b = this.value();
    pattern(); 
}
function pattern() {
    console.log(r)
    background(r, 0, b);
    
    var w = width / columns; // column width
    var h = height / rows; // row height
    
    
    var rows = 8;
    var w = width / columns; // column width
    var h = height / rows; // row height

    // nested for loop 
    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {

            //for the pattern drawing 
        
            // line(x1, y1, x2, y2);
            stroke(255);
            strokeWeight(2);
            let r = random(3);
            if (r > 2) {
                line(x + w, y, x + w, y + h);
            } else if (r > 1) {
                line(x, y, x + w, y + h);
            } else {
                line(x + w, y, x, y + h);
            }


            // triangle(x1, y1, x2, y2, x3, y3);
           
            
            var r2 = random(7);
//            fill('red');
            if (r2 < 2) {
                triangle(x - w, y, x - w, y + h, x, y);
            } else if (r > 3) {
                triangle(x, x, x - w, y + h);
            } else {
//                triangle(x - w, x, x - w, y - h);
            }

            // circle(x, y, r)
            stroke(455);
            strokeWeight(5);
            var r3 = random(4);
            if (r3 > 3) {
                circle(x - w, y + h, r + 5)
            }

        }
    }
}


function saveImage() {
	save('pattern-1.jpg');
}
