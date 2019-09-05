/*
	data vis 1
	mmp 310 week 8
*/

var water;
function preload() {
	water = loadTable("Water_Consumption_In_The_New_York_City.csv", 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	textSize(20);
	textAlign(CENTER, CENTER);
	
	let x = 100;
	let y = 100;
	for (let i = 0; i < water.getRowCount(); i++) {
		let year = water.getNum(i, 'Year');
		let per = water.getNum(i, 3) / 2;
		console.log(year, per);
		
		
		fill('lightblue');
		ellipse(x, y, per);
		
		fill('white');
		text(year, x, y);
		
		x += 100;
		if (x > width) {
			x = 100;
			y += 100;
		}
		
	}
}










