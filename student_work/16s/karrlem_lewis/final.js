//Global Variables
var bullets;
var symbols;
var player;
var playerImage, bulletImage;
var enemies;
var enemyImages;
var shoot;
var hitEnemy;
var die;
var MARGIN = 40;
var submit = document.getElementById("submit");
var button;
var gameover = false;

var score = 0;
var playerdead = false;

//Preload music
function preload(){
	stage = loadSound('sounds/stage.mp3');
}

//setup the game
function setup(){
createCanvas(800,600);
bg = loadImage("images/MMP310FinalBackground.png");
playerImage = loadImage("images/player.png");
bulletImage = loadImage("images/bullet.png");
soundFormats('mp3');
shoot = loadSound('sounds/shoot.mp3');
die = loadSound('sounds/playerexplosion.mp3');
hit = loadSound('sounds/hit.mp3');
stage.setVolume(0.4);
stage.loop();

//player information
player = createSprite(width/2, height/2);

player.addImage("normal",playerImage);
player.maxSpeed = 10;
player.friction = .98;
player.setCollider("circle",0,0,32);
//player.debug = true;

enemies = new Group();
bullets = new Group();

//loop that controls the number of enemies that spawn at the start
for(var i = 0; i<4; i++) {
	enemySpawn();
	}
}
var a, textx, texty;

function draw(){
background(bg);
fill('red');
textAlign(CENTER);
textSize(20);
text("Controls: Arrow Keys to move + space to shoot", width/2, 30);
fill(0);
text("Karrlem Lewis",153, 80);
text("MMP310 Final",153,106);
text("Mastroids", 133, 132);
text("Score:" + score, width/2,55);


fill(255,182,193,a);
a -= 10;
text("100+", textx, texty);
texty--;

//loop that controls the edge of the canvas
for(var i=0; i< allSprites.length; i++){
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
}

//enemy collision with bullet and player collision with enemy
enemies.overlap(bullets,enemyHit);
enemies.forEach( function(enemy)  {
	enemy.move();
});
player.overlap(enemies,playerHit);

//Player movement
if(keyDown(LEFT_ARROW) && !playerdead)
	player.rotation -= 4;
if(keyDown(RIGHT_ARROW) && !playerdead)
	player.rotation += 4;
if(keyDown(UP_ARROW) && !playerdead){
	player.addSpeed(.2,player.rotation);
}
if(keyDown(DOWN_ARROW) && !playerdead){
	player.addSpeed(-.2,player.rotation);
}

//Shooting
if(keyWentDown("space") && !playerdead){
	var bullet = createSprite(player.position.x,player.position.y);
	bullet.addImage("normal", bulletImage);
	bullet.setSpeed(10+player.getSpeed(), player.rotation);
	bullet.life = 30;
	bullets.add(bullet);
	shoot.play();
//	bullet.debug = true;

	}
	drawSprites();
}

//creates enemy
function createEnemy(type, x, y){
	var e = createSprite(x,y);
	var img = loadImage("images/enemy"+ floor(random(0,4))+".png");
	e.addImage(img);
	//e.setSpeed(2.5-(type/2),random(360));
	e.move = function() {
		if (e.position.x > player.position.x)
		e.velocity.x = -1;
		else e.velocity.x = 1;
		if (e.position.y > player.position.y)
		e.velocity.y = -1;
		else e.velocity.y = 1;

		enemies.forEach( function(en) {
			if (en != e) {
				e.bounce(en);
			}

		});
	}
//	e.debug = true;
	e.type = type;

	if(type == 2)
		e.scale = .6;
	if(type == 1)
		e.scale = .3;

	e.mass = 2+e.scale;
	e.setCollider("circle", 0 , 0, 20);
	enemies.add(e);
	return e;
}
function enemyHit(enemy, bullet){
bullet.remove();
	textx = enemy.position.x;
	texty = enemy.position.y;
	a = 255;
enemy.remove();
hit.play();
enemySpawn();
	score += 100;
}


function playerHit(){
playerdead = true;
player.remove();
hit.play();

		var button = createButton('GameOver');
		button.position(width/2-button.width,height/2);
	button.mousePressed(gameOver);
	button.style("font-size", "40px");
	button.style("color", "#f44336");
	button.style("background-color", "#FFFFFF");
	button.style("border-color", "#ADD8E6");
	button.style("box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)");
	button.style("hover","background-color: #008CBA;");
//	text("Click game over to try again",width/2,height/2);

	}

//enemy spawner
function enemySpawn(){
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEnemy(3, px, py);
}
setInterval(enemySpawn, 10000);


function gameOver(){
	window.location.reload();
}
