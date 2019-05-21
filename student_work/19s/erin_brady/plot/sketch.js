//mmp 310 week 2
//interactive story
//adding 3 settings
//by erin brady

//bird variables
var birdX = 425; //425
var birdY = 120; //120
var birdX2 = 355; //355
var birdY2 = 153; //153
var birdX3 = 255; //255
var birdY3 = 223; //223
var bHeadWidth = 50; //50
var bHeadHeight = bHeadWidth - 15; //35
var eyeSize = 6;
var bFootSize = 30;

//squirrel variables
var squirrelX = 750;
var squirrelY = 300; //135
var earSize = 20; //20
var squirrelWidth = 65;
var squirrelHeight = 130;

//misc variables
var dayColor = '#69cae0';
var eveningColor = '#ef9643'
var nightColor = '#370f82';
var chapter = "1";
var bgColor = dayColor;
var darkness;
var nextX = 830;
var buttonY = 630;
var prevX = 20;
var x = nextX - 30,
    y = buttonY - 30,
    w = 100,
    h = 47;
var story1 = "Once upon a time, in an insignificant backyard in the middle of nowhere, there lived a bird and a squirrel.";
var story2 = "...They didn't really notice one another's existence.";

function setup() {
    createCanvas(900, 647);
    img = loadImage('background.png');
    img2 = loadImage('birdhousebg.png');
    darkness = color(0, 0);
}

function draw() {

    //scenery / background
    background('black'); //text box
    fill(bgColor);
    rect(0, 0, 900, 447); //sky color background
    image(img2, 0, 0); //backyard img background


    //darkness filter
    fill(darkness);
    rect(0, 0, 900, 447);

    //progression buttons
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) { //next
        fill('#3f3f3f'); //dark gray
        rect(x, y, w, h);
    }
    if (mouseX > 0 && mouseX < 0 + w && mouseY > y && mouseY < y + h) { //prev
        fill('#3f3f3f'); //dark gray
        rect(0, y, w, h);
    }

    //story text
    textSize(20);
    fill('white');
    textFont('VT323');
    text(story1, 20, 500);
    text(story2, 20, 550);
    text('Next ▶', nextX, buttonY);
    text('◀ Prev', prevX, buttonY);


    //chapters
    if (chapter == '1') {
        fill(bgColor);
        rect(0, 0, 900, 447);
        image(img, 0, 0);
        bgColor = dayColor;
        darkness = color(0, 0);
        story1 = "Once upon a time, in an insignificant backyard in the middle of nowhere, there lived a bird and a squirrel.";
        story2 = "...They didn't really notice one another's existence.";
        stroke('black');
        strokeWeight(1);

        push();
        translate(760, 0);
        scale(-1, 1);
        bird();
        pop();


        push();
        translate(1500, 0);
        scale(-1, 1)
        squirrel();
        pop();

        eyeSize = 6;

    } else if (chapter == '2') { //day
        fill(bgColor);
        rect(0, 0, 900, 447);
        image(img, 0, 0); //birdhouse
        bgColor = dayColor;
        darkness = color(0, 0);
        story1 = "That changed when a human suddenly decided to set up a bird feeder in the backyard.";
        story2 = "";
        eyeSize = 6;
        strokeWeight(1);


        stroke('black');
        bird();
        squirrel();



    } else if (chapter == '3') { //day
        image(img2, 0, 0); //birdhouse
        bgColor = dayColor;
        darkness = color(0, 0);
        story2 = '"FOOD!" thought both the bird and the squirrel.';
        eyeSize = 12;
        strokeWeight(1);

        stroke('black');
        bird();
        squirrel();

        //speech bubble
        fill('white');
        triangle(460, 130, 650, 110, 670, 120);
        triangle(650, 110, 670, 130, 700, 300);
        noStroke();
        ellipse(670, 150, 170, 100);
        fill('black');
        textSize(40);
        text('FOOD!!!', 615, 160);

    } else if (chapter == '4') { //day
        image(img2, 0, 0); //birdhouse
        bgColor = dayColor;
        darkness = color(0, 0);
        eyeSize = 12;
        story1 = "A wild frenzy took over both of them."
        story2 = "In an effort to prevent the other from eating all the birdseed, they ate..."
        strokeWeight(1);

        stroke('black');
        push();
        translate(100, 60);
        bird();
        pop();

        push();
        translate(-100, -50);
        squirrel();
        pop();

    } else if (chapter == '5') { //evening
        image(img2, 0, 0); //birdhouse
        bgColor = eveningColor;
        darkness = color(0, 51);
        eyeSize = 10;
        story1 = "...and ate,";
        story2 = "";
        strokeWeight(1);

        stroke('black');
        push();
        translate(100, 60);
        bird();
        pop();

        push();
        translate(-100, -50);
        squirrel();
        pop();

        fill(darkness);
        rect(0, 0, 900, 447);

    } else if (chapter == '6') { //evening
        image(img2, 0, 0); //birdhouse
        bgColor = eveningColor;
        darkness = color(0, 51);
        eyeSize = 8;
        story1 = "...and ate,";
        story2 = "and ate...";
        strokeWeight(1);

        stroke('black');
        push();
        translate(60, 150);
        bird();
        pop();

        push();
        translate(-100, -50);
        squirrel();
        pop();

        fill(darkness);
        rect(0, 0, 900, 447);

    } else if (chapter == '7') { //night
        image(img2, 0, 0); //birdhouse
        bgColor = nightColor;
        darkness = color(0, 102);
        eyeSize = 0;
        strokeWeight(1);

        story1 = "...and ate, until they became so sick that they couldn't eat any more.";
        story2 = "";

        stroke('black');
        push();
        translate(60, 150);
        bird();
        pop();

        push();
        translate(-100, -50);
        squirrel();
        pop();

        fill('black');
        strokeWeight(2);
        line(588, 285, 600, 285); //squirrel eye
        line(475, 275, 485, 275); //bird eye

        fill(darkness);
        rect(0, 0, 900, 447);
    }
}

