class EndScene extends MapScene {
	constructor() {
		super();

		for (let x = 0; x < width; x += treeImage.width / 2 ) {
			for (let y = 0; y < height; y += treeImage.height) {
				if (x < width / 3 || x > width - width / 3) {
					let tree = new GameObject(treeImage, x + random(-50, 50), y + random(-50, 50));
					this.foreground.push(tree);
				}
			}
		}

		this.portals.push(new Portal("Hard Snake Level!!", width / 2, height - 100, 'hard'));
	}

	setup() {
		player.x = width / 2;
		player.y = 100;
	}
}