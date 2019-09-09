/* 
	nba rookies data vis
	mmp 310 week 8
*/

var rookies;
function preload() {
	rookies = loadTable('rookies.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(50);
	textAlign(LEFT, CENTER);
	noStroke();
}

function draw() {
	background(51);
	
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.getNum(i, 'ASTper');
		let min = rookies.getNum(i, 'MPper');
		let x = map(min, 0, 36, 0, width);
		let y = map(ast, 0, 8, height, 0);
		
		fill('white');
		if (dist(x, y, mouseX, mouseY) < 5) {
			let player = rookies.getString(i, 'Player').split('\\')[0];
			text(player, 100, 200);
			text(ast, 100, 250);
			text(min, 100, 300);
			fill('gold');	
		}
		ellipse(x, y, 10);
	}
}











