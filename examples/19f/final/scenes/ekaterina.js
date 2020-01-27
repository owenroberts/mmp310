//3rd scene
class ekaterina extends Scene {

    preload() {

        // sprite sheet - src, width, height, number of sprites
        this.mousemovesright = loadImage('images/ekaterina/mousemovesright.gif');
        this.mousemovesleft = loadImage('images/ekaterina/mousemovesleft.gif');
        this.mouseidle = loadSpriteSheet('images/ekaterina/mouseidle.png', 200, 93, 11);

        this.mousejumpsup = loadSpriteSheet('images/ekaterina/mousejumpsup.png', 175, 220, 3);
        this.mousejumpsleft = loadSpriteSheet('images/ekaterina/mousejumpsleft.png', 285, 100, 3);
        this.mousejumpsright = loadSpriteSheet('images/ekaterina/mousejumpsright.png', 285, 100, 3);

        this.lionmovesright = loadSpriteSheet('images/ekaterina/lionmovesright.png', 385, 158, 7);
        this.lionmovesleft = loadSpriteSheet('images/ekaterina/lionmovesleft.png', 385, 158, 7);
        this.lionidle = loadSpriteSheet('images/ekaterina/lionidle.png', 225, 202, 22);

        this.lionjumpsup = loadSpriteSheet('images/ekaterina/lionjumpsup.png', 161, 330, 3);
        this.lionjumpsleft = loadSpriteSheet('images/ekaterina/lionjumpsleft.png', 395, 140, 3);
        this.lionjumpsright = loadSpriteSheet('images/ekaterina/lionjumpsright.png', 395, 140, 3);

        this.countSound = loadSound('sounds/ekaterina/count.mp3');
        
        this.remix = loadSound('sounds/ekaterina/remix.mp3');
        this.remix.setVolume(0.3);

        this.mouseSound = loadSound('sounds/ekaterina/mousemoves.mp3');
        this.lionSound = loadSound('sounds/ekaterina/lionmoves.mp3');

        this.WinSound = [];
        this.WinSound[0] = loadSound('sounds/ekaterina/winsound.mp3');
        this.WinSound[0].playMode('sustain');

        this.wolfSound = loadSound('sounds/ekaterina/wolf.mp3');

        this.obstacles = new EkaterinaMap();
        this.obstacles.preload('data/ekaterina/obstacles.json');

        //invisible rectangle which disappears in 10 seconds
        this.startline = new EkaterinaMap();
        this.startline.preload('data/ekaterina/startline.json');

        this.map = new EkaterinaMap();
        this.map.preload('data/ekaterina/ekaterina.json');

        var gateway = loadSpriteSheet('images/ekaterina/gateway.png', 350, 354, 12);
        this.gateway = new NPC(10200, 450, gateway);

        //invisible object behind the gateway
        var endgame = loadSpriteSheet('images/ekaterina/endgame.png', 100, 100, 1);
        this.endgame = new NPC(10200, 450, endgame);

        var count = loadImage('images/ekaterina/count.gif');
        this.count = new NPCimage(-10270, 350, count);

        var wolf1 = loadSpriteSheet('images/ekaterina/wolf.png', 300, 192, 8);
        this.wolf1 = new NPC(8500, 500, wolf1);

        var wolf2 = loadSpriteSheet('images/ekaterina/wolf.png', 300, 192, 8);
        this.wolf2 = new NPC(9000, 500, wolf2);

        var wolf4 = loadSpriteSheet('images/ekaterina/wolf.png', 300, 192, 8);
        this.wolf4 = new NPC(25000, 500, wolf4);

        var wolf5 = loadSpriteSheet('images/ekaterina/wolf.png', 300, 192, 8);
        this.wolf5 = new NPC(40000, 500, wolf5);

        var wolf6 = loadSpriteSheet('images/ekaterina/wolf.png', 300, 192, 8);
        this.wolf6 = new NPC(50000, 500, wolf6);

        var burst = loadSpriteSheet('images/ekaterina/burst.png', 385, 367, 5);
        this.burst = new NPC(-9500, 550, burst);

        //invisible tiny rectangles which let characters be animated while on cactuses (otherwise characters behave as if they jump)
        var block = loadSpriteSheet('images/ekaterina/block.png', 180, 5, 1);
        this.block = new NPC(-8100, 270, block);

        var block2 = loadSpriteSheet('images/ekaterina/block.png', 180, 5, 1);
        this.block2 = new NPC(-4000, 270, block2);

        var block3 = loadSpriteSheet('images/ekaterina/block.png', 180, 5, 1);
        this.block3 = new NPC(5750, 270, block3);

        var block4 = loadSpriteSheet('images/ekaterina/block2.png', 154, 4, 1);
        this.block4 = new NPC(-6000, 355, block4);

        var block5 = loadSpriteSheet('images/ekaterina/block2.png', 154, 4, 1);
        this.block5 = new NPC(1200, 355, block5);

        var block6 = loadSpriteSheet('images/ekaterina/block2.png', 154, 4, 1);
        this.block6 = new NPC(3700, 355, block6);

        var block7 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block7 = new NPC(-7000, 400, block7);

        var block8 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block8 = new NPC(-5200, 400, block8);

        var block9 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block9 = new NPC(-1600, 400, block9);

        var block10 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block10 = new NPC(0, 400, block10);

        var block11 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block11 = new NPC(4400, 400, block11);

        var block12 = loadSpriteSheet('images/ekaterina/block3.png', 151, 4, 1);
        this.block12 = new NPC(7200, 400, block12);

        //non moving map
        this.sky = new EkaterinaMap();
        this.sky.preload('data/ekaterina/sky.json');
    }

