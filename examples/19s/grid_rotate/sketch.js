/*
	week 4: mmp 310
	xy grid
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	textSize(50);
	
	var columns = 12;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			var r = map(y, 0, width, 0, PI);
			push();
			translate(x + w/2, y + h/2);
			rotate(r);
			
			fill(255);
			arc(0, 0, w, w, 0, PI * 1.5, CHORD);
			pop();
		}
	}
}







