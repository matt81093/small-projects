import { LitElement, html, css } from "lit";
import * as THREE from "three";

export const tagName = "lit-background";

class Background extends LitElement {
    constructor() {
        super()
        this.init()
        this.animate()
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
        // const canvas = document.createElement('canvas')
        const renderer = new THREE.WebGLRenderer({
            canvas: document.createElement('canvas')
            //    canvas: canvas // type: reference to object
            })
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
        let canvas = this.shadowRoot.getElementById('canvas')
        canvas.appendChild(this.renderer.domElement)
    }

    render() {
        // animate()

        return html`
        <section>
        This canvas should cover everything
        <canvas id="bg"></canvas>
        </section>
        `
    }
}

customElements.define(tagName, Background);

// Create Lit Element, add reactivbe element
// Then render Background with THREE?