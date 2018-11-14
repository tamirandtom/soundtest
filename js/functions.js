var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var audioFile = '1.mp3';
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color: 0xff0000
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 0;

var listener = new THREE.AudioListener();
camera.add(listener);


var created = false;

function createSound() {
	var sound = new THREE.PositionalAudio(listener);
	var oscillator = listener.context.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(440, sound.context.currentTime);
	oscillator.start(0);
	sound.setNodeSource(oscillator);
	sound.setRefDistance(1);
	sound.setVolume(1);
	cube.add(sound);
	created = true;
}

function createFlyingObject() {
	if (!created) {
		createSound();
	}
	cube.position.z = 0;
}


window.addEventListener('touchstart', function () {
	createFlyingObject();
}, false);

// window.addEventListener('click', function () {
// 	createFlyingObject();
// }, false);





var controls = new THREE.DeviceOrientationControls(camera);


var animate = function () {
	requestAnimationFrame(animate);
	controls.update();
	cube.position.z -= 0.05;

	renderer.render(scene, camera);
};

animate();