    setup() {

        this.counter = 60;
        this.countDown = 10;
        this.timeout = 60;

        const mouseAnimations = {
            mousemovesright: loadAnimation(this.mousemovesright),
            mousemovesleft: loadAnimation(this.mousemovesleft),
            mouseidle: loadAnimation(this.mouseidle),

            mousejumpsup: loadAnimation(this.mousejumpsup),
            mousejumpsleft: loadAnimation(this.mousejumpsleft),
            mousejumpsright: loadAnimation(this.mousejumpsright),
        };

        this.characterMouse = new Character(mouseAnimations);

        this.characterMouse.x = -10450;
        this.characterMouse.x_velocity = 0;
        this.characterMouse.y_velocity = 0;

        const lionAnimations = {
            lionmovesright: loadAnimation(this.lionmovesright),
            lionmovesleft: loadAnimation(this.lionmovesleft),
            lionidle: loadAnimation(this.lionidle),

            lionjumpsleft: loadAnimation(this.lionjumpsleft),
            lionjumpsright: loadAnimation(this.lionjumpsright),
            lionjumpsup: loadAnimation(this.lionjumpsup),
        };

        this.characterLion = new Character(lionAnimations);

        this.characterLion.x = -10700;
        this.characterLion.x_velocity = 0;
        this.characterLion.y_velocity = 0;

        this.obstacles.setup();
        this.startline.setup();

        this.wolf1.setup();
        this.wolf2.setup();
        this.wolf4.setup();
        this.wolf5.setup();
        this.wolf6.setup();

        //this.wolves.obstacles[0].speedX = -10;
        this.map.setup();
        this.gateway.setup();
        this.endgame.setup();
        this.count.setup();
        this.sky.setup();
        this.burst.setup();

        this.block.setup();
        this.block2.setup();
        this.block3.setup();
        this.block4.setup();
        this.block5.setup();
        this.block6.setup();
        this.block7.setup();
        this.block8.setup();
        this.block9.setup();
        this.block10.setup();
        this.block11.setup();
        this.block12.setup();
    }

    start() {

        this.sky.start();
        this.map.start();
        this.countSound.play();
        this.remix.loop();

    }

