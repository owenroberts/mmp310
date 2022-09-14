class TurkeyHouseScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);

		this.background.push(new GameObject(turkeyHouseInside, 0 , 0));
	}
}