class SchoolScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);
		this.background.push(new GameObject(trainingSchoolInside, 0 , 0));
	}
}