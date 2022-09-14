/* setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 40, 40 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// adds shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

//lighting
const ambientLight = new THREE.AmbientLight ( 0x38373D, 1.35 );
scene.add( ambientLight );

const hemiLight = new THREE.HemisphereLight ( 0xC1DAE6, 0x080820, 0.65);
scene.add( hemiLight );

const directionalLight = new THREE.DirectionalLight ( 0xD6EAFF, 0.11);
directionalLight.position.set( -1, 18, 27 );
scene.add( directionalLight );

directionalLight.castShadow = true;
directionalLight.shadow.radius = 5;
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default

/* scene */
// cafeteria
const cafeteriaGeo = new THREE.PlaneGeometry( 50 , 50 );
const cafeteriaMat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
cafeteriaMat.metalness = 0.3
cafeteriaMat.roughness = 0.25

const cafeteria = new THREE.Mesh( cafeteriaGeo, cafeteriaMat );
cafeteria.rotation.x = Math.PI * -0.5;

scene.add( cafeteria );

// cafewall
const cafwallGeo = new THREE.BoxGeometry( 50, 10, 1 );
const cafwallMat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const cafwall = new THREE.Mesh( cafwallGeo, cafwallMat );

cafwall.receiveShadow = true;

cafwall.position.set( 0 , 5, -25 );
scene.add( cafwall );

//cafewall2
const cafwall2Geo = new THREE.BoxGeometry( 1, 10, 20 );
const cafwall2Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const cafwall2 = new THREE.Mesh( cafwall2Geo, cafwall2Mat );

cafwall2.receiveShadow = true;

cafwall2.position.set( -25 , 5, -15 );
scene.add( cafwall2 );

// cafewall3
const cafwall3Geo = new THREE.BoxGeometry( 1, 10, 50 );
const cafwall3Mat = new THREE.MeshStandardMaterial( {color: 0x5D5D5D} );
const cafwall3 = new THREE.Mesh( cafwall3Geo , cafwall3Mat );

cafwall3.receiveShadow = true;

cafwall3.position.set( 25, 5, 0 );
scene.add( cafwall3 );


// cafewall4
const cafwall4Geo = new THREE.BoxGeometry( 1, 10, 20 );
const cafwall4Mat = new THREE.MeshStandardMaterial( {color: 0x5D5D5D} );
const cafwall4 = new THREE.Mesh( cafwall4Geo , cafwall4Mat );

cafwall4.receiveShadow = true;

cafwall4.position.set( -25, 5, 15 );
scene.add( cafwall4 );

//cafewall5
const cafwall5Geo = new THREE.BoxGeometry( 22, 10, 1 );
const cafwall5Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const cafwall5 = new THREE.Mesh( cafwall5Geo, cafwall5Mat );

cafwall5.receiveShadow = true;

cafwall5.position.set( -14 , 5, 25 );
scene.add( cafwall5 );

//cafewall6
const cafwall6Geo = new THREE.BoxGeometry( 17, 10, 1 );
const cafwall6Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const cafwall6 = new THREE.Mesh( cafwall6Geo, cafwall6Mat );

cafwall6.receiveShadow = true;

cafwall6.position.set( 17 , 5, 25 );
scene.add( cafwall6 );

/* hallways */
const hallwayGeo = new THREE.PlaneGeometry( 32, 10 );
const hallwayMat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
hallwayMat.metalness = 0.3
hallwayMat.roughness = 0.25

const hallway = new THREE.Mesh( hallwayGeo, hallwayMat );
hallway.rotation.x = Math.PI * -0.5;

hallway.position.set( -41, 0, 0);
scene.add( hallway );

//hallwall
const hallwallGeo = new THREE.BoxGeometry( 31, 10, 1 );
const hallwallMat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall = new THREE.Mesh( hallwallGeo, hallwallMat );

hallwall.receiveShadow = true;

hallwall.position.set( -41 , 5, -5 );
scene.add( hallwall );

//hallwall1
const hallwall1Geo = new THREE.BoxGeometry( 14, 10, 1 );
const hallwall1Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall1 = new THREE.Mesh( hallwall1Geo, hallwall1Mat );

