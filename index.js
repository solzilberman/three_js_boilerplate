var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera, renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.ShaderMaterial( { 
    uniforms: {

    },
    vertexShader: _vert,
    fragmentShader: _frag
 } );
var shaderCube = new THREE.Mesh( geometry, material );
shaderCube.position.x = 2.0;
scene.add( shaderCube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
};

animate();