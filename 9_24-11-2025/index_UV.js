import * as THREE from "three";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 5; 

const abstract_tex = new THREE.TextureLoader().load("./img/abstract.jpeg")
const huruf_a = new THREE.TextureLoader().load("./img/hurufA.jpg");
const huruf_r = new THREE.TextureLoader().load("./img/hurufR.png");


// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

let vertices = new Float32Array([
    -1,-1, 0,
    -1, 1, 0,
     1,-1, 0,
     1, 1, 0,

]);

const indeksKotak = [
    0,2,1,
    2,3,1
]

const angka_uv = new Float32Array([
    0,0,
    0,1,
    1,0,
    1,1,
]);
const tex_array = [
    new THREE.MeshBasicMaterial({map: huruf_r}),
    new THREE.MeshBasicMaterial({map: huruf_a}),
]

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geo.setIndex(indeksKotak);
geo.setAttribute('uv', new THREE.BufferAttribute(angka_uv,2));

const mat = new THREE.MeshBasicMaterial({color:0xff0000, map:tex_array});
const mesh = new THREE.Mesh(geo, tex_array);

scene.add(mesh);


function draw(){
    // mesh.rotation.y += 0.01;
    // mesh.rotation.x += 0.01;
    // mesh2.rotation.y += 0.01;
    // mesh2.rotation.x += 0.01;

    // mesh3.rotation.x +=0.01;
    // mesh3.rotation.z +=0.01;

    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

// Tambahkan canvas ke BODY
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);
