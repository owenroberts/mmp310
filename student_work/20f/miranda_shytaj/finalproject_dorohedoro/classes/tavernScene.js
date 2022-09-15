class TavernScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);

		this.background.push(new GameObject(tavernInside, 0 , 0));
	}
}