hallwall1.receiveShadow = true;

hallwall1.position.set( -49, 5, 5 );
scene.add( hallwall1 );

//hallwall2
const hallwall2Geo = new THREE.BoxGeometry( 10, 10, 1 );
const hallwall2Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall2 = new THREE.Mesh( hallwall2Geo, hallwall2Mat );

hallwall2.receiveShadow = true;

hallwall2.position.set( -30, 5, 5 );
scene.add( hallwall2 );

//hallwall3
const hallwall3Geo = new THREE.BoxGeometry( 1, 10, 50 );
const hallwall3Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall3 = new THREE.Mesh( hallwall3Geo, hallwall3Mat );

hallwall3.receiveShadow = true;

hallwall3.position.set( -62, 5, 44 );
scene.add( hallwall3 );

//hallwall4
const hallwall4Geo = new THREE.BoxGeometry( 1, 10, 50 );
const hallwall4Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall4 = new THREE.Mesh( hallwall4Geo, hallwall4Mat );

hallwall4.receiveShadow = true;

hallwall4.position.set( -70, 5, 44 );
scene.add( hallwall4 );

//hallwall5
const hallwall5Geo = new THREE.BoxGeometry( 1, 10, 30 );
const hallwall5Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall5 = new THREE.Mesh( hallwall5Geo, hallwall5Mat );

hallwall5.receiveShadow = true;

hallwall5.position.set( -69, 5, 100 );
scene.add( hallwall5 );

//hallwall6
const hallwall6Geo = new THREE.BoxGeometry( 1, 10, 30 );
const hallwall6Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall6 = new THREE.Mesh( hallwall6Geo, hallwall6Mat );

hallwall6.receiveShadow = true;

hallwall6.position.set( -61, 5, 100 );
scene.add( hallwall6 );

//hallwall7
const hallwall7Geo = new THREE.BoxGeometry( 63, 10, 1 );
const hallwall7Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall7 = new THREE.Mesh( hallwall7Geo, hallwall7Mat );

hallwall7.receiveShadow = true;

hallwall7.position.set( -20, 5, 138 );
scene.add( hallwall7 );

//hallwall8
const hallwall8Geo = new THREE.BoxGeometry( 23, 10, 1 );
const hallwall8Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall8 = new THREE.Mesh( hallwall8Geo, hallwall8Mat );

hallwall8.receiveShadow = true;

hallwall8.position.set( -41, 5, 125 );
scene.add( hallwall8 );

//hallwall9
const hallwall9Geo = new THREE.BoxGeometry( 23, 10, 1 );
const hallwall9Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall9 = new THREE.Mesh( hallwall9Geo, hallwall9Mat );

hallwall9.receiveShadow = true;

hallwall9.position.set( -5, 5, 125 );
scene.add( hallwall9 );

//hallwall10
const hallwall10Geo = new THREE.BoxGeometry( 1, 10, 20 );
const hallwall10Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall10 = new THREE.Mesh( hallwall10Geo, hallwall10Mat );

hallwall10.receiveShadow = true;

hallwall10.position.set( 29, 5, 76 );
scene.add( hallwall10 );

//hallwall11
const hallwall11Geo = new THREE.BoxGeometry( 1, 10, 10 );
const hallwall11Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall11 = new THREE.Mesh( hallwall11Geo, hallwall11Mat );

hallwall11.receiveShadow = true;

hallwall11.position.set( 17, 5, 80 );
scene.add( hallwall11 );

//hallwall12
const hallwall12Geo = new THREE.BoxGeometry( 20, 10, 1 );
const hallwall12Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall12 = new THREE.Mesh( hallwall12Geo, hallwall12Mat );

hallwall12.receiveShadow = true;

hallwall12.position.set( 7, 5, 75 );
scene.add( hallwall12 );

//hallwall13
const hallwall13Geo = new THREE.BoxGeometry( 20, 10, 1 );
const hallwall13Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall13 = new THREE.Mesh( hallwall13Geo, hallwall13Mat );

hallwall13.receiveShadow = true;

