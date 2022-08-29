class MainScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(treeImage, 100, 500));
		this.background.push(new GameObject(treeImage, 200, 400));
		this.background.push(new GameObject(treeImage, width - 100, 600));

		for (let x = 0; x < width + 100; x += 150) {
			let tree = new GameObject(treeImage, x, height - 100);
			this.foreground.push(tree);
		}

		this.clouds.push(new Cloud(100, 100));
		this.clouds.push(new Cloud(width/2, 150));
		this.clouds.push(new Cloud(width - 100, 50));

		this.portals.push(new Portal("Easy Snake World!", 500, height / 2 + 100, "easy"));
		this.portals.push(new Portal("Medium Snake World!", 100, height / 2 + 200, "medium"));
		this.portals.push(new Portal("End Scene", 1000, height / 2, "end"));

	}
}