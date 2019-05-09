import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var geometry = new THREE.BoxGeometry( 2, 1, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );
var keyboard = {}
var player = { height: 1.8}
var floor;

export default function animate () {

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    scene.add( cube );

    floor = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10, 2, 2),
        new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
    );

    floor.rotation.x -= Math.PI / 2;
    scene.add( floor );

    camera.position.z = 8;
    camera.position.y = 1.8;
    // camera.position.set(0, player.height, -8);
    // camera.lookAt(new THREE.Vector3(0, player.height, 1));

// KEYBOARD INPUTS

    // W KEY
    if(keyboard[68]) {
        camera.rotation.y -= Math.PI * 0.01;
    }

    // S KEY
    if(keyboard[83]) {
        camera.rotation.x -= Math.PI * 0.01;
    }

    // A KEY
    if(keyboard[65]) {
        camera.rotation.y += Math.PI * 0.01;
    }

    // D KEY
    if(keyboard[87]) {
        camera.rotation.x += Math.PI * 0.01;
    }

    renderer.render( scene, camera );
};

function keyUp(e) {
    keyboard[e.keyCode] = false;
}

function keyDown(e) {
    keyboard[e.keyCode] = true;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
