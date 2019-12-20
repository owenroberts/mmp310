/*
	three scenes: 
	beach, hell, air
*/
var scene = "beach";

function setup() {
	createCanvas(700, 700);
	//	scene = random(["city", "forest", "ocean"]);}
}


function mousePressed() {
	if (scene == "beach") {
		scene = "air";
	} else if (scene == "air") {
		scene = "hell";
	} else if (scene == "hell") {
		scene = "beach";
	}
}

function draw() {
	// set the setting
	if (scene == "beach") {
		beach();
		John(100, 200, 120, 60, 'blue', '"I love this beach!"');
		Jane(400, 530, 160, 'pink', '"Yes, me too!"');
		narration("Once, John and Jane met each other.");
	} else if (scene == "air") {
		air();
		John(50, 100, 120, 60, 'green', '"OMG, what is going on??"');
		Jane(350, 500, 160, 'red', '"I have no idea."');
		narration("Then the earth has disappeared");
	} else if (scene == "hell") {
		hell();
		John(150, 250, 120, 60, 'yellow', '"It is soooo hot here!!"');
		Jane(380, 500, 160, 'grey', '"Really? I feel cold..."');
		narration("And then they moved to the hell.");
	}

	/* instructions */
	fill("black");
	textSize(20);
	text("Click to go to the next scene", width - 100, 10, 100, 100);
}

function narration(story) {

	textAlign(CENTER);
	fill("white");
	text(story, 0, 600, 500, 500);
}

function John(x, y, w, h, col, greeting) {

	var eyeSize = w / 4;
	var eyeOffset = w / -5;
	
	var eyeSize2 = w / 7;
	var eyeOffset2 = w / -5;

 	strokeWeight(4);
  	stroke(51);
	fill(col);
	
	rect(x, y, w, h,); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	
	// left eye
	strokeWeight(2);
	stroke(51);
	fill('white');
	ellipse(x - eyeOffset, y - eyeOffset, eyeSize);
	
	//left eye 2nd part
	fill('black');
	ellipse(x - eyeOffset2, y - eyeOffset2, eyeSize2);
	
	// right eye
	strokeWeight(2);
	stroke(51);
	fill('white');
	ellipse(x - eyeOffset - eyeOffset - eyeOffset - eyeOffset, y - eyeOffset, eyeSize);
	
	//right eye 2nd part
	fill('black');
	ellipse(x - eyeOffset2 - eyeOffset2 - eyeOffset2 - eyeOffset2, y - eyeOffset2, eyeSize2);


	textSize(40);
	fill("black");
	noStroke();
	text(greeting, x + 200, y - 30);
	
}

function Jane(x, y, size, col, greeting) {

	var eyeSize = size / 4;
	var eyeOffset = size / 5;
	
	var eyeSize2 = size / 8;
	var eyeOffset2 = size / 5;
	
	var eyeSize3 = size / 16;
	var eyeOffset3 = size / 4.5;
	
	fill(col);
	stroke('black');
	// face
	ellipse(x, y, size);
	
	// left eye
	strokeWeight(2);
	stroke(51);
	fill('white');
	ellipse(x - eyeOffset, y - eyeOffset, eyeSize);
	//left eye 2nd part
	fill('black');
	ellipse(x - eyeOffset2, y - eyeOffset2, eyeSize2);
	//left eye 3nd part
	fill('white');
	ellipse(x - eyeOffset3, y - eyeOffset3, eyeSize3);
	
	// right eye
	strokeWeight(2);
	stroke(51);
	fill('white');
	ellipse(x + eyeOffset, y - eyeOffset, eyeSize);
	
	//right eye 2nd part
	fill('black');
	ellipse(x + eyeOffset2, y - eyeOffset2, eyeSize2);
	
	//right eye 3nd part
	fill('white');
	ellipse(x + eyeOffset3, y - eyeOffset3, eyeSize3);

	fill('grey');
    stroke(51);
	text(greeting, x - 5, y - 110);
	
}

function beach() {
background(126, 209, 255);
fill(250, 222, 0);
ellipse(4, 35, random(250));
stroke(0, 136, 178);
fill(0, 136, 178);
rect(0, 280, 700, 700);

stroke(249, 231, 209);
fill(249, 231, 209);
rect(0, 340, 700, 700);
}

function hell() {
background("red");
stroke("yellow");
fill("yellow");
triangle(150, 370, 80, random(220), 0, 370);
   
stroke("orange");
fill("orange");
triangle(300, 370, 150, random(200), 40, 370); 
   
stroke("yellow");
fill("yellow");
triangle(400, 370, 300, random (100), 100, 370);
   
stroke("orange");
fill("orange");
triangle(500, 370, 400, random (300), 300, 370);
}

function air() {
background("white");
stroke('black');
fill("white");
rect(random(50), 400, 400, 60);
}
