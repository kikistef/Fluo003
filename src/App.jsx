
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, Environment, OrbitControls, Html, useAspect, useVideoTexture, useTexture } from '@react-three/drei'

//import { Model } from "./StefFluo";
import { ConvaiClient } from 'convai-web-sdk';
import { SETTINGS } from './constants';
import { Shadow, PerspectiveCamera, PositionalAudio, RoundedBox, Plane, Box  } from '@react-three/drei';
import * as THREE from 'three'; // Importez THREE depuis Three.js
import { MeshStandardMaterial, MeshPhysicalMaterial, ShaderMaterial, MeshBasicMaterial, MeshPhongMaterial  } from 'three';
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import Woman from "./components/Woman";
import { useCharacterAnimations } from "./contexts/CharacterAnimations";
import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Affix, Button, Stack, Slider, Text } from "@mantine/core";

function App() {
	const group = useRef();
	  const [envMapIntensity, setEnvMapIntensity] = useState(5);
	//const [envMapColor, setEnvMapColor] = useState(0);
	const [envMapColor, setEnvMapColor] = useState("#03bafc"); // Array of colorschange as needed
		const [envHdr, setEnvHdr] = useState("HDR_111_Parking_Lot_2_Ref.hdr"); 
	//const { envMapIntensity, setEnvMapIntensity } = useState(20);
	//const { nodes, materials, animations } = useGLTF("./models/woman.gltf");
	var { animations, setAnimations, animationIndex, setAnimationIndex } = useCharacterAnimations();
	const convaiClient = useRef(null);
	const [userText, setUserText] = useState("Press & Hold Space to Talk!");
	const [npcText, setNpcText] = useState("Une question sur Mobilize ?");
	const [keyPressed, setKeyPressed] = useState(false);
	var [isTalking, setIsTalking] = useState(false);	
	const finalizedUserText = useRef();
	const npcTextRef = useRef();
	var [currentAnimation, setCurrentAnimation] = useState("idle");
	var [animationEnCours, setAnimationEnCours] = useState(false);
	const materials = useGLTF("./models/scene.gltf").materials;
	
//

	const handleIdleAnimation = () => {
		setCurrentAnimation("idle");	
		console.log("zizi : " + animationIndex)
		//setAnimations(animationIndex);
		//console.log(setAnimations)
		setAnimationIndex(0);
		console.log("HandleIdleAnimation : " + animationIndex);
	};

	const handleTalkAnimation = () => {
		//setAnimations(animationIndex);
		setCurrentAnimation("talkingDirect");
		setAnimationIndex(1);
		console.log("handleTalkAnimation : " + animationIndex);
	};

	const handleIdleSadAnimation = () => {
		setCurrentAnimation("idle-sad");
		console.log("handleIdleSadAnimation : " + animationIndex);
	};

	const handleOtherAnimation = () => {
		setCurrentAnimation("Standing Arguing");
		console.log("handleOtherAnimation : " + animationIndex);
	};

	var [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const scene = new THREE.Scene();
	const fog = new THREE.Fog(0x000000, 2, 3); // Couleur, distance de début, distance de fin
	scene.fog = fog;
	const [screenSize, setScreenSize] = useState(getCurrentDimension());
	const [varWinWidth] = [screenSize.width];
	const [varWinHeight] = [screenSize.height];
	const [WinWidth] = [varWinWidth - 200];
	const [WinHeight] = [varWinHeight + 120];
	function getCurrentDimension(){
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

  function handleSpacebarPress(event) {
    if (event.keyCode === 32 && !keyPressed) {
      setKeyPressed(true);
      finalizedUserText.current = "";
      npcTextRef.current = "";
      setUserText("");
      setNpcText("");
      convaiClient.current.startAudioChunk();
    }
  }

  function handleSpacebarRelease(event) {
	if (event.keyCode === 32 && keyPressed) {
	  setKeyPressed(false);
	  convaiClient.current.endAudioChunk();
	}
  }

    const [audioEnded, setAudioEnded] = useState(false);	
      useEffect(()=>{	
        convaiClient.current = new ConvaiClient({
        apiKey: SETTINGS['CONVAI-API-KEY'],
        characterId: SETTINGS['CHARACTER-ID'],
        enableAudio: true, // use false for text only.
        languageCode: "fr-FR",
      });
	
	convaiClient.current.setResponseCallback((response) => {
		if (response.hasUserQuery()) {
		  var transcript = response.getUserQuery();
		  var isFinal = transcript.getIsFinal();
		  if (isFinal) {
			finalizedUserText.current += " " + transcript.getTextData();
			transcript = "";
		  }
		  if (transcript) {
			setUserText(finalizedUserText.current + transcript.getTextData());
		  } else {
			setUserText(finalizedUserText.current);
		  }
		}
		if (response.hasAudioResponse()) {
		  var audioResponse = response?.getAudioResponse();
		  npcTextRef.current += " " + audioResponse.getTextData();
		  setNpcText(npcTextRef.current);

		  if (audioResponse){
			setIsTalking(true);
		  
		  }
		}
	});
	
  convaiClient.current.onAudioPlay(() => {
		  console.log("AudioPlay");
          setIsAudioPlaying(true);
		  handleTalkAnimation();
  });

  convaiClient.current.onAudioStop(() => {
		  console.log("AudioSTop");
          setIsAudioPlaying(false); 
		  handleIdleAnimation();
  });
},[])


  useEffect(() => {
    window.addEventListener('keydown', handleSpacebarPress);
    window.addEventListener('keyup', handleSpacebarRelease);
    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
      window.removeEventListener('keyup', handleSpacebarRelease);
    };
  }, [keyPressed]);

	
  useEffect(() => {	
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  
		  
if (materials) {		  
	materials['vitreFrosted'] = new MeshPhysicalMaterial({ 
	transparent: true,
	depthTest: true,
	depthWrite: true,
  	reflectivity: 0.0,
	roughness: 0.55,   
	transmission: 1.0,  
	metalness: 0.2,
		 // color: 'cyan',		  
	opacity: 1.0,
	clearcoat: 1.0,
	clearcoatRoughness: 0.0,
	ior: 2.5,
	thickness: 1.0,
  //envMapIntensity: 4.0,

	});
}		
		
		  
function SceneModel() {
  const { nodes, materials } = useGLTF('./models/scene.gltf'); // Replace 'scene.gltf' with your model's path

  return (
    <group>
      <primitive object={nodes.Cube}  material={materials.black} castShadow receiveShadow /*scale={[0.8, 0.8, 0.8]}*/ />
	  <primitive object={nodes.vitre}  material={materials.vitreFrosted} castShadow receiveShadow /*scale={[0.8, 0.8, 0.8]}*/ />
      {/* Replace 'YourModelName' and 'YourMaterialName' with the actual names in your GLTF file. */}
    </group>
  );
}

// <SceneModel /> 
		  

  return (
    <>
   	<div style={{position: 'relative',  height: screenSize.height, display: 'block', justifyContent: "center"}}>
		




      	<Canvas camera={{ position: [1.2, 1.5, 2.5], fov: 50 }} shadows>
			<group position={[0, 0, 0]}>
				<Woman envMapIntensity={envMapIntensity} 
					envMapColor={envMapColor}
					envHdr={envHdr}
					/> 
				

			</group>
			

		
			<Html position={[-0.5, 0.0, 1]}>
				{userText && (
					  <div style={{
						width: '100%', height: '100%', overflow: 'auto', borderRadius: '10px',
						background: 'rgba(255, 255, 255, 0.7)', padding: '10px', textAlign: 'center'
					  }}>
							<p style={{ maxHeight: '300px', width: '300px' }}>{userText}</p>
					  </div>
				)}
		    </Html>
			

			


			<Html position={[0.5, 0.5, 0.5]}>
				{npcText && (
				  <div style={{
					width: '100%', height: '200%', overflow: 'auto', borderRadius: '10px', color: 'white', fontStyle:'italic',
					background: 'rgba(255, 110, 0, 0.9)', padding: '10px', textAlign: 'center'
				  }}>
					<p style={{ maxHeight: '300px', width: '300px' }}>{npcText}</p>
				  </div>
				)}
			</Html>
       	

		 	<Experience envHdr={envHdr} setEnvHdr={setEnvHdr} />	
      	</Canvas>
		        	<Interface envMapIntensity={envMapIntensity} setEnvMapIntensity={setEnvMapIntensity} 
			envMapColor={envMapColor} setEnvMapColor={setEnvMapColor} 
						envHdr={envHdr} setEnvHdr={setEnvHdr} 
			/>

	</div>
	<div style={{ minWidth: '30px', height: '30px', padding: '5px', paddingTop: '0px', position: 'fixed', left: '350px', bottom: '90px', overflow: 'hidden', background: 'rgba(0, 0, 0, 0.7)', borderRadius: '5px', color: 'white', textAlign: 'center', lineHeight: '30px', zindex: '200' }}>
	<p style={{ margin: 0, fontSize: '14px' }}>{envMapIntensity}</p>
	</div>
		  
	<div style={{ minWidth: '30px', height: '30px', padding: '5px', paddingTop: '0px', position: 'fixed', left: '350px', bottom: '174px', overflow: 'hidden', background: `${envMapColor}`, borderRadius: '5px', color: 'white', textAlign: 'center', lineHeight: '30px' }}>
	<p style={{ margin: 0, fontSize: '14px' }}>{envMapColor}</p>
	</div>
		  
		  	<div style={{ minWidth: '30px', height: '30px', padding: '5px', paddingTop: '0px', position: 'fixed', left: '350px', bottom: '500px', overflow: 'hidden', background: `${envMapColor}`, borderRadius: '5px', color: 'white', textAlign: 'center', lineHeight: '30px' }}>
	<p style={{ margin: 0, fontSize: '14px' }}>{envHdr}</p>
</div>

    </>
  );
}

export default App;
