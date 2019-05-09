import * as THREE from "three";

// THE SCENE
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

// THE SHAPE
var geometry = new THREE.BoxGeometry( 2, 1, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var cube = new THREE.Mesh( geometry, material );


export function theScene() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}

export function theShape() {
    theScene()
    scene.add( cube );
    camera.position.z = 7;
}

export default function animate () {
    theShape()
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
    };