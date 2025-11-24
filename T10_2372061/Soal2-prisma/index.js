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
    //segitiga belakang
    0,2,-3,  //0
    2,0,-3,  //1
    -2,0,-3, //2
    
    //segitiga depan
    0,2,3, //3
    2,0,3, //4
    -2,0,3, //5
]);

const indeksKotak = [
    // segitiga belakang
    0,1,2,

    //segitiga depan
    3,4,5,

    //sisi
    0,3,2,
    0,3,4,
    0,1,4,
    1,2,4,
    1,2,5,
    2,3,5,
    2,4,5

    
    // 1,2,5,
    // 1,2,3
    // 0,5,3,
    // 0,3,4,


    // 0,3,4,

    // 0,3,1,
    // 0,3,4,

];

const colors = new Float32Array([
    1,0,0,
    1,0,0,
    1,0,0,
    
    0,1,0,
    0,1,0,
    0,1,0,

    1,0,1,
    1,0,1,
    1,0,1,

    1,1,0,
    1,1,0,
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
    // mesh.rotation.x += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

// Tambahkan canvas ke BODY
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);

// const geo = new THREE.BoxGeometry(1,1,1);
// const mat = new THREE.MeshBasicMaterial({color: 0x66f3fa});
// const mesh = new THREE.Mesh(geo, mat);

//masukin ke scene
// scene.add(mesh);

// document.body.appendChild(renderer.domElement);
// renderer.render(scene,cam);

// renderer.setSize(window.innerWidth, window.innerHeight,1);