    draw() {
        
        background('yellow');

        /* user input - move character around */
        var isWalkingRightLion = false;
        var isWalkingLeftLion = false;

        var isWalkingRightMouse = false;
        var isWalkingLeftMouse = false;
        this.wolf1.speedX = -10;
        this.wolf2.speedX = -6;
        this.wolf4.speedX = -9;
        this.wolf5.speedX = -9;
        this.wolf6.speedX = -8;

        var isJumpingMouse = false;
        var isJumpingLion = false;

        var left = false;
        var right = false;
        var up = false;

        if (550 == this.characterMouse.y) {
            isJumpingMouse = true;
        }

        if (530 == this.characterLion.y) {
            isJumpingLion = true;
        }

        //lion controls
        if (keyIsDown(88)) //Key X 
        {
            this.characterLion.speedX = 1;
            isWalkingRightLion = true;
        } else if (keyIsDown(90)) //Key Z 
        {
            this.characterLion.speedX = -1;
            isWalkingLeftLion = true;
        } else {
            this.characterLion.speedX = 0;
        }

        //mouse controls
        if (keyIsDown(RIGHT_ARROW)) {
            this.characterMouse.speedX = 1;
            isWalkingRightMouse = true;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.characterMouse.speedX = -1;
            isWalkingLeftMouse = true;
        } else {
            this.characterMouse.speedX = 0;
        }

        //mouse jumps
        if (keyIsDown(UP_ARROW) && isJumpingMouse) {
            this.characterMouse.y_velocity -= 50;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.characterMouse.x_velocity -= 1;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.characterMouse.x_velocity += 1;
        }

        this.characterMouse.y_velocity += 0.7;
        this.characterMouse.x += this.characterMouse.x_velocity;
        this.characterMouse.y += this.characterMouse.y_velocity;
        this.characterMouse.x_velocity *= 0.9;
        this.characterMouse.y_velocity *= 0.9;

        if (this.characterMouse.y > 550) {
            isJumpingMouse = false;
            this.characterMouse.y = 550;
            this.characterMouse.y_velocity = 0;
        }

        //lion jumps
        if (keyIsDown(83) && isJumpingLion == true) { //Key S
            this.characterLion.y_velocity -= 50;
        }

        if (keyIsDown(90)) {
            this.characterLion.x_velocity -= 1;
        }

        if (keyIsDown(88)) {
            this.characterLion.x_velocity += 1;
        }

        this.characterLion.y_velocity += 0.7;
        this.characterLion.x += this.characterLion.x_velocity;
        this.characterLion.y += this.characterLion.y_velocity;
        this.characterLion.x_velocity *= 0.9;
        this.characterLion.y_velocity *= 0.9;

        if (this.characterLion.y > 530) {

            isJumpingLion = false;
            this.characterLion.y = 530;
            this.characterLion.y_velocity = 0;
        }

        //lion sound
        if (isJumpingLion) {
            this.lionSound.play();
        }

        //lion animations
        if (this.characterLion.y != 530 && isJumpingLion && isWalkingRightLion == false && isWalkingLeftLion == false) {
            this.characterLion.changeAnimation('lionjumpsup');
        } else if (isWalkingRightLion && 530 == this.characterLion.y) {
            this.characterLion.changeAnimation('lionmovesright');

        } else if (isWalkingLeftLion && 530 == this.characterLion.y) {
            this.characterLion.changeAnimation('lionmovesleft');

        } else if (isJumpingLion || this.block.overlap(this.characterLion) == false && this.block2.overlap(this.characterLion) == false && this.block3.overlap(this.characterLion) == false && this.block4.overlap(this.characterLion) == false && this.block5.overlap(this.characterLion) == false && this.block6.overlap(this.characterLion) == false && this.block7.overlap(this.characterLion) == false && this.block8.overlap(this.characterLion) == false && this.block9.overlap(this.characterLion) == false && this.block10.overlap(this.characterLion) == false && this.block11.overlap(this.characterLion) == false && this.block12.overlap(this.characterLion) == false && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionjumpsright');

        } else if (isJumpingLion || this.block.overlap(this.characterLion) == false && this.block2.overlap(this.characterLion) == false && this.block3.overlap(this.characterLion) == false && this.block4.overlap(this.characterLion) == false && this.block5.overlap(this.characterLion) == false && this.block6.overlap(this.characterLion) == false && this.block7.overlap(this.characterLion) == false && this.block8.overlap(this.characterLion) == false && this.block9.overlap(this.characterLion) == false && this.block10.overlap(this.characterLion) == false && this.block11.overlap(this.characterLion) == false && this.block12.overlap(this.characterLion) == false && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionjumpsleft');

        } else if (530 == this.characterLion.y) {
            this.characterLion.changeAnimation('lionidle');
        }

        //mouse sound
        if (isJumpingMouse) {
            this.mouseSound.play();
        }

        //mouse animations
        if (isJumpingMouse && !isWalkingRightMouse && !isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousejumpsup');
        } else if (isWalkingRightMouse && 550 == this.characterMouse.y) {
            this.characterMouse.changeAnimation('mousemovesright');
        } else if (isWalkingLeftMouse && 550 == this.characterMouse.y) {
            this.characterMouse.changeAnimation('mousemovesleft');
        } else if (isJumpingMouse || !this.block.overlap(this.characterMouse) && this.block2.overlap(this.characterMouse) == false && this.block3.overlap(this.characterMouse) == false && this.block4.overlap(this.characterMouse) == false && this.block5.overlap(this.characterMouse) == false && this.block6.overlap(this.characterMouse) == false && this.block7.overlap(this.characterMouse) == false && this.block8.overlap(this.characterMouse) == false && this.block9.overlap(this.characterMouse) == false && this.block10.overlap(this.characterMouse) == false && this.block11.overlap(this.characterMouse) == false && this.block12.overlap(this.characterMouse) == false && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousejumpsright');
        } else if (isJumpingMouse || this.block.overlap(this.characterMouse) == false && this.block2.overlap(this.characterMouse) == false && this.block3.overlap(this.characterMouse) == false && this.block4.overlap(this.characterMouse) == false && this.block5.overlap(this.characterMouse) == false && this.block6.overlap(this.characterMouse) == false && this.block7.overlap(this.characterMouse) == false && this.block8.overlap(this.characterMouse) == false && this.block9.overlap(this.characterMouse) == false && this.block10.overlap(this.characterMouse) == false && this.block11.overlap(this.characterMouse) == false && this.block12.overlap(this.characterMouse) == false && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousejumpsleft');
        } else if (550 == this.characterMouse.y) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        this.wolf1.update();
        this.wolf2.update();
        this.wolf4.update();
        this.wolf5.update();
        this.wolf6.update();

        this.characterLion.update();
        this.characterMouse.update();

        //non moving map
        camera.off();
        this.sky.display();
        camera.on();

        this.obstacles.collide(this.characterLion);
        this.obstacles.collide(this.characterMouse);

        //moving map
        if (this.characterLion.x > this.characterMouse.x) {
            this.map.move(this.characterLion);
        } else {
            this.map.move(this.characterMouse);
        }

        this.map.display();
        
        this.wolf1.display();
        this.wolf2.display();
        this.wolf4.display();
        this.wolf5.display();
        this.wolf6.display();

        //wolves

//        if (-10245 < this.characterMouse.x) {
//            var wolf = this.wolves.overlap(this.characterMouse)
//            if (wolf) {
//                this.wolfSound.play();
//                this.burst.x = wolf.x;
//                this.burst.display();
//                this.characterMouse.x = -10250;
//            }
//        }

        if (this.wolf1.overlap(this.characterMouse) && -10245 < this.characterMouse.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf1.x;
            this.burst.display();
            this.characterMouse.x = -10250;
        }

        if (this.wolf1.overlap(this.characterLion) && -10245 < this.characterLion.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf1.x;
            this.burst.display();
            this.characterLion.x = -10250;
        }

        if (this.wolf2.overlap(this.characterMouse) && -10245 < this.characterMouse.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf2.x;
            this.burst.display();
            this.characterMouse.x = -10250;
        }

        if (this.wolf2.overlap(this.characterLion) && -10245 < this.characterLion.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf2.x;
            this.burst.display();
            this.characterLion.x = -10250;
        }

        if (this.wolf4.overlap(this.characterMouse) && -10245 < this.characterMouse.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf4.x;
            this.burst.display();
            this.characterMouse.x = -10250;
        }

        if (this.wolf4.overlap(this.characterLion) && -10245 < this.characterLion.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf4.x;
            this.burst.display();
            this.characterLion.x = -10250;
        }

        if (this.wolf5.overlap(this.characterMouse) && -10245 < this.characterMouse.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf5.x;
            this.burst.display();
            this.characterMouse.x = -10250;
        }

        if (this.wolf5.overlap(this.characterLion) && -10245 < this.characterLion.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf5.x;
            this.burst.display();
            this.characterLion.x = -10250;
        }

        if (this.wolf6.overlap(this.characterMouse) && -10245 < this.characterMouse.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf6.x;
            this.burst.display();
            this.characterMouse.x = -10250;
        }

        if (this.wolf6.overlap(this.characterLion) && -10245 < this.characterLion.x) {
            this.wolfSound.play();
            this.burst.x = this.wolf6.x;
            this.burst.display();
            this.characterLion.x = -10250;
        }

        this.obstacles.display();
        this.characterMouse.display();
        this.characterLion.display();


        this.endgame.display();
        this.gateway.display();


        /* count down at the beginning of scene */
        if (this.counter > 0 && this.countDown > 0) {
            this.counter--;
        } else {
            this.counter = this.timeout;
            this.countDown--;
        }

        if (this.countDown > 0) {
            camera.off();
            textSize(100);
            text(this.countDown, width / 2, height / 2);
            camera.on();

            this.startline.collide(this.characterMouse);
            this.startline.collide(this.characterLion);
        }

        //mouse - on cactus3
        if (this.block.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block2.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block2.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block2.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block3.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block3.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block3.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        //mouse - on cactus1
        if (this.block4.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block4.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block4.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block5.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block5.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block5.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block6.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block6.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block6.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        //mouse - on cactus2
        if (this.block7.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block7.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block7.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block8.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block8.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block8.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block9.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block9.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block9.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block10.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block10.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block10.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block11.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block11.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block11.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }

        if (this.block12.overlap(this.characterMouse)) {
            this.characterMouse.changeAnimation('mouseidle');
        }

        if (this.block12.overlap(this.characterMouse) && isWalkingRightMouse) {
            this.characterMouse.changeAnimation('mousemovesright');
        }

        if (this.block12.overlap(this.characterMouse) && isWalkingLeftMouse) {
            this.characterMouse.changeAnimation('mousemovesleft');
        }


        //lion - on cactus3
        if (this.block.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block2.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block2.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block2.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block3.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block3.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block3.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        //lion - on cactus1
        if (this.block4.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block4.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block4.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block5.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block5.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block5.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block6.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block6.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block6.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        //lion - on cactus2
        if (this.block7.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block7.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block7.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block8.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block8.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block8.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block9.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block9.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block9.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block10.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block10.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block10.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block11.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block11.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block11.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }

        if (this.block12.overlap(this.characterLion)) {
            this.characterLion.changeAnimation('lionidle');
        }

        if (this.block12.overlap(this.characterLion) && isWalkingRightLion) {
            this.characterLion.changeAnimation('lionmovesright');
        }

        if (this.block12.overlap(this.characterLion) && isWalkingLeftLion) {
            this.characterLion.changeAnimation('lionmovesleft');
        }


        if (this.endgame.overlap(this.characterMouse)) {
            changeScene('mousewins');
            if (this.WinSound.every(sound => sound.isPlaying() == false))
                random(this.WinSound).play();
        }

        if (this.endgame.overlap(this.characterLion)) {
            changeScene('lionwins');
            if (this.WinSound.every(sound => sound.isPlaying() == false))
                random(this.WinSound).play();
        }

    }

    end() {
        this.map.end();
        this.sky.end();
        this.remix.stop();
    }
}