import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { color, normalGeometry } from "three/tsl";
import { BoxGeometry, PointLight } from "three/webgpu";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
scene.background = new THREE.Color(0x7a7a7a);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
cam.position.z = 15;


// TEXTURE
// const batu_tex = new THREE.TextureLoader().load("/texture/batu-normal.jpeg");
// console.log(batu_tex);
// const batu_normal = new THREE.TextureLoader().load("/texture/batu-tex.jpeg");

// LIGHTING
const ambient = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xffffff, 2);keyLight.position.set(5, 5, 5);
scene.add(keyLight);

const fillLight = new PointLight(0xffffff, 1);
fillLight.position.set(-5, 5, 5);
scene.add(fillLight);

const backLight = new THREE.DirectionalLight(0xffffff, 1.5);backLight.position.set(0, -5, 5);
scene.add(backLight);

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
scene.add( spotLight );

//HELPERR
const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
const fillLightHelper = new THREE.PointLightHelper(fillLight, 1);
const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
scene.add(keyLightHelper);
scene.add(fillLightHelper);
scene.add(backLightHelper);

//GEOMETRY
const geo = new BoxGeometry(2,2,2);
const mat = new THREE.MeshLambertMaterial({color:0x555555, side:THREE.DoubleSide,});
const mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0,0,0);
scene.add(mesh);

const geo2 = new THREE.CylinderGeometry(3,3,0.5,64,1,);
const mat2 = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const mesh2 = new THREE.Mesh( geo2,mat2 );
scene.add(mesh2);
mesh2.position.set(0,0,-1);
mesh2.rotateOnAxis(new THREE.Vector3(1,0,0), Math.PI/2);
scene.add(mesh2);

const lantai_geo = new THREE.PlaneGeometry(50,50,50,50);
const lantai_mat = new THREE.MeshPhongMaterial({color:0x000000, side:THREE.DoubleSide});
const lantai_mesh = new THREE.Mesh(lantai_geo, lantai_mat);
lantai_mesh.position.set(0,0,-1.5);
scene.add(lantai_mesh);



// TITIK
// const vertices = new Float32Array([

// const geo = new THREE.BufferGeometry();
// geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// geo.setAttribute("uv", new THREE.BufferAttribute(uv_index, 2));

// const mat = new THREE.MeshLambertMaterial({color:0xff0000, map:tex_array});

let controls = new OrbitControls(cam, renderer.domElement);

document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

function draw() {
    mesh.rotation.z += 0.01;
    
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}

draw();

