import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 30;
cam.position.y = 2;

// RENDERER 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient);

// TEXTURE
const loader = new THREE.TextureLoader();
const baseTex = loader.load("./textures/basecolor.png");
const aoTex = loader.load("./textures/ambientOcclusion.png");
const normalTex = loader.load("./textures/normal.png");
const roughnessTex = loader.load("./textures/roughness.png");

// GEOMETRY
const geometry = new THREE.TorusGeometry(5, 2, 16, 100);
geometry.attributes.uv2 = geometry.attributes.uv;

// MATERIAL
const material = new THREE.MeshStandardMaterial({
    map: baseTex,
    aoMap: aoTex,
    normalMap: normalTex,
    roughnessMap: roughnessTex,
    roughness: 1.0,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// ORBIT CONTROLS
const controls = new OrbitControls(cam, renderer.domElement);

function draw() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

document.body.appendChild(renderer.domElement);