hallwall13.position.set( 19, 5, 66 );
scene.add( hallwall13 );

//hallwall14
const hallwall14Geo = new THREE.BoxGeometry( 1, 10, 51 );
const hallwall14Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall14 = new THREE.Mesh( hallwall14Geo, hallwall14Mat );

hallwall14.receiveShadow = true;

hallwall14.position.set( -3, 5, 50 );
scene.add( hallwall14 );

//hallwall15
const hallwall15Geo = new THREE.BoxGeometry( 1, 10, 40 );
const hallwall15Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const hallwall15 = new THREE.Mesh( hallwall15Geo, hallwall15Mat );

hallwall15.receiveShadow = true;

hallwall15.position.set( 9, 5, 46 );
scene.add( hallwall15 );

/* load editor scene */
const loader = new THREE.ObjectLoader();
loader.load( 'table.json', onLoad);

function onLoad( table ) {

	table.scale.set( 5, 5, 5 );
	table.position.set( 4, 0.02, -9 );

	scene.add( table );
	animate();
}

const loader1 = new THREE.ObjectLoader();
loader1.load( 'table.json', onLoad1);

function onLoad1( table ) {

	table.scale.set( 5, 5, 5 );
	table.position.set( 32, 0.02, -9 );

	scene.add( table );
	animate();
}

const loader2 = new THREE.ObjectLoader();
loader2.load( 'emergency.json', onLoad2);

function onLoad2( emergency ) {

	emergency.scale.set( 2.3, 2.3, 2.3 );
	emergency.position.set( 8, 0.02, 5 );

	scene.add( emergency );
	animate();
}

const loader3 = new THREE.ObjectLoader();
loader3.load( 'amongus.json', onLoad3);

function onLoad3( amongus ) {

	amongus.scale.set( 2.2, 2.2, 2.2);
	amongus.position.set( -70, 0.02, 5 );

	scene.add( amongus );
	animate();
}

const loader4 = new THREE.ObjectLoader();
loader4.load( 'amongus1.json', onLoad4);

function onLoad4( amongus1 ) {

	amongus1.scale.set( 2.2, 2.2, 2.2);
	amongus1.position.set( -80, 0.02, 119 );

	scene.add( amongus1 );
	animate();
}

const loader5 = new THREE.ObjectLoader();
loader5.load( 'amongus2.json', onLoad5);

function onLoad5( amongus2 ) {

	amongus2.scale.set( 2.2, 2.2, 2.2);
	amongus2.position.set( -3.8, 0.02, -16 );
	amongus2.rotation.set( 0, 3, 0 );

	scene.add( amongus2 );
	animate();
}

const loader6 = new THREE.ObjectLoader();
loader6.load( 'amongus3.json', onLoad6);

function onLoad6( amongus3 ) {

	amongus3.scale.set( 2.2, 2.2, 2.2);
	amongus3.position.set( -19, 0.03, -16 );

	scene.add( amongus3 );
	animate();
}

//medbay
const loader7 = new THREE.ObjectLoader();
loader7.load( 'medbay.json', onLoad7);

function onLoad7( medbay ) {

	medbay.scale.set( 1.2, 1, 1.2 );
	medbay.position.set( -39, 0.03, 26 );
	medbay.rotation.set( 0, 1.6, 0 );

	scene.add( medbay );
	animate();
}

const medwallGeo = new THREE.BoxGeometry( 1, 10, 5);
const medwallMat = new THREE.MeshStandardMaterial ( {color: 0x515151} );
const medwall = new THREE.Mesh( medwallGeo, medwallMat );

medwall.receiveShadow = true;

medwall.position.set( -42, 5, 7);
scene.add( medwall );

//medwall1
const medwall1Geo = new THREE.BoxGeometry( 1, 10, 5);
const medwall1Mat = new THREE.MeshStandardMaterial ( {color: 0x515151} );
const medwall1 = new THREE.Mesh( medwall1Geo, medwall1Mat );

medwall1.receiveShadow = true;

medwall1.position.set( -35, 5, 7);
scene.add( medwall1 );

