// import { LitElement, html } from '@polymer/lit-element'
import { LitElement, html } from 'lit'
import * as THREE from 'three'

class BoxTest extends LitElement {
	constructor () {
		super()

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
		const geometry = new THREE.BoxGeometry(1, 1, 1)
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
		const cube = new THREE.Mesh(geometry, material)

		scene.add(cube)
		camera.position.z = 5

		const canvas = document.createElement('canvas')
		const renderer = new THREE.WebGLRenderer({ canvas: canvas })
		renderer.setSize(300, 300)
		this.renderer = renderer

		;(function animate () {
			requestAnimationFrame(animate)
			cube.rotation.x += 0.01
			cube.rotation.y += 0.01
			renderer.render(scene, camera)
		}())
	}

	firstUpdated () {
		const box = this.shadowRoot.getElementById('box')
		box.appendChild(this.renderer.domElement)
	}

	render () {
		return html`
				<style>
					#box { border: 1px solid red; height: 310px; width: 310px;}
				</style>

				<section>
					The webgl animation must be in the red box
					<div id="box"></div>
				</section>
			`
	}
}

window.customElements.define('box-test', BoxTest)
