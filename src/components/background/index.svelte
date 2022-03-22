<script>
	import * as THREE from 'three'
	import * as SC from 'svelte-cubed'
	// import { Mesh, Scene } from 'three'
	// import { x, y } from '../../../dist/assets/vendor.2a26677d'

	$: torus = new THREE.TorusGeometry(10, 3, 16, 100)
	$: torusMaterial = new THREE.MeshStandardMaterial({
		color: 0x7261a3,
		wireframe: false,
	})

	let torusX = 0
	let torusY = 0
	let torusZ = 0

	$: background = new THREE.Color('black')

	// const starGeometry = new THREE.SphereGeometry(0.25, 24, 24)
	/* const starMaterial = new THREE.MeshStandardMaterial({
		color: 0x7261a3,
		wireframe: true,
	}) */

	// star.position.set(x,y,z)
	// Array(200).fill().forEach(addStar)

	$: getPosition = () => {
		let [x, y, z] = Array(3)
			.fill()
			.map(() => THREE.MathUtils.randFloatSpread(100))
		return [x, y, z]
	}

	$: getStarGeo = () => {
		let geometry = new THREE.SphereGeometry(0.25, 24, 24)
		return geometry
	}

	$: getStarMat = () => {
		let material = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			wireframe: false,
		})
		return material
	}

	SC.onFrame(() => {
		torusX += 0.01
		torusY += 0.005
		torusZ += 0.01
	})
</script>

<SC.Canvas antialias {background}>
	<SC.PerspectiveCamera position={[75, 0.1, 100]} />
	<SC.OrbitControls enableZoom={true} />
	<SC.PointLight position={[5, 5, 5]} color="green" />
	<SC.AmbientLight intensity={0.6} />
	<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

	<SC.Mesh
		geometry={torus}
		material={torusMaterial}
		rotation={[torusX, torusY, torusZ]}
	/>
	{#each Array(200) as tacos}
		<SC.Mesh
			geometry={getStarGeo()}
			material={getStarMat()}
			position={getPosition()}
		/>
	{/each}
</SC.Canvas>

<style>
</style>