//medwall2
const medwall2Geo = new THREE.BoxGeometry( 10, 10, 1);
const medwall2Mat = new THREE.MeshStandardMaterial ( {color: 0x515151} );
const medwall2 = new THREE.Mesh( medwall2Geo, medwall2Mat );

medwall2.receiveShadow = true;

medwall2.position.set( -46.5, 5, 10);
scene.add( medwall2 );

//medwall3
const medwall3Geo = new THREE.BoxGeometry( 7, 10, 1);
const medwall3Mat = new THREE.MeshStandardMaterial ( {color: 0x515151} );
const medwall3 = new THREE.Mesh( medwall3Geo, medwall3Mat );

medwall3.receiveShadow = true;

medwall3.position.set( -32, 5, 10);
scene.add( medwall3 );


//upper engine
const loader8 = new THREE.ObjectLoader();
loader8.load( 'upper.json', onLoad8);

function onLoad8( upper ) {

	upper.scale.set( 1.2, 1, 1.2 );
	upper.position.set( -75, 0.03, 0 );
	upper.rotation.set( 0, 0, 0 );

	scene.add( upper );
	animate();
}

const upperwallGeo = new THREE.BoxGeometry( 1, 10, 14);
const upperwallMat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const upperwall = new THREE.Mesh( upperwallGeo, upperwallMat);

upperwall.receiveShadow = true;

upperwall.position.set( -56, 5, -12);
scene.add( upperwall );

//upperwall1
const upperwall1Geo = new THREE.BoxGeometry( 1, 10, 15);
const upperwall1Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const upperwall1 = new THREE.Mesh( upperwall1Geo, upperwall1Mat);

upperwall1.receiveShadow = true;

upperwall1.position.set( -56, 5, 12);
scene.add( upperwall1 );

//upperwall2
const upperwall2Geo = new THREE.BoxGeometry( 7, 10, 1);
const upperwall2Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const upperwall2 = new THREE.Mesh( upperwall2Geo, upperwall2Mat);

upperwall.receiveShadow = true;

upperwall2.position.set( -59, 5, 19);
scene.add( upperwall2 );

//upperwall3
const upperwall3Geo = new THREE.BoxGeometry( 23, 10, 1);
const upperwall3Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const upperwall3 = new THREE.Mesh( upperwall3Geo, upperwall3Mat);

upperwall3.receiveShadow = true;

upperwall3.position.set( -82, 5, 19);
scene.add( upperwall3 );

//lower engine
const loader9 = new THREE.ObjectLoader();
loader9.load( 'lower.json', onLoad9);

function onLoad9( lower ) {

	lower.scale.set( 1.2, 1, 1.2 );
	lower.position.set( -70, 0.03, 134 );
	lower.rotation.set( 0, 0, 0 );

	scene.add( lower );
	animate();
}

const lowerwall3Geo = new THREE.BoxGeometry( 7, 10, 1);
const lowerwall3Mat = new THREE.MeshStandardMaterial( {color: 0x515151} );
const lowerwall3 = new THREE.Mesh( lowerwall3Geo, lowerwall3Mat);

lowerwall3.receiveShadow = true;

lowerwall3.position.set( -72, 5, 115);
scene.add( lowerwall3 );

const loader10 = new THREE.ObjectLoader();
loader10.load( 'reactor.json', onLoad10);

function onLoad10( reactor ) {

	reactor.scale.set( 1.2, 1, 1.2 );
	reactor.position.set( -87, 0.03, 75 );
	reactor.rotation.set( 0, 0, 0 );

	scene.add( reactor );
	animate();
}

const loader11 = new THREE.ObjectLoader();
loader11.load( 'security.json', onLoad11);

function onLoad11( security ) {

	security.scale.set( 1.2, 1, 1.2 );
	security.position.set( -43, 0.03, 75 );
	security.rotation.set( 0, 0, 0 );

	scene.add( security );
	animate();
}

const loader12 = new THREE.ObjectLoader();
loader12.load( 'electrical.json', onLoad12);

