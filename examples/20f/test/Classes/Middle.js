class Middle extends MapScene {
	constructor() {
		super();

		for (let x = 0; x < width; x += 100) {
			for (let y = 0; y < height; y += 150) {
				if (x < width / 3 || x > width - width / 3) {
					let tree = new GameObject(treeImage, x + random(-50, 50), y + random(-100, 100));
					this.background.push(tree);
				} else {
					let rock = new GameObject(rockImage, x + random(-50, 50), y + random(-100, 100));
					this.background.push(rock);
				}
			}
		}

		let endPortal = new Portal("Enter the abyss", width / 2, height - 100, 'end', 3);
		this.portals.push(endPortal);

		let snakePortal = new Portal("Fight the snakes!", width / 2, height / 2, 'medium');
		this.portals.push(snakePortal);

		this.items.push( new ExtraLife(width / 2 + 200, height / 2 + 200));

		this.playerX = width / 2;
		this.playerY = 100;
	}
}