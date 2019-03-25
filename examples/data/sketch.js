/*
	array data
	test sorting sheet with microsoft in office
	also google docs
	game datasets: https://github.com/leomaurodesenv/game-datasets#dataset
	data.gov
	https://www.basketball-reference.com/leagues/NBA_2019_rookies.html
*/

var population;
function preload() {
	population = loadTable('New_York_City_Population_by_Borough__1950_-_2040.csv', 'csv');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	noStroke();

	for (let i = 0; i < population.getRowCount(); i++) {
		
	}
	
}









