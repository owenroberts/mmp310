/*
	setting sketch
	9.11.2019
*/

// character variables -- jenny
var x = 200;
var y = 100;
var faceSize = 200;
var eyeSize = 20;
var eyeOffset = 50;
var c = 'purple'; // color
var greeting = '"Hi!"';

// second character -- jerry
var jerryX = 700;
var jerryY = 200;
var jerrySize = 200;
var jerryColor = 'green';
var jerryGreeting = '"Hello."';

var story1 = "Once upon a time, Jerry and Jenny met in a black void.";

/*
	three scenes: city, forest, ocean
*/
var scene = "city";

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
		background('black');

		/* city scene */
		fill('gray');
		for (let x = 0; x < width; x += 100) {
			rect(x, 100 + random(300), 90, height - 100);
		}

	} else if (scene == "forest") {
		background("lightgreen");

		/* forest scene */
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

	} else if (scene == "ocean") {
		background("lightblue");

		/* ocean scene */
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



	// jenny character
	fill(c);
	ellipse(x, y, faceSize); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye

	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);

	// jerry character
	fill(jerryColor);
	stroke('white');
	// face
	arc(jerryX, jerryY, jerrySize, jerrySize, PI, HALF_PI + QUARTER_PI, PIE);
	// left eye
	fill('black');
	triangle(
		jerryX - 50, jerryY - 75,
		jerryX, jerryY - 50,
		jerryX - 50, jerryY - 25
	);

	// right eye
	quad(
		jerryX + 30, jerryY - 75,
		jerryX + 25, jerryY - 25,
		jerryX + 75, jerryY - 50,
		jerryX + 75, jerryY - 60,
	);

	fill('white');
	noStroke();
	text(jerryGreeting, jerryX - 200, jerryY + 150);


	textAlign(CENTER);
	text(story1, width / 4, height - 100, width / 2, 200);


	/* instructions */
	textSize(20);
	text("Click to go to the next scene", width - 100, 10, 100, 100);
}