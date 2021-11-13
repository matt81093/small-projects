import * as THREE from "three";

const scene = initScene();
const camera = initCamera();
const torus = createTorus();
setCamera(camera);
addToScene(scene, torus);
let renderer = null
console.log('Prep done!')

// const renderer = initRenderer(bg)

function initScene() {
    return new THREE.Scene();
}

function initCamera() {
    return new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
}

function setCamera() {
    return camera.position.setZ(30);
}

function initRenderer(canvas) {
    return new THREE.WebGL1Renderer({
        antialias: true,
        canvas: canvas
        // canvas: document.querySelector("#bg"),
        // canvas: document.getElementById("#bg")
    });
}

function setRenderer(renderer) {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function createTorus() {
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff6347,
        wireframe: true,
    });
    return new THREE.Mesh(geometry, material);
} // This would be better with geometry and material as parameters

function addToScene(scene, object) {
    scene.add(object);
}

function getCanvas() {
    return document.getElementById('#bg');
    // this.shadowRoot.getElementById('#bg')
}

// function cheekyAnimate(renderer, scene, camera, torus) {
// }


function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render(scene, camera);
}

function resize(renderer, camera) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export async function setUpScene(bg) { //setUpScene
    // scene = await initScene();
    // camera = await initCamera();
    // torus = await createTorus();
    // let canvas = getCanvas()
    renderer = initRenderer(bg)
    setRenderer(renderer)
    resize(renderer, camera)
    animate(renderer, scene, camera, torus) // It really doesn't like how I'm passing variables?
    console.log("Done!") // Async returns promises and I didn't explicit anything?
}

/*
export function createScene(bg) {
    setUpScene()
    let renderer = initRenderer(bg)
    let camera = initCamera()
    let scene = initScene()
    let torus = createTorus()
    setRenderer(renderer)
    resize(renderer, camera)
    animate(renderer, scene, camera, torus)
}
*/

// window.addEventListener('resize', resize)