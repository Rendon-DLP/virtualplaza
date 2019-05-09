import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var geometry = new THREE.BoxGeometry( 2, 1, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );
var keyboard = {}

export default function animate () {

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 12;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    scene.add( cube );

// KEYBOARD INPUTS

    if(keyboard[37]) {
        camera.rotation.y -= Math.PI * 0.01;
    }

    if(keyboard[38]) {
        camera.rotation.x -= Math.PI * 0.01;
    }

    if(keyboard[39]) {
        camera.rotation.y += Math.PI * 0.01;
    }

    if(keyboard[40]) {
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
