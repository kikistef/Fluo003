import { useEffect, useRef, useState } from 'react';
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
//import Woman from "./Woman";
import { Mesh, MeshStandardMaterial, MeshPhysicalMaterial, PlaneGeometry, SpotLight, Object3D, SpotLightHelper, DirectionalLight } from 'three';
import { useFrame } from '@react-three/fiber';
import Stats from 'three/addons/libs/stats.module.js';
import { EffectComposer, SSR, Bloom, LUT, DepthOfField, SelectiveBloom } from '@react-three/postprocessing';
import Interface from "./Interface";



const stats = new Stats();
document.body.appendChild( stats.dom );




const Experience = (props) => {
	const {envHdr, setEnvHdr} = useState(0); 
	const {envMapColor, setEnvMapColor} = useState(0); // Array of colorschange as needed
	const [opacity, setOpacity] = useState(1);
    const prevEnvHdr = useRef(props.envHdr);

	const lightRef = useRef();

	const geometrySol = new PlaneGeometry(20, 20, 100, 100);
	const materialSol = new MeshPhysicalMaterial({
		//color: 0xffff00,	
		transparent: true,
		depthTest: true,
		depthWrite: true,
		reflectivity: 1.0,
		roughness: 1.0,   
		transmission: 1.0,  
		metalness: 0.0,
			 // color: 'cyan',

		opacity: 0.5,
		clearcoat: 0.0,
		clearcoatRoughness: 1.0,
		//ior: 1.5,
		thickness: 0.0,

	});
	const plane = new Mesh(geometrySol, materialSol);
	plane.receiveShadow = true;
	const distance = 5.0
	const angle = Math.PI / 5.0;
	const penumbra = 1.0;
	const decay = 2.0;
	
	const light = new DirectionalLight(0xff6600,5);
	//const light = new SpotLight(0xff0000, 1, distance, angle, penumbra, decay);
	const helper = new SpotLightHelper( light, 5 );
	light.position.set(0, 4.0, -3);
	light.castShadow = true;
	light.shadow.mapSize.width = 4096;
	light.shadow.mapSize.height = 4096;
	//	light.shadow.radius = 50;
	//light.shadow.blurSamples = 25;
	light.intensity = 10;
	light.shadowMapVisible = true;
	light.rotation.set(-0.9, 0, 0);
	// Create an empty target object to control the light's direction
	const target = new Object3D();
	target.position.set(0, 0, 0); // Adjust the position of the target as needed
	//light.target = target;

  // Use the useFrame hook to animate the light
	useFrame(({ clock }) => {
		stats.update();
		// Calculate the new position for the light in a circular path
		const radius = 0.6; // Adjust the radius as needed
		const speed = 20; // 2 seconds for a full circle
		const angle2 = (clock.elapsedTime * 2 * Math.PI) / speed;
		const x = radius * Math.cos(angle2);
		const z = radius * Math.sin(angle2) - 1.0;

		light.position.set(x, 1.5, z);
		light.target = target;
		helper.target = target;	
	});
	
	//console.log("iiiiiiii : " + props.envHdr)
		/*		<EffectComposer disableNormalPass>
				<DepthOfField target={[0, 0, 10]} focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
			<Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={3} intensity={0.25} />
	</EffectComposer> */
	
	
	useEffect(() => {
		const filePath = `./models/${props.envHdr}`;
	}, [props.envHdr]);

	
return (
    <>
		<Environment  ground={{  height: 4, radius: 12, scale: 12, position: [1, 10, 15] }} files={`./models/${props.envHdr}`} background   castShadow={true} receiveShadow={false}  />


		<OrbitControls />
		<ambientLight  
		intensity={0.2} 
		/>
		
		<primitive object={helper} />
		
		<directionalLight 
		position={[3, 8, -8]} 
		intensity={0.0} 
		castShadow={false} 
		color={0xffff00}
		shadow-mapSize-width={4096}
		shadow-mapSize-height={4096}
		shadow-camera-far={100}
		shadow-camera-near={0.1}
		shadow-camera-left={-10}
		shadow-camera-right={10}
		shadow-camera-top={10}
		shadow-camera-bottom={-10}
		shadow-radius={20} 
		/>
		<directionalLight 
		position={[-15, 7, -3]} 
		intensity={1.0} 
		castShadow={false} 
		shadow-mapSize-width={1024}
		shadow-mapSize-height={1024}
		color={0x000000}
		/>
		<directionalLight 
		position={[-1, 8, 13]} 
		intensity={0.0} 
		castShadow={false} 
		shadow-mapSize-width={512}
		shadow-mapSize-height={512}
		color={0xffffff}
		/>
		
		<directionalLight 
		position={[10, 5, 8]} 
		intensity={0.0} 
		castShadow={true} 
		shadow-mapSize-width={512}
		shadow-mapSize-height={512}
		color={0xffffff}
		/>
		

		
		<mesh
		rotation={[-0.5 * Math.PI, 0, 0]}
		position={[0, 0, 0]}
		receiveShadow={false} 
		>
			<primitive object={plane}>
				<shadowMaterial transparent  opacity={0.5}  />
			</primitive> 
		</mesh>
    </>
  );
};

export default Experience;
