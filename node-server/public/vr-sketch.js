console.log('vr-sketch.js')


import { VRButton } from './jsm/webxr/VRButton.js';
import { XRControllerModelFactory } from './jsm/webxr/XRControllerModelFactory.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);


document.body.appendChild(renderer.domElement);



window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height
    camera.updateProjectionMatrix();
}) //to update the window size while resizing it


//Control orbit: check mor kind of controls(like fly) on threjs.org
controls = new THREE.OrbitControls(camera, renderer.domElement)


//import obj files
var loader = new THREE.ObjectLoader();
loader.load(
    'models/island.obj',
    function(object) {
        scene.add(object)
    }
);

// called when loading is in progresses
function loads(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

}

// called when loading has errors
function errory(error) {

    console.log('An error happened');

}







camera.position.z = 3


//Lights
var ambientLight = new THREE.AmbientLight(0xffffff, 5.0) //color, intensity
scene.add(ambientLight)



// //create a shape
// var geometry = new THREE.BoxGeometry(1,1,1)//x, y, z axis


// //create a material, color or image texture
// var material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: false } );
// var cube = new THREE.Mesh ( geometry, material )
// scene.add( cube );






//game logic
var update = function() {

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
};

//draw scene
var render = function() {
    renderer.render(scene, camera)
}



//run game loop(update, render, repeat)
var GameLoop = function() {
    requestAnimationFrame(GameLoop)
    update();
    render()

}

GameLoop();