class Item extends GameObject {
	constructor(img, x, y, label, callback) {
		super(img, x, y);
		this.label = label;
		this.callback = callback;
	}

	update() {
		text('Pick up ' + this.label, this.x, this.y);
		if (keyIsDown(ENTER)) {
			scenes.itemsDisplay.items.push(this);
			if (this.callback) this.callback();
			return true;
		} else {
			return false;
		}
	}
}