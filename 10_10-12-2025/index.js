import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ui_overlay from "./ui_overlays";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 10; 

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// TEXTURE
const kayu_tex = new THREE.TextureLoader().load("./wood-texture.png");

// LIGHT
const light = new THREE.PointLight(0xffffff, 30);
light.position.set(0,4,2);
scene.add(light);

let light2 = new THREE.PointLight(0xffffff, 30);
light2.position.set(0,-4,2);
scene.add(light2);

const geo = new THREE.SphereGeometry(1,50,50);
// geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
// geo.setIndex(indeksKotak);
// geo.setAttribute('uv', new THREE.BufferAttribute(angka_uv,2));

const mat = new THREE.MeshLambertMaterial({map:kayu_tex});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const lantai_geo = new THREE.PlaneGeometry(10,10,1,1);
const lantai_mat = new THREE.MeshBasicMaterial({color:0xffffff});
const lantai_mesh = new THREE.Mesh(lantai_geo, lantai_mat);
scene.add(lantai_mesh);
lantai_mesh.position.z = -3;

// ORBIT CONTROLS
let controls = new OrbitControls(cam, renderer.domElement);
controls.listenToKeyEvents(window);
controls.enablePan = true;
controls.keys = {
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    BOTTOM: 'ArrowDown',
};
controls.enableDamping = true;
controls.dampingFactor = 0.1;
// scene.add(controls);

controls.target.set(0, 0, 0);
cam.lookAt(controls.target);

const gui = new ui_overlay();
mesh.matrixAutoUpdate = false;

function draw(){
    controls.update();
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;

    let rMatrix = new THREE.Matrix4().makeRotationY(gui.param.y);
    let tMatrix = new THREE.Matrix4().makeTranslation(gui.param.x, 0, gui.param.z);
    let result = new THREE.Matrix4().multiplyMatrices(tMatrix, rMatrix);

    mesh.matrix.fromArray(result.toArray());

    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();