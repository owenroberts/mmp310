class Scenery extends Thing {
	constructor(x, y, anim) {
		super(0, 0);
		this.sprite = createSprite(x, y);
		this.anim = loadAnimation(anim);
	}

	setup() {
		this.sprite.addAnimation('default', this.anim);
		this.sprite.mouseActive = true;
		this.mouseDown = false;
	}

	display() {
		this.sprite.display();
	}

	update() {
        super.update();
        
        
		if (this.onClick) {
			if (this.sprite.mouseIsPressed && !this.mouseDown) {
				this.mouseDown = true;
				this.onClick();
			} else if (!this.sprite.mouseIsPressed) {
				this.mouseDown = false;
			}
		}
	}

	collide(other) {
		this.sprite.collide(other.sprite);
	}

	overlap(other) {
		return this.sprite.overlap(other.sprite);
	}
}