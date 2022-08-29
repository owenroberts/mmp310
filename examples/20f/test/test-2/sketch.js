/*
	
	project 1-6
	objected oriented version
	classes and objects
	
*/

var jerryIdle, jerryWalk, jerryJump;
var treeImage, cloudImage, signImage, snakeImage;


var player;
var scenes = {};
var currentScene = 'main';

function preload() {
	jerryIdle = loadImage("jerry_idle.gif");
	jerryWalk = loadImage("jerry_walk.gif");
	jerryJump = loadImage("jerry_jump.gif");

	treeImage = loadImage("tree.png");
	cloudImage = loadImage("cloud.png");
	signImage = loadImage("sign.png");
	snakeImage = loadImage("snake.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont("Comic Sans MS");
	textAlign(CENTER, CENTER);
	imageMode(CENTER);


	player = new Player(width / 2, height / 2);

	scenes.main = new MainScene();
	scenes.end = new EndScene();

	scenes.easy = new PlatformScene('lightblue', 4, 7, 1);
	scenes.medium = new PlatformScene('darkblue', 8, 10, 2);
	scenes.hard = new PlatformScene('purple', 11, 15, 3);

	scenes.win = new Prompt('You win!', 'Hit Enter to Go to Map', 'main');
	scenes.lose =  new Prompt('You lose!', 'Hit Enter to Try Again');

}

function changeScene(sceneName, nextScene) {
	scenes[sceneName].setup(nextScene);
	currentScene = sceneName;
}

function draw() {
	scenes[currentScene].draw();
}