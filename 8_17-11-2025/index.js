import * as THREE from "three";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 5; 

// RENDERER & SETUP
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// BUFFER GEOMETRY
const vertices = new Float32Array([
    -1, -1, 0,  //titik 0
     1, 1, 0,    //titik 1
    -1,  1, 0,  //titik 2
     1, -1, 0,   //titik 3

    -1, -1, 2,  //titik 4
     1, 1, 2,    //titik 5
    -1,  1, 2,  //titik 6
     1, -1, 2,   //titik 7
]);

const indeksKotak = [
    //depan
    0,1,2,
    3,0,1,

    //blkg
    4,5,6,
    7,4,5,
    
    //kiri
    2,4,6,
    0,2,4,

    //kanan
    1,3,5,
    3,5,7,

    //atas
    3,4,7,
    // 4,5,6,


    // 1,2,6,


];

const colors = new Float32Array([
    1,0,0,
    0,1,0,
    0,0,1,
    1,1,0,

    1,0,0,
    0,1,0,
    0,0,1,
    1,1,0,
]);

const geometry = new THREE.BufferGeometry(); 
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
// geometry.setAttribute();
geometry.setIndex(indeksKotak);

const material = new THREE.MeshBasicMaterial({ vertexColors:true, side: THREE.DoubleSide });//doubleside biar bolak balik
const mesh = new THREE.Mesh(geometry, material);


scene.add(mesh);

function draw(){
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

// Tambahkan canvas ke BODY
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);
