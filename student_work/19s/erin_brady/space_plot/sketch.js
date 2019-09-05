/*
    Erin Brady
	mmp 310 week 9
	spaceship game
*/

var shipSprite;
var asteroidSprite;
var bossSprite;
var backgroundImg;
var shipExplode;
var bossExplode;
var astExplode;

function preload() {
    backgroundImg = loadImage("background1.jpg");

    shipSprite = loadImage("spaceship.png");

    astImgs[0] = loadImage("asteroid1.png");
    astImgs[1] = loadImage("asteroid2.png");
    astImgs[2] = loadImage("asteroid3.png");

    bossSprite = loadImage("boss.png");

    shipExplode = loadImage("explode.png");
    bossExplode = loadImage("bossExplode.png");
}

var spaceship;
var asteroid;
var boss;
var astImgs = [];
var asteroids = [];
var lasers = [];
var s = [];
var bossLasers = [];
var astField = [];

// score
// one point for every asteroid destroyed
var score = 0;

var x = 100,
    y = 50,
    w = 100,
    h = 47;

var shipX = 500;
var shipY = 100;
var bossShipX = -300;
var fieldX;

var ship2X = 0;
var ship2Y = 2;
var bossShip2X = 1500;

var story1 = " ";
var story2 = " ";
var chapter = 'story';
var plotChapter = "1";
var textColor = 'white';

//probability asteroid spawns in each frame
var asteroidProb = 99;

var playerLives = 3;
var bossLives = 10;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    imageMode(CENTER);

    // position the spaceship at start of game
    spaceship = new Spaceship();
    boss = new Boss();

    //setup asteroid field
    for (let i = 0; i < 100; i++) {
        astField.push(new Jitter());
    }

}

function draw() {

    background(51);
    image(backgroundImg, width / 2, height / 2, width, height);

    if (chapter == 'story') {
        story();

    } else if (chapter == 'tutorial') {
        tutorial();

    } else if (chapter == 'game') {
        game();

    } else if (chapter == 'cutscene') {
        cutscene();

    } else if (chapter == 'bossFight') {
        bossFight();

    } else if (chapter == 'end') {
        end();
    }
}

//add lasers
function keyPressed() {
    if (keyCode === 32) {
        lasers.push(new Laser('yellow', -15));
    }

    //progress from tutorial to game
    if (keyCode === 13) {
        console.log(chapter);
        if (chapter == 'tutorial') {
            chapter = 'game';
            plotChapter = '4';
        }
    }
}

function mouseClicked() { //progression

    //forward
    if (mouseX > width - x && mouseX < width - x + w && mouseY > height - y && mouseY < height - y + h) {
        if (plotChapter == '1') {
            plotChapter = '2';
            shipX = 0;
        } else if (plotChapter == '2') plotChapter = '3';
        else if (plotChapter == '3') chapter = 'tutorial';
        else if (plotChapter == '4') plotChapter = '5';
        else if (plotChapter == '5') chapter = 'bossFight';
    }
}

function tutorial() {
    fill('black');
    rect(width / 4, height / 3 - 60, width / 2, height / 2 + 100);


    textFont('VT323');
    textAlign(CENTER, CENTER);
    textSize(30);
    fill('white');
    text("Oh no! You've narrowly evaded one danger by", width / 2, height / 3 - 20);
    text("running straight into another! Can you survive?", width / 2, height / 3 + 20);
    text("Tutorial:", width / 2, height / 3 + 110);
    text("Use the left and right arrow keys to move the Trinity and", width / 2, height / 3 + 150);
    text("help her dodge the oncoming asteroids.", width / 2, height / 3 + 190);
    text("Press the spacebar to shoot Trinity's lasers and destroy", width / 2, height / 3 + 250);
    text("the asteroids blocking your path.", width / 2, height / 3 + 290);
    text("Press Enter to Play", width / 2, height / 3 + 360);
}

function cutscene() {

    rectMode(CORNER);
    textAlign(LEFT);

    fill('black');
    rect(0, height - 130, width, height - 100);

    //story

    //progression buttons
    if (mouseX > width - x && mouseX < width - x + w && mouseY > height - y && mouseY < height - y + h) { //next
        fill('#3f3f3f'); //dark gray
        rect(width - x, height - y, w, h);
    }

    //story text
    textSize(30);
    fill(textColor);
    textFont('VT323');
    text(story1, width / 15, height - 100);
    text(story2, width / 15, height - 70);
    fill('white');
    textSize(20);
    text('Next ▶', width - x + 15, height - y + 30);

    //chapters
    if (plotChapter == '4') {

        textColor = 'white';
        story1 = "You've managed to escape the asteroid field by the skin of your teeth!";
        story2 = "Just when the coast looks clear, Trinity comes face-to-face with her nemesis.";

        //draw asteroid field
        for (let i = 0; i < astField.length; i++) {
            astField[i].move();
            astField[i].display();
            astField[i].x = 20;
        }

        //spaceship
        push();
        translate(ship2X, height / ship2Y - 50);
        if (ship2X < width / 2 - 80) {
            ship2X += 3;
        }
        rotate(radians(90));
        image(shipSprite, 0, 0); //width - 200
        pop();

        //boss Ship
        push();
        translate(bossShip2X, height / ship2Y - 50);
        if (bossShip2X > width / 2 + 100) {
            bossShip2X -= 3;
        }
        rotate(radians(90));
        image(bossSprite, 0, 0);
        pop();

    } else if (plotChapter == '5') {
        push();
        translate(width / 2, 300);
        scale(3.0);
        image(bossSprite, 0, 0);
        pop();

        textColor = 'orange';
        story1 = "YOU CANNOT ESCAPE! FIGHT ME AND DIE!!!";
        story2 = "";
    }
}

function endGame() {
    //shadow
    textFont('VT323');
    textAlign(CENTER, CENTER);
    textSize(155);
    fill("black");
    text("CRITICAL FAILURE", width / 2 + 10, height / 2);


    //main text
    textSize(155);
    fill('orange');
    text("CRITICAL FAILURE", width / 2, height / 2);
    noLoop();
}

function winGame() {
    //shadow
    textFont('VT323');
    textAlign(CENTER, CENTER);
    textSize(155);
    fill("black");
    text("VICTORY IS YOURS", width / 2 + 10, height / 2);

    //main text
    textSize(155);
    fill('#ff3fda');
    text("VICTORY IS YOURS", width / 2, height / 2);
    noLoop();
}

class Jitter {
    constructor() {
        this.x = random(width / 2, width);
        this.y = random(height - 150);
        this.diameter = random(30, 60);
        this.speed = 1;
        this.image = random(astImgs);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        image(this.image, this.x, this.y, this.diameter, this.diameter);
    }
}
