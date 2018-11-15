
// Define scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var controls = new THREE.DeviceOrientationControls(camera);

// Set up render window
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Creating a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color: 0xff0000
});
var cube = new THREE.Mesh(geometry, material);



scene.add(cube);
camera.position.z = 0;

// Creting an audio listener 
var listener = new THREE.AudioListener();
camera.add(listener);

// Make sure you create the audio once
var created = false;
var sound = new THREE.PositionalAudio(listener);
var oscillator = listener.context.createOscillator();


	// Creating the sound object and placing it in the scene

function createSound() {
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(440, sound.context.currentTime);
	oscillator.start(0);
	sound.setNodeSource(oscillator);
	sound.setRefDistance(1);
	sound.setVolume(1);
	cube.add(sound);
	created = true;
}

// Create / Reset the flying box position
function createFlyingObject() {
	if (!created) {
		createSound();
	}
	oscillator.frequency.setValueAtTime(Math.round((Math.random() * 100)) + 150, sound.context.currentTime);
	cube.position.z = -50;
	cube.position.x = Math.round((Math.random() * 40)) - 20;
	cube.position.y = Math.round((Math.random() * 40)) - 20;
}


// Start on touch
window.addEventListener('touchstart', function () {
	createFlyingObject();
}, false);

window.addEventListener('click', function () {
	createFlyingObject();
}, false);







// camera.updateMatrix();
// camera.updateMatrixWorld();
// var frustum = new THREE.Frustum();
// frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));  



var animate = function () {
	requestAnimationFrame(animate);
	controls.update();

	// Move the cube
	cube.position.z += 0.3;

	// Rotate the cube
	cube.rotation.z += 0.3;
	cube.rotation.y += 0.1;

	// Reset position if out of bounds
	if (cube.position.z > 50) {
		cube.position.z = -50;
	}



	// check in view
	// if (frustum.containsPoint(cube.position)) {
	// 	cube.material.color.setHex('0x'+Math.floor(Math.random()*16777215).toString(16)); 

	// }

	renderer.render(scene, camera);
};

animate();