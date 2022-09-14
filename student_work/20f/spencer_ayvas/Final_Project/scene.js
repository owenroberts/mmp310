//set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(-10, 12, 10);

const renderer = new THREE.WebGLRenderer({
	alpha: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

//lighting
const ambientLight = new THREE.AmbientLight(0xfff5ba, 0.1); // (color, intensity)
scene.add(ambientLight);

const hemLight = new THREE.HemisphereLight(0xfffcd9, 0x006887, 0.7); //sky color, ground color, intensity
scene.add(hemLight);

const directionalLight = new THREE.DirectionalLight(0xff2676, 0.5);
scene.add(directionalLight);
directionalLight.position.set(-20, 10, 10);
directionalLight.castShadow = true;

//Set up shadow properties for the light
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default

//scene

const width = 20;

//reference image of the flat map
const referenceTex = new THREE.TextureLoader().load( 'textures/grass.png' );

//plane
const streetGeo = new THREE.PlaneGeometry(width, 10);
const streetMat = new THREE.MeshStandardMaterial({
	color: 0x636363,
	side: THREE.DoubleSide,
	map: referenceTex
});
streetMat.metalness = 0.5;
const street = new THREE.Mesh(streetGeo, streetMat);
street.rotation.x = Math.PI * -0.5;
street.receiveShadow = true;
scene.add(street); 



//trees
const numTrees = random(15, 20);
for (let i = 0; i < numTrees; i++) {
	const tree = new THREE.Group();
	const h = random(2, 4);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x7a592b,
		metalness: 0.5
	});
	
	const trunk = new THREE.Mesh(geo, mat);
	trunk.castShadow = true;
	trunk.receiveShadow = true; 
	tree.add(trunk);

	//leaves
	const numLeaves = random(1, 5);
	for (let j = 0; j < numLeaves; j++) {
		const leafGeo = new THREE.IcosahedronGeometry(random(0.25));
		const leafMat = new THREE.MeshStandardMaterial({
			color: 0x1f804a,
			emissive: new THREE.Color(0x1f804a),
			emissiveIntensity: 0.1

		});
		const leaf = new THREE.Mesh(leafGeo, leafMat);

		let x = random(-0.5, 0.5);
		let y = random(-0.25, 0.25);
		let z = random(-0.5, 0.5);
		leaf.position.set(x, h / 2 + y, z)
		leaf.rotation.x = random(0, Math.PI * 0.5);
		leaf.rotation.y = random(0, Math.PI * 0.5);
		
		leaf.castShadow = true;
	leaf.receiveShadow = true; 
		tree.add(leaf);
	}



let x = random(-3, width / 2);
	let y = h / 2;
	let z = random(-5, -3.5);
	
	tree.position.set(x, y, z);
	scene.add(tree);


}

for (let i = 0; i < numTrees; i++) {
	const tree2 = new THREE.Group();
	const h = random(2, 4);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x7a592b,
		metalness: 0.5
	});
	
	const trunk = new THREE.Mesh(geo, mat);
	trunk.castShadow = true;
	trunk.receiveShadow = true; 
	tree2.add(trunk);

	//leaves
	const numLeaves = random(1, 5);
	for (let j = 0; j < numLeaves; j++) {
		const leafGeo = new THREE.IcosahedronGeometry(random(0.25));
		const leafMat = new THREE.MeshStandardMaterial({
			color: 0x1f804a,
			emissive: new THREE.Color(0x1f804a),
			emissiveIntensity: 0.1

		});
		const leaf = new THREE.Mesh(leafGeo, leafMat);

		let x = random(-0.5, 0.5);
		let y = random(-0.25, 0.25);
		let z = random(-0.5, 0.5);
		leaf.position.set(x, h / 2 + y, z)
		leaf.rotation.x = random(0, Math.PI * 0.5);
		leaf.rotation.y = random(0, Math.PI * 0.5);
		
		leaf.castShadow = true;
	leaf.receiveShadow = true; 
		tree2.add(leaf);
	}



let x = random(5.5, width / 2);
	let y = h / 2;
	let z = random(-5, 5);
	
	tree2.position.set(x, y, z);
	scene.add(tree2);


}

