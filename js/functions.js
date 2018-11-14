var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var audioFile = '1.mp3';
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color: 0x0000FF
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add(listener);

// create the PositionalAudio object (passing in the listener)



window.addEventListener('touchstart', function() {
	var sound = new THREE.PositionalAudio(listener);
	var oscillator = listener.context.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(440, sound.context.currentTime);
	oscillator.start(0);
	sound.setNodeSource(oscillator);
	sound.setRefDistance(1);
	sound.setVolume(1);
	cube.add(sound);


}, false);





var controls = new THREE.DeviceOrientationControls(camera);


var animate = function () {
	requestAnimationFrame(animate);
	controls.update();
	cube.rotation.y += 0.02;

	renderer.render(scene, camera);
};

animate();