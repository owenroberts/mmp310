class CombatScene extends Scene {
	
	constructor(npcName) {
		super();
		this.npcName = npcName;	
	}
	
	preload() {
		
		// character graphics
		this.playerSpriteSheet = loadSpriteSheet('images/owen/idle.png', 68, 104, 12);
		this.npcSpriteSheet = loadSpriteSheet('images/owen/bird.png', 180, 200, 1);
		
		// action choices graphics
		this.balloonSheet = loadSpriteSheet('images/paralax/balloon.png', 128, 128, 1);
		this.cloudSheet = loadSpriteSheet('images/paralax/cloud.png', 96, 56, 1);
		this.kiteSheet = loadSpriteSheet('images/paralax/kite.png', 128, 128, 1);
	}
	
	setup() {
		var playerAnimations = {
			idle: this.playerSpriteSheet	
		};
		this.player = new Character(playerAnimations, 200, height/2);
		
		var npcAnimations = {
			idle: this.npcSpriteSheet	
		};
		this.npc = new Character(npcAnimations, width - 200, height/2);
		
		/* setting up combat */
		// player, npc, npc name, timeout duration
		this.combat = new Combat(this.player, this.npc, this.npcName, 20);
		// possible states turn, message, win, lose
		
		// name, max value, min value, callback
		this.combat.addMetric('health', 100, 0, function(isPlayer, combat) {
			// when one character has 0 health
			if (isPlayer) {
				combat.state = 'lose';
				combat.message = "You lost.";
			} else {
				combat.state = 'win';
				combat.message = "You win.";
			}
		});
		
		// graphics, metric, probability, damage, optional : success response, failure response
		
		this.combat.addPlayerAttack(this.balloonSheet, 'health', 0.8, -50, "The Balloon attack succeeded", "The balloon attack failed.");
		this.combat.addPlayerAttack(this.cloudSheet, 'health', 0.2, -40);
		this.combat.addPlayerAttack(this.kiteSheet, 'health', 0.8, -10);
		
		this.combat.addNPCAttack('health', 0.2, -20, this.npcName + " got you.", this.npcName + " missed.");
		this.combat.addNPCAttack('health', 0.1, -40);
		
		this.combat.onWin = function(npcName) {
			console.log(npcName);
			sceneManager['owen'].combatResult('win', npcName);
			changeScene('owen');	
		};
		
		this.combat.onLose = function(npcName) {
			sceneManager['owen'].combatResult('lose', npcName);
			changeScene('owen');
		};
		
	}
	
	start() {
		this.combat.reset();
	}
	
	draw() {
		background(220);
		
		this.combat.update();
		this.combat.display();
		
		// this.combat.message
		textSize(40);
		textAlign(CENTER, CENTER);
		noStroke();
		fill('blue');
		text(this.combat.message, width/2, height - 100);
		
		// this.combat.counter 
		fill('blue');
		ellipse(width - 100, height - 100, this.combat.counter);
		noFill();
		stroke('green');
		ellipse(width - 100, height - 100, 100);
		
		// this.player.health, this.npc.health
		fill('red');
		noStroke();
		rect(this.player.x, this.player.y - 100, max(0, this.player.health), 10);
		stroke(0);
		noFill();
		rect(this.player.x, this.player.y - 100, 100, 10);
		
		fill('red');
		noStroke();
		rect(this.npc.x, this.npc.y - 100, max(0, this.npc.health), 10);
		stroke(0);
		noFill();
		rect(this.npc.x, this.npc.y - 100, 100, 10);
	}
}









