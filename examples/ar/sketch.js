/*
    ar test
*/

var bird; // global
var fish;
let camera;

function preload() {
	bird = loadImage("bird.jpg");
	fish = loadImage("fish.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	camera = createCamera();
}

function draw() {
	background(204);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	box(50);

	// update artoolkit by frame
	arToolkitContext.update( arToolkitSource.domElement )
}

var arToolkitSource = new THREEx.ArToolkitSource({
	sourceType : 'webcam',
});

arToolkitSource.init(function onReady(){
	// onResize();
});

// create atToolkitContext
var arToolkitContext = new THREEx.ArToolkitContext({
	cameraParametersUrl: 'camera_para.dat',
	detectionMode: 'mono',
})
// initialize it
arToolkitContext.init(function onCompleted(){
	// camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
});

// update artoolkit on every frame
// onRenderFcts.push(function(){
	// if( arToolkitSource.ready === false )	return
	// scene.visible = camera.visible
// });

// init controls for camera
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
	type : 'pattern',
	patternUrl : 'patt.hiro',
	changeMatrixMode: 'cameraTransformMatrix'
})
// as we do changeMatrixMode: 'cameraTransformMatrix', start with invisible scene
// scene.visible = false




// handle resize
window.addEventListener('resize', function(){
	// onResize();
});
function onResize(){
	arToolkitSource.onResize()	
	// arToolkitSource.copySizeTo(renderer.domElement)	
	if( arToolkitContext.arController !== null ){
		arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)	
	}	
}