class Character extends Thing {
	constructor(anims, x, y) {
		super();
		this.sprite = createSprite(x || width/2, y || height/2);
		for (var a in anims) {
			this.sprite.addAnimation(a, anims[a]);
		}
	}

	display() {
		this.sprite.display();
	}

	changeAnimation(label) {
		this.sprite.changeAnimation(label);
	}
	
	remove() {
		this.sprite.remove();	
	}
}