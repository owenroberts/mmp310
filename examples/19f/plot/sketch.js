/*
	plot sketch
	9.23.2019
*/

/*
	three scenes: 
	city, forest, ocean
*/
var scene = "ocean";

function setup() {
	createCanvas(windowWidth, 600);
	//	scene = random(["city", "forest", "ocean"]);}
}

function mousePressed() {
	if (scene == "city") {
		scene = "forest";
	} else if (scene == "forest") {
		scene = "ocean";
	} else if (scene == "ocean") {
		scene = "city";
	}
}

function draw() {
	// set the setting
	if (scene == "city") {
		city();
		jenny(200, 400, 200, 'purple', '"Hi!"');
		jerry(700, 300, 200, 'green', '"Hello."');
		narration("Once upon a time, Jerry and Jenny met in a city.");
	} else if (scene == "forest") {
		forest();
		jenny(100, 200, 200, 'purple', '"How are you?!"');
		jerry(400, 200, 200, 'green', '"I am good."');
		narration("Then they moved to the forest.");
	} else if (scene == "ocean") {
		ocean();
		jenny(400, 100, 200, 'purple', '"We are underwater."');
		jerry(700, 100, 200, 'green', '"Look at the fish."');
		narration("And then they moved to the ocean.");
	}

	/* instructions */
	textSize(20);
	text("Click to go to the next scene", width - 100, 10, 100, 100);
}

function narration(story) {
	textAlign(CENTER);
	text(story, width / 4, height - 100, width / 2, 200);
}

function jenny(x, y, size, col, greeting) {

	var eyeSize = size / 10;
	var eyeOffset = size / 4;

	fill(col);
	ellipse(x, y, size); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye

	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);
}

function jerry(x, y, size, col, greeting) {
	fill(col);
	stroke('white');
	// face
	arc(x, y, size, size, PI, HALF_PI + QUARTER_PI, PIE);
	// left eye
	fill('black');
	triangle(
		x - 50, y - 75,
		x, y - 50,
		x - 50, y - 25
	);

	// right eye
	quad(
		x + 30, y - 75,
		x + 25, y - 25,
		x + 75, y - 50,
		x + 75, y - 60,
	);

	fill('white');
	noStroke();
	text(greeting, x - 200, y + 150);
}

function city() {
	background('black');
	fill('gray');
	for (let x = 0; x < width; x += 100) {
		rect(x, 100 + random(300), 90, height - 100);
	}
}

function forest() {
	background("lightgreen");

	fill('green');
	noStroke();

	for (let x = 0; x < width; x += 50) {
		triangle(
			x, 100 + random(200),
			x + 50, 600,
			x - 50, 600
		);
	}
	fill('gold');
	circle(width - 100, 100, 100);
}

function ocean() {
	background("lightblue");
	fill('darkblue');
	rect(0, height/2, width, height);

	stroke('blue');
	for (let x = 0; x < width; x += 100) {
		let y = random(height);
		noFill();
		beginShape();
		curveVertex(x - 100, y + 100);
		curveVertex(x, y);
		curveVertex(x + 100, y);
		curveVertex(x + 100, y + 50);
		curveVertex(x, y);
		curveVertex(x - 100, y);
		endShape();

		ellipse(x + 100, y, 20);
		fill('blue');
		ellipse(x + 100, y, 10);
	}
}




