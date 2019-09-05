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
		let h = map(ast, 0, 8, 0, height);
		let w = 20;
		let x = i * (w + 3); // 10  + 1
		
		fill('white');
		if (mouseX > x && mouseX < x + w) {
			let player = rookies.getString(i, 'Player').split('\\')[0];
			text(player, 100, 200);
			text(ast, 100, 250);
			fill('gold');	
		}
		rect(x, height - h, w, h);
	}
}











