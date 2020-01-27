class nelson extends Scene {

    preload() {

        this.walk = loadSpriteSheet('images/Nelson/walking.png', 192, 199, 3);
        this.stand = loadSpriteSheet('images/Nelson/standing.png', 192, 206, 2);
        this.map = new Map();
        this.map.preload('data/nelson.json');

        this.bg = loadSound('sounds/nelson/retromusic4.m4a');


        this.walkSound = loadSound('sounds/nelson/walking.wav');


        this.walkSound.playMode('sustain');


        //        this.woodsSheet = loadSpriteSheet('images/Nelson/background.png', 224, 224, 2);
        var npcSheet1 = loadSpriteSheet('images/Nelson/monster1.png', 192, 102, 4);
        this.npc1 = new NPC(500, 500, npcSheet1);
        var npcSheet2 = loadSpriteSheet('images/Nelson/monster2.png', 192, 352, 5);
        this.npc2 = new NPC(800, 800, npcSheet2);
        var npcSheet3 = loadSpriteSheet('images/Nelson/monster3.png', 192, 282, 4);
        this.npc3 = new NPC(600, 600, npcSheet3);

    }

    setup() {

        const animations = {
            walking: loadAnimation(this.walk),
            standing: loadAnimation(this.stand)
        };
        this.character = new Character(animations,2000,1000); // (animation,x,y)
        this.character.changeAnimation('standing');

        this.map.setup();
        //this.sceneLink.setup();
        //this.woods = new Scenery(width / 2, height / 2, this.woodsSheet);
        //this.woods.sprite.scale = 3;
        //this.woods.setup();

        this.npc1.setup();
        this.npc1.speedX = 6;
        this.npc2.setup();
        this.npc2.speedX = 10;
        this.npc3.setup();
        this.npc3.speedX = 9;

    }

    start() {
        //		this.bg.play();
        this.bg.loop();
        this.map.start();
        
        this.character.x = 2000;
        this.character.y = 1000;
        
        ;
    }

    end() {
        this.bg.pause();
        this.map.end();
    }

    draw() {
        camera.off();
        background('green');
        //this.woods.display();

        /*instructions*/
        textAlign(CENTER);
        textSize(20);
        text('move the character with arrows', width / 2, 100);


        /* user input - move character around */
        var isWalking = false;
        if (keyIsDown(RIGHT_ARROW)) {
            this.character.speedX = 5;
            isWalking = true;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.character.speedX = -5;
            isWalking = true;
        } else {
            this.character.speedX = 0;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.character.speedY = 5;
            isWalking = true;
        } else if (keyIsDown(UP_ARROW)) {
            this.character.speedY = -5;
            isWalking = true;
        } else {
            this.character.speedY = 0;
        }

        if (isWalking) {
            this.character.changeAnimation('walking');
            if (this.walkSound.isPlaying() == false) {
                this.walkSound.play();
            }
        } else {
            this.character.changeAnimation('standing');
        }


        this.character.update();
        this.character.display();

        /*npc*/
        this.npc1.update();
        if (this.npc1.x > width * 2) {
            this.npc1.x = 0;
        }
        this.npc2.update();
        if (this.npc2.x > width * 2) {
            this.npc2.x = 0;
        }
        this.npc3.update();
        if (this.npc3.x > width * 2) {
            this.npc3.x = 0;
        }


        this.npc1.display();
        if (this.npc1.overlap(this.character)) {
            console.log('you died');
            changeScene ('youlose');
        }
        this.npc2.display();
        if (this.npc2.overlap(this.character)) {
            console.log('you died');
            changeScene ('youlose');

        }
        this.npc3.display();
        if (this.npc3.overlap(this.character)) {
            console.log('you died');
            changeScene ('youlose');

        }


        /* update map */
        this.map.collide(this.character);
        //this.map.move(this.character);
        //this.map.update(this.character);
        this.map.display();
    }
}