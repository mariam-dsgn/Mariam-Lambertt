console.log('vr-sketch.js')

import { VRButton } from './js/VRButton.js';

var scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x505050 );

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//to update the window size while resizing it
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height
    camera.updateProjectionMatrix();
})

//Control orbit: check mor kind of controls(like fly) on threjs.org
var controls = new THREE.OrbitControls(camera, renderer.domElement)

//Lights
var ambientLight = new THREE.AmbientLight(0xffffff, 5.0) //color, intensity
scene.add(ambientLight)


var VR = new VRButton.createButton(renderer)


// //create a shape
// var geometry = new THREE.BoxGeometry(10000,10000,10000)//x, y, z axis
// // var geometry = new THREE.SphereGeometry(1,1,1)//x, y, z axis
// var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false } );



// var cube = new THREE.Mesh ( geometry, material )
// scene.add( cube );



// 		var geomet = new THREE.SphereGeometry(5,35,35)//x, y, z axis
// // var geometry = new THREE.SphereGeometry(1,1,1)//x, y, z axis
// var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true } );
// var sphere = new THREE.Mesh ( geomet, material )
// scene.add( sphere );



let materialArray = []
let texture_ft = new THREE.TextureLoader().load('./models/cocoa_ft.jpg');
let texture_bk = new THREE.TextureLoader().load('./models/cocoa_bk.jpg');
let texture_up = new THREE.TextureLoader().load('./models/cocoa_up.jpg');
let texture_dn = new THREE.TextureLoader().load('./models/cocoa_dn.jpg');
let texture_rt = new THREE.TextureLoader().load('./models/cocoa_rt.jpg');
let texture_lf = new THREE.TextureLoader().load('./models/cocoa_lf.jpg');



materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }))
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }))
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }))
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }))
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }))





for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
let skybox = new THREE.Mesh(skyboxGeo, materialArray);
scene.add(skybox);
animate();






camera.position.z = 3


//game logic
function update() {

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
};


//draw scene
function render() {
    renderer.render(scene, camera)
}


//run animate(update, render, repeat)
function animate() {
    requestAnimationFrame(animate)
    // update();
    render()

}

// animate();