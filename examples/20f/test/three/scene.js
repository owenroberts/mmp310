const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xaaaaaa );


// const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 5;
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableKeys = false;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xaa33ff} );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const floorGeometry = new THREE.PlaneGeometry( 40, 40 );
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x123123 });
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.position.y = -1;
floor.rotation.x = Math.PI * -0.5;
scene.add( floor );

const loader = new THREE.ObjectLoader();
loader.load('scene.json', onLoaded);

function onLoaded( obj ) {
	// scene.add( obj );
}


// sidewalk
for (let x = -100; x < 200; x += 2.1) {
	const geo = new THREE.BoxGeometry( 2, 0.1, 2 );
	const mat = new THREE.MeshBasicMaterial( { color: 0xffddff } );
	const sidewalk = new THREE.Mesh( geo, mat );
	sidewalk.position.x = x;
	sidewalk.position.y = 0;
	sidewalk.position.z = -10;
	scene.add( sidewalk );
}

// buildings
for (let x = -10; x < 20; x += 10) {
	const geo = new THREE.BoxGeometry( 8, Math.random() * 10 + 10, 15 );
	const mat = new THREE.MeshBasicMaterial( { color: 0xffddff } );
	const building = new THREE.Mesh( geo, mat );
	building.position.x = x;
	building.position.y = 0;
	building.position.z = -20;
	scene.add( building );
}

// trees 
for (let x = -10; x < 20; x += 5 + Math.random() * 5) {
	const tree = new THREE.Group();
	const y = 5 + Math.random() * 5;
	const geo = new THREE.CylinderGeometry(0.1, 0.1, y, 5);
	const mat = new THREE.MeshBasicMaterial( { color: 0x111133 } );
	const trunk = new THREE.Mesh( geo, mat );
	tree.position.set( x, 0, -8 );
	tree.add( trunk );

	const numLeaves = 5 + Math.random() * 5;
	for (let i = 0; i < numLeaves; i++) {
		const leafGeo = new THREE.SphereGeometry( 0.25 + Math.random() * 0.25, 16, 16 );
		const leafMat = new THREE.MeshBasicMaterial( { color: 0x33ffaa } );
		const leaf = new THREE.Mesh( leafGeo, leafMat );
		const min = -0.5;
		const max = 1;
		leaf.position.set( min + Math.random() * max, y / 2 + min * Math.random() * max, min + Math.random() * max );

		tree.add( leaf );
	}

	scene.add( tree );

}

const car = new THREE.Group();
scene.add( car );
car.scale.set( 0.5, 0.5, 0.5 );
// car.position.y = -0.5;

const carGeo = new THREE.BoxGeometry( 5, 1, 2 );
const carMat = new THREE.MeshBasicMaterial( { color: 0xffddff } );
const carBody = new THREE.Mesh( carGeo, carMat );
car.add( carBody );
carBody.position.y = 0.25;

const topGeo = new THREE.SphereGeometry( 1, 32, 32 );
const topMat = new THREE.MeshBasicMaterial( { color: 0xddddff } );
const carTop = new THREE.Mesh( topGeo, topMat );
carTop.position.x = 1;
carTop.position.y = 1.25;
car.add( carTop );

for (let i = 0; i < 4; i++) {
	const wheelGeo = new THREE.CylinderGeometry( 0.5, 0.5, 0.25, 32, 1 );
	const wheelMat = new THREE.MeshBasicMaterial( {color: 0x000000 } );
	const wheel = new THREE.Mesh( wheelGeo, wheelMat );

	if (i == 0 || i == 3) {
		wheel.position.x = -1.5;
	} else {
		wheel.position.x = 1.5;
	}

	if (i == 0 || i == 1) {
		wheel.position.z = 1;
	} else {
		wheel.position.z = -1;
	}
	
	wheel.position.y = -0.5;
	wheel.rotation.x = Math.PI * 0.5;

	car.add( wheel );
}


car.speed = 0;
car.maxSpeed = 0.25;
car.acceleration = 0.005;
car.rotationSpeed = 0;
car.rotationAcceleration = 0.001 * Math.PI;
car.upKey = false;
car.downKey = false;
car.leftKey = false;
car.rightKey = false;

function update() {
	if (car.upKey && car.speed < car.maxSpeed) {
		car.speed += car.acceleration;
	}

	if (car.downKey) {
		car.speed -= car.acceleration;
	}

	if (car.speed > 0) {
		car.speed -= 0.001; // friction
	}

	if (car.speed < 0) {
		car.speed += 0.001; // friction
	}

	if (car.leftKey) {
		car.rotationSpeed += car.rotationAcceleration;
	}

	if (car.rightKey) {
		car.rotationSpeed -= car.rotationAcceleration;
	}

	if (car.rotationSpeed > 0) {
		car.rotationSpeed -= 0.001;
	}

	if (car.rotationSpeed < 0) {
		car.rotationSpeed += 0.001;
	}

	car.translateX( car.speed );
	car.rotation.y += car.rotationSpeed;
	// camera.lookAt( car.position );

	// camera.position.x = car.position.x + 5;
	// camera.position.z = car.position.z + 5;
}


function animate() {

	controls.update();
	update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

document.addEventListener('keydown', keyDownHandler);
function keyDownHandler( event ) {
	updateControls( event.which, true );
}


document.addEventListener('keyup', keyUphandler);
function keyUphandler( event ) {
	updateControls( event.which, false );
}

function updateControls( key, state ) {
	if (key == 38) {
		car.upKey = state;
	}
	if (key == 40) {
		car.downKey = state;
	}

	if (key == 37) {
		car.leftKey = state;
	}

	if (key == 39) {
		car.rightKey = state;
	}
}
// 