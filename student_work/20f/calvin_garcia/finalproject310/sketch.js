/*

Final 

*/

// image variables 

var playerCharacter;
var playerWalk;
var playerAttack; 
var enemyCharacter;
var enemyWalk;
var enemyAttack;

//flip
var enemyAttackFlip;
var enemyWalkFlip;
var enemyFlip;
var playerFlip;
var playerWalkFlip;
var playerAttackFlip;



var map;
var cover;
var currentScene = "title";

// sketch variables

var player;
var enemy;
var scene;
var title;
var main;
var p1win;


function preload(){
	playerCharacter = loadImage("images/player.png");
	playerWalk = loadImage("animations/newnewestplayer.gif");
	playerAttack = loadImage("animations/playerattack.gif");

	enemyCharacter = loadImage("images/newestenemy.png");
	enemyWalk = loadImage("animations/newestwalk.gif");
	enemyAttack = loadImage("animations/newestpunch.gif");

	enemyFlipWalk = loadImage("animations/flip/newestwalk.gif");
	enemyAttackFlip = loadImage("animations/flip/flippurplepunch_.gif");

	playerAttackFlip = loadImage("animations/flip/flipplayerattack.gif");
	playerWalkFlip = loadImage("animations/flip/flipplayerwalk.gif");

	map = loadImage("images/map.jpg");

	cover = loadImage("images/coverimage.jpg");





}


function setup(){
	createCanvas(600,400);
	imageMode(CENTER);
	player = new Player( 200, 300 );
	enemy = new Enemy( 400, 300 );
	main = new MapScene();
	title = new Title();

	// p1win = new P1Win();

}



function draw(){
	background(200);


	main.draw();
	title.draw();

	if (currentScene == "title"){
			title.draw();
		}
		else if(currentScene == "main"){
				main.draw();
			}
		// else if(currentScene == "p1win"){
		// 		p1win.draw();
		// 	}	
		// }

}
	// enemy.draw();
	// player.draw();




