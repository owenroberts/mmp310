/*
	array data
	test sorting sheet with microsoft in office
	also google docs
	game datasets: https://github.com/leomaurodesenv/game-datasets#dataset
	data.gov
	https://www.basketball-reference.com/leagues/NBA_2019_rookies.html
*/

var water;
function preload() {
	water = loadTable('Water_Consumption_In_The_New_York_City.csv', 'csv', 'header');
}
function setup() {
	createCanvas(640, 360);
	background(51);
	textAlign(CENTER, CENTER);

	let x = 50;
	let y = 100;
	for (let i = 0; i < water.getRowCount(); i++) {
		let year = water.getNum(i, 'Year');
		let gallons = water.getNum(i, 3);

		fill('lightblue');
		ellipse(x, height/2, gallons);

		fill('white');
		noStroke();
		text(year, x, height/2);

		x += 100;
		if (x > width) {
			x = 0;
			y += 100;
		}
	}
}








