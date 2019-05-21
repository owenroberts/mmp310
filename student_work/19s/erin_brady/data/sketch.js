/*
	data vis 1
	mmp 310 week 8
*/

var water;

function preload() {
    rookies = loadTable('rookies.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    textSize(20);
    textAlign(CENTER, CENTER);

    let x = 150;
    let y = 200;
    for (let i = 0; i < 10; i++) {
        //        let player = rookies.getNum(i, 'Player');
        let per = rookies.getNum(i, 'BLK');
        console.log(year, per);

        fill('orange');
        ellipse(x, y, per);

        fill('black');
        text(per, x, y);

        fill('white');
        let player = rookies.getString(i, 'Player').split('\\')[0];
        text(player, x, y + 100);

        text("Top 10 Defense Basketball Players with Highest # of Blocks", windowWidth / 2, 30);

        x += 290;
        if (x > width) {
            x = 150;
            y += 300;
        }

    }
}
