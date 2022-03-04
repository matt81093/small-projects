<script>
	import { onMount } from 'svelte'
	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		DirectionalLight,
		AmbientLight,
		Mesh,
		MeshStandardMaterial,
		BoxBufferGeometry,
		WebGLRenderer,
	} from 'three'

	let canvas
	let cubeGeometry = new BoxBufferGeometry(1, 1, 1)
	let cubeMaterial = new MeshStandardMaterial()

	/*
	let canvas, rando
	$: result = Math.round(rando * 100)

	function setRando() {
		rando = Math.random()
	}

	// create SceneManager and pass over canvas
	// attach listeners
	// start render loop

	// try to get treeComponent working

	function resizeCanvas() {
		canvas.style.width = '100%'
		canvas.style.height = '100%'

		canvas.width = canvas.offsetWidth
		canvas.height = canvas.offsetHeight
		typeof sceneManager !== 'undefined' && sceneManager !== null
			? sceneManager.onWindowResize()
			: console.log('resize function called and failed') && null
	}

	function render() {
		if (typeof sceneManager !== 'undefined') {
			if (sceneManager !== null) {
				sceneManager.update() && requestAnimationFrame(render)
				console.log('success!')
			} else {
				requestAnimationFrame(render)
				console.log('retrying...')
			}
		} else {
			console.log('sceneManager undefined')
		}
	}

	onMount(() => {
		;async () => {
			const { SceneManager } = await import('../threeJS/SceneManager.mjs')
			sceneManager = await new SceneManager(canvas)
			render()
		}
		// sceneManager = new SceneManager(canvas)
		// bindEventListeners()
		// render()
	})
<canvas bind:this={canvas} on:resize={resizeCanvas} />

	*/
</script>

<Canvas let:sti w={500} h={500} on:resize={resizeCanvas}>
	<Scene {sti} let:scene id="scene1" props={{ background: 0xedf2f7 }}>
		<PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
		<AmbientLight {scene} intensity={1.25} />
		<DirectionalLight {scene} pos={[3, 3, 3]} />

		<Mesh
			{scene}
			geometry={cubeGeometry}
			material={cubeMaterial}
			mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
			pos={[0, 0, 0]}
			rot={[0.5, 0.6, 0]}
			scale={[1, 1, 1]}
		/>
	</Scene>

	<WebGLRenderer
		{sti}
		sceneId="scene1"
		camId="cam1"
		config={{ antialias: true, alpha: true }}
	/>
</Canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
