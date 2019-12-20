/*
    Third pattern, triangles arranged 
*/
var numX = 10;
var nameInput;

var redColor = 150;
var greenColor = 150;
var blueColor = 150;
var rotation = 2;
var a = 50;

function setup() {
    createCanvas(windowWidth, 600);
    translate(windowWidth / 2, 300);
    pattern();

    var button = createButton("Generate Pattern");
    button.mouseClicked(pattern);

    createP("Change Number of Rows");
    var numSlider = createSlider(2, 80, numX);
    numSlider.input(getNumX);

    createP("Change Redness");
    var redSlider = createSlider(10, 235, redColor);
    redSlider.input(getRed);

    createP("Change Greenness");
    var greenSlider = createSlider(10, 235, greenColor);
    greenSlider.input(getGreen);

    createP("Change Blueness");
    var blueSlider = createSlider(10, 235, blueColor);
    blueSlider.input(getBlue);

    createP("Change Rotation");
    var turnSlider = createSlider(1, 15, rotation);
    turnSlider.input(turn);

    createP("Change Opacity");
    var alphSlider = createSlider(1, 235, a);
    alphSlider.input(opacity);
}

function getNumX() {
    numX = this.value();
    pattern();

}

function getRed() {
    redColor = this.value();
    pattern();
}

function getGreen() {
    greenColor = this.value();
    pattern();
}

function getBlue() {
    blueColor = this.value();
    pattern();
}

function turn() {
    rotation = this.value();
    pattern();
}

function opacity() {
    a = this.value();
    pattern();
}

function pattern() {
    background(0);
    noStroke();

    for (let x = 0; x < numX; x++) {
        rotate(15 * PI / 30);
        for (let y = 0; y < 500; y += 50) {
            rotate(rotation * PI / random(15, 25));
            var r = redColor + random(-30, 30);
            var g = greenColor + random(-30, 30);
            var b = blueColor + random(-30, 30);

            fill(r, g, b, a); // color of triangle and ellipses
            stroke(1);

            //triangle(30+x, 75, 58+x, 20, 86+x, 75);
            ellipse(x, 20 + y, random(5, 25));
            square(15 + x, 20 + y, 25, 2);
            triangle(30, 75 + y, 58, 20 + y, 86, 75 + y);
            ellipse(20, y, random(5, 25));
            for (let s = 0; s < 150; s++) {
                stroke(r, g, b, 110);
                point(x + random(-50, 50), y + random(-50, 50));
            }

        }
    }
}
