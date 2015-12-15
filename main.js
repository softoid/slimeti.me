window.onload = main;

function main() {
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, 
	window.innerWidth / window.innerHeight, 0.1, 1000);
	...
	var planeGeometry = new THREE.PlaneGeometry(60,40,1,1);
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	...
	scene.add(plane);
	var ambientLight = new THREE.AmbientLight(0x0c0c0c);
	scene.add(ambientLight);
	...
	var spotLight = new THREE.SpotLight( 0xffffff );
	...
	scene.add( spotLight );

}
