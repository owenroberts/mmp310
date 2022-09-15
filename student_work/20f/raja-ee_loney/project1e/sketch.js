// P2 Setting - 9/21

// global variables
var bobIdle;
var bobRunR, bobRunL;
var bobJump;
var bobX, bobY;
var bobMainX, bobMainY;
var bobSpeed = 4;
var mounthills;
var pinetree;
var pinetreedark;
var pinetreeblack;
var moon;
var grass;
var signImage;
var objBubble;
var earth, moonsurface;

// game physics
var groundY = 99;
var GRAVITY = 2; // acceleration 2 pix per frame
var bobYSpeed = 2;
var bobIsJumping = false;

var scene = "main";
var bgColor = "black";

function preload() {
    bobIdle = loadImage('assets/positive_idle.gif');
    bobRunR = loadImage('assets/positive_run_right.gif');
    bobRunL = loadImage('assets/positive_run_left.gif');
    mounthills = loadImage('assets/mountandhills.png');
    pinetree = loadImage('assets/pine_tree.gif');
    pinetreedark = loadImage('assets/darkpine_tree.gif');
    pinetreeblack = loadImage('assets/blackpine_tree.gif');
    moon = loadImage('assets/the-moon.gif');
    grass = loadImage('assets/grass.gif');
    signImage = loadImage('assets/brownsign.png');
    objBubble = loadImage('assets/objbubble.png');
    bobJump = loadImage('assets/positive_jump.gif');
    earth = loadImage('assets/earth.png');
    moonsurface = loadImage('assets/moonland.png');
    
}

function setup() {
	createCanvas(1200, 600);
    bobX = width/2;
    bobY = 500;
    imageMode(CENTER);
}

// game object functions 

function sign(msg, x, y, bg, min, max) {
	image(signImage, x, y);

	// 2d collision between player (jerry) and sign 
	
	if (bobX - bobIdle.width / 2 < x + signImage.width / 2 &&
		bobX + bobIdle.width / 2 > x - signImage.width / 2 &&
		bobY - bobIdle.height / 2 < y + signImage.height / 2 &&
		bobY + bobIdle.height / 2 > y - signImage.height / 2) {

		fill(255);
		textFont("Comic Sans MS");
		textSize(20);
		textAlign(CENTER, CENTER);
		text(msg, x - signImage.width/2 + 20, y - signImage.height/2, signImage.width - 40, signImage.height - 60);

		textSize(16);
		text("Hit Enter to Play", x, y + 20);

		// enter event
		if (keyIsDown(ENTER)) {
			setupmoonland(true, bg, min, max);
		}
	}
}

function draw() {

	// scene manager
	if (scene == 'main') {
		main();
	}
	else if (scene == 'moonland') {
		moonland();
	}

}

function setupMain() {
	bobX = bobMainX;
	bobY = bobMainY;
	scene = "main";
}

function main() {
	background(0, 5, 46);
	noCursor();

	// still images (background)

	image(mounthills, 300, 300, 600, 600);
	image(moon, 1000, 100, 100, 100);

	// loop

	for (let x = 0; x < width; x += 130) {
		image(pinetreeblack, x + 35, 450, 150, 350);
		image(pinetreeblack, x + 90, 450, 150, 350);
		image(pinetreedark, x + 63, 430, 150, 350);
		image(pinetree, x, 410, 150, 350);
	}
    
    // character movement

    var bobIsRunningRight = false;
    var bobIsRunningLeft= false;

	if (keyIsDown(RIGHT_ARROW)) {
		bobX += bobSpeed;
		bobIsRunningRight = true;
	} else if (keyIsDown(LEFT_ARROW)) {
		bobX -= bobSpeed;
		bobIsRunningLeft = true;
	} else if (bobIsJumping) {
		image(bobJump, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}

	// apply gravity
	if (bobY < height - groundY) {
		bobYSpeed += GRAVITY;
	} else {
		// jerry on the ground
		bobYSpeed = 0;
		bobIsJumping = false;
	}

	// 32 is space
	if (!bobIsJumping && keyIsDown(32)) {
		bobYSpeed = -30;
		bobIsJumping = true;
		image(bobJump, bobX, bobY)
	}

	bobY += bobYSpeed;

	// signs
	sign("Stretch high and\nreach for the stars.", 100, 530);
	sign("Teleport to the Moon", 1100, 530);

	// character image
    
	if (bobIsRunningRight) {
		image(bobRunR, bobX, bobY);
	} else if (bobIsRunningLeft) {
		image(bobRunL, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}

	// more still images (foreground)

	image(grass, width/2, height/2, 1200, 600);

}

function setupmoonland(fromMain, bg, min, max) {

	bgColor = 0, 5, 46;

	// save jerry's map position
	if (fromMain) {
		bobMainX = bobX;
		bobMainY = bobY;
	}

	scene = 'moonland';
}

function moonland() {
	background(bgColor);
	noCursor();

	// still images (background)

	image(earth, 1000, 100, 100, 100);
    
    // character movement

    var bobIsRunningRight = false;
    var bobIsRunningLeft= false;

	if (keyIsDown(RIGHT_ARROW)) {
		bobX += bobSpeed;
		bobIsRunningRight = true;
	} else if (keyIsDown(LEFT_ARROW)) {
		bobX -= bobSpeed;
		bobIsRunningLeft = true;
	} else if (bobIsJumping) {
		image(bobJump, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}

	// apply gravity
	if (bobY < height - groundY) {
		bobYSpeed += GRAVITY;
	} else {
		// jerry on the ground
		bobYSpeed = 0;
		bobIsJumping = false;
	}

	// 32 is space
	if (!bobIsJumping && keyIsDown(32)) {
		bobYSpeed = -30;
		bobIsJumping = true;
	}

	bobY += bobYSpeed;
	
	// signs
	sign("Stretch high and\nreach for the stars.", 100, 530);
	sign("Teleport to the Moon", 1100, 530);

	// character image
    
	if (bobIsRunningRight) {
		image(bobRunR, bobX, bobY);
	} else if (bobIsRunningLeft) {
		image(bobRunL, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}

	// more still images (foreground)

	image(moonsurface, width/2, height/2, 1200, 600);

}