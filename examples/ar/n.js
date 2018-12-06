// init renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// init scene, camera
var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// handle ar toolkit source
var arToolkitSource = new THREEx.ArToolkitSource({
	sourceType: 'webcam',
});

// create ar context
var arToolkitContext = new THREEx.ArToolkitContext({
	cameraParametersUrl: THREEx.ArToolkitContext.baseURL + '../data/data/camera_para.dat',
	detectionMode: 'mono',
	maxDetectionRate: 30,
	canvasWidth: 80 * 3,
	canvasHeight: 60 * 3,
});
	// initialize it
arToolkitContext.init(function onCompleted() {
	// copy projection matrix to camera
	cam.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
});

// create marker controls
var markerRoot = new THREE.Group;
scene.add( markerRoot );

var artoolkitMarker = new THREEx.ArMarkerControls( arToolkitContext, markerRoot, {
	type: 'pattern',
	patternUrl: THREEx.ArToolkitContext.baseURL + '../data/data/patt.hiro'
});

// build smoothed controls
var smoothedRoot = new THREE.Group()
scene.add( smoothedRoot );
var smoothedControls = new THREEx.ArSmoothedControls( smoothedRoot, {
	lerpPosition: 0.4,
	lerpQuaternion: 0.3,
	lerpScale: 1,
});

// add object
var arWorldRoot = smoothedRoot;
var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({
	transparent: true,
	opacity: 0.5,
	side: THREE.DoubleSide
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.y = geometry.parameters.height / 2
arWorldRoot.add(mesh);

var geometry = new THREE.TorusKnotGeometry(0.3, 0.1, 64, 16);
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 0.5
arWorldRoot.add(mesh);



var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cam.position.z = 5;

var render = function () {
	requestAnimationFrame(render);
	
	if (performance.now() > timer + interval) {
		timer = performance.now();
		
		// update ar toolkit
		if (arToolkitSource.ready === false) return;
		arToolkitContext.update(arToolkitSource.domElement);

		smoothedControls.update(markerRoot)
		mesh.rotation.x += 0.1


		cube.rotation.x += 0.1;
		cube.rotation.y += 0.1;

		renderer.render(scene, cam);
	}
};

let timer = performance.now();
const interval = 1000 / 30;
render();