function onLoad12( electrical ) {

	electrical.scale.set( 1.2, 1, 1.2 );
	electrical.position.set( -11, 0.03, 107 );
	electrical.rotation.set( 0, 0, 0 );

	scene.add( electrical );
	animate();
}

const loader13 = new THREE.ObjectLoader();
loader13.load( 'storage.json', onLoad13);

function onLoad13( storage ) {

	storage.scale.set( 1.2, 1, 1.2 );
	storage.position.set( 24, 0.03, 125 );
	storage.rotation.set( 0, 0, 0 );

	scene.add( storage );
	animate();
}


const loader14 = new THREE.ObjectLoader();
loader14.load( 'amongus4.json', onLoad14);

function onLoad14( amongus4 ) {

	amongus4.scale.set( 2.2, 2.2, 2.2);
	amongus4.position.set( -92, 0.02, 75 );
	amongus4.rotation.set( 0, 0, 0 );

	scene.add( amongus4 );
	animate();
}

const loader15 = new THREE.ObjectLoader();
loader15.load( 'amongus5.json', onLoad15);

function onLoad15( amongus5 ) {

	amongus5.scale.set( 2.2, 2.2, 2.2);
	amongus5.position.set( -46, 0.02, 53 );
	amongus5.rotation.set( 0, 5, 0 );

	scene.add( amongus5 );
	animate();
}

const loader16 = new THREE.ObjectLoader();
loader16.load( 'amongus6.json', onLoad16);

function onLoad16( amongus6 ) {

	amongus6.scale.set( 2.2, 2.2, 2.2);
	amongus6.position.set( -20, 0.02, 90 );
	amongus6.rotation.set( 0, -2, 0 );

	scene.add( amongus6 );
	animate();
}

const loader17 = new THREE.ObjectLoader();
loader17.load( 'amongus7.json', onLoad17);

function onLoad17( amongus7 ) {

	amongus7.scale.set( 2.2, 2.2, 2.2);
	amongus7.position.set( 23, 0.02, 130 );
	amongus7.rotation.set( 0, -2, 0 );

	scene.add( amongus7 );
	animate();
}


/* floors */

const floorGeo = new THREE.PlaneGeometry( 9 , 99 );
const floorMat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
floorMat.metalness = 0.3
floorMat.roughness = 0.25

const floor = new THREE.Mesh( floorGeo, floorMat );
floor.rotation.x = Math.PI * -0.5;

floor.position.set( -66, 0, 68);

scene.add( floor );

const floor2Geo = new THREE.PlaneGeometry( 87 , 14 );
const floor2Mat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
floor2Mat.metalness = 0.3
floor2Mat.roughness = 0.25

const floor2 = new THREE.Mesh( floor2Geo, floor2Mat );
floor2.rotation.x = Math.PI * -0.5;

floor2.position.set( -37, 0, 132 );

scene.add( floor2 );

const floor3Geo = new THREE.PlaneGeometry( 13 , 21 );
const floor3Mat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
floor3Mat.metalness = 0.3
floor3Mat.roughness = 0.25

const floor3 = new THREE.Mesh( floor3Geo, floor3Mat );
floor3.rotation.x = Math.PI * -0.5;

floor3.position.set( 22, 0, 75 );

scene.add( floor3 );

const floor4Geo = new THREE.PlaneGeometry( 20 , 10 );
const floor4Mat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
floor4Mat.metalness = 0.3
floor4Mat.roughness = 0.25

const floor4 = new THREE.Mesh( floor4Geo, floor4Mat );
floor4.rotation.x = Math.PI * -0.5;

floor4.position.set( 6, 0, 69 );

scene.add( floor4 );

const floor5Geo = new THREE.PlaneGeometry( 13 , 50 );
const floor5Mat = new THREE.MeshStandardMaterial( { color: 0xA8A8A8, side: THREE.DoubleSide } );
floor5Mat.metalness = 0.3
floor5Mat.roughness = 0.25

const floor5 = new THREE.Mesh( floor5Geo, floor5Mat );
floor5.rotation.x = Math.PI * -0.5;

floor5.position.set( 2, 0, 40 );

scene.add( floor5 );

/* animation */
function animate() {

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}