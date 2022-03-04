import { LitElement, html, css } from "lit"
import * as THREE from "three";

export const tagName = "lit-background";

class Background extends LitElement {
    static styles = css`
    canvas {
        position: fixed;
        top: 0;
        left: 0;
    }`;

    render() {
        return html`
        <canvas id="bg"></canvas>
        `;
    }

    scene
    camera
    renderer
    torus

    initScene() {
        return this.scene = new THREE.Scene()
    }

    initCamera() { 
        return this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
            );
    }

    setCamera(camera) {
        return camera.position.setZ(30)
}

    initRenderer(canvas) {
        return this.renderer = new THREE.WebGL1Renderer({
            canvas: canvas
        });
    }

    initRendererClean() {
        return this.renderer = new THREE.WebGL1Renderer();
    }

    setRenderer(renderer) {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    createTorus() {
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff6347,
            wireframe: true,
        });
        return this.torus = new THREE.Mesh(geometry, material);
    }

    sceneAddition(scene, object) {
        scene.add(object);
    }

    processAnimate(renderer, scene, camera, torus) {
        return function animate() {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;
        
            renderer.render(scene, camera);    
        }
    }

    getCanvas() {
        return document.getElementById('#bg')
        // this.shadowRoot.getElementById('#bg')
        // canvas: document.querySelector("#bg"),
        // canvas: document.getElementById("#bg")
    }

    firstUpdated() {
        let object = this.shadowRoot.getElementById('#bg')
        object.appendChild( this.renderer.domElement )
    }

    constructor() {
        super()

        let scene = this.initScene()
        let camera = this.initCamera()
        this.setCamera(camera)
        // let canvas = this.getCanvas()
        let renderer = this.initRendererClean()
        // let renderer = this.initRenderer(canvas)
        this.setRenderer(renderer)
        let torus = this.createTorus()
        this.sceneAddition(scene, torus)
        this.processAnimate(renderer, scene, camera, torus)
    }
}

customElements.define(tagName, Background);

/*

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGL1Renderer
let torus: THREE.Mesh

function initScene() {
    return scene = new THREE.Scene()
}

function initCamera() { 
    return camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
    }

function setCamera(camera) {
    return camera.position.setZ(30)
}

function initRenderer(canvas) {
    return renderer = new THREE.WebGL1Renderer({
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
    return torus = new THREE.Mesh(geometry, material);
}

function sceneAddition(scene, object) {
    scene.add(object);
}

function processAnimate(renderer, scene, camera, torus) {
    return function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
    
        renderer.render(scene, camera);    
    }
}

function getCanvas() {
    return document.getElementById('#bg')
    // this.shadowRoot.getElementById('#bg')
}

export function process() {
/*    initCamera()
    createTorus()
    let canvas = getCanvas()
    initRenderer(await canvas)
    animate()

    let scene = initScene()
    let camera = initCamera()
    setCamera(camera)
    let canvas = getCanvas()
    let renderer = initRenderer(canvas)
    setRenderer(renderer)
    let torus = createTorus()
    sceneAddition(scene, torus)
    processAnimate(renderer, scene, camera, torus)
}

// process()

/*
async function myFunction() {
    return
}
let value = await promise
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love You !!");
    })
    document.getElementById("demo").innerHTML = await myPromise;
  }
myDisplay();
*/