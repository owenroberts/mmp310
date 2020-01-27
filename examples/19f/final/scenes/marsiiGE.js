/*
class marsiiGE extends Scene {

    	preload() {
		this.map = new ParalaxMap();
		//this.map.preload('data/paralax.json');
            
        //THIS SHOULD NOT WORK --- I CAN'T TEST IT SO I HAVE NO IDEA HOW IT MAY BE OPERATING, IF IT'S EVEN OPERATING
        //  I'm setting this up for when I finish up the game (I'll at least figure out how to put in the ends if nothing else).
		
		var skySpriteSheet = loadSpriteSheet('images/marsii/parallax/skyback.png', 4830, 3150, 1);
		this.sky = new ParalaxScenery(150, 120, skySpriteSheet, 0);
		this.map.addSprite('sky', this.sky, 'scenery');
		
        var star1SpriteSheet = loadSpriteSheet('images/marsii/parallax/stars1.png', 4830, 3150, 1);
		this.stars1 = new ParalaxScenery(150, 120, star1SpriteSheet, 0.005);
		this.map.addSprite('stars1', this.stars1, 'scenery');
        
        var star2SpriteSheet = loadSpriteSheet('images/marsii/parallax/stars2.png', 4830, 3150, 1);
		this.stars2 = new ParalaxScenery(150, 120, star2SpriteSheet, 0.010);
		this.map.addSprite('stars2', this.stars2, 'scenery');
            
        var shipSpriteSheet = loadSpriteSheet('images/marsii/npcs/fixedshipSide.png', 300, 152, 1);
		this.ship = new ParalaxScenery(150, 120, shipSpriteSheet, 0);
		this.map.addSprite('ship', this.ship, 'scenery');
	}
    
    
    
    setup() {
		this.map.setup();
		
		this.sky.setup();
        this.stars1.setup();
        this.stars2.setup();
        this.ship.setup();
	}
	
	start() {
		this.map.start();	
	}
	
	draw(paralaxScroll) {
		background('pink');
		this.map.paralax(paralaxScroll);
		this.map.display();
        
        this.sky.display();
        
		this.stars1.update();
		this.stars1.display();
        this.stars2.update();
		this.stars2.display();
        
        this.ship.display();
        
        textSize(32);
        text("You got off the planet without screwing anyone over. Good Job!", windowWidth/2, 700)
	}
}
    
*/    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}