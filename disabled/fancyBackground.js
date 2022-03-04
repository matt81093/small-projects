import { LitElement, html, css } from "lit";
import * as THREE from "three";

export const tagName = "lit-background";

window.onload = class Background extends LitElement {
    constructor() {
        super()
        // window.onload = this.init()
        // window.onload = this.animate()
        // let canvas = this.shadowRoot.getElementById('canvas')
        // this.canvas = canvas
    }

    static styles = css`
    canvas {
        position: fixed;
        top: 0;
        left: 0;
    }`

    init() {
        // Scene setup and camera
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.setZ(30)

        this.scene = scene
        this.camera = camera

        // Create canvas
        //const canvas = this.shadowRoot.getElementById('canvas')
        // const canvas = document.createElement('canvas')
        // this.canvas = canvas

        // Create and add torus to scene
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
        const material = new THREE.MeshBasicMaterial({
            color: 0xff6347,
            wireframe: true,
        })
        const torus = new THREE.Mesh(geometry, material);
        this.torus = torus
        scene.add(torus)

        // Setup renderer
        /* if ( document && document.readyState === "interactive") {
            const canvas = document.createElement('canvas')
            this.canvas = canvas
        } */
        if ( document ) {
            const renderer = new THREE.WebGLRenderer() //{
        } else { console.log("Why is there no DOM?" )}
            /* canvas: document.createElement('canvas')
            // canvas: this.canvas // type: reference to object
            // We don't want it to build the element, we can it to access it afterwards
            // }) */
        
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer = renderer
    }

    animate() {
        requestAnimationFrame(animate)

        this.torus.rotation.x += 0.01
        this.torus.rotation.y += 0.005
        this.torus.rotation.z += 0.01

        this.renderer.render(this.scene, this.camera)
    }     // animate()    
    
    firstUpdated() {
        // document.body.appendChild(renderer.domElement)
        if ( document && document.readyState === "interactive") {
            const canvas = this.shadowRoot.getElementById('#bg')
            canvas.appendChild(this.renderer.domElement)
            // this.canvas = canvas
        }
    }

    render() {
        // animate()

        return html`
        <canvas id="bg"></canvas>
        `
    }
}

customElements.define(tagName, Background);

// Create Lit Element, add reactivbe element
// Then render Background with THREE?