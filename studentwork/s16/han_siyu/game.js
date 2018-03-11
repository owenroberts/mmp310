var cowboy;
var cowboy_walk_sprites, cowboy_walk, cowboy_stand_sprites, cowboy_stand, cowboy_jp_sprites, cowboy_jp, cowboy_died_sprites, cowboy_died, cowboy_shot_sprites, cowboy_shot;
var speed = 10;
var jump = 20;
var jumping = false;
var dead = false;
var bullets;
var firing = false;
var shooting = false;

var gravity = 1;

var platform, ground;

var pirate, pirate_atk_sprites, pirate_atk, pirate_dd_sprites,pirate_dd;

var fire, fire_ff_sprites, fire_ff;


function preload() {
	cowboy_walk_sprites = loadSpriteSheet("walk.png", 262, 280, 6);
	cowboy_walk = loadAnimation(cowboy_walk_sprites);

	cowboy_stand_sprites = loadSpriteSheet("stand.png", 250, 280, 1);
	cowboy_stand = loadAnimation(cowboy_stand_sprites);

    cowboy_jp_sprites = loadSpriteSheet("jp.png", 175, 280, 6);
	cowboy_jp = loadAnimation(cowboy_jp_sprites);

    cowboy_died_sprites = loadSpriteSheet("died.png" , 282, 250, 39);
    cowboy_died = loadAnimation(cowboy_died_sprites);

    cowboy_shot_sprites = loadSpriteSheet("shot.png" , 250, 280, 4);
    cowboy_shot = loadAnimation(cowboy_shot_sprites);


    pirate_atk_sprites = loadSpriteSheet("pr.png", 250, 280, 6);
	pirate_atk = loadAnimation(pirate_atk_sprites);

    fire_ff_sprites = loadSpriteSheet("fire.png", 150, 150, 3);
	fire_ff = loadAnimation(fire_ff_sprites);

//
//    pirate_dd_sprites = loadSpriteSheet("died.png" , 282, 250, 13);
//	pirate_dd = loadAnimation(pirate_dd_sprites);
//


	ground = loadImage("ground.png");
}

function setup() {
	createCanvas( 1080, 720 );

	platform = createSprite( width/2, 700, width, 40);
	platform.addImage(ground);
	platform.setCollider("rectangle", 0, 0, width, 10);
	//platform.debug = true;

	cowboy = createSprite( 100, 510 );
	cowboy.addAnimation("walk", cowboy_walk);
	cowboy.addAnimation("stand", cowboy_stand);
	cowboy.addAnimation("died", cowboy_died);
	cowboy.addAnimation("jp", cowboy_jp);
	cowboy.addAnimation("shot", cowboy_shot);

	cowboy.setCollider("rectangle", 0, 0, 100, 280);
	//cowboy.debug = true;

    pirate = createSprite( 950, 550, 50, 280);
    pirate.addAnimation("pratk", pirate_atk);
//    pirate.addAnimation("prdd", pirate_dd);
    pirate.setCollider("rectangle", 0, 0, 150, 280);
  //  pirate.debug = true;

    fire = createSprite (1050, 620, 150, 280);
    fire.setCollider("circle", 0, 15, 60, 60);
    fire.addAnimation("fire", fire_ff);
   // fire.debug = true;

    bullets = createSprite(1200,550);
    bullets.addAnimation("shoot","b1.png","b2.png","b3.png");
    bullets.setSpeed(-15,180);
    bullets.setCollider("circle", -15, 0, 10);
   // bullets.debug = true;
}

function draw() {
	background (150,180,250);

	cowboy.velocity.y += gravity;
	if ( cowboy.collide( platform ) && !dead) {
		cowboy.velocity.y = 0;
		if (jumping) jumping = false;
        cowboy.changeAnimation("stand");
	}


    if ( keyDown( "d" ) && !dead) {
		cowboy.changeAnimation("walk");
		platform.position.x -= speed;
		pirate.position.x -= speed;
		fire.position.x -= speed;
	}

    if ( keyDown( "space" ) && !jumping ) {
		cowboy.changeAnimation("jp");
        cowboy.velocity.y -= jump;
		jumping = true;
    }

    if ( keyWentDown( "f" ) && !shooting) {
        cowboy.changeAnimation("shot");
        bullets = createSprite(200,463);
        bullets.addAnimation("shoot","b1.png","b2.png","b3.png");
        bullets.setSpeed(-15,180);
        bullets.setCollider("circle", -15, 0, 10);
       // bullets.debug = true;
      /*  shooting = true;*/

	}

    if (bullets.collide(pirate)){
//        delay(500);
        pirate.remove();
//        pirate.addAnimation("prdd");
        pirate = createSprite( 1200, 550, 50, 280);
        pirate.addAnimation("pratk", pirate_atk);
        pirate.setCollider("rectangle", 0, 0, 150, 280);
        //pirate.debug = true;

        bullets.remove();
        }


	if (platform.position.x < 0) platform.position.x = width/2;
	if (pirate.position.x < -pirate.width/2) pirate.position.x = random(width, width*2);

    if (fire.position.x < -150) {
        fire.position.x = random(width, width*2);
    }

	if ( cowboy.collide(pirate) || cowboy.collide(fire) ) {
		dead = true;
        jump = 0;
        cowboy.changeAnimation("died");
        cowboy.remove;

	}



	drawSprites();





}
