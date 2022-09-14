/* Images for the planets were sourced from "https://www.solarsystemscope.com/textures/" */

/* setup */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 1000 );

camera.position.set( 0, 40, 400 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );

/* lighting */

const sunLight = new THREE.PointLight( 0xffffff, 1, 0 );
sunLight.position.set( 0, 0, 0 );
scene.add( sunLight );

/* scene */

/* circle base
const baseGeo = new THREE.CircleGeometry( 50, 50 );
const baseMat = new THREE.MeshStandardMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const base = new THREE.Mesh( baseGeo, baseMat );
base.rotation.x = Math.PI * -0.5;
scene.add( base );
*/

const loader = new THREE.ObjectLoader();
loader.load( 'resources/solarsystem.json', onLoad );

function onLoad( solars ) {
    
    solars.scale.set( 20, 20, 20 );
    solars.position.set( 0, 0, 0 );
    
    scene.add( solars );
}

/* animation */
function animate() {
    
    controls.update();
    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();