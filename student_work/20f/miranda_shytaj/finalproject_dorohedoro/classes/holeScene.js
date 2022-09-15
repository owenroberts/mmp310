class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal("Enter the Hole Central Hospital", hospital, 980, height /2  - 120, hospitalScene, 3));
		this.background.push(new Portal("Enter the Central Department Store", market, 580, height /2 - 120, marketScene, 2));
		this.background.push(new Portal("Enter the Hungry Bug", tavern, 200, height /2 , tavernScene, 1));

		this.background.push(new GameObject(light, 360, height / 2 - 150));
		this.background.push(new GameObject(light, 850, height  / 2 - 150));
		this.background.push(new GameObject(light, 1500, height  / 2 - 150));
		this.background.push(new GameObject(trash_bin, 420, height  - 120));
		this.background.push(new GameObject(trash_bin, 1500, height - 150));

	}

}
	
    