for (let i = 0; i < numTrees; i++) {
	const tree3 = new THREE.Group();
	const h = random(2, 4);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x7a592b,
		metalness: 0.5
	});
	
	const trunk = new THREE.Mesh(geo, mat);
	trunk.castShadow = true;
	trunk.receiveShadow = true; 
	tree3.add(trunk);

	//leaves
	const numLeaves = random(1, 5);
	for (let j = 0; j < numLeaves; j++) {
		const leafGeo = new THREE.IcosahedronGeometry(random(0.25));
		const leafMat = new THREE.MeshStandardMaterial({
			color: 0x1f804a,
			emissive: new THREE.Color(0x1f804a),
			emissiveIntensity: 0.1

		});
		const leaf = new THREE.Mesh(leafGeo, leafMat);

		let x = random(-0.5, 0.5);
		let y = random(-0.25, 0.25);
		let z = random(-0.5, 0.5);
		leaf.position.set(x, h / 2 + y, z)
		leaf.rotation.x = random(0, Math.PI * 0.5);
		leaf.rotation.y = random(0, Math.PI * 0.5);
		
		leaf.castShadow = true;
	leaf.receiveShadow = true; 
		tree3.add(leaf);
	}



let x = random(-3, width / 2);
	let y = h / 2;
	let z = random(5, 3.5);
	
	tree3.position.set(x, y, z);
	scene.add(tree3);


}

//path
const numPath = random(30, 40);
for (let i = 0; i < numPath; i++) {
	const path = new THREE.Group();
	const h = random(0.05, 0.1);

	//trunk
	const geo = new THREE.CylinderGeometry(0.125, 0.25, h, 5);
	const mat = new THREE.MeshStandardMaterial({
		color: 0xd4d4d4,
		metalness: 0.5
	});
	
	const stone = new THREE.Mesh(geo, mat);
	stone.castShadow = true;
	stone.receiveShadow = true; 
	path.add(stone);

let x = random(-1, -9.5);
	let y = h / 2;
	let z = random(-.5, .5);
	
	path.position.set(x, y, z);
	scene.add(path);


}

//rock circle
newRock(5,0,.5,
		0.5,0.5,0.5);
newRock(5,0,-.5,
		0.5,0.5,0.5);
newRock(4.5,0,-1.6,
		0.5,0.5,0.5);
newRock(3.7,0,-2.4,
		0.5,0.5,0.5);
newRock(2.8,0,-2.8,
		0.5,0.5,0.5);
newRock(1.9,0,-2.6,
		0.5,0.5,0.5);
newRock(5,0,.5,
		0.5,0.5,0.5);
newRock(4.5,0,1.6,
		0.5,0.5,0.5);
newRock(3.7,0,2.4,
		0.5,0.5,0.5);
newRock(2.8,0,2.8,
		0.5,0.5,0.5);
newRock(1.9,0,2.6,
		0.5,0.5,0.5);

//random rocks
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));
newRock(random(-9,1),0,random(-5,5),
		random(0.1,0.3),random(0.1,0.3),random(0.1,0.3));

//stones random
function newRock(x,y,z,scaleX,scaleY,scaleZ){
	const rockGeo = new THREE.DodecahedronGeometry();
	const rockMat = new THREE.MeshStandardMaterial({color: 0xbabcbf, metalness: 0.4, roughness: 1});
	const rock = new THREE.Mesh (rockGeo, rockMat);

	rock.rotation.x=random(0,0.5);
	rock.rotation.y=random(0,0.5);

	rock.position.set(x,y,z);

	rock.scale.set(scaleX,scaleY,scaleZ);

	scene.add(rock);
}


//random range function

function random(min, max) {
	return Math.random() * (max - min) + min;
}

//loader
const loader = new THREE.ObjectLoader();

loader.load('alter.json', onLoad);

function onLoad(alter) {

	alter.scale.set(.4, .4, .4);
	alter.position.set(0, 0, 0);
	alter.rotation.set(0,1.6,0);
	
	scene.add(alter);
	
	
	animate();
}
//anuimate
function animate() {

	controls.update();

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