function bird() { //character 1
    fill('#868686'); //gray
    strokeWeight(1);

    //bird body
    beginShape();
    vertex(birdX, birdY);
    bezierVertex(birdX - 15, birdY + 130, birdX2, birdY2, birdX3, birdY3);
    endShape(CLOSE)

    ellipse(birdX - 15, birdY + 10, bHeadWidth, bHeadHeight); // bird head

    // bird eye
    fill('black');
    ellipse(birdX - 5, birdY + 5, eyeSize, eyeSize);

    fill('#f4f43d'); //yellow
    triangle(birdX + 5, birdY + 20, birdX + 10, birdY + 10, birdX + 25, birdY + 20); // bird beak
    arc(birdX - 45, birdY + 75, bFootSize, bFootSize, -PI, 0, CHORD); //bird foot
}

function squirrel() { //character 2
    fill('#874934'); //brown
    rect(squirrelX, squirrelY, squirrelWidth - 20, squirrelHeight, 15); //squirrel tail
    arc(squirrelX - 25, squirrelY + 130, squirrelWidth + 5, squirrelHeight + 50, -PI, 0, CHORD); // squirrel body
    ellipse(squirrelX - 55, squirrelY + 20, earSize, earSize); //squirrel left ear
    ellipse(squirrelX - 30, squirrelY + 20, earSize, earSize); //squirrel right ear
    ellipse(squirrelX - 45, squirrelY + 40, earSize * 3, earSize + 25); //squirrel head

    //squirrel tummy
    fill('#e1bb80'); //tan
    arc(squirrelX - 40, squirrelY + 125, squirrelWidth - 35, squirrelHeight - 35, -PI, 0, CHORD);

    //squirrel tooth
    fill('white');
    rect(squirrelX - 70, squirrelY + 51, 6, 7);

    //squirrel eye
    fill('black');
    ellipse(squirrelX - 60, squirrelY + 35, eyeSize, eyeSize);
}

function mouseClicked() { //progression

    //forward
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        if (chapter == '1') chapter = '2';
        else if (chapter == '2') chapter = '3';
        else if (chapter == '3') chapter = '4';
        else if (chapter == '4') chapter = '5';
        else if (chapter == '5') chapter = '6';
        else if (chapter == '6') chapter = '7';
        else if (chapter == '7') chapter = '1';
    }

    //backward
    else if (mouseX > 0 && mouseX < 0 + w && mouseY > y && mouseY < y + h) {
        if (chapter == '1') chapter = '7';
        else if (chapter == '4') chapter = '3';
        else if (chapter == '3') chapter = '2';
        else if (chapter == '2') chapter = '1';
        else if (chapter == '5') chapter = '4';
        else if (chapter == '6') chapter = '5';
        else if (chapter == '7') chapter = '6';
    }
}

//evening darkness = color(0, 51)
//night darkness = color(0, 102)
