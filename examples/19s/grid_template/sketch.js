/*
	week 4: mmp 310
	xy grid
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	textSize(50);
	
	var columns = 6;
	var rows = 4;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			// ellipse(x, y, w);
			
			// draw something here!
		}
	}
}







