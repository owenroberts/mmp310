class Combat {
	constructor(player, npc, npcName, timeout, openingMessage) {
		this.state = 'turn'; // states turn, message, win, lose
		this.turn = 'player';
		this.timeout = timeout;
		this.counter = timeout;
		this.message = openingMessage;
		this.openingMessage = openingMessage;

		this.player = player;
		
		this.player.isPlayer = true;
		this.player.attacks = [];
		
		this.npc = npc;
		this.npc.name = npcName;
		this.npc.isPlayer = false;
		this.npc.attacks = [];

		this.metrics = {};
	}
	
	reset() {
		this.state = 'turn';
		this.turn = 'player';
		this.counter = this.timeout;
		this.message = this.openingMessage;
		
		for (const metric in this.metrics) {
			this.player[metric]	= this.metrics[metric].max;
			this.npc[metric]	= this.metrics[metric].max;
		}
	}

	addMetric(label, value, min, callback) {
		this.player[label] = value;
		this.npc[label] = value;

		this.metrics[label] = {
			min: min,
			max: value,
			callback: callback
		};
	}

	addPlayerAttack(spriteSheet, metric, probability, delta, successMsg, failMsg, playerAnimation) {
		const sprite = createSprite(this.player.x + this.player.attacks.length * 100, this.player.y + 100, 50, 50);
		sprite.addAnimation('default', spriteSheet);

		this.player.attacks.push({ sprite: sprite });

		sprite.onClick = function() {
			this.attack(this.npc, {
				metric: metric, 
				probability: probability, 
				delta: delta, 
				successMsg: successMsg, 
				failMsg: failMsg,
                playerAnimation: playerAnimation
            
			});
		}.bind(this);
		sprite.mouseActive = true;
		sprite.mouseDown = false;
	}

	addNPCAttack(metric, probability, delta, successMsg, failMsg, npcAnimation) {
		this.npc.attacks.push({
			metric: metric,
			probability: probability,
			delta: delta,
			successMsg: successMsg,
			failMsg: failMsg,
            npcAnimation: npcAnimation
            
		});

	}

	attack(character, attack) {
		if (random(1) < attack.probability) {
			character[attack.metric] += attack.delta;
			this.message = attack.successMsg || "Success!";
		} else {
			this.message = attack.failMsg || "Failed.";
		}

		this.state = 'message';
		this.turn = character.isPlayer ? 'player' : 'npc';
		this.counter = this.timeout;
        
        if (attack.playerAnimation){
			this.player.changeAnimation(attack.playerAnimation);
        }
        
        if (attack.npcAnimation) {
            this.npc.changeAnimation(attack.npcAnimation);
        }

		if (character[attack.metric] <= this.metrics[attack.metric].min) {
			this.metrics[attack.metric].callback(character.isPlayer, this);
		}
	}

	display() {
		camera.off();
		this.player.display();
		this.npc.display();
		if (this.turn == 'player' && this.state == 'turn') {
			for (let i = 0; i < this.player.attacks.length; i++) {
				this.player.attacks[i].sprite.display();
			}
		}
	}

	update() {
		
		if (this.turn == 'player' && this.state == 'turn') {
			for (let i = 0; i < this.player.attacks.length; i++) {
				const attack = this.player.attacks[i];
				attack.sprite.display();
				if (attack.sprite.mouseIsPressed && !attack.sprite.mouseDown) {
					attack.sprite.mouseDown = true;
					attack.sprite.onClick();
				} else if (!attack.sprite.mouseIsPressed) {
					attack.sprite.mouseDown = false;	
				}
			}
		}
		
		if (this.state == 'message') {
			this.counter--;
			if (this.counter <= 0) {
				if (this.turn == 'player') {
					this.message = this.message = 'It is your turn.';
					this.counter = this.timeout;
                    this.npc.changeAnimation('idle');
				} else {
					this.player.changeAnimation('idle');
					this.message = this.npc.name + "'s turn.";
					this.counter = this.timeout;
				}
				this.state = 'turn';
			}
		} else if (this.state == 'turn') {
			if (this.turn == 'npc') {
				this.counter--;
				if (this.counter <= 0) {
					this.attack(this.player, random(this.npc.attacks));
				}
			}
		} else if (this.state == 'win') {
			this.counter--;
			if (this.counter <= 0) this.onWin(this.npc.name);
		} else if (this.state == 'lose') {
			this.counter--;
			if (this.counter <= 0) this.onLose(this.npc.name);
		}
	}
}