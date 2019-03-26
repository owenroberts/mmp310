/*
	array data
	test sorting sheet with microsoft in office
	also google docs
	game datasets: https://github.com/leomaurodesenv/game-datasets#dataset
	data.gov
	https://www.basketball-reference.com/leagues/NBA_2019_rookies.html
*/

var water;
var rookies
function preload() {
	water = loadTable('Water_Consumption_In_The_New_York_City.csv', 'csv', 'header');
	rookies = loadTable('rookie-assists-leader.csv', 'csv', 'header');
}
function setup() {
	createCanvas(windowWidth, windowHeight/2);
	textAlign(LEFT, CENTER);
	textSize(50);
	noStroke();
	rookiesAstMin();
}

function draw() {
	
}

function rookiesAstMin() {
	background(51);
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.get(i, 'ASTper');
		let min = rookies.get(i, 'MPper');
		let x = map(min, 0, 36, 0, width);
		let y = map(ast, 0, 8, height, 0);

		fill('white');

		if (dist(x, y, mouseX, mouseY) < 10) {
			text(rookies.get(i, 'Player').split('\\')[0], 400, 200);
			text(ast, 400, 250)

			fill('gold')
		}

		ellipse(x, y, 10);
	}
}

function rookieAst() {
	background(51);
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.get(i, 'ASTper');
		let x = i * 11;
		let h = map(ast, 0, 10, 0, height);
		
		fill('white');
		if (mouseX > x && mouseX < x + 11) {
			text(rookies.get(i, 'Player').split('\\')[0], 400, 200);
			text(ast, 400, 250);
			fill('gold');
		}
		rect(x, height - h, 10, h);
	}
}

function rookieVis() {

}

function waterVis() {
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








