<!-- HelloCube.svelte -->
<script>
	import {
		Canvas,
		Scene,
		Fog,
		PerspectiveCamera,
		DirectionalLight,
		AmbientLight,
		BoxBufferGeometry,
		Mesh,
		MeshStandardMaterial,
		WebGLRenderer,
	} from 'svelthree'

	const fog = new Fog(0xffffff, 3, 11)
	const geometry = new BoxBufferGeometry(1, 1, 1)
	const material = new MeshStandardMaterial()
</script>

<Canvas w={500} h={500}>
	<Scene id="scene1" bg={0xf0f9ff} props={{ fog }} env_tex={{ url: '...' }}>
		<PerspectiveCamera id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
		<AmbientLight intensity={1.25} />
		<DirectionalLight pos={[3, 3, 3]} shadowMapSize={512 * 4} />

		<Mesh
			geometry
			material
			mat={{
				color: 0xff3e00,
				metalness: 1,
				roughness: 0,
				envMapIntensity: 0.8,
			}}
			pos={[0, 0, 0]}
			rot={[0.5, 0.6, 0]}
			scale={[1, 1, 1]}
			receiveShadow
			castShadow
		/>
	</Scene>

	<WebGLRenderer
		sceneId="scene1"
		camId="cam1"
		config={{ antialias: true, alpha: false }}
		enableShadowMap
	/>
</Canvas>
