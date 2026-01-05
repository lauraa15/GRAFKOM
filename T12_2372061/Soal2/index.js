import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
scene.background = new THREE.Color(0x7a7a7a);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
cam.position.z = 50;

// LIGHTING
const ambient = new THREE.AmbientLight(0x404040, 1);
scene.add(ambient);

const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(5, 10, 5);
pointLight.castShadow = true; 
pointLight.shadow.mapSize.width = 1024; 
pointLight.shadow.mapSize.height = 1024;
scene.add(pointLight);

// GEOMETRY
const geometry = new THREE.TorusKnotGeometry(5, 1, 100, 10, 3, 2);
const material = new THREE.MeshPhongMaterial({ color: 0xfffff0 });
const torusKnot = new THREE.Mesh(geometry, material);
torusKnot.position.set(0, 5, 0);
torusKnot.castShadow = true;
scene.add(torusKnot);

const lantai_geo = new THREE.PlaneGeometry(50, 50);
const lantai_mat = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const lantai_mesh = new THREE.Mesh(lantai_geo, lantai_mat);
lantai_mesh.rotation.x = -Math.PI / 2;
lantai_mesh.position.y = -5;
lantai_mesh.receiveShadow = true;
scene.add(lantai_mesh);

// ORBIT CONTROLS
let controls = new OrbitControls(cam, renderer.domElement);


function draw() {
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;

  renderer.render(scene, cam);
  requestAnimationFrame(draw);
}

draw();