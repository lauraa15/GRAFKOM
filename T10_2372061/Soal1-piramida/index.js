import * as THREE from "three";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 15; 
cam.position.y = 2; 

// RENDERER & SETUP
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// GEOMETRY
const vertices = new Float32Array([
   // titik puncak
   0, 6, 0, //0
   
   //limas 1
    1, 4, 1, //1
    1, 4, -1, //2
    -1, 4, 1, //3
    -1, 4, -1, //4

    //limas 2
    2, 2, 2, //5
    2, 2, -2, //6
    -2, 2, 2, //7
    -2, 2, -2, //8
    0, 5.99, 0, //9 / puncaknya

    3, 0, 3, //10
    3, 0, -3, //11
    -3, 0, 3, //12
    -3, 0, -3, //13
    0, 5.99, 0, //14 / puncaknya


]);
const indeksKotak = [
    //limas pertama
    0,1,2,
    0,1,3,
    0,2,4,
    0,3,4,
    1,2,3,
    2,3,4,

    //limas kedua
    9,5,6,
    9,5,7,
    9,6,8,
    9,7,8,
    5,6,7,
    6,7,8,

    //limas ketiga
    14,10,11,
    14,10,12,
    14,11,13,
    14,12,13,
    10,11,12,
    11,12,13,

];

const colors = new Float32Array([
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,

    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,

    
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

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
    // mesh.rotation.x += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

// Tambahkan canvas ke BODY
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);
