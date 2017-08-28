var player;
var speed = 0.1;
var jump = 20;
var jumping = false;

var gravity = 1;

var platform;
var obstacle;

function setup() {
	createCanvas( 720, 360 );
	player = createSprite( 400, 100, 40, 40 );
	platform = createSprite( width/2, height, width, 40);
	obstacle = createSprite( 300, height, 50, 100);
}

function draw() {
	background("black");
	
	if ( keyDown( "a" ) ) {
		player.velocity.x -= speed;
	} else if ( keyDown( "d" ) ) {
		player.velocity.x += speed;	
	}
	
	
	
	
	player.velocity.y += gravity;
	if ( player.collide( platform ) ) {
		player.velocity.y = 0;
		if (jumping) jumping = false;
	}
	
	if ( keyDown( "space" ) && !jumping ) {
		player.velocity.y -= jump;
		jumping = true;
	}
	
	if ( player.collide( obstacle ) ) {
		player.position.x = 400;
		player.position.y = 0;
		player.velocity.x = 0;
	}
	
	drawSprites();
}