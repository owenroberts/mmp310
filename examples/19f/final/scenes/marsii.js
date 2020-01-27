class marsii extends Scene {
/*
    constructor() {
		super();
		sceneManager['goodend'] = new Scene("GoodEnd");
        sceneManager['badend'] = new Scene("EvilEnd");
	}
    //When I come back I'll figure out how to get the sounds to work, make sure everything works right, and make sure the animations work correctly
*/    
    preload() {

        //Main character - Astronaut
        this.walkright = loadSpriteSheet('images/marsii/astwalkr.png', 64, 128, 8);
        this.walkleft = loadSpriteSheet('images/marsii/astwalkl.png', 64, 128, 8);
        this.walkup = loadSpriteSheet('images/marsii/astwalku.png', 64, 128, 8);
        this.walkdown = loadSpriteSheet('images/marsii/astwalkd.png', 64, 128, 8);
        this.idle = loadSpriteSheet('images/marsii/astidle.png', 64, 128, 15);
        //this.startSet = loadImage('images/marsii/testmap.png', 4830 , 3150);

        //Sounds

        /*
        this.walkSounds = [];
		this.walkSounds[0] = loadSound('sounds/marsii/asttalk.wav');

		this.walkSounds[0].playMode('sustain');

        this.talkSounds = [];
		this.talkSounds[0] = loadSound('sounds/marsii/footsteps.wav');

		this.talkSounds[0].playMode('sustain');
        */
        this.bgSounds = [];
        this.bgSounds[0] = loadSound('sounds/marsii/goodjob.wav'); //used when task completed
        this.bgSounds[1] = loadSound('sounds/marsii/select.wav'); //used when selecting dialogue and path

        this.bgSounds[0].playMode('untilDone');
        this.bgSounds[1].playMode('untilDone');



        //key items
        //
        //        var shiprepaired = false;
        //        var key = false;
        //        var this.shipUprighted = false;
        //        var navimap = false;
        //        var mapnoted = false;
        //        var this.shipUnattended = false;

        //quest items


        //this.objective.good = "You need", shiprepair, map, this.shipUprighted;
        //this.objective.bad = "You need", key, this.shipUnattended;


        //NPC

        this.staticAlienNorm = loadSpriteSheet('images/marsii/npcs/staticAlien.png', 64, 128, 8);
        this.staticAlienQC = loadSpriteSheet('images/marsii/npcs/staticAlienqc.png', 64, 128, 8);
        this.staticAlienBad = loadSpriteSheet('images/marsii/npcs/staticAlienbqc.png', 64, 128, 8);
        this.staticAlienSheet = this.staticAlienNorm

        this.staticAlien = new NPC(400, -600, this.staticAlienSheet, "Hi. you need me for energy.");
        this.staticAlien.dialogCount = 0;
        //400, -600

        this.cosmicAlienNorm = loadSpriteSheet('images/marsii/npcs/cosmicAlien.png', 64, 130, 6);
        this.cosmicAlienQC = loadSpriteSheet('images/marsii/npcs/cosmicAlienqc.png', 64, 130, 6);
        this.cosmicAlienSheet = this.cosmicAlienNorm;

        this.cosmicAlien = new NPC(-2700, -570, this.cosmicAlienSheet, "Hi. you need me for my power.");
        this.cosmicAlien.dialogCount = 0;
        //100, 1000

        //Liquid Alien States
        this.liquidAlienNormal = loadSpriteSheet('images/marsii/npcs/liquidAlien.png', 64, 128, 4);
        this.liquidAlienFrozen = loadSpriteSheet('images/marsii/npcs/liquidAlienF.png', 64, 128, 1);
        this.liquidAlienFrozenCut = loadSpriteSheet('images/marsii/npcs/liquidAlienFC.png', 64, 128, 1);

        this.liquidAlienSheet = this.liquidAlienNormal;

        this.liquidAlien = new NPC(150, 1200, this.liquidAlienSheet, "(Needed for map and key(if doing bad route))");

        this.liquidAlien.dialogCount = 0;
        //200, 1200

        var plantAlienSheet = loadSpriteSheet('images/marsii/npcs/plantAlien.png', 64, 128, 10);
        this.plantAlien = new NPC(-1700, 500, plantAlienSheet, "(Needed to fix ship,)");
        this.plantAlien.dialogCount = 0;
        //-1700, 500

        var creepAlienSheet = loadSpriteSheet('images/marsii/npcs/creepAlienB.png', 252, 252, 5);
        this.creepAlien = new NPC(-1800, 1600, creepAlienSheet, "(Need to upright ship");
        this.creepAlien.dialogCount = 0;
        //-1800, 1600

        //Ships
        var trailSheet = loadSpriteSheet('images/marsii/scenery/crashtrail.png', 546, 90, 1);
        this.shipTrail = new Scenery(1177, 552, trailSheet);

        this.astShipBroken = loadSpriteSheet('images/marsii/npcs/brokenship.png', 353, 188, 1);
        this.astShipFixed = loadSpriteSheet('images/marsii/npcs/fixedship.png', 152, 344, 1);

        this.astShipSheet = this.astShipBroken
        this.astShip = new NPC(730, 500, this.astShipSheet, "Your ship");
        this.astShip.dialogCount = 0;

        var alienShipSheet = loadSpriteSheet('images/marsii/npcs/ufo.png', 359, 200, 1);
        this.alienShip = new NPC(-2200, 500, alienShipSheet, "Alien ship");
        this.alienShip.dialogCount = 0;

        //Scenery needed that dosen't work in json
        /*
        var treeSheet = loadSpriteSheet('images/marsii/scenery/treeoverlay.png', 1485, 1100, 1);
        this.treeOverlay = new Scenery(-1892, 203, treeSheet);
        */
        var treeSheet = loadSpriteSheet('images/marsii/scenery/treeoverlayed.png', 1370, 1342, 1);
        this.treeOverlay = new Scenery(-1950, 80, treeSheet);

        var caveSheet = loadSpriteSheet('images/marsii/scenery/caveoverlay.png', 1808, 830, 1);
        this.caveOverlay = new Scenery(-1365, 1577, caveSheet);

        var pondSheet = loadSpriteSheet('images/marsii/scenery/pond.png', 848, 810, 5);
        this.pond = new Scenery(50, 1595, pondSheet);

        var lightningSheet = loadSpriteSheet('images/marsii/scenery/lightning.png', 1480, 560, 8);
        this.lightning = new Scenery(220, -700, lightningSheet);

        var watertreeSheet = loadSpriteSheet('images/marsii/scenery/watertree.png', 470, 640, 6);
        this.watertree = new Scenery(597, 1225, watertreeSheet);



        this.map = new Map();
        this.map.preload('data/marsii.json');
    }

    setup() {
        this.hitEnter = false;
        const animations = {

            //Main character directional and idle animation
            walkright: loadAnimation(this.walkright),
            walkleft: loadAnimation(this.walkleft),
            walkup: loadAnimation(this.walkup),
            walkdown: loadAnimation(this.walkdown),
            idle: loadAnimation(this.idle)
            
            
            //CosmicNorm: loadAnimation(this.cosmicAlienNorm),
            //CosmicQC: loadAnimation(this.cosmicAlienQC),

        };
        /*
        		var npcAnimations = {
			idle: this.npcSpriteSheet,
             attack: this.npcattackSheet,
             samattack:this.samattackSheet,
             ellaattack:this.ellaattackSheet,
             joeattack:this.joeattackSheet
            
		};*/
		// this.npc = new Character(npcAnimations, width - 200, height/2);

        this.character = new Character(animations);
        this.character.changeAnimation('idle');

        this.map.setup();
        //Characters
        this.liquidAlien.setup();
        this.cosmicAlien.setup();
        this.staticAlien.setup();
        this.plantAlien.setup();
        this.creepAlien.setup();
        //Interactable Objects
        this.astShip.setup();
        this.alienShip.setup();
        this.shipTrail.setup();
        //Overlay
        this.treeOverlay.setup();
        this.caveOverlay.setup();
        this.lightning.setup();
        //Scenery
        this.pond.setup();
        this.watertree.setup();

        //this.ship.setup();

        // Items

        // Needed for Liquid Alien
        this.bhNeed = false;
        this.icepick = false;

        // Needed from Liquid Alien
        this.frozenmap = false;
        this.frozenkey = false;
        this.unmarkedmap = false;


        // Needed for Cosmic Alien
        this.reallog = false;
        this.fakelog = false;
        this.logneed = false;
        this.blackhole = false;

        this.secondchatC = false;

        // Needed from Cosmic Alien
        this.markedmap = false;
        this.cJournal = false;
        this.anomalyPiece = false;
        this.astJournalNeed = false;
        this.astJournal = false;

        // Needed from Creepy Alien
        this.shipUprighted = false;
        this.unfrozenkey = false;

        //Needed for Creepy Alien
        this.deviceNeed = false;
        this.cJournalNeed = false;
        //(device fufilled)
        this.dfufilled = false;

        // Needed for Plant Alien
        this.anomalyNeed = false;
        this.backupneed = false;
        this.backuplog = false;
        this.bfufilled = false;
        this.afufilled = false;

        // Needed from Plant Alien
        this.shipUnattended = false;
        this.shipRepaired = false;
        this.gooddevice = false;
        this.baddevice = false;

        // Needed for Static Alien
        this.emptyBattery = false;
        this.ebatteryNeed = true;

        // Needed from Static Alien
        this.partBattery = false;
        this.fullBattery = false;
        
        
        this.staticAlienQC = loadSpriteSheet('images/marsii/npcs/staticAlienqc.png', 64, 128, 8);
        this.staticAlienBQC = loadSpriteSheet('images/marsii/npcs/staticAlienbqc.png', 64, 128, 4);
        this.staticAlienSheet = this.staticAlienNorm;
        
        this.startcounter = false;
        this.fixcounter = 0;
        this.savedTime = millis();
        this.totalTime = 1000;      
        
    }

    start() {
        //		this.bg.play();
        //		this.bg.loop();
        this.map.start();
    }

    end() {
        //this.bg.pause();
    }

    draw() {

        //Debugging stuff
        //map maybe big, helps to have camera
        if (mouseIsPressed)
            camera.zoom = 0.3;
        else
            camera.zoom = 1;
        //console.log(this.character.x, this.character.y)
        /*
    //bg = this.startSet;
         //.5 zoom is zooming out (50% of the normal size)
   */
        //LOOK INTO EVENT LISTENERS
        //FINISH UP STORIES (EVEN IF YOU CAN'T MAKE THEM WORK YET)

        //IF WORSE COMES TO WORSE, EXTRACT STATIC ALIEN FROM THE GAME TO SAVE TIME

        //this.character.update();
        //this.character.display();

        /*
        for(humandialog;){
            fill('white');
            stroke('Midnight');
            strokeWeight(1);
            text(humandialog, this.character.x, this.character.y - 20);
        }
        */
        //console.log(this.character.x, this.character.y);

        //var reallog = false;

        // user input - move character around
        var isWalkingR = false;
        var isWalkingL = false;
        var isWalkingU = false;
        var isWalkingD = false;

        //Moves character around
        if (keyIsDown(RIGHT_ARROW)) {
            this.character.speedX = 8;
            isWalkingR = true;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.character.speedX = -8;
            isWalkingL = true;
        } else {
            this.character.speedX = 0;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.character.speedY = 8;
            isWalkingD = true;
        } else if (keyIsDown(UP_ARROW)) {
            this.character.speedY = -8;
            isWalkingU = true;
        } else {
            this.character.speedY = 0;
        }

        if (isWalkingR) {
            this.character.changeAnimation('walkright');
        } else if (isWalkingL) {
            this.character.changeAnimation('walkleft');
        } else if (isWalkingD) {
            this.character.changeAnimation('walkdown');
        } else if (isWalkingU) {
            this.character.changeAnimation('walkup');
        } else {
            this.character.changeAnimation('idle');
        }


        /* update map */
        this.map.collide(this.character);
        this.map.move(this.character);
        //		this.map.update(this.character);
        this.map.display();

        /* update character */
        //console.log(this.character.x, this.character.y)
        this.character.update();
        this.character.display();

        var humanDialog;

        /* check npcs */
        //Static Alien display, dialog and code
        this.staticAlien.display();
        if (this.staticAlien.overlap(this.character)) {
            /* style dialog */
            console.log("Static Alien", this.staticAlien.dialogCount);
            textSize(15);
            if (this.staticAlien.dialogCount % 1 == .5) {
                fill('CadetBlue');
            } else {
                fill('DarkGoldenRod');
            }
            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogS;
            if (this.staticAlien.dialogCount == 0) {
                dialog = 'Hi...';
            } else if (this.staticAlien.dialogCount == 0.5) {
                humanDialogS = "Hello...? Are you ok?";
            } else if (this.staticAlien.dialogCount == 1) {
                dialog = "I guess. I don't really know.";
            } else if (this.staticAlien.dialogCount == 1.5) {
                humanDialogS = "Okay... well do you have anything I can use to get off this planet?";
            } else if (this.staticAlien.dialogCount == 2) {
                dialog = "I don't think so.";
            } else if (this.staticAlien.dialogCount == 2.5) {
                humanDialogS = "(I think this thing's made of energy, I can feel the static through my suit.) Is there something you need?";
            } else if (this.staticAlien.dialogCount == 3) {
                dialog = "I want to learn about other alien species.";
            } else if (this.staticAlien.dialogCount == 3.5) {
                humanDialogS = "If I help you do that, will you help me and give me some energy?";
            } else if (this.staticAlien.dialogCount == 4) {
                dialog = "Okay, I can't give you too much though, I don't want to die ;(.";
            } else if (this.staticAlien.dialogCount == 4.5) {
                humanDialogS = "Alright, I'll be back";
                this.cJournalNeed = true;
            } else if (this.staticAlien.dialogCount == 5) {
                this.staticAlien.dialogCount = 5.5;
            }


            if (this.staticAlien.dialogCount == 6) {
                dialog = 'Oh, you got something';
            } else if (this.staticAlien.dialogCount == 6.5) {
                humanDialogS = "Yup, it's a chronicle of numerous different species, exactly what you wanted.";
            } else if (this.staticAlien.dialogCount == 7) {
                this.cJournal = false;
                dialog = 'Thank you. What do you want me to do?';
            } else if (this.staticAlien.dialogCount == 7.5) {
                humanDialog = 'Have refill battery [1]partially (safe for the alien, but will take longer and be harder to get home) or [2]completely (unsafe for the alien, but gives you all the energy you need)?'
                if (key == 1) {
                    this.cosmicAlien.dialogCount = 9.5;
                } else if (key == 2) {
                    this.cosmicAlien.dialogCount = 11.5;
                }
            }

            if (this.staticAlien.dialogCount == 9.5) {
                humanDialogS = "You will be safe, just touch here."
            } else if (this.staticAlien.dialogCount == 10) {
                dialog = "*You refill the battery just enough to get home*"
                this.partBattery = true;
                this.emptyBattery = true;
                this.staticAlienSheet = this.staticAlienQC;
            } else if (this.staticAlien.dialogCount == 10.5) {
                this.staticAlien.dialogCount = 25;
            }

            if (this.staticAlien.dialogCount == 11.5) {
                humanDialogS = "You'll probably be okay, just touch here."
            } else if (this.staticAlien.dialogCount == 12) {
                dialog = "*You refill the battery completely and the alien disappears*"
                this.fullBattery = true;
                this.emptyBattery = true;
                this.staticAlienSheet = this.staticAlienBQC;
            } else if (this.staticAlien.dialogCount == 12.5) {
                humanDialogS = "It dropped the chronicle of other aliens, It'll be great to take with me to earth. *You pick it up*"
                this.cJournal = true;
                this.staticAlien.dialogCount = 15;
            }


            if (this.staticAlien.dialogCount == 5.5) {
                dialog = '(It has nothing else to say to you right now)';
                if (this.cJournal == true && this.ebatteryNeed == false) {
                    this.staticAlien.dialogCount = 6;
                } else if (this.ebatteryNeed == true) {
                    humanDialogS = "I should go get my battery before I talk to it again"
                }
                this.staticAlien.dialogCount = 5.5;
            }

            if (this.staticAlien.dialogCount == 15) {
                dialog = "There's nothing but static here.";
            } else if (this.staticAlien.dialogCount == 15.5) {
                this.staticAlien.dialogCount = 15;
            }

            if (this.staticAlien.dialogCount == 25) {
                dialog = " (It seems content and has nothing else to say)";
            } else if (this.staticAlien.dialogCount == 25.5) {
                this.staticAlien.dialogCount = 25;
            }

            text(dialog, this.staticAlien.x, this.staticAlien.y + 50, 250, 200);
            text(humanDialogS, this.character.x - 30, this.character.y - 70, 300, 200);
            fill(255);
            text("hit enter", this.staticAlien.x, this.staticAlien.y + 50);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.staticAlien.dialogCount = this.staticAlien.dialogCount + .5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }
        //this.staticAlien.update();
        this.liquidAlien.display();
        if (this.liquidAlien.overlap(this.character)) {
            /* style dialog */
            console.log("Liquid Alien", this.liquidAlien.dialogCount);
            textSize(15);
            if (this.liquidAlien.dialogCount % 1 == .5) {
                fill('white');
                text(humanDialogL, this.character.x, this.character.y - 20, 200, 200);
            } else {
                fill('Cyan');
            }

            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogL;
            if (this.liquidAlien.dialogCount == 0) {
                dialog = 'hello';
            } else if (this.liquidAlien.dialogCount == 0.5) {
                humanDialogL = "Hello, do you have something I can use to get out of here? I need help.";
            } else if (this.liquidAlien.dialogCount == 1) {
                dialog = "I have a map. I also have a key, but I don't know what it unlocks. Anyway, what can you give me in return?";
            } else if (this.liquidAlien.dialogCount == 1.5) {
                humanDialogL = "(That key probably unlocks something important.) Well I do need a map, what do you want?";
            } else if (this.liquidAlien.dialogCount == 2) {
                dialog = 'Well, maps are pretty valuable around here, so can you help me achieve a dream?';
            } else if (this.liquidAlien.dialogCount == 2.5) {
                humanDialogL = "I guess I can try. What is it?";
            } else if (this.liquidAlien.dialogCount == 3) {
                dialog = "I want to see what freezing feels like, but it's hard to find anything cold enough.";
            } else if (this.liquidAlien.dialogCount == 3.5) {
                humanDialogL = "What would be cold enough?";
            } else if (this.liquidAlien.dialogCount == 4) {
                dialog = "Maybe like a black hole? But it would have to be small and contained. I don't want to completely freeze.";
                this.bhNeed = true;
                console.log("Black Hole Need", this.bhNeed);
                //this.bgSounds[1].play();
            } else if (this.liquidAlien.dialogCount == 4.5) {
                humanDialogL = "That sounds hard to find, is there anything else you would want?";
            } else if (this.liquidAlien.dialogCount == 5) {
                dialog = "No.";
            } else if (this.liquidAlien.dialogCount == 5.5) {
                humanDialogL = "Great. I'll try to find something.";
            }

            if (this.liquidAlien.dialogCount == 6) {
                if (this.blackhole == false) {
                    dialog = "(She has nothing else to say to you right now.)";
                } else if (this.blackhole == true) {
                    this.liquidAlien.dialogCount = 7;
                }
            } else if (this.liquidAlien.dialogCount == 6.5) {
                this.liquidAlien.dialogCount = 6;
            }




            if (this.liquidAlien.dialogCount == 7) {
                dialog = "Did you manage to find something?";
            } //user prompt
            else if (this.liquidAlien.dialogCount == 7.5) {
                humanDialogL = "choice [1]: heres the blackhole [2]: *throw blackhole into alien and freeze her for the key* [3]: not yet"
                if (key == "1") {
                    this.liquidAlien.dialogCount = 8;
                } else if (key == "2") {
                    this.liquidAlien.dialogCount = 9;
                } else if (key == "3") {
                    this.liquidAlien.dialogCount = 6;
                }
            }

            if (this.liquidAlien.dialogCount == 8) {
                dialog = "Thank you very much, here's a map.";
                this.unmarkedmap = true;
            } else if (this.liquidAlien.dialogCount == 8.5) {
                this.liquidAlien.dialogCount = 20;
            }
            if (this.liquidAlien.dialogCount == 9) {
                dialog = "!!!";
                this.liquidAlienSheet = this.liquidAlienFrozen
                //liquidAlienSheet = loadSpriteSheet('/images/marsii/npcs/liquidAlienF.png', 64, 128, 1);
                //freezes alien
                //liquid
                if (this.icepick == true) {
                    this.liquidAlien.dialogCount = 9.5;
                } else {
                    this.liquidAlien.dialogCount = 10.5;
                }
            }
            if (this.liquidAlien.dialogCount == 9.5) {
                humanDialogL = "You break off pieces with key and the map";
                this.liquidAlienSheet = this.liquidAlienFrozenCut
                this.frozenmap = true;
                this.frozenkey = true;
            } else if (this.liquidAlien.dialogCount == 10) {
                this.liquidAlien.dialogCount = 25;
            }

            if (this.liquidAlien.dialogCount == 10.5) {
                humanDialogL = "I need something to break off the pieces I want"
            } else if (this.liquidAlien.dialogCount == 11) {
                this.liquidAlien.dialogCount = 15;
            }

            if (this.liquidAlien.dialogCount == 15) {
                if (this.icepick = false) {
                    humanDialogL = "You break off pieces with a key and the map";
                    this.frozenmap = true;
                    this.frozenkey = true;
                } else {
                    dialog = "(You need something sharp to break off pieces)";
                    this.liquidAlien.dialogCount = 15;
                }
            }

            if (this.liquidAlien.dialogCount == 20) {
                dialog = "(She's happy and has nothing else to say to you)";
            } else if (this.liquidAlien.dialogCount == 20.5) {
                this.liquidAlien.dialogCount = 20;
            }

            if (this.liquidAlien.dialogCount == 25) {
                dialog = "(You don't need anything else from her.)";
            } else if (this.liquidAlien.dialogCount == 25.5) {
                this.liquidAlien.dialogCount = 25;
            }


            text(dialog, this.liquidAlien.x - 30, this.liquidAlien.y - 145, 200, 200);
            text(humanDialogL, this.character.x, this.character.y - 80, 150, 200);
            fill(255);
            text("hit enter", this.liquidAlien.x - 30, this.liquidAlien.y + 70);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.liquidAlien.dialogCount = this.liquidAlien.dialogCount + 0.5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }
        //this.liquidAlien.update();
        this.creepAlien.display();
        if (this.creepAlien.overlap(this.character)) {
            /* style dialog */
            console.log("Creep Alien", this.creepAlien.dialogCount);
            textSize(15);
            if (this.creepAlien.dialogCount % 1 == .5) {
                fill('white');
            } else {
                fill('LightCoral');
            }
            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogCr;

            if (this.creepAlien.dialogCount == 0) {
                dialog = "Greetings, I'm suprised you approached me";
            } else if (this.creepAlien.dialogCount == 0.5) {
                humanDialogCr = "Oh? Why is that?";
            } else if (this.creepAlien.dialogCount == 1) {
                dialog = "Most beings are too intimidated by my apperance. It's pretty saddening. Anyway why did you approach me?";
            } else if (this.creepAlien.dialogCount == 1.5) {
                humanDialogCr = "I need to get off this planet. Do you have anything I could use?";
            } else if (this.creepAlien.dialogCount == 2) {
                dialog = "Probably not. Unless you need something heated up";
            } else if (this.creepAlien.dialogCount == 2.5) {
                humanDialogCr = "You look strong, do you think you can you lift a ship?";
            } else if (this.creepAlien.dialogCount == 3) {
                dialog = "Probably, but it would talk a lot of effort, I wouldn't do it unless it was worth it";
            } else if (this.creepAlien.dialogCount == 3.5) {
                humanDialogCr = "If I get you something that makes it worth it will you do it?";
            } else if (this.creepAlien.dialogCount == 4) {
                dialog = "Sure";
            } else if (this.creepAlien.dialogCount == 4.5) {
                humanDialogCr = "( I'll have to find something to make him less intimidating)";
                this.deviceNeed = true;
            } else if (this.creepAlien.dialogCount == 5) {
                this.creepAlien.dialogCount = 15;
            }


            if (this.creepAlien.dialogCount == 7.5) {
                humanDialogCr = "Here's a device that should make you less intimidating";
            } else if (this.creepAlien.dialogCount == 8) {
                dialog = "Ah, thank you! Let me know if there's something you need me to do.";
                this.dfufilled = true;
            } else if (this.creepAlien.dialogCount == 8.5) {
                this.baddevice = false;
                this.creepAlien.dialogCount = 15;
            }


            if (this.creepAlien.dialogCount == 12.5) {
                humanDialogCr = "Here's a device that should make you less intimidating";
            } else if (this.creepAlien.dialogCount == 13) {
                dialog = "Ah, thank you! Let me know if there's something you need me to do.";
                this.dfufilled = true;
                this.gooddevice = false;
            } else if (this.creepAlien.dialogCount == 13.5) {
                this.gooddevice = false;
                this.creepAlien.dialogCount = 15;
            }

            if (this.creepAlien.dialogCount == 10) {
                if (this.frozenkey == true && this.frozenmap == true) {
                    this.creepAlien.dialogCount == 10.5
                } else {
                    this.creepAlien.dialogCount = 15;
                }
            }

            if (this.creepAlien.dialogCount == 10.5) {
                humanDialogCr = "Can you melt the ice around this map and key for me?";
            } else if (this.creepAlien.dialogCount == 11) {
                dialog = "Of course";
                this.unfrozenkey = true;
                this.unmarkedmap = true;
            } else if (this.creepAlien.dialogCount == 11.5) {
                humanDialogCr = "Thanks"
                this.frozenkey = false;
                this.frozenmap = false;
                this.dfufilled = false;
            } else if (this.creepAlien.dialogCount == 12) {
                this.creepAlien.dialogCount = 15;
            }



            if (this.creepAlien.dialogCount == 15) {
                if (this.gooddevice == true) {
                    this.creepAlien.dialogCount = 12.5;
                } else if (this.baddevice == true) {
                    this.creepAlien.dialogCount = 7.5
                } else if (this.dfufilled == true) {
                    this.creepAlien.dialogCount = 10;
                } else {
                    dialog = "(He has nothing else to say to you right now)"
                }
            } else if (this.creepAlien.dialogCount == 15.5) {
                this.creepAlien.dialogCount = 15;
            }

            text(dialog, this.creepAlien.x - 50, this.creepAlien.y - 120, 300, 200);
            text(humanDialogCr, this.character.x - 20, this.character.y - 80, 200, 200);
            fill(255);
            text("hit enter", this.creepAlien.x, this.creepAlien.y + 150);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.creepAlien.dialogCount = this.creepAlien.dialogCount + 0.5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }
        //this.creepAlien.update();

        this.plantAlien.display();
        if (this.plantAlien.overlap(this.character)) {
            /* style dialog */
            console.log("Plant Alien", this.plantAlien.dialogCount)
            textSize(15);
            if (this.plantAlien.dialogCount % 1 == .5) {
                fill('white');
            } else {
                fill('MediumSpringGreen');
            }
            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogP;
            this.savedTime = millis();

            if (this.plantAlien.dialogCount == 0) {
                dialog = "Hey, what's up?";
            } else if (this.plantAlien.dialogCount == 0.5) {
                humanDialogP = "Hey, do you have something I can use to get off this planet?";
            } else if (this.plantAlien.dialogCount == 1) {
                dialog = "Depends. What do you need?";
            } else if (this.plantAlien.dialogCount == 1.5) {
                humanDialogP = "Energy, a map, ship repairs and my ship uprighted.";
            } else if (this.plantAlien.dialogCount == 2) {
                dialog = "Well, I've built a ship, so I can probably repair yours. What species made it?";
            } else if (this.plantAlien.dialogCount == 2.5) {
                humanDialogP = "I don't really know... I'm not even sure how I got here. I was in my ship one minute and I just woke up in there and crashed shortly after";
            } else if (this.plantAlien.dialogCount == 3) {
                dialog = "Interesting. It's probably a species from around here. Some of them like to abduct others. I can probably repair it.";
            } else if (this.plantAlien.dialogCount == 3.5) {
                humanDialogP = "So, what do you want in exchange?.";
            } else if (this.plantAlien.dialogCount == 4) {
                dialog = 'Non-essentials from "your" ship, and some technology from your species?';
            } else if (this.plantAlien.dialogCount == 4.5) {
                humanDialogP = "I don't really have much of my own tech on me.";
            } else if (this.plantAlien.dialogCount == 5) {
                dialog = "Fine. Well give me whatever you can spare and if you get me a piece of that anomaly up there I'll fix your ship.";
                this.anomalyNeed = true;
                this.backupneed = true;
            } else if (this.plantAlien.dialogCount == 5.5) {
                humanDialogP = " I can probably manage that.";
            } else if (this.plantAlien.dialogCount == 6) {
                dialog = "Great.";
            } else if (this.plantAlien.dialogCount == 6.5) {
                this.plantAlien.dialogCount = 7;
            }


            if (this.backuplog == true) {
                if (this.plantAlien.dialogCount == 10) {
                    dialog = "I see you got your tech. It's different from what I've seen. I'll enjoy studying it."
                    this.bfufilled = true;
                } else if (this.plantAlien.dialogCount == 10.5) {
                    this.backuplog = false;
                    this.plantAlien.dialogCount = 7;
                }
            }
            if (this.anomalyPiece == true) {
                if (this.plantAlien.dialogCount == 11) {
                    dialog = "You got the anomaly piece. It'll be great to incorporate into future tech. Thanks."
                    this.afufilled = true;
                } else if (this.plantAlien.dialogCount == 11.5) {
                    this.anomalyPiece = false;
                    this.plantAlien.dialogCount = 7;
                }
            }

            if (this.plantAlien.dialogCount == 7) {
                dialog = "(They have nothing else to say to you right now.)"
                if (this.backuplog == true) {
                    this.plantAlien.dialogCount == 10
                }
            } else if (this.plantAlien.dialogCount == 7.5) {
                this.plantAlien.dialogCount = 7;
            }

            if (this.afufilled == true && this.bfufilled == true) {
                this.plantAlien.dialogCount = 15;
            }

            if (this.plantAlien.dialogCount == 15) {
                dialog = "Alright, I'll start fixing your ship"
                // Position needs to change to near ship.
            } else if (this.plantAlien.dialogCount == 15.5) {
                this.startcounter = true;
                this.plantAlien.dialogCount = 17;
            }


            if (this.plantAlien.dialogCount == 21.5) {
                humanDialogP = "Do you have anything that could make someone come off as less intimidating?"
            } else if (this.plantAlien.dialogCount == 22) {
                dialog = "Yeah, I'm working on a device to do that. It works, but it's not quite finished. I can give you a complete one later."
            } else if (this.plantAlien.dialogCount == 22.5) {
                humanDialogP = "Can I see a prototype?"
            } else if (this.plantAlien.dialogCount == 23) {
                dialog = "Sure, here you go."
                this.baddevice = true;
                this.deviceNeed = false;
            }



            if (this.plantAlien.dialogCount == 17) {
                if (this.deviceNeed == true) {
                    this.plantAlien.dialogCount = 21.5;
                }
                dialog = "*They're currently fixing your ship and you have nothing to say to them*"
            } else if (this.plantAlien.dialogCount == 17.5) {
                this.plantAlien.dialogCount = 17;
            }
            
            
            
            
            
            /*
            if (this.startcounter = true){
            var passedTime = millis() - this.savedTime;
            if (passedTime > this.totalTime) {
            counter++;
            this.savedTime = millis(); // Save the current time to restart the timer!
            }
            }
            */


            text(dialog, this.plantAlien.x - 30, this.plantAlien.y - 100, 250, 200);
            text(humanDialogP, this.character.x, this.character.y, 250, 200);
            fill(255);
            text("hit enter", this.plantAlien.x - 20, this.plantAlien.y + 80);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.plantAlien.dialogCount = this.plantAlien.dialogCount + 0.5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }
        //this.plantAlien.update();
        this.cosmicAlien.display();
        if (this.cosmicAlien.overlap(this.character)) {
            /* style dialog */

            textSize(15);
            if (this.cosmicAlien.dialogCount % 1 == .5) {
                fill('LightCyan');
            } else {
                fill('Pink');
            }
            console.log("Cosmic Alien", this.cosmicAlien.dialogCount);
            stroke('Black');
            strokeWeight(1);
            var dialog;
            var humanDialogC;
            if (this.cosmicAlien.dialogCount == 0) {
                dialog = "Hello, human. You are a human, correct?";
            } else if (this.cosmicAlien.dialogCount == 0.5) {
                humanDialogC = "Yes? How did you know?";
            } else if (this.cosmicAlien.dialogCount == 1) {
                dialog = "I don't know much about your race. I would like to know more but it's hard to get information on isolated races.";
            } else if (this.cosmicAlien.dialogCount == 1.5) {
                humanDialogC = "Can you give me something useful in exchange for some info?";
            } else if (this.cosmicAlien.dialogCount == 2) {
                dialog = "I doubt I'd have anything you would want, but what do you need?";
            } else if (this.cosmicAlien.dialogCount == 2.5) {
                humanDialogC = "Well...";
                //console.log("Blackhole Need", this.bhNeed);
            }

            if (this.cosmicAlien.dialogCount == 3 && this.bhNeed == false) {
                this.cosmicAlien.dialogCount = 3.5;
            } else if (this.cosmicAlien.dialogCount == 3 && this.bhNeed == true) {
                this.cosmicAlien.dialogCount = 5.5;
            }


            if (this.cosmicAlien.dialogCount == 3.5) {
                humanDialogC = "I need a map, energy, ship repairs and my ship uprighted. Do you have any of those?";
            } else if (this.cosmicAlien.dialogCount == 4) {
                dialog = "No, but if you do get a map, I'll mark it for you. It's hard to navigate around here";
            } else if (this.cosmicAlien.dialogCount == 4.5) {
                humanDialogC = "Thanks, I don't really know how I got here. I'll come back when I have one.";
            } else if (this.cosmicAlien.dialogCount == 5) {
                this.secondchatC = true;
                this.cosmicAlien.dialogCount = 10;
            }



            if (this.cosmicAlien.dialogCount == 5.5) {
                humanDialogC = "I need energy, ship repairs and my ship uprighted. I also need a blackhole so I can trade it for a map";
            } else if (this.cosmicAlien.dialogCount == 6) {
                dialog = "Oh! I can make those, I'll give you one for human info."
                this.logneed = true;
            } else if (this.cosmicAlien.dialogCount == 6.5) {
                humanDialogC = "Ok. I should have something that should work on my ship. I'll be back."
            } else if (this.cosmicAlien.dialogCount == 7) {
                this.cosmicAlien.dialogCount = 19
            }


            if (this.cosmicAlien.dialogCount == 10) {
                dialog = "(She currently has nothing else to say to you)"
                if (this.bhNeed == true && this.secondchatC == true) {
                    this.cosmicAlien.dialogCount = 15.5;
                } else if (this.bhNeed == true && this.secondchatC == false) {
                    this.cosmicAlien.dialogCount = 0;
                }
            } else if (this.cosmicAlien.dialogCount == 10.5) {
                this.cosmicAlien.dialogCount = 10;
            }

            if (this.cosmicAlien.dialogCount == 15.5) {
                humanDialogC = "Hey, do you know where I can get a black hole? I need one to trade for a map."
            } else if (this.cosmicAlien.dialogCount == 16) {
                dialog = "Oh! I can make those, I'll give you one for human info."
                this.logneed = true;
            } else if (this.cosmicAlien.dialogCount == 16.5) {
                humanDialogC = "Ok. I should have something that should work on my ship. I'll be back."
            } else if (this.cosmicAlien.dialogCount == 17) {
                this.cosmicAlien.dialogCount = 19;
                if (this.bhNeed == true && this.secondchatC == false) {
                    this.cosmicAlien.dialogCount = 13;
                }
            }

            if (this.cosmicAlien.dialogCount == 21) {
                dialog = "Did you get the info?";
            } else if (this.cosmicAlien.dialogCount == 21.5) {
                if (this.fakelog == true || this.reallog == true) {
                    if (this.fakelog == true) {
                        humanDialogC = "*You give her the fake log*"
                        this.fakelog = false;
                        this.cosmicAlien.dialogCount = 27.5

                    } else if (this.reallog == true) {
                        humanDialogC = "*You give her the real log*"
                        this.reallog = false;
                        this.cosmicAlien.dialogCount = 27.5
                    }
                } else {
                    this.cosmicAlien.dialogCount = 22.5
                }
            } else if (this.cosmicAlien.dialogCount == 22) {
                this.cosmicAlien.dialogCount = 22.5;

            } else if (this.cosmicAlien.dialogCount == 22.5) {
                humanDialogC = "No, I'll be back";
            } else if (this.cosmicAlien.dialogCount == 23) {
                this.cosmicAlien.dialogCount = 19;
            }
            //  dialog = "(She has nothing more to say to you.)"
            if (this.cosmicAlien.dialogCount == 27.5) {
                humanDialog = "Yup, here you go"
            } else if (this.cosmicAlien.dialogCount == 28) {
                dialog = "Thank you very much human. I look forward to reading this. Here's a blackhole, be very careful with that.";
                this.blackhole = true;
                this.cosmicAlienSheet = this.cosmicAlienQC;
            }else if (this.cosmicAlien.dialogCount == 28.5) {
                this.cosmicAlien.dialogCount = 25;
            }

            if (this.cosmicAlien.dialogCount == 19) {
                dialog = "(She has nothing else to say to you right now)"
            } else if (this.cosmicAlien.dialogCount == 19.5) {
                this.cosmicAlien.dialogCount = 21;
            }

            if (this.cosmicAlien.dialogCount == 13) {
                dialog = "She has nothing more to say to you right now"
                this.cosmicAlien.dialogCount = 10;
            }

            if (this.cosmicAlien.dialogCount == 25) {
                if (this.unmarkedmap == true) {
                    dialog = "I see you have the map, I'll mark it";
                    this.markedmap = true;
                    this.unmarkedmap = false;
                    this.cosmicAlien.dialogCount = 25;
                } else if (this.cJournalNeed == true) {
                    this.cosmicAlien.dialogCount = 35.5;
                } else if (this.anomalyNeed == true) {
                    this.cosmicAlien.dialogCount = 45.5;
                } else if (this.astJournal == true) {
                    this.cosmicAlien.dialogCount = 40.5;
                } else {
                    dialog = "(She's grateful, but has nothing more to say to you for now)"
                }
            } else if (this.cosmicAlien.dialogCount == 25.5) {
                this.cosmicAlien.dialogCount = 25;
            }

            if (this.cosmicAlien.dialogCount == 35.5) {
                humanDialogC = "Hey, you collect information on various different species right?"
            } else if (this.cosmicAlien.dialogCount == 36) {
                dialog = "Yes."
            } else if (this.cosmicAlien.dialogCount == 36.5) {
                humanDialogC = "Can I have a copy of some of that information?"
            } else if (this.cosmicAlien.dialogCount == 37) {
                dialog = "Maybe. Do you have something you can give me in exchange?"
            } else if (this.cosmicAlien.dialogCount == 37.5) {
                humanDialogC = "But I already gave you my log, can't you just give me it?"
            } else if (this.cosmicAlien.dialogCount == 38) {
                dialog = "Yeah but a lot of that information is personal. Your log is mostly professional. Do you have something more personal?"
            } else if (this.cosmicAlien.dialogCount == 38.5) {
                humanDialogC = "Not on me. I may have a journal in my ship. I was hoping to keep it though. "
            } else if (this.cosmicAlien.dialogCount == 39) {
                dialog = "Well, I'll add it to the collection and you can have that."
            } else if (this.cosmicAlien.dialogCount == 39.5) {
                humanDialogC = "Fine."
                this.astJournalNeed = true;
                this.cosmicAlien.dialogCount = 25;
            }


            if (this.cosmicAlien.dialogCount == 40.5) {
                humanDialogC = "Here's my journal"
            } else if (this.cosmicAlien.dialogCount == 41) {
                dialog = "Here's the collection";
                this.astJournal = false;
                this.cJournalNeed = false;
                this.cJournal = true;
                this.cosmicAlien.dialogCount = 25;
            }

            if (this.cosmicAlien.dialogCount == 45.5) {
                humanDialogC = "Hey, you see that anomaly?"
            } else if (this.cosmicAlien.dialogCount == 46) {
                dialog = "Yes. I'm guessing you want a piece."
            } else if (this.cosmicAlien.dialogCount == 46.5) {
                humanDialogC = "Yeah, can I have one?"
            } else if (this.cosmicAlien.dialogCount == 47) {
                dialog = "Sure."
                this.anomalyNeed = false;
                this.anomalyPiece = true;
                this.cosmicAlien.dialogCount = 25;
            }


            text(dialog, this.cosmicAlien.x + 20, this.cosmicAlien.y - 125, 250, 200);
            text(humanDialogC, this.character.x, this.character.y - 125, 200, 200);
            fill(255);
            text("hit enter", this.cosmicAlien.x, this.cosmicAlien.y + 70);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.cosmicAlien.dialogCount = this.cosmicAlien.dialogCount + .5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }
        //this.cosmicAlien.update();
        this.astShip.display();
        if (this.astShip.overlap(this.character)) {
            /* style dialog */

            console.log("Astronaut Ship", this.astShip.dialogCount);
            textSize(15);
            if (this.astShip.dialogCount % 1 == .5) {
                fill('white');
                text(humanDialogSh, this.character.x, this.character.y - 20, 200, 200);
            } else {
                fill('LightSteelBlue');
            }
            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogSh;
            console.log("Ast Ship", this.astShip.dialogCount)
            if (this.astShip.dialogCount == 0) {
                dialog = "Your Ship";
            } else if (this.astShip.dialogCount == 0.5) {
                /*
                                if (this.shipRepaired == true && this.shipUprighted == true) {
                                    if (this.markedmap == true && this.partBattery == true) {
                                        this.astShip.dialogCount = 30;
                                    }
                                } else {
                                    this.astShip.dialogCount = 1;
                                }*/
                this.astShip.dialogCount = 1;
            } else if (this.astShip.dialogCount == 1) {
                dialog = "Do you need something from your Ship?";
            } else if (this.astShip.dialogCount == 1.5) {
                humanDialogSh = " [1] Yes || [2] No ";
                if (key == "1") {
                    this.astShip.dialogCount = 10;
                } else if (key == "2") {
                    this.astShip.dialogCount = 2;
                }
            }

            if (this.astShip.dialogCount == 2) {
                dialog = "Do you need to know what else you need before you take off or Do you want to take off? "
                // this.astShip.dialogCount = 0;
            } else if (this.astShip.dialogCount == 2.5) {
                humanDialogSh = " [1] Yes || [2] No ";
                if (key == "1") {
                    this.astShip.dialogCount = 5;
                } else if (key == "2") {
                    this.astShip.dialogCount = 0;
                }

            } else if (this.astShip.dialogCount == 3) {
                this.astShip.dialogCount = 0;
            }

            if (this.astShip.dialogCount == 5) {
                if (this.shipUprighted == true && this.shipRepaired == true) {
                    if (this.partBattery == true || this.fullBattery == true) {
                        if (this.markedmap == true) {
                            this.alienShip.dialogCount = 30;
                        }
                    }
                }
                dialog = "You'll need certain things:";
            } else if (this.astShip.dialogCount == 5.5) {
                this.astShip.dialogCount = 6;
            } else if (this.astShip.dialogCount == 6) {
                console.log("Ship Repaired", this.shipRepaired);
                if (this.shipRepaired == false) {
                    fill('red');
                    text("You need ship repairs", this.astShip.x, this.astShip.y - 75);
                } else if (this.shipRepaired == true) {
                    fill('green');
                    text("You're ship has been repaired", this.astShip.x, this.astShip.y - 75);
                }
                console.log("Ship Uprighted", this.shipUprighted);
                if (this.shipUprighted == false) {
                    fill('red');
                    text("You need your ship uprighted", this.astShip.x, this.astShip.y - 50);
                } else if (this.shipUprighted == true) {
                    fill('green');
                    text("Your ship has been uprighted", this.astShip.x, this.astShip.y - 50);
                }
                console.log("Battery", this.fullBattery, this.partBattery);
                if (this.fullBattery == false || this.partBattery == false) {
                    fill('red');
                    text("You need a battery with energy", this.astShip.x, this.astShip.y - 25);
                } else if (this.fullBattery == true || this.partBattery == true) {
                    fill('green');
                    text("Your battery has energy", this.astShip.x, this.astShip.y - 25);
                }
                console.log("Map", this.markedmap);
                if (this.markedmap == false) {
                    fill('red');
                    text("You need an unfrozen, marked map", this.astShip.x, this.astShip.y);
                } else if (this.markedmap == true) {
                    fill('green');
                    text("You're map's marked.", this.astShip.x, this.astShip.y);
                }
            } else if (this.astShip.dialogCount == 6.5) {
                this.astShip.dialogCount = 0;
            }

            if (this.astShip.dialogCount == 10) {
                if (this.astJournalNeed == true) {
                    this.astShip.dialogCount = 11;
                } else if (this.logneed == true) {
                    this.astShip.dialogCount = 22;
                } else if (this.backupneed == true) {
                    this.astShip.dialogCount = 15;
                } else if (this.ebatteryNeed == true) {
                    this.astShip.dialogCount = 17;
                } else if (this.icepick == false) {
                    this.astShip.dialogCount = 19;
                } else {
                    this.astShip.dialogCount = 28;
                }
            }


            if (this.astShip.dialogCount == 11) {

                dialog = "You recieved your journal."
                this.astJournal = true;
                this.astJournalNeed = false;
            } else if (this.astShip.dialogCount == 11.5) {
                this.astShip.dialogCount == 10
            }

            if (this.astShip.dialogCount == 22) {
                dialog = "You need to take a log."
            } else if (this.astShip.dialogCount == 22.5) {
                dialog = " [2] Take real log (your only actual record of your travels) || [3] Take fake log (with inaccuarate misleading information) || [4] Cancel Interaction ";
                if (key == "2") {
                    this.astShip.dialogCount = 12.5;
                } else if (key == "3") {
                    this.astShip.dialogCount = 13.5;
                } else if (key == "4") {
                    this.astShip.dialogCount = 0;
                }
            } else if (this.astShip.dialogCount == 23) {
                this.astShip.dialogCount = 0;
            }
            if (this.astShip.dialogCount == 12.5) {
                humanDialogSh = " *Takes the real log* "
                this.reallog = true;
                this.logneed = false;
            } else if (this.astShip.dialogCount == 13) {
                this.astShip.dialogCount = 10;
            }
            if (this.astShip.dialogCount == 13.5) {
                humanDialogSh = " *Takes the fake log* "
                this.fakelog = true;
                this.logneed = false;
            } else if (this.astShip.dialogCount == 14) {
                this.astShip.dialogCount = 10;
            }


            if (this.astShip.dialogCount == 15) {
                dialog = "(You recieved your (non-functional) backup tech)"
                this.backuplog = true;
                this.backupneed = false;
            } else if (this.astShip.dialogCount == 15.5) {
                this.astShip.dialogCount = 10;
            }

            if (this.astShip.dialogCount == 17) {
                humanDialogSh = " (You recieved the empty battery) "
                this.emptyBattery = true;
                this.ebatteryNeed = false;
            } else if (this.astShip.dialogCount == 17.5) {
                this.astShip.dialogCount = 10;
            }

            if (this.astShip.dialogCount == 19) {
                humanDialogSh = " (You recieved the cutting tool) "
                this.icepick = true;
            } else if (this.astShip.dialogCount == 19.5) {
                this.astShip.dialogCount = 10;
            }

            if (this.astShip.dialogCount == 28) {
                dialog = "(You don't seem to need anything else right now)"
            } else if (this.astShip.dialogCount == 28.5) {
                this.astShip.dialogCount = 0;
            }

            if (this.astShip.dialogCount == 30) {
                dialog = "Take off?"
            } else if (this.alienShip.dialogCount == 10.5) {
                humanDialogUfo = " [1] Yes || [2] No ";
                if (key == "1") {
                   // changeScene('goodend');
                    // this.alienShip.dialogCount = 5;
                    // END GAME ("Good" end - you overall were good and helpful to the . They might be back for revenge)
                    //I was going to implement a scene here but the example of how to do it is gone :/ I'll see if I can figure it out.
                    //I might end up just doing it in my own branch since I can't get this to run right now.
                } else if (key == "2") {
                    this.alienShip.dialogCount = 10;
                }
            }


            text(dialog, this.astShip.x, this.astShip.y - 100, 200, 200);
            text(humanDialogSh, this.character.x, this.character.y - 20, 200, 300);
            fill(255);
            text("hit enter", this.astShip.x, this.astShip.y + 50);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.astShip.dialogCount = this.astShip.dialogCount + 0.5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;
            }
        }


        this.alienShip.display();
        this.shipTrail.display();
        //this.shipTrail.collide(this.character);

        if (this.alienShip.overlap(this.character)) {
            /* style dialog */

            console.log("Alien Ship", this.alienShip.dialogCount);
            textSize(15);
            if (this.alienShip.dialogCount % 1 == .5) {
                fill('white');
                text(humanDialogUfo, this.character.x, this.character.y - 20, 200, 200);
            } else {
                fill('LightSlateGray');
            }
            stroke('black');
            strokeWeight(1);
            var dialog;
            var humanDialogUfo;


            if (this.alienShip.dialogCount == 0) {
                dialog = "Take Alien Ship?";
            } else if (this.alienShip.dialogCount == 0.5) {
                humanDialogUfo = " [1] Yes || [2] No ";
                if (key == "1") {
                    this.alienShip.dialogCount = 5;
                } else if (key == "2") {
                    this.alienShip.dialogCount = 2;
                }
            }

            if (this.alienShip.dialogCount == 2) {
                dialog = "You've decided not to take the ship for now";
            } else if (this.alienShip.dialogCount == 2.5) {
                humanDialogUfo = "(Press enter if you change your mind)";
            } else if (this.alienShip.dialogCount == 3) {
                this.alienShip.dialogCount = 0;
            }

            if (this.alienShip.dialogCount == 5) {
                if (this.unfrozenkey == true && this.markedmap == true) {
                    if (this.partBattery == true || this.fullBattery == true) {
                        if (this.shipUnattended == true) {
                            this.alienShip.dialogCount = 10;
                        }
                    }
                }
                dialog = "You'll need certain things:";
            } else if (this.alienShip.dialogCount == 5.5) {
                this.alienShip.dialogCount = 6;
            } else if (this.alienShip.dialogCount == 6) {
                console.log("Map", this.markedmap);
                if (this.markedmap == false) {
                    fill('red');
                    text("You need an unfrozen, marked map", this.alienShip.x - 50, this.alienShip.y - 75);
                } else if (this.markedmap == true) {
                    fill('green');
                    text("You have a marked map", this.alienShip.x - 50, this.alienShip.y - 75);
                }
                console.log("Key", this.unfrozenkey);
                if (this.unfrozenkey == false) {
                    fill('red');
                    text("You need an unfrozen key", this.alienShip.x - 50, this.alienShip.y - 50);
                } else if (this.unfrozenkey == true) {
                    fill('green');
                    text("You have an unfrozen key", this.alienShip.x - 50, this.alienShip.y - 50);
                }
                console.log("Battery", this.partBattery, this.fullBattery);
                if (this.fullBattery == false || this.partBattery == false) {
                    fill('red');
                    text("You need a battery with energy", this.alienShip.x - 50, this.alienShip.y - 25);
                } else if (this.fullBattery == true || this.partBattery == true) {
                    fill('green');
                    text("You have a battery with energy", this.alienShip.x - 50, this.alienShip.y - 25);
                }
                console.log("Ship free", this.shipUnattended);
                if (this.shipUnattended == false) {
                    fill('red');
                    text("You need to be alone with the ship.", this.alienShip.x - 50, this.alienShip.y);
                } else if (this.shipUnattended == true) {
                    fill('green');
                    text("You're alone with the ship.", this.alienShip.x - 50, this.alienShip.y);
                }
            } else if (this.alienShip.dialogCount == 6.5) {
                this.alienShip.dialogCount = 0;
            }

            if (this.alienShip.dialogCount == 10) {
                dialog = "You have everything you need to go. Ready to go?"
            } else if (this.alienShip.dialogCount == 10.5) {
                humanDialogUfo = " [1] Yes || [2] No ";
                if (key == "1") {
                    //changeScene('badend');
                    // this.alienShip.dialogCount = 5;
                    // END GAME ("Bad" end - screwed some people over. They might be back for revenge)
                } else if (key == "2") {
                    this.alienShip.dialogCount = 10;
                }
            }



            text(dialog, this.alienShip.x - 75, this.alienShip.y, 200, 200);
            text(humanDialogUfo, this.character.x, this.character.y - 20, 200, 200);
            fill(255);
            text("hit enter", this.alienShip.x, this.alienShip.y + 50);

            if (keyIsDown(ENTER) && !this.hitEnter) {
                this.alienShip.dialogCount = this.alienShip.dialogCount + 0.5;
                this.hitEnter = true;
            } else if (!keyIsDown(ENTER)) {
                this.hitEnter = false;

            }
        }

        this.treeOverlay.display();
        this.caveOverlay.display();
        this.pond.display();
        this.watertree.display();
        this.lightning.display();


        text(humanDialog, this.character.x, this.character.y);

    }


}
