import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const background = {
	// empty variables?
	scene: null,
	camera: null,
	torus: null,
	pointLight: null,
	ambientLight: null,
	lightHelper: null,
	renderer: null,
	controls: null, 
  

	init() {
		let {
			scene,
			camera,
			torus,
			pointLight,
			ambientLight,
			lightHelper,

			initScene,
			initCamera,
			createTorus,
			createPointLight,
			createAmbientLight,
			createPointLightHelper,
			setCamera,
			addToScene,
		} = background

		// init canvas, etc
		scene = initScene()
		camera = initCamera()
		torus = createTorus()
		pointLight = createPointLight()
		ambientLight = createAmbientLight()
		lightHelper = createPointLightHelper(pointLight)
		setCamera(camera)
		addToScene(scene, torus, pointLight, ambientLight, lightHelper)
		console.log('Prep Done!')
		// animate(background)
	},

	render(bg) {
		let {
			renderer,
			controls,
			camera,
			pointLight,
			initRenderer,
			setRenderer,
			spawnOrbitControls,
			setLight,
			resize,
			animate,
		} = background

		renderer = initRenderer(bg)
		controls = spawnOrbitControls(camera, renderer)
		setRenderer(renderer)
		setLight(pointLight)
		resize(renderer, camera)
		console.log('Done!')

		animate()
	},

	animate() {
		let { animate, torus, controls, renderer, scene, camera } = background

		torus.rotation.x += 0.01
		torus.rotation.y += 0.005
		torus.rotation.z += 0.01

		controls.update()
		renderer.render(scene, camera)

		requestAnimationFrame(animate())
		console.log('Animation!')
	},

	initScene() {
		return new THREE.Scene()
	},

	initCamera() {
		return new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
	},

	setCamera(camera, valZ = 30) {
		return camera.position.setZ(valZ)
	},

	initRenderer(canvas) {
		return new THREE.WebGL1Renderer({
			antialias: true,
			canvas: canvas,
		})
	},

	setRenderer(renderer) {
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(window.innerWidth, window.innerHeight)
	},

	createTorus() {
		const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
		const material = new THREE.MeshStandardMaterial({
			color: 0xff6347,
			wireframe: false,
		})
		return new THREE.Mesh(geometry, material)
	}, // This would be better with geometry and material as parameters

	addToScene(scene, ...object) {
		scene.add(...object)
	},

	createPointLight() {
		return new THREE.PointLight(0xffffff)
	},

	createAmbientLight() {
		return new THREE.AmbientLight(0xffffff)
	},

	createPointLightHelper(light) {
		return new THREE.PointLightHelper(light)
	},

	setLight(light) {
		light.position.set(5, 5, 5)
	},

	resize(renderer, camera) {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	},

	spawnOrbitControls(camera, renderer) {
		return new OrbitControls(camera, renderer.domElement)
	},
}
// background.init()

export { background }
