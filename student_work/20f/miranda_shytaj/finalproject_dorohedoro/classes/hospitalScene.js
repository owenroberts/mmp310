class HospitalScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);

		this.background.push(new GameObject(hospitalInside, 0 , 0));
	}

}