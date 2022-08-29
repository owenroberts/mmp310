class ItemDisplay {

	constructor() {
		this.items = [];
	}

	setup(sceneName) {
		this.sceneToReturn = sceneName;
	}

	draw() {
		background(220);

		text('Items', width / 2, 20);

		for (let i = 0; i < this.items.length; i++) {
			let item = this.items[i];
			text(item.label, width / 2, 20 + (i + 1) * 20);
		}
	}
}