/*
	new grid design
	with save image code
	week 5 mmp 310
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	
	
	var columns = 8;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	// nested for loop 
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			// line(x1, y1, x2, y2);
			stroke(255);
			strokeWeight(2);
			var r = random(3);
			if (r > 2) {
				line(x + w, y, x + w, y + h);
			} else if (r > 1) {
				line(x, y, x + w, y + h);
			} else {
				line(x + w, y, x, y + h);
			}
			
		}
	}
}

// click to save image to Downloads folder
function mouseClicked() {
	save('pattern-1.jpg');
}










