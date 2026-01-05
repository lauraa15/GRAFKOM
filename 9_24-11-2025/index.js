import * as THREE from "three";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 5; 

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// TEXTURE
const kayu_tex = new THREE.TextureLoader().load("./img/wood-texture.png")
const normal_tex = new THREE.TextureLoader().load("./img/paper.jpg")
const rough_tex = new THREE.TextureLoader().load("./img/abstract.jpeg")

// // box pertama
// const geo = new THREE.BoxGeometry(1,1,1);
// const mat = new THREE.MeshBasicMaterial({map: kayu_tex, color: 0x964b00});
// const mesh= new THREE.Mesh(geo, mat);

// mesh.position.set(2,0,0);
// scene.add(mesh);

// // box kedua
// const mat2 = new THREE.MeshLambertMaterial({map: kayu_tex})
// const mesh2 = new THREE.Mesh(geo, mat2);
// mesh2.position.set(-2,0,0);
// scene.add(mesh2);

const geo3 = new THREE.SphereGeometry(1,50,50);
const mat3 = new THREE.MeshLambertMaterial({map: kayu_tex, normalMap: normal_tex, bumpMap:rough_tex})
const mesh3 = new THREE.Mesh(geo3, mat3);
scene.add(mesh3);


let light = new THREE.PointLight(0xffffff,100);
light.position.set(0,4,2);
scene.add(light);

let light2 = new THREE.PointLight(0xffffff,100);
light2.position.set(0,-4,2);
scene.add(light2);

function draw(){
    // mesh.rotation.y += 0.01;
    // mesh.rotation.x += 0.01;
    // mesh2.rotation.y += 0.01;
    // mesh2.rotation.x += 0.01;

    mesh3.rotation.x +=0.01;
    // mesh3.rotation.z +=0.01;

    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

// Tambahkan canvas ke BODY
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);
