class MarketScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);

		this.background.push(new GameObject(marketInside, 0 , 0));
	}

}