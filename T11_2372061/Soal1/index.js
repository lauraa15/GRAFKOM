import * as THREE from "three";

// SCENE & CAMERA
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 5;

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// TEXTURE
const number_tex = [];
for (var i = 1; i <= 20; i++) {
    number_tex.push(new THREE.TextureLoader().load(`./numbers/${i}.png`));
}

// TITIK
const vertices = new Float32Array([
    //1
    1.618, 0, -1,
    1, 1.618, 0,
    0, 1, -1.618,
    //2
    1, 1.618, 0,
    -1, 1.618, 0,
    0, 1, -1.618,
    //3
    -1.618, 0, -1,
    0, -1, -1.618,
    0, 1, -1.618,
    //4
    -1, 1.618, 0,
    -1.618, 0, -1,
    0, 1, -1.618,
    //5
    -1, 1.618, 0,
    -1.618, 0, 1,
    -1.618, 0, -1,

    //6
    -1.618, 0, 1,
    -1, -1.618, 0,
    -1.618, 0, -1,
    //7
    1.618, 0, -1,
    0, -1, -1.618,
    0, 1, -1.618,
    //8
    0, -1, -1.618,
    -1, -1.618, 0,
    1, -1.618, 0,
    //9
    -1.618, 0, -1,
    -1, -1.618, 0,
    0, -1, -1.618,
    //10
    1.618, 0, 1,
    1, -1.618, 0,
    1.618, 0, -1,

    //11
    1.618, 0, -1,
    1, -1.618, 0,
    0, -1, -1.618,

    //12
    1, 1.618, 0,
    1.618, 0, 1,
    1.618, 0, -1,
    //13     
    0, 1, 1.618,
    1.618, 0, 1,
    0, -1, 1.618,
    //14
    0, 1, 1.618,
    1.618, 0, 1,
    1, 1.618, 0,
    //15
    1.618, 0, 1,
    1, -1.618, 0,
    0, -1, 1.618,

    //16
    0, -1, 1.618,
    -1, -1.618, 0,
    1, -1.618, 0,
    //17
    -1.618, 0, 1,
    -1, -1.618, 0,
    0, -1, 1.618,
    //18
    -1, 1.618, 0,
    -1.618, 0, 1,
    0, 1, 1.618,
    //19
    0, 1, 1.618,
    -1.618, 0, 1,
    0, -1, 1.618,
    //20
    1, 1.618, 0,
    -1, 1.618, 0,
    0, 1, 1.618,
]);

// const geo = new THREE.BufferGeometry();
// geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// geo.setAttribute("uv", new THREE.BufferAttribute(uv_index, 2));

// const mat = new THREE.MeshBasicMaterial({color:0xff0000, map:tex_array});
const mat_array = [];
for (var i = 0; i < number_tex.length; i++) {
    mat_array.push(new THREE.MeshBasicMaterial({ map: number_tex[i], side: THREE.DoubleSide }));
}

const mesh_array = [];
for (var i = 0; i < vertices.length / 9; i++) {
    const geometry = new THREE.BufferGeometry();

    const segitiga = new Float32Array(vertices.slice(i * 9, i * 9 + 9));
    geometry.setAttribute("position", new THREE.BufferAttribute(segitiga, 3));

    const uvs = new Float32Array([
        0.5, 0,
        0, 1,
        1, 1,
    ]);
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

    const mesh = new THREE.Mesh(geometry, mat_array[i]);

    scene.add(mesh);
    mesh_array.push(mesh);
}

document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);


function draw() {
      mesh_array.forEach((mesh) => {
        // mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      });

    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}

draw();
