/*
	
	project 1-6
	objected oriented version
	classes and objects
	
*/

var jerryIdle, jerryWalk, jerryJump;
var treeImage, cloudImage, signImage, snakeImage;
var rockImage, bushImage;
var extraLifeImage, pogoStickImage;

var player;
var level = 1, score = 0;
var display;
var scenes = {}; // empty object literal
var currentScene = 'beginning';

function preload() {
	jerryIdle = loadImage("Images/jerry_idle.gif");
	jerryWalk = loadImage("Images/jerry_walk.gif");
	jerryJump = loadImage("Images/jerry_jump.gif");

	treeImage = loadImage("Images/tree.png");
	cloudImage = loadImage("Images/cloud.png");
	signImage = loadImage("Images/sign.png");
	snakeImage = loadImage("Images/snake.gif");
	rockImage = loadImage("Images/rock.png");
	bushImage = loadImage("Images/bush.png");

	extraLifeImage = loadImage("Images/ExtraLife.gif");
	pogoStickImage = loadImage("Images/pogo_stick.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	player = new Player(width / 2, height / 2);

	scenes.beginning = new Beginning();
	scenes.middle = new Middle();
	scenes.end = new End();

	scenes.easy = new PlatformScene('lightblue', 4, 7);
	scenes.medium = new PlatformScene('darkblue', 8, 10);
	scenes.hard = new PlatformScene('purple', 11, 15);

	scenes.win = new Prompt('You win!', 'Hit Enter to Return to Map');
	scenes.lose = new Prompt('You lose!', 'Hit Enter to Try Again');
	scenes.died = new Prompt('You died!', 'Hit Enter to Start Over');
	scenes.extraLife = new Prompt('You got an exta life!', 'Hit Enter to Continue');

	scenes.itemsDisplay = new ItemDisplay();

	display = new Display();

}

function changeScene(sceneName, nextScene, callback) {
	currentScene = sceneName;
	scenes[currentScene].setup(nextScene, callback);
}

function draw() {
	scenes[currentScene].draw();
	display.draw();
}

function keyPressed() {
	if (keyCode == 73) {
		if (currentScene == 'itemsDisplay') {
			changeScene(scenes.itemsDisplay.sceneToReturn);
		} else {
			changeScene('itemsDisplay', currentScene);
		}
	}
}
