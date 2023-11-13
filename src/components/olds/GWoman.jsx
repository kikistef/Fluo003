import obj from '../App.jsx'
import React, { useEffect, useRef, useState  } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { MeshStandardMaterial, MeshPhysicalMaterial } from 'three';
const Woman = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("./models/woman.gltf");
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);
  var [isAudioPlaying, setIsAudioPlaying] = useState(false);
  var [isTalking, setIsTalking] = useState(false);
const materials = useGLTF("./models/woman.gltf").materials;

if (materials) {
  // Remplacez 'Mat.006' par le nom de votre matériau si nécessaire
  materials['Mat.006'] = new MeshStandardMaterial({
    metalness: 0.0, // Valeur de métal entre 0 (non métallique) et 1 (entièrement métallique)
    roughness: 0.3, // Valeur de rugosité entre 0 (lisse) et 1 (rugueux)
	  color: 'red',
  });
	
  materials['LIGHTS_BODY.002'] = new MeshStandardMaterial({
    metalness: 1.0, // Valeur de métal entre 0 (non métallique) et 1 (entièrement métallique)
    roughness: 0.22, // Valeur de rugosité entre 0 (lisse) et 1 (rugueux)
	  //color: 'red',
  });
	  materials['GLASS.002'] = new MeshPhysicalMaterial({  
  roughness: 0.0,   
  transmission: 1,  
  thickness: 1.8,
envMapIntensity: 3.0,
});
	
}


  const enableShadowsForChildren = (obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }

    if (obj.children) {
      obj.children.forEach((child) => {
        enableShadowsForChildren(child);
      });
    }
  };

  useEffect(() => {
    if (group.current) { // Vérifiez que group.current est défini
      enableShadowsForChildren(group.current); // Appelez enableShadowsForChildren uniquement si group.current est défini
    }
  }, []);
	
	
	  useEffect(() => {
    setAnimations(names);
	  console.log("names: " + names)
  }, [names]);

  useEffect(() => {
	    console.log("names: ", names);
        console.log("animationIndex: ", animationIndex);

    actions[names[animationIndex]].reset().fadeIn(0.5).play();

	  console.log("woman index : " + animationIndex);
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
	  
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="FLUO" position={[0, 0.579, 0]} rotation={[-1.571, 1.55, 1.571]} scale={0.005}>
          <group name="AVATAR_ROTATION">
            <group name="CROWN" position={[-64.008, 0.07, 0.011]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
              <group name="A" position={[0, 1.035, 0]}>
                <group name="BLUE">
                  <group name="Null_0" position={[0, 0, -33]} rotation={[0.401, 0, 0]}>
                    <mesh name="Cube_1_3" geometry={nodes.Cube_1_3.geometry} material={materials['Mat.006']} position={[0, 0, 0.783]} />
                  </group>
                  <group name="Null_1" position={[2.072, 0, -32.935]} rotation={[0.402, -0.058, 0.025]}>
                    <group name="Cube_1_instance" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3001" geometry={nodes.Cube_1_3001.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_10" position={[19.397, 0, -26.698]} rotation={[0.483, -0.572, 0.277]}>
                    <group name="Cube_1_instance_10" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3010" geometry={nodes.Cube_1_3010.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_11" position={[21.035, 0, -25.427]} rotation={[0.504, -0.627, 0.313]}>
                    <group name="Cube_1_instance_11" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3011" geometry={nodes.Cube_1_3011.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_12" position={[22.59, 0, -24.056]} rotation={[0.527, -0.682, 0.352]}>
                    <group name="Cube_1_instance_12" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3012" geometry={nodes.Cube_1_3012.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_13" position={[24.056, 0, -22.59]} rotation={[0.555, -0.736, 0.394]}>
                    <group name="Cube_1_instance_13" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3013" geometry={nodes.Cube_1_3013.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_14" position={[25.427, 0, -21.035]} rotation={[0.587, -0.788, 0.441]}>
                    <group name="Cube_1_instance_14" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3014" geometry={nodes.Cube_1_3014.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_15" position={[26.698, 0, -19.397]} rotation={[0.625, -0.84, 0.493]}>
                    <group name="Cube_1_instance_15" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3015" geometry={nodes.Cube_1_3015.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_16" position={[27.863, 0, -17.682]} rotation={[0.67, -0.89, 0.552]}>
                    <group name="Cube_1_instance_16" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3016" geometry={nodes.Cube_1_3016.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_17" position={[28.918, 0, -15.898]} rotation={[0.722, -0.938, 0.618]}>
                    <group name="Cube_1_instance_17" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3017" geometry={nodes.Cube_1_3017.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_18" position={[29.859, 0, -14.051]} rotation={[0.784, -0.984, 0.693]}>
                    <group name="Cube_1_instance_18" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3018" geometry={nodes.Cube_1_3018.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_19" position={[30.683, 0, -12.148]} rotation={[0.856, -1.027, 0.779]}>
                    <group name="Cube_1_instance_19" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3019" geometry={nodes.Cube_1_3019.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_2" position={[4.136, 0, -32.74]} rotation={[0.404, -0.116, 0.049]}>
                    <group name="Cube_1_instance_2" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3002" geometry={nodes.Cube_1_3002.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_20" position={[31.385, 0, -10.198]} rotation={[0.942, -1.066, 0.877]}>
                    <group name="Cube_1_instance_20" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3020" geometry={nodes.Cube_1_3020.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_21" position={[31.963, 0, -8.207]} rotation={[1.041, -1.101, 0.989]}>
                    <group name="Cube_1_instance_21" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3021" geometry={nodes.Cube_1_3021.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_22" position={[32.415, 0, -6.184]} rotation={[1.155, -1.13, 1.117]}>
                    <group name="Cube_1_instance_22" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3022" geometry={nodes.Cube_1_3022.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_23" position={[32.74, 0, -4.136]} rotation={[1.284, -1.151, 1.258]}>
                    <group name="Cube_1_instance_23" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3023" geometry={nodes.Cube_1_3023.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_24" position={[32.935, 0, -2.072]} rotation={[1.424, -1.165, 1.411]}>
                    <group name="Cube_1_instance_24" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3024" geometry={nodes.Cube_1_3024.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_25" position={[33, 0, 0]} rotation={[Math.PI / 2, -1.169, Math.PI / 2]}>
                    <group name="Cube_1_instance_25" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3025" geometry={nodes.Cube_1_3025.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_26" position={[32.935, 0, 2.072]} rotation={[1.718, -1.165, 1.73]}>
                    <group name="Cube_1_instance_26" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3026" geometry={nodes.Cube_1_3026.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_27" position={[32.74, 0, 4.136]} rotation={[1.858, -1.151, 1.884]}>
                    <group name="Cube_1_instance_27" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3027" geometry={nodes.Cube_1_3027.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_28" position={[32.415, 0, 6.184]} rotation={[1.987, -1.13, 2.025]}>
                    <group name="Cube_1_instance_28" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3028" geometry={nodes.Cube_1_3028.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_29" position={[31.963, 0, 8.207]} rotation={[2.101, -1.101, 2.152]}>
                    <group name="Cube_1_instance_29" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3029" geometry={nodes.Cube_1_3029.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_3" position={[6.184, 0, -32.415]} rotation={[0.408, -0.173, 0.074]}>
                    <group name="Cube_1_instance_3" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3003" geometry={nodes.Cube_1_3003.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_30" position={[31.385, 0, 10.198]} rotation={[2.2, -1.066, 2.264]}>
                    <group name="Cube_1_instance_30" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3030" geometry={nodes.Cube_1_3030.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_31" position={[30.683, 0, 12.148]} rotation={[2.285, -1.027, 2.363]}>
                    <group name="Cube_1_instance_31" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3031" geometry={nodes.Cube_1_3031.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_32" position={[29.859, 0, 14.051]} rotation={[2.358, -0.984, 2.449]}>
                    <group name="Cube_1_instance_32" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3032" geometry={nodes.Cube_1_3032.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_33" position={[28.918, 0, 15.898]} rotation={[2.419, -0.938, 2.524]}>
                    <group name="Cube_1_instance_33" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3033" geometry={nodes.Cube_1_3033.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_34" position={[27.863, 0, 17.682]} rotation={[2.472, -0.89, 2.59]}>
                    <group name="Cube_1_instance_34" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3034" geometry={nodes.Cube_1_3034.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_35" position={[26.698, 0, 19.397]} rotation={[2.516, -0.84, 2.648]}>
                    <group name="Cube_1_instance_35" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3035" geometry={nodes.Cube_1_3035.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_36" position={[25.427, 0, 21.035]} rotation={[2.554, -0.788, 2.7]}>
                    <group name="Cube_1_instance_36" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3036" geometry={nodes.Cube_1_3036.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_37" position={[24.056, 0, 22.59]} rotation={[2.587, -0.736, 2.747]}>
                    <group name="Cube_1_instance_37" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3037" geometry={nodes.Cube_1_3037.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_38" position={[22.59, 0, 24.056]} rotation={[2.614, -0.682, 2.79]}>
                    <group name="Cube_1_instance_38" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3038" geometry={nodes.Cube_1_3038.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_39" position={[21.035, 0, 25.427]} rotation={[2.638, -0.627, 2.829]}>
                    <group name="Cube_1_instance_39" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3039" geometry={nodes.Cube_1_3039.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_4" position={[8.207, 0, -31.963]} rotation={[0.413, -0.231, 0.1]}>
                    <group name="Cube_1_instance_4" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3004" geometry={nodes.Cube_1_3004.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_40" position={[19.397, 0, 26.698]} rotation={[2.658, -0.572, 2.865]}>
                    <group name="Cube_1_instance_40" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3040" geometry={nodes.Cube_1_3040.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_41" position={[17.682, 0, 27.863]} rotation={[2.676, -0.516, 2.899]}>
                    <group name="Cube_1_instance_41" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3041" geometry={nodes.Cube_1_3041.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_42" position={[15.898, 0, 28.918]} rotation={[2.691, -0.459, 2.93]}>
                    <group name="Cube_1_instance_42" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3042" geometry={nodes.Cube_1_3042.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_43" position={[14.051, 0, 29.859]} rotation={[2.703, -0.403, 2.96]}>
                    <group name="Cube_1_instance_43" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3043" geometry={nodes.Cube_1_3043.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_44" position={[12.148, 0, 30.683]} rotation={[2.713, -0.346, 2.988]}>
                    <group name="Cube_1_instance_44" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3044" geometry={nodes.Cube_1_3044.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_45" position={[10.198, 0, 31.385]} rotation={[2.722, -0.288, 3.015]}>
                    <group name="Cube_1_instance_45" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3045" geometry={nodes.Cube_1_3045.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_46" position={[8.207, 0, 31.963]} rotation={[2.729, -0.231, 3.042]}>
                    <group name="Cube_1_instance_46" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3046" geometry={nodes.Cube_1_3046.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_47" position={[6.184, 0, 32.415]} rotation={[2.734, -0.173, 3.067]}>
                    <group name="Cube_1_instance_47" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3047" geometry={nodes.Cube_1_3047.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_48" position={[4.136, 0, 32.74]} rotation={[2.737, -0.116, 3.092]}>
                    <group name="Cube_1_instance_48" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3048" geometry={nodes.Cube_1_3048.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_49" position={[2.072, 0, 32.935]} rotation={[2.739, -0.058, 3.117]}>
                    <group name="Cube_1_instance_49" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3049" geometry={nodes.Cube_1_3049.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_5" position={[10.198, 0, -31.385]} rotation={[0.42, -0.288, 0.126]}>
                    <group name="Cube_1_instance_5" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3005" geometry={nodes.Cube_1_3005.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_50" position={[0, 0, 33]} rotation={[2.74, 0, -Math.PI]}>
                    <group name="Cube_1_instance_50" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3050" geometry={nodes.Cube_1_3050.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_51" position={[-2.072, 0, 32.935]} rotation={[2.739, 0.058, -3.117]}>
                    <group name="Cube_1_instance_51" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3051" geometry={nodes.Cube_1_3051.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_52" position={[-4.136, 0, 32.74]} rotation={[2.737, 0.116, -3.092]}>
                    <group name="Cube_1_instance_52" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3052" geometry={nodes.Cube_1_3052.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_53" position={[-6.184, 0, 32.415]} rotation={[2.734, 0.173, -3.067]}>
                    <group name="Cube_1_instance_53" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3053" geometry={nodes.Cube_1_3053.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_54" position={[-8.207, 0, 31.963]} rotation={[2.729, 0.231, -3.042]}>
                    <group name="Cube_1_instance_54" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3054" geometry={nodes.Cube_1_3054.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_55" position={[-10.198, 0, 31.385]} rotation={[2.722, 0.288, -3.015]}>
                    <group name="Cube_1_instance_55" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3055" geometry={nodes.Cube_1_3055.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_56" position={[-12.148, 0, 30.683]} rotation={[2.713, 0.346, -2.988]}>
                    <group name="Cube_1_instance_56" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3056" geometry={nodes.Cube_1_3056.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_57" position={[-14.051, 0, 29.859]} rotation={[2.703, 0.403, -2.96]}>
                    <group name="Cube_1_instance_57" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3057" geometry={nodes.Cube_1_3057.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_58" position={[-15.898, 0, 28.918]} rotation={[2.691, 0.459, -2.93]}>
                    <group name="Cube_1_instance_58" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3058" geometry={nodes.Cube_1_3058.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_59" position={[-17.682, 0, 27.863]} rotation={[2.676, 0.516, -2.899]}>
                    <group name="Cube_1_instance_59" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3059" geometry={nodes.Cube_1_3059.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_6" position={[12.148, 0, -30.683]} rotation={[0.428, -0.346, 0.153]}>
                    <group name="Cube_1_instance_6" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3006" geometry={nodes.Cube_1_3006.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_60" position={[-19.397, 0, 26.698]} rotation={[2.658, 0.572, -2.865]}>
                    <group name="Cube_1_instance_60" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3060" geometry={nodes.Cube_1_3060.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_61" position={[-21.035, 0, 25.427]} rotation={[2.638, 0.627, -2.829]}>
                    <group name="Cube_1_instance_61" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3061" geometry={nodes.Cube_1_3061.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_62" position={[-22.59, 0, 24.056]} rotation={[2.614, 0.682, -2.79]}>
                    <group name="Cube_1_instance_62" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3062" geometry={nodes.Cube_1_3062.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_63" position={[-24.056, 0, 22.59]} rotation={[2.587, 0.736, -2.747]}>
                    <group name="Cube_1_instance_63" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3063" geometry={nodes.Cube_1_3063.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_64" position={[-25.427, 0, 21.035]} rotation={[2.554, 0.788, -2.7]}>
                    <group name="Cube_1_instance_64" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3064" geometry={nodes.Cube_1_3064.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_65" position={[-26.698, 0, 19.397]} rotation={[2.516, 0.84, -2.648]}>
                    <group name="Cube_1_instance_65" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3065" geometry={nodes.Cube_1_3065.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_66" position={[-27.863, 0, 17.682]} rotation={[2.472, 0.89, -2.59]}>
                    <group name="Cube_1_instance_66" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3066" geometry={nodes.Cube_1_3066.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_67" position={[-28.918, 0, 15.898]} rotation={[2.419, 0.938, -2.524]}>
                    <group name="Cube_1_instance_67" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3067" geometry={nodes.Cube_1_3067.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_68" position={[-29.859, 0, 14.051]} rotation={[2.358, 0.984, -2.449]}>
                    <group name="Cube_1_instance_68" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3068" geometry={nodes.Cube_1_3068.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_69" position={[-30.683, 0, 12.148]} rotation={[2.285, 1.027, -2.363]}>
                    <group name="Cube_1_instance_69" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3069" geometry={nodes.Cube_1_3069.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_7" position={[14.051, 0, -29.859]} rotation={[0.439, -0.403, 0.182]}>
                    <group name="Cube_1_instance_7" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3007" geometry={nodes.Cube_1_3007.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_70" position={[-31.385, 0, 10.198]} rotation={[2.2, 1.066, -2.264]}>
                    <group name="Cube_1_instance_70" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3070" geometry={nodes.Cube_1_3070.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_71" position={[-31.963, 0, 8.207]} rotation={[2.101, 1.101, -2.152]}>
                    <group name="Cube_1_instance_71" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3071" geometry={nodes.Cube_1_3071.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_72" position={[-32.415, 0, 6.184]} rotation={[1.987, 1.13, -2.025]}>
                    <group name="Cube_1_instance_72" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3072" geometry={nodes.Cube_1_3072.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_73" position={[-32.74, 0, 4.136]} rotation={[1.858, 1.151, -1.884]}>
                    <group name="Cube_1_instance_73" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3073" geometry={nodes.Cube_1_3073.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_74" position={[-32.935, 0, 2.072]} rotation={[1.718, 1.165, -1.73]}>
                    <group name="Cube_1_instance_74" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3074" geometry={nodes.Cube_1_3074.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_75" position={[-33, 0, 0]} rotation={[Math.PI / 2, 1.169, -Math.PI / 2]}>
                    <group name="Cube_1_instance_75" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3075" geometry={nodes.Cube_1_3075.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_76" position={[-32.935, 0, -2.072]} rotation={[1.424, 1.165, -1.411]}>
                    <group name="Cube_1_instance_76" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3076" geometry={nodes.Cube_1_3076.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_77" position={[-32.74, 0, -4.136]} rotation={[1.284, 1.151, -1.258]}>
                    <group name="Cube_1_instance_77" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3077" geometry={nodes.Cube_1_3077.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_78" position={[-32.415, 0, -6.184]} rotation={[1.155, 1.13, -1.117]}>
                    <group name="Cube_1_instance_78" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3078" geometry={nodes.Cube_1_3078.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_79" position={[-31.963, 0, -8.207]} rotation={[1.041, 1.101, -0.989]}>
                    <group name="Cube_1_instance_79" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3079" geometry={nodes.Cube_1_3079.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_8" position={[15.898, 0, -28.918]} rotation={[0.451, -0.459, 0.212]}>
                    <group name="Cube_1_instance_8" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3008" geometry={nodes.Cube_1_3008.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_80" position={[-31.385, 0, -10.198]} rotation={[0.942, 1.066, -0.877]}>
                    <group name="Cube_1_instance_80" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3080" geometry={nodes.Cube_1_3080.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_81" position={[-30.683, 0, -12.148]} rotation={[0.856, 1.027, -0.779]}>
                    <group name="Cube_1_instance_81" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3081" geometry={nodes.Cube_1_3081.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_82" position={[-29.859, 0, -14.051]} rotation={[0.784, 0.984, -0.693]}>
                    <group name="Cube_1_instance_82" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3082" geometry={nodes.Cube_1_3082.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_83" position={[-28.918, 0, -15.898]} rotation={[0.722, 0.938, -0.618]}>
                    <group name="Cube_1_instance_83" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3083" geometry={nodes.Cube_1_3083.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_84" position={[-27.863, 0, -17.682]} rotation={[0.67, 0.89, -0.552]}>
                    <group name="Cube_1_instance_84" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3084" geometry={nodes.Cube_1_3084.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_85" position={[-26.698, 0, -19.397]} rotation={[0.625, 0.84, -0.493]}>
                    <group name="Cube_1_instance_85" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3085" geometry={nodes.Cube_1_3085.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_86" position={[-25.427, 0, -21.035]} rotation={[0.587, 0.788, -0.441]}>
                    <group name="Cube_1_instance_86" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3086" geometry={nodes.Cube_1_3086.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_87" position={[-24.056, 0, -22.59]} rotation={[0.555, 0.736, -0.394]}>
                    <group name="Cube_1_instance_87" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3087" geometry={nodes.Cube_1_3087.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_88" position={[-22.59, 0, -24.056]} rotation={[0.527, 0.682, -0.352]}>
                    <group name="Cube_1_instance_88" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3088" geometry={nodes.Cube_1_3088.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_89" position={[-21.035, 0, -25.427]} rotation={[0.504, 0.627, -0.313]}>
                    <group name="Cube_1_instance_89" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3089" geometry={nodes.Cube_1_3089.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_9" position={[17.682, 0, -27.863]} rotation={[0.466, -0.516, 0.243]}>
                    <group name="Cube_1_instance_9" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3009" geometry={nodes.Cube_1_3009.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_90" position={[-19.397, 0, -26.698]} rotation={[0.483, 0.572, -0.277]}>
                    <group name="Cube_1_instance_90" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3090" geometry={nodes.Cube_1_3090.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_91" position={[-17.682, 0, -27.863]} rotation={[0.466, 0.516, -0.243]}>
                    <group name="Cube_1_instance_91" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3091" geometry={nodes.Cube_1_3091.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_92" position={[-15.898, 0, -28.918]} rotation={[0.451, 0.459, -0.212]}>
                    <group name="Cube_1_instance_92" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3092" geometry={nodes.Cube_1_3092.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_93" position={[-14.051, 0, -29.859]} rotation={[0.439, 0.403, -0.182]}>
                    <group name="Cube_1_instance_93" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3093" geometry={nodes.Cube_1_3093.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_94" position={[-12.148, 0, -30.683]} rotation={[0.428, 0.346, -0.153]}>
                    <group name="Cube_1_instance_94" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3094" geometry={nodes.Cube_1_3094.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_95" position={[-10.198, 0, -31.385]} rotation={[0.42, 0.288, -0.126]}>
                    <group name="Cube_1_instance_95" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3095" geometry={nodes.Cube_1_3095.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_96" position={[-8.207, 0, -31.963]} rotation={[0.413, 0.231, -0.1]}>
                    <group name="Cube_1_instance_96" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3096" geometry={nodes.Cube_1_3096.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_97" position={[-6.184, 0, -32.415]} rotation={[0.408, 0.173, -0.074]}>
                    <group name="Cube_1_instance_97" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3097" geometry={nodes.Cube_1_3097.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_98" position={[-4.136, 0, -32.74]} rotation={[0.404, 0.116, -0.049]}>
                    <group name="Cube_1_instance_98" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3098" geometry={nodes.Cube_1_3098.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                  <group name="Null_99" position={[-2.072, 0, -32.935]} rotation={[0.402, 0.058, -0.025]}>
                    <group name="Cube_1_instance_99" position={[0, 0, 0.783]}>
                      <mesh name="Cube_1_3099" geometry={nodes.Cube_1_3099.geometry} material={materials['Mat.006']} />
                    </group>
                  </group>
                </group>
              </group>
              <group name="base" position={[0, 1.527, 0]}>
                <group name="Null_0_2" position={[0, 0, -33]} rotation={[0.401, 0, 0]}>
                  <mesh name="Cube_1_4" geometry={nodes.Cube_1_4.geometry} material={materials['FLUO.002']} position={[0, 0, 0.783]} />
                </group>
                <group name="Null_100" position={[25.964, 0, 20.368]} rotation={[2.539, -0.81, 2.679]}>
                  <group name="Cube_1_instance_199" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4100" geometry={nodes.Cube_1_4100.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_101" position={[25.502, 0, 20.944]} rotation={[2.552, -0.791, 2.698]}>
                  <group name="Cube_1_instance_200" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4101" geometry={nodes.Cube_1_4101.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_102" position={[25.027, 0, 21.509]} rotation={[2.564, -0.773, 2.715]}>
                  <group name="Cube_1_instance_201" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4102" geometry={nodes.Cube_1_4102.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_103" position={[24.54, 0, 22.063]} rotation={[2.576, -0.754, 2.732]}>
                  <group name="Cube_1_instance_202" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4103" geometry={nodes.Cube_1_4103.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_104" position={[24.041, 0, 22.606]} rotation={[2.587, -0.735, 2.748]}>
                  <group name="Cube_1_instance_203" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4104" geometry={nodes.Cube_1_4104.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_105" position={[23.529, 0, 23.138]} rotation={[2.597, -0.716, 2.763]}>
                  <group name="Cube_1_instance_204" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4105" geometry={nodes.Cube_1_4105.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_106" position={[23.006, 0, 23.658]} rotation={[2.607, -0.697, 2.778]}>
                  <group name="Cube_1_instance_205" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4106" geometry={nodes.Cube_1_4106.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_107" position={[22.471, 0, 24.167]} rotation={[2.616, -0.677, 2.793]}>
                  <group name="Cube_1_instance_206" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4107" geometry={nodes.Cube_1_4107.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_108" position={[21.926, 0, 24.663]} rotation={[2.625, -0.658, 2.807]}>
                  <group name="Cube_1_instance_207" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4108" geometry={nodes.Cube_1_4108.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_109" position={[21.369, 0, 25.147]} rotation={[2.633, -0.639, 2.821]}>
                  <group name="Cube_1_instance_208" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4109" geometry={nodes.Cube_1_4109.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_10_2" position={[7.317, 0, -32.178]} rotation={[0.411, -0.206, 0.089]}>
                  <group name="Cube_1_instance_109" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4010" geometry={nodes.Cube_1_4010.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_110" position={[20.801, 0, 25.619]} rotation={[2.641, -0.619, 2.834]}>
                  <group name="Cube_1_instance_209" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4110" geometry={nodes.Cube_1_4110.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_111" position={[20.223, 0, 26.077]} rotation={[2.649, -0.599, 2.847]}>
                  <group name="Cube_1_instance_210" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4111" geometry={nodes.Cube_1_4111.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_112" position={[19.635, 0, 26.523]} rotation={[2.656, -0.58, 2.86]}>
                  <group name="Cube_1_instance_211" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4112" geometry={nodes.Cube_1_4112.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_113" position={[19.037, 0, 26.955]} rotation={[2.662, -0.56, 2.872]}>
                  <group name="Cube_1_instance_212" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4113" geometry={nodes.Cube_1_4113.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_114" position={[18.43, 0, 27.374]} rotation={[2.669, -0.54, 2.884]}>
                  <group name="Cube_1_instance_213" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4114" geometry={nodes.Cube_1_4114.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_115" position={[17.813, 0, 27.779]} rotation={[2.675, -0.52, 2.896]}>
                  <group name="Cube_1_instance_214" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4115" geometry={nodes.Cube_1_4115.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_116" position={[17.187, 0, 28.171]} rotation={[2.68, -0.5, 2.908]}>
                  <group name="Cube_1_instance_215" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4116" geometry={nodes.Cube_1_4116.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_117" position={[16.553, 0, 28.548]} rotation={[2.685, -0.48, 2.919]}>
                  <group name="Cube_1_instance_216" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4117" geometry={nodes.Cube_1_4117.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_118" position={[15.911, 0, 28.911]} rotation={[2.69, -0.46, 2.93]}>
                  <group name="Cube_1_instance_217" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4118" geometry={nodes.Cube_1_4118.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_119" position={[15.26, 0, 29.26]} rotation={[2.695, -0.44, 2.941]}>
                  <group name="Cube_1_instance_218" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4119" geometry={nodes.Cube_1_4119.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_11_2" position={[8.035, 0, -32.007]} rotation={[0.413, -0.226, 0.098]}>
                  <group name="Cube_1_instance_110" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4011" geometry={nodes.Cube_1_4011.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_120" position={[14.602, 0, 29.593]} rotation={[2.7, -0.42, 2.951]}>
                  <group name="Cube_1_instance_219" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4120" geometry={nodes.Cube_1_4120.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_121" position={[13.937, 0, 29.912]} rotation={[2.704, -0.399, 2.962]}>
                  <group name="Cube_1_instance_220" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4121" geometry={nodes.Cube_1_4121.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_122" position={[13.265, 0, 30.217]} rotation={[2.708, -0.379, 2.972]}>
                  <group name="Cube_1_instance_221" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4122" geometry={nodes.Cube_1_4122.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_123" position={[12.586, 0, 30.506]} rotation={[2.711, -0.359, 2.982]}>
                  <group name="Cube_1_instance_222" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4123" geometry={nodes.Cube_1_4123.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_124" position={[11.901, 0, 30.779]} rotation={[2.715, -0.338, 2.992]}>
                  <group name="Cube_1_instance_223" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4124" geometry={nodes.Cube_1_4124.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_125" position={[11.21, 0, 31.038]} rotation={[2.718, -0.318, 3.001]}>
                  <group name="Cube_1_instance_224" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4125" geometry={nodes.Cube_1_4125.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_126" position={[10.513, 0, 31.281]} rotation={[2.721, -0.298, 3.011]}>
                  <group name="Cube_1_instance_225" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4126" geometry={nodes.Cube_1_4126.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_127" position={[9.811, 0, 31.508]} rotation={[2.723, -0.277, 3.021]}>
                  <group name="Cube_1_instance_226" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4127" geometry={nodes.Cube_1_4127.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_128" position={[9.104, 0, 31.719]} rotation={[2.726, -0.257, 3.03]}>
                  <group name="Cube_1_instance_227" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4128" geometry={nodes.Cube_1_4128.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_129" position={[8.392, 0, 31.915]} rotation={[2.728, -0.236, 3.039]}>
                  <group name="Cube_1_instance_228" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4129" geometry={nodes.Cube_1_4129.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_12_2" position={[8.749, 0, -31.819]} rotation={[0.415, -0.247, 0.107]}>
                  <group name="Cube_1_instance_111" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4012" geometry={nodes.Cube_1_4012.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_130" position={[7.677, 0, 32.095]} rotation={[2.73, -0.216, 3.048]}>
                  <group name="Cube_1_instance_229" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4130" geometry={nodes.Cube_1_4130.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_131" position={[6.957, 0, 32.258]} rotation={[2.732, -0.195, 3.058]}>
                  <group name="Cube_1_instance_230" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4131" geometry={nodes.Cube_1_4131.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_132" position={[6.234, 0, 32.406]} rotation={[2.734, -0.175, 3.067]}>
                  <group name="Cube_1_instance_231" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4132" geometry={nodes.Cube_1_4132.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_133" position={[5.508, 0, 32.537]} rotation={[2.735, -0.154, 3.076]}>
                  <group name="Cube_1_instance_232" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4133" geometry={nodes.Cube_1_4133.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_134" position={[4.779, 0, 32.652]} rotation={[2.736, -0.134, 3.084]}>
                  <group name="Cube_1_instance_233" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4134" geometry={nodes.Cube_1_4134.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_135" position={[4.048, 0, 32.751]} rotation={[2.737, -0.113, 3.093]}>
                  <group name="Cube_1_instance_234" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4135" geometry={nodes.Cube_1_4135.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_136" position={[3.315, 0, 32.833]} rotation={[2.738, -0.093, 3.102]}>
                  <group name="Cube_1_instance_235" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4136" geometry={nodes.Cube_1_4136.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_137" position={[2.58, 0, 32.899]} rotation={[2.739, -0.072, 3.111]}>
                  <group name="Cube_1_instance_236" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4137" geometry={nodes.Cube_1_4137.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_138" position={[1.844, 0, 32.948]} rotation={[2.74, -0.051, 3.12]}>
                  <group name="Cube_1_instance_237" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4138" geometry={nodes.Cube_1_4138.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_139" position={[1.107, 0, 32.981]} rotation={[2.74, -0.031, 3.128]}>
                  <group name="Cube_1_instance_238" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4139" geometry={nodes.Cube_1_4139.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_13_2" position={[9.458, 0, -31.616]} rotation={[0.417, -0.267, 0.116]}>
                  <group name="Cube_1_instance_112" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4013" geometry={nodes.Cube_1_4013.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_140" position={[0.369, 0, 32.998]} rotation={[2.74, -0.01, 3.137]}>
                  <group name="Cube_1_instance_239" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4140" geometry={nodes.Cube_1_4140.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_141" position={[-0.369, 0, 32.998]} rotation={[2.74, 0.01, -3.137]}>
                  <group name="Cube_1_instance_240" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4141" geometry={nodes.Cube_1_4141.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_142" position={[-1.107, 0, 32.981]} rotation={[2.74, 0.031, -3.128]}>
                  <group name="Cube_1_instance_241" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4142" geometry={nodes.Cube_1_4142.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_143" position={[-1.844, 0, 32.948]} rotation={[2.74, 0.051, -3.12]}>
                  <group name="Cube_1_instance_242" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4143" geometry={nodes.Cube_1_4143.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_144" position={[-2.58, 0, 32.899]} rotation={[2.739, 0.072, -3.111]}>
                  <group name="Cube_1_instance_243" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4144" geometry={nodes.Cube_1_4144.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_145" position={[-3.315, 0, 32.833]} rotation={[2.738, 0.093, -3.102]}>
                  <group name="Cube_1_instance_244" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4145" geometry={nodes.Cube_1_4145.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_146" position={[-4.048, 0, 32.751]} rotation={[2.737, 0.113, -3.093]}>
                  <group name="Cube_1_instance_245" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4146" geometry={nodes.Cube_1_4146.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_147" position={[-4.779, 0, 32.652]} rotation={[2.736, 0.134, -3.084]}>
                  <group name="Cube_1_instance_246" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4147" geometry={nodes.Cube_1_4147.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_148" position={[-5.508, 0, 32.537]} rotation={[2.735, 0.154, -3.076]}>
                  <group name="Cube_1_instance_247" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4148" geometry={nodes.Cube_1_4148.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_149" position={[-6.234, 0, 32.406]} rotation={[2.734, 0.175, -3.067]}>
                  <group name="Cube_1_instance_248" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4149" geometry={nodes.Cube_1_4149.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_14_2" position={[10.162, 0, -31.396]} rotation={[0.42, -0.287, 0.126]}>
                  <group name="Cube_1_instance_113" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4014" geometry={nodes.Cube_1_4014.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_150" position={[-6.957, 0, 32.258]} rotation={[2.732, 0.195, -3.058]}>
                  <group name="Cube_1_instance_249" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4150" geometry={nodes.Cube_1_4150.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_151" position={[-7.677, 0, 32.095]} rotation={[2.73, 0.216, -3.048]}>
                  <group name="Cube_1_instance_250" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4151" geometry={nodes.Cube_1_4151.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_152" position={[-8.392, 0, 31.915]} rotation={[2.728, 0.236, -3.039]}>
                  <group name="Cube_1_instance_251" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4152" geometry={nodes.Cube_1_4152.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_153" position={[-9.104, 0, 31.719]} rotation={[2.726, 0.257, -3.03]}>
                  <group name="Cube_1_instance_252" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4153" geometry={nodes.Cube_1_4153.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_154" position={[-9.811, 0, 31.508]} rotation={[2.723, 0.277, -3.021]}>
                  <group name="Cube_1_instance_253" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4154" geometry={nodes.Cube_1_4154.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_155" position={[-10.513, 0, 31.281]} rotation={[2.721, 0.298, -3.011]}>
                  <group name="Cube_1_instance_254" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4155" geometry={nodes.Cube_1_4155.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_156" position={[-11.21, 0, 31.038]} rotation={[2.718, 0.318, -3.001]}>
                  <group name="Cube_1_instance_255" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4156" geometry={nodes.Cube_1_4156.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_157" position={[-11.901, 0, 30.779]} rotation={[2.715, 0.338, -2.992]}>
                  <group name="Cube_1_instance_256" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4157" geometry={nodes.Cube_1_4157.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_158" position={[-12.586, 0, 30.506]} rotation={[2.711, 0.359, -2.982]}>
                  <group name="Cube_1_instance_257" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4158" geometry={nodes.Cube_1_4158.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_159" position={[-13.265, 0, 30.217]} rotation={[2.708, 0.379, -2.972]}>
                  <group name="Cube_1_instance_258" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4159" geometry={nodes.Cube_1_4159.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_15_2" position={[10.862, 0, -31.161]} rotation={[0.422, -0.308, 0.135]}>
                  <group name="Cube_1_instance_114" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4015" geometry={nodes.Cube_1_4015.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_160" position={[-13.937, 0, 29.912]} rotation={[2.704, 0.399, -2.962]}>
                  <group name="Cube_1_instance_259" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4160" geometry={nodes.Cube_1_4160.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_161" position={[-14.602, 0, 29.593]} rotation={[2.7, 0.42, -2.951]}>
                  <group name="Cube_1_instance_260" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4161" geometry={nodes.Cube_1_4161.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_162" position={[-15.26, 0, 29.26]} rotation={[2.695, 0.44, -2.941]}>
                  <group name="Cube_1_instance_261" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4162" geometry={nodes.Cube_1_4162.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_163" position={[-15.911, 0, 28.911]} rotation={[2.69, 0.46, -2.93]}>
                  <group name="Cube_1_instance_262" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4163" geometry={nodes.Cube_1_4163.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_164" position={[-16.553, 0, 28.548]} rotation={[2.685, 0.48, -2.919]}>
                  <group name="Cube_1_instance_263" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4164" geometry={nodes.Cube_1_4164.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_165" position={[-17.187, 0, 28.171]} rotation={[2.68, 0.5, -2.908]}>
                  <group name="Cube_1_instance_264" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4165" geometry={nodes.Cube_1_4165.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_166" position={[-17.813, 0, 27.779]} rotation={[2.675, 0.52, -2.896]}>
                  <group name="Cube_1_instance_265" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4166" geometry={nodes.Cube_1_4166.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_167" position={[-18.43, 0, 27.374]} rotation={[2.669, 0.54, -2.884]}>
                  <group name="Cube_1_instance_266" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4167" geometry={nodes.Cube_1_4167.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_168" position={[-19.037, 0, 26.955]} rotation={[2.662, 0.56, -2.872]}>
                  <group name="Cube_1_instance_267" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4168" geometry={nodes.Cube_1_4168.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_169" position={[-19.635, 0, 26.523]} rotation={[2.656, 0.58, -2.86]}>
                  <group name="Cube_1_instance_268" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4169" geometry={nodes.Cube_1_4169.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_16_2" position={[11.556, 0, -30.911]} rotation={[0.425, -0.328, 0.145]}>
                  <group name="Cube_1_instance_115" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4016" geometry={nodes.Cube_1_4016.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_170" position={[-20.223, 0, 26.077]} rotation={[2.649, 0.599, -2.847]}>
                  <group name="Cube_1_instance_269" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4170" geometry={nodes.Cube_1_4170.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_171" position={[-20.801, 0, 25.619]} rotation={[2.641, 0.619, -2.834]}>
                  <group name="Cube_1_instance_270" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4171" geometry={nodes.Cube_1_4171.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_172" position={[-21.369, 0, 25.147]} rotation={[2.633, 0.639, -2.821]}>
                  <group name="Cube_1_instance_271" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4172" geometry={nodes.Cube_1_4172.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_173" position={[-21.926, 0, 24.663]} rotation={[2.625, 0.658, -2.807]}>
                  <group name="Cube_1_instance_272" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4173" geometry={nodes.Cube_1_4173.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_174" position={[-22.471, 0, 24.167]} rotation={[2.616, 0.677, -2.793]}>
                  <group name="Cube_1_instance_273" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4174" geometry={nodes.Cube_1_4174.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_175" position={[-23.006, 0, 23.658]} rotation={[2.607, 0.697, -2.778]}>
                  <group name="Cube_1_instance_274" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4175" geometry={nodes.Cube_1_4175.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_176" position={[-23.529, 0, 23.138]} rotation={[2.597, 0.716, -2.763]}>
                  <group name="Cube_1_instance_275" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4176" geometry={nodes.Cube_1_4176.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_177" position={[-24.041, 0, 22.606]} rotation={[2.587, 0.735, -2.748]}>
                  <group name="Cube_1_instance_276" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4177" geometry={nodes.Cube_1_4177.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_178" position={[-24.54, 0, 22.063]} rotation={[2.576, 0.754, -2.732]}>
                  <group name="Cube_1_instance_277" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4178" geometry={nodes.Cube_1_4178.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_179" position={[-25.027, 0, 21.509]} rotation={[2.564, 0.773, -2.715]}>
                  <group name="Cube_1_instance_278" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4179" geometry={nodes.Cube_1_4179.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_17_2" position={[12.244, 0, -30.644]} rotation={[0.429, -0.349, 0.155]}>
                  <group name="Cube_1_instance_116" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4017" geometry={nodes.Cube_1_4017.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_180" position={[-25.502, 0, 20.944]} rotation={[2.552, 0.791, -2.698]}>
                  <group name="Cube_1_instance_279" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4180" geometry={nodes.Cube_1_4180.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_181" position={[-25.964, 0, 20.368]} rotation={[2.539, 0.81, -2.679]}>
                  <group name="Cube_1_instance_280" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4181" geometry={nodes.Cube_1_4181.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_182" position={[-26.413, 0, 19.783]} rotation={[2.525, 0.828, -2.661]}>
                  <group name="Cube_1_instance_281" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4182" geometry={nodes.Cube_1_4182.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_183" position={[-26.849, 0, 19.187]} rotation={[2.511, 0.846, -2.641]}>
                  <group name="Cube_1_instance_282" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4183" geometry={nodes.Cube_1_4183.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_184" position={[-27.271, 0, 18.582]} rotation={[2.496, 0.864, -2.621]}>
                  <group name="Cube_1_instance_283" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4184" geometry={nodes.Cube_1_4184.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_185" position={[-27.679, 0, 17.968]} rotation={[2.479, 0.882, -2.6]}>
                  <group name="Cube_1_instance_284" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4185" geometry={nodes.Cube_1_4185.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_186" position={[-28.074, 0, 17.345]} rotation={[2.462, 0.9, -2.578]}>
                  <group name="Cube_1_instance_285" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4186" geometry={nodes.Cube_1_4186.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_187" position={[-28.455, 0, 16.713]} rotation={[2.444, 0.917, -2.555]}>
                  <group name="Cube_1_instance_286" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4187" geometry={nodes.Cube_1_4187.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_188" position={[-28.822, 0, 16.072]} rotation={[2.425, 0.934, -2.53]}>
                  <group name="Cube_1_instance_287" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4188" geometry={nodes.Cube_1_4188.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_189" position={[-29.174, 0, 15.424]} rotation={[2.404, 0.951, -2.505]}>
                  <group name="Cube_1_instance_288" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4189" geometry={nodes.Cube_1_4189.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_18_2" position={[12.926, 0, -30.363]} rotation={[0.432, -0.369, 0.165]}>
                  <group name="Cube_1_instance_117" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4018" geometry={nodes.Cube_1_4018.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_190" position={[-29.511, 0, 14.768]} rotation={[2.383, 0.967, -2.479]}>
                  <group name="Cube_1_instance_289" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4190" geometry={nodes.Cube_1_4190.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_191" position={[-29.834, 0, 14.104]} rotation={[2.36, 0.983, -2.451]}>
                  <group name="Cube_1_instance_290" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4191" geometry={nodes.Cube_1_4191.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_192" position={[-30.142, 0, 13.434]} rotation={[2.335, 0.999, -2.422]}>
                  <group name="Cube_1_instance_291" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4192" geometry={nodes.Cube_1_4192.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_193" position={[-30.435, 0, 12.756]} rotation={[2.309, 1.014, -2.391]}>
                  <group name="Cube_1_instance_292" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4193" geometry={nodes.Cube_1_4193.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_194" position={[-30.712, 0, 12.073]} rotation={[2.282, 1.029, -2.359]}>
                  <group name="Cube_1_instance_293" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4194" geometry={nodes.Cube_1_4194.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_195" position={[-30.975, 0, 11.383]} rotation={[2.253, 1.043, -2.326]}>
                  <group name="Cube_1_instance_294" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4195" geometry={nodes.Cube_1_4195.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_196" position={[-31.221, 0, 10.688]} rotation={[2.223, 1.057, -2.29]}>
                  <group name="Cube_1_instance_295" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4196" geometry={nodes.Cube_1_4196.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_197" position={[-31.453, 0, 9.987]} rotation={[2.19, 1.07, -2.253]}>
                  <group name="Cube_1_instance_296" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4197" geometry={nodes.Cube_1_4197.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_198" position={[-31.668, 0, 9.281]} rotation={[2.156, 1.083, -2.214]}>
                  <group name="Cube_1_instance_297" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4198" geometry={nodes.Cube_1_4198.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_199" position={[-31.868, 0, 8.571]} rotation={[2.12, 1.095, -2.174]}>
                  <group name="Cube_1_instance_298" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4199" geometry={nodes.Cube_1_4199.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_19_2" position={[13.602, 0, -30.066]} rotation={[0.436, -0.389, 0.175]}>
                  <group name="Cube_1_instance_118" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4019" geometry={nodes.Cube_1_4019.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_1_2" position={[0.738, 0, -32.992]} rotation={[0.402, -0.021, 0.009]}>
                  <group name="Cube_1_instance_100" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4001" geometry={nodes.Cube_1_4001.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_200" position={[-32.051, 0, 7.856]} rotation={[2.082, 1.106, -2.131]}>
                  <group name="Cube_1_instance_299" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4200" geometry={nodes.Cube_1_4200.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_201" position={[-32.219, 0, 7.138]} rotation={[2.042, 1.117, -2.087]}>
                  <group name="Cube_1_instance_300" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4201" geometry={nodes.Cube_1_4201.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_202" position={[-32.37, 0, 6.415]} rotation={[2, 1.127, -2.04]}>
                  <group name="Cube_1_instance_301" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4202" geometry={nodes.Cube_1_4202.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_203" position={[-32.506, 0, 5.69]} rotation={[1.957, 1.135, -1.992]}>
                  <group name="Cube_1_instance_302" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4203" geometry={nodes.Cube_1_4203.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_204" position={[-32.625, 0, 4.962]} rotation={[1.911, 1.143, -1.942]}>
                  <group name="Cube_1_instance_303" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4204" geometry={nodes.Cube_1_4204.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_205" position={[-32.728, 0, 4.231]} rotation={[1.864, 1.15, -1.89]}>
                  <group name="Cube_1_instance_304" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4205" geometry={nodes.Cube_1_4205.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_206" position={[-32.814, 0, 3.498]} rotation={[1.816, 1.156, -1.837]}>
                  <group name="Cube_1_instance_305" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4206" geometry={nodes.Cube_1_4206.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_207" position={[-32.884, 0, 2.764]} rotation={[1.766, 1.161, -1.783]}>
                  <group name="Cube_1_instance_306" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4207" geometry={nodes.Cube_1_4207.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_208" position={[-32.938, 0, 2.028]} rotation={[1.715, 1.165, -1.727]}>
                  <group name="Cube_1_instance_307" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4208" geometry={nodes.Cube_1_4208.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_209" position={[-32.975, 0, 1.291]} rotation={[1.663, 1.168, -1.671]}>
                  <group name="Cube_1_instance_308" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4209" geometry={nodes.Cube_1_4209.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_20_2" position={[14.271, 0, -29.755]} rotation={[0.44, -0.409, 0.185]}>
                  <group name="Cube_1_instance_119" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4020" geometry={nodes.Cube_1_4020.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_210" position={[-32.995, 0, 0.553]} rotation={[1.61, 1.169, -1.614]}>
                  <group name="Cube_1_instance_309" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4210" geometry={nodes.Cube_1_4210.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_211" position={[-32.999, 0, -0.184]} rotation={[1.558, 1.169, -1.556]}>
                  <group name="Cube_1_instance_310" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4211" geometry={nodes.Cube_1_4211.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_212" position={[-32.987, 0, -0.922]} rotation={[1.505, 1.168, -1.499]}>
                  <group name="Cube_1_instance_311" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4212" geometry={nodes.Cube_1_4212.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_213" position={[-32.958, 0, -1.66]} rotation={[1.453, 1.166, -1.443]}>
                  <group name="Cube_1_instance_312" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4213" geometry={nodes.Cube_1_4213.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_214" position={[-32.913, 0, -2.396]} rotation={[1.401, 1.163, -1.387]}>
                  <group name="Cube_1_instance_313" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4214" geometry={nodes.Cube_1_4214.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_215" position={[-32.851, 0, -3.131]} rotation={[1.351, 1.159, -1.332]}>
                  <group name="Cube_1_instance_314" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4215" geometry={nodes.Cube_1_4215.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_216" position={[-32.773, 0, -3.865]} rotation={[1.302, 1.153, -1.278]}>
                  <group name="Cube_1_instance_315" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4216" geometry={nodes.Cube_1_4216.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_217" position={[-32.678, 0, -4.597]} rotation={[1.254, 1.147, -1.225]}>
                  <group name="Cube_1_instance_316" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4217" geometry={nodes.Cube_1_4217.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_218" position={[-32.567, 0, -5.326]} rotation={[1.207, 1.14, -1.174]}>
                  <group name="Cube_1_instance_317" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4218" geometry={nodes.Cube_1_4218.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_219" position={[-32.44, 0, -6.053]} rotation={[1.163, 1.131, -1.125]}>
                  <group name="Cube_1_instance_318" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4219" geometry={nodes.Cube_1_4219.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_21_2" position={[14.932, 0, -29.428]} rotation={[0.444, -0.43, 0.196]}>
                  <group name="Cube_1_instance_120" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4021" geometry={nodes.Cube_1_4021.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_220" position={[-32.297, 0, -6.777]} rotation={[1.12, 1.122, -1.078]}>
                  <group name="Cube_1_instance_319" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4220" geometry={nodes.Cube_1_4220.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_221" position={[-32.137, 0, -7.497]} rotation={[1.079, 1.112, -1.033]}>
                  <group name="Cube_1_instance_320" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4221" geometry={nodes.Cube_1_4221.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_222" position={[-31.961, 0, -8.214]} rotation={[1.04, 1.101, -0.989]}>
                  <group name="Cube_1_instance_321" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4222" geometry={nodes.Cube_1_4222.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_223" position={[-31.77, 0, -8.926]} rotation={[1.003, 1.089, -0.947]}>
                  <group name="Cube_1_instance_322" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4223" geometry={nodes.Cube_1_4223.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_224" position={[-31.562, 0, -9.635]} rotation={[0.968, 1.077, -0.908]}>
                  <group name="Cube_1_instance_323" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4224" geometry={nodes.Cube_1_4224.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_225" position={[-31.339, 0, -10.338]} rotation={[0.935, 1.064, -0.87]}>
                  <group name="Cube_1_instance_324" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4225" geometry={nodes.Cube_1_4225.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_226" position={[-31.1, 0, -11.036]} rotation={[0.904, 1.05, -0.833]}>
                  <group name="Cube_1_instance_325" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4226" geometry={nodes.Cube_1_4226.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_227" position={[-30.845, 0, -11.728]} rotation={[0.874, 1.036, -0.799]}>
                  <group name="Cube_1_instance_326" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4227" geometry={nodes.Cube_1_4227.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_228" position={[-30.576, 0, -12.415]} rotation={[0.846, 1.021, -0.766]}>
                  <group name="Cube_1_instance_327" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4228" geometry={nodes.Cube_1_4228.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_229" position={[-30.29, 0, -13.096]} rotation={[0.819, 1.006, -0.735]}>
                  <group name="Cube_1_instance_328" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4229" geometry={nodes.Cube_1_4229.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_22_2" position={[15.587, 0, -29.087]} rotation={[Math.PI / 7, -0.45, 0.206]}>
                  <group name="Cube_1_instance_121" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4022" geometry={nodes.Cube_1_4022.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_230" position={[-29.99, 0, -13.77]} rotation={[0.794, 0.991, -0.705]}>
                  <group name="Cube_1_instance_329" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4230" geometry={nodes.Cube_1_4230.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_231" position={[-29.675, 0, -14.437]} rotation={[0.77, 0.975, -0.677]}>
                  <group name="Cube_1_instance_330" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4231" geometry={nodes.Cube_1_4231.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_232" position={[-29.344, 0, -15.097]} rotation={[0.748, 0.959, -0.65]}>
                  <group name="Cube_1_instance_331" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4232" geometry={nodes.Cube_1_4232.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_233" position={[-28.999, 0, -15.749]} rotation={[0.727, 0.942, -0.624]}>
                  <group name="Cube_1_instance_332" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4233" geometry={nodes.Cube_1_4233.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_234" position={[-28.64, 0, -16.393]} rotation={[0.707, 0.925, -0.599]}>
                  <group name="Cube_1_instance_333" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4234" geometry={nodes.Cube_1_4234.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_235" position={[-28.266, 0, -17.03]} rotation={[0.688, 0.908, -0.575]}>
                  <group name="Cube_1_instance_334" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4235" geometry={nodes.Cube_1_4235.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_236" position={[-27.879, 0, -17.657]} rotation={[0.671, 0.891, -0.553]}>
                  <group name="Cube_1_instance_335" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4236" geometry={nodes.Cube_1_4236.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_237" position={[-27.477, 0, -18.276]} rotation={[0.654, 0.873, -0.531]}>
                  <group name="Cube_1_instance_336" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4237" geometry={nodes.Cube_1_4237.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_238" position={[-27.061, 0, -18.886]} rotation={[0.638, 0.855, -0.51]}>
                  <group name="Cube_1_instance_337" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4238" geometry={nodes.Cube_1_4238.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_239" position={[-26.632, 0, -19.486]} rotation={[0.623, 0.837, -0.49]}>
                  <group name="Cube_1_instance_338" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4239" geometry={nodes.Cube_1_4239.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_23_2" position={[16.233, 0, -28.731]} rotation={[0.454, -0.47, 0.217]}>
                  <group name="Cube_1_instance_122" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4023" geometry={nodes.Cube_1_4023.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_240" position={[-26.19, 0, -20.077]} rotation={[0.609, 0.819, -0.471]}>
                  <group name="Cube_1_instance_339" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4240" geometry={nodes.Cube_1_4240.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_241" position={[-25.735, 0, -20.657]} rotation={[0.596, 0.801, -0.453]}>
                  <group name="Cube_1_instance_340" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4241" geometry={nodes.Cube_1_4241.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_242" position={[-25.266, 0, -21.228]} rotation={[0.583, 0.782, -0.435]}>
                  <group name="Cube_1_instance_341" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4242" geometry={nodes.Cube_1_4242.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_243" position={[-24.785, 0, -21.787]} rotation={[0.571, 0.763, -0.418]}>
                  <group name="Cube_1_instance_342" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4243" geometry={nodes.Cube_1_4243.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_244" position={[-24.292, 0, -22.336]} rotation={[0.56, 0.744, -0.402]}>
                  <group name="Cube_1_instance_343" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4244" geometry={nodes.Cube_1_4244.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_245" position={[-23.787, 0, -22.874]} rotation={[0.549, 0.725, -0.386]}>
                  <group name="Cube_1_instance_344" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4245" geometry={nodes.Cube_1_4245.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_246" position={[-23.269, 0, -23.4]} rotation={[0.539, 0.706, -0.371]}>
                  <group name="Cube_1_instance_345" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4246" geometry={nodes.Cube_1_4246.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_247" position={[-22.74, 0, -23.914]} rotation={[0.53, 0.687, -0.356]}>
                  <group name="Cube_1_instance_346" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4247" geometry={nodes.Cube_1_4247.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_248" position={[-22.2, 0, -24.417]} rotation={[0.521, 0.668, -0.341]}>
                  <group name="Cube_1_instance_347" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4248" geometry={nodes.Cube_1_4248.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_249" position={[-21.648, 0, -24.907]} rotation={[0.512, 0.648, -0.327]}>
                  <group name="Cube_1_instance_348" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4249" geometry={nodes.Cube_1_4249.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_24_2" position={[16.871, 0, -28.361]} rotation={[0.459, -0.49, 0.228]}>
                  <group name="Cube_1_instance_123" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4024" geometry={nodes.Cube_1_4024.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_250" position={[-21.086, 0, -25.385]} rotation={[0.504, 0.629, -0.314]}>
                  <group name="Cube_1_instance_349" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4250" geometry={nodes.Cube_1_4250.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_251" position={[-20.513, 0, -25.85]} rotation={[0.497, 0.609, -0.301]}>
                  <group name="Cube_1_instance_350" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4251" geometry={nodes.Cube_1_4251.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_252" position={[-19.93, 0, -26.302]} rotation={[0.489, 0.589, -0.288]}>
                  <group name="Cube_1_instance_351" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4252" geometry={nodes.Cube_1_4252.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_253" position={[-19.337, 0, -26.741]} rotation={[0.483, 0.57, -0.275]}>
                  <group name="Cube_1_instance_352" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4253" geometry={nodes.Cube_1_4253.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_254" position={[-18.734, 0, -27.167]} rotation={[0.476, 0.55, -0.263]}>
                  <group name="Cube_1_instance_353" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4254" geometry={nodes.Cube_1_4254.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_255" position={[-18.122, 0, -27.579]} rotation={[0.47, 0.53, -0.251]}>
                  <group name="Cube_1_instance_354" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4255" geometry={nodes.Cube_1_4255.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_256" position={[-17.501, 0, -27.977]} rotation={[0.464, 0.51, -0.24]}>
                  <group name="Cube_1_instance_355" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4256" geometry={nodes.Cube_1_4256.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_257" position={[-16.871, 0, -28.361]} rotation={[0.459, 0.49, -0.228]}>
                  <group name="Cube_1_instance_356" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4257" geometry={nodes.Cube_1_4257.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_258" position={[-16.233, 0, -28.731]} rotation={[0.454, 0.47, -0.217]}>
                  <group name="Cube_1_instance_357" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4258" geometry={nodes.Cube_1_4258.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_259" position={[-15.587, 0, -29.087]} rotation={[Math.PI / 7, 0.45, -0.206]}>
                  <group name="Cube_1_instance_358" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4259" geometry={nodes.Cube_1_4259.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_25_2" position={[17.501, 0, -27.977]} rotation={[0.464, -0.51, 0.24]}>
                  <group name="Cube_1_instance_124" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4025" geometry={nodes.Cube_1_4025.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_260" position={[-14.932, 0, -29.428]} rotation={[0.444, 0.43, -0.196]}>
                  <group name="Cube_1_instance_359" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4260" geometry={nodes.Cube_1_4260.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_261" position={[-14.271, 0, -29.755]} rotation={[0.44, 0.409, -0.185]}>
                  <group name="Cube_1_instance_360" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4261" geometry={nodes.Cube_1_4261.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_262" position={[-13.602, 0, -30.066]} rotation={[0.436, 0.389, -0.175]}>
                  <group name="Cube_1_instance_361" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4262" geometry={nodes.Cube_1_4262.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_263" position={[-12.926, 0, -30.363]} rotation={[0.432, 0.369, -0.165]}>
                  <group name="Cube_1_instance_362" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4263" geometry={nodes.Cube_1_4263.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_264" position={[-12.244, 0, -30.644]} rotation={[0.429, 0.349, -0.155]}>
                  <group name="Cube_1_instance_363" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4264" geometry={nodes.Cube_1_4264.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_265" position={[-11.556, 0, -30.911]} rotation={[0.425, 0.328, -0.145]}>
                  <group name="Cube_1_instance_364" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4265" geometry={nodes.Cube_1_4265.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_266" position={[-10.862, 0, -31.161]} rotation={[0.422, 0.308, -0.135]}>
                  <group name="Cube_1_instance_365" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4266" geometry={nodes.Cube_1_4266.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_267" position={[-10.162, 0, -31.396]} rotation={[0.42, 0.287, -0.126]}>
                  <group name="Cube_1_instance_366" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4267" geometry={nodes.Cube_1_4267.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_268" position={[-9.458, 0, -31.616]} rotation={[0.417, 0.267, -0.116]}>
                  <group name="Cube_1_instance_367" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4268" geometry={nodes.Cube_1_4268.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_269" position={[-8.749, 0, -31.819]} rotation={[0.415, 0.247, -0.107]}>
                  <group name="Cube_1_instance_368" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4269" geometry={nodes.Cube_1_4269.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_26_2" position={[18.122, 0, -27.579]} rotation={[0.47, -0.53, 0.251]}>
                  <group name="Cube_1_instance_125" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4026" geometry={nodes.Cube_1_4026.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_270" position={[-8.035, 0, -32.007]} rotation={[0.413, 0.226, -0.098]}>
                  <group name="Cube_1_instance_369" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4270" geometry={nodes.Cube_1_4270.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_271" position={[-7.317, 0, -32.178]} rotation={[0.411, 0.206, -0.089]}>
                  <group name="Cube_1_instance_370" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4271" geometry={nodes.Cube_1_4271.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_272" position={[-6.596, 0, -32.334]} rotation={[0.409, 0.185, -0.08]}>
                  <group name="Cube_1_instance_371" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4272" geometry={nodes.Cube_1_4272.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_273" position={[-5.872, 0, -32.473]} rotation={[0.407, 0.165, -0.071]}>
                  <group name="Cube_1_instance_372" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4273" geometry={nodes.Cube_1_4273.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_274" position={[-5.144, 0, -32.597]} rotation={[0.406, 0.144, -0.062]}>
                  <group name="Cube_1_instance_373" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4274" geometry={nodes.Cube_1_4274.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_275" position={[-4.414, 0, -32.703]} rotation={[0.405, 0.123, -0.053]}>
                  <group name="Cube_1_instance_374" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4275" geometry={nodes.Cube_1_4275.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_276" position={[-3.682, 0, -32.794]} rotation={[0.404, 0.103, -0.044]}>
                  <group name="Cube_1_instance_375" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4276" geometry={nodes.Cube_1_4276.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_277" position={[-2.948, 0, -32.868]} rotation={[0.403, 0.082, -0.035]}>
                  <group name="Cube_1_instance_376" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4277" geometry={nodes.Cube_1_4277.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_278" position={[-2.212, 0, -32.926]} rotation={[0.402, 0.062, -0.026]}>
                  <group name="Cube_1_instance_377" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4278" geometry={nodes.Cube_1_4278.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_279" position={[-1.475, 0, -32.967]} rotation={[0.402, 0.041, -0.017]}>
                  <group name="Cube_1_instance_378" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4279" geometry={nodes.Cube_1_4279.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_27_2" position={[18.734, 0, -27.167]} rotation={[0.476, -0.55, 0.263]}>
                  <group name="Cube_1_instance_126" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4027" geometry={nodes.Cube_1_4027.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_280" position={[-0.738, 0, -32.992]} rotation={[0.402, 0.021, -0.009]}>
                  <group name="Cube_1_instance_379" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4280" geometry={nodes.Cube_1_4280.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_28_2" position={[19.337, 0, -26.741]} rotation={[0.483, -0.57, 0.275]}>
                  <group name="Cube_1_instance_127" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4028" geometry={nodes.Cube_1_4028.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_29_2" position={[19.93, 0, -26.302]} rotation={[0.489, -0.589, 0.288]}>
                  <group name="Cube_1_instance_128" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4029" geometry={nodes.Cube_1_4029.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_2_2" position={[1.475, 0, -32.967]} rotation={[0.402, -0.041, 0.017]}>
                  <group name="Cube_1_instance_101" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4002" geometry={nodes.Cube_1_4002.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_30_2" position={[20.513, 0, -25.85]} rotation={[0.497, -0.609, 0.301]}>
                  <group name="Cube_1_instance_129" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4030" geometry={nodes.Cube_1_4030.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_31_2" position={[21.086, 0, -25.385]} rotation={[0.504, -0.629, 0.314]}>
                  <group name="Cube_1_instance_130" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4031" geometry={nodes.Cube_1_4031.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_32_2" position={[21.648, 0, -24.907]} rotation={[0.512, -0.648, 0.327]}>
                  <group name="Cube_1_instance_131" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4032" geometry={nodes.Cube_1_4032.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_33_2" position={[22.2, 0, -24.417]} rotation={[0.521, -0.668, 0.341]}>
                  <group name="Cube_1_instance_132" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4033" geometry={nodes.Cube_1_4033.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_34_2" position={[22.74, 0, -23.914]} rotation={[0.53, -0.687, 0.356]}>
                  <group name="Cube_1_instance_133" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4034" geometry={nodes.Cube_1_4034.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_35_2" position={[23.269, 0, -23.4]} rotation={[0.539, -0.706, 0.371]}>
                  <group name="Cube_1_instance_134" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4035" geometry={nodes.Cube_1_4035.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_36_2" position={[23.787, 0, -22.874]} rotation={[0.549, -0.725, 0.386]}>
                  <group name="Cube_1_instance_135" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4036" geometry={nodes.Cube_1_4036.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_37_2" position={[24.292, 0, -22.336]} rotation={[0.56, -0.744, 0.402]}>
                  <group name="Cube_1_instance_136" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4037" geometry={nodes.Cube_1_4037.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_38_2" position={[24.785, 0, -21.787]} rotation={[0.571, -0.763, 0.418]}>
                  <group name="Cube_1_instance_137" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4038" geometry={nodes.Cube_1_4038.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_39_2" position={[25.266, 0, -21.228]} rotation={[0.583, -0.782, 0.435]}>
                  <group name="Cube_1_instance_138" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4039" geometry={nodes.Cube_1_4039.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_3_2" position={[2.212, 0, -32.926]} rotation={[0.402, -0.062, 0.026]}>
                  <group name="Cube_1_instance_102" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4003" geometry={nodes.Cube_1_4003.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_40_2" position={[25.735, 0, -20.657]} rotation={[0.596, -0.801, 0.453]}>
                  <group name="Cube_1_instance_139" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4040" geometry={nodes.Cube_1_4040.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_41_2" position={[26.19, 0, -20.077]} rotation={[0.609, -0.819, 0.471]}>
                  <group name="Cube_1_instance_140" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4041" geometry={nodes.Cube_1_4041.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_42_2" position={[26.632, 0, -19.486]} rotation={[0.623, -0.837, 0.49]}>
                  <group name="Cube_1_instance_141" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4042" geometry={nodes.Cube_1_4042.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_43_2" position={[27.061, 0, -18.886]} rotation={[0.638, -0.855, 0.51]}>
                  <group name="Cube_1_instance_142" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4043" geometry={nodes.Cube_1_4043.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_44_2" position={[27.477, 0, -18.276]} rotation={[0.654, -0.873, 0.531]}>
                  <group name="Cube_1_instance_143" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4044" geometry={nodes.Cube_1_4044.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_45_2" position={[27.879, 0, -17.657]} rotation={[0.671, -0.891, 0.553]}>
                  <group name="Cube_1_instance_144" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4045" geometry={nodes.Cube_1_4045.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_46_2" position={[28.266, 0, -17.03]} rotation={[0.688, -0.908, 0.575]}>
                  <group name="Cube_1_instance_145" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4046" geometry={nodes.Cube_1_4046.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_47_2" position={[28.64, 0, -16.393]} rotation={[0.707, -0.925, 0.599]}>
                  <group name="Cube_1_instance_146" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4047" geometry={nodes.Cube_1_4047.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_48_2" position={[28.999, 0, -15.749]} rotation={[0.727, -0.942, 0.624]}>
                  <group name="Cube_1_instance_147" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4048" geometry={nodes.Cube_1_4048.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_49_2" position={[29.344, 0, -15.097]} rotation={[0.748, -0.959, 0.65]}>
                  <group name="Cube_1_instance_148" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4049" geometry={nodes.Cube_1_4049.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_4_2" position={[2.948, 0, -32.868]} rotation={[0.403, -0.082, 0.035]}>
                  <group name="Cube_1_instance_103" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4004" geometry={nodes.Cube_1_4004.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_50_2" position={[29.675, 0, -14.437]} rotation={[0.77, -0.975, 0.677]}>
                  <group name="Cube_1_instance_149" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4050" geometry={nodes.Cube_1_4050.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_51_2" position={[29.99, 0, -13.77]} rotation={[0.794, -0.991, 0.705]}>
                  <group name="Cube_1_instance_150" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4051" geometry={nodes.Cube_1_4051.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_52_2" position={[30.29, 0, -13.096]} rotation={[0.819, -1.006, 0.735]}>
                  <group name="Cube_1_instance_151" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4052" geometry={nodes.Cube_1_4052.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_53_2" position={[30.576, 0, -12.415]} rotation={[0.846, -1.021, 0.766]}>
                  <group name="Cube_1_instance_152" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4053" geometry={nodes.Cube_1_4053.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_54_2" position={[30.845, 0, -11.728]} rotation={[0.874, -1.036, 0.799]}>
                  <group name="Cube_1_instance_153" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4054" geometry={nodes.Cube_1_4054.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_55_2" position={[31.1, 0, -11.036]} rotation={[0.904, -1.05, 0.833]}>
                  <group name="Cube_1_instance_154" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4055" geometry={nodes.Cube_1_4055.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_56_2" position={[31.339, 0, -10.338]} rotation={[0.935, -1.064, 0.87]}>
                  <group name="Cube_1_instance_155" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4056" geometry={nodes.Cube_1_4056.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_57_2" position={[31.562, 0, -9.635]} rotation={[0.968, -1.077, 0.908]}>
                  <group name="Cube_1_instance_156" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4057" geometry={nodes.Cube_1_4057.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_58_2" position={[31.77, 0, -8.926]} rotation={[1.003, -1.089, 0.947]}>
                  <group name="Cube_1_instance_157" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4058" geometry={nodes.Cube_1_4058.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_59_2" position={[31.961, 0, -8.214]} rotation={[1.04, -1.101, 0.989]}>
                  <group name="Cube_1_instance_158" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4059" geometry={nodes.Cube_1_4059.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_5_2" position={[3.682, 0, -32.794]} rotation={[0.404, -0.103, 0.044]}>
                  <group name="Cube_1_instance_104" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4005" geometry={nodes.Cube_1_4005.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_60_2" position={[32.137, 0, -7.497]} rotation={[1.079, -1.112, 1.033]}>
                  <group name="Cube_1_instance_159" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4060" geometry={nodes.Cube_1_4060.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_61_2" position={[32.297, 0, -6.777]} rotation={[1.12, -1.122, 1.078]}>
                  <group name="Cube_1_instance_160" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4061" geometry={nodes.Cube_1_4061.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_62_2" position={[32.44, 0, -6.053]} rotation={[1.163, -1.131, 1.125]}>
                  <group name="Cube_1_instance_161" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4062" geometry={nodes.Cube_1_4062.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_63_2" position={[32.567, 0, -5.326]} rotation={[1.207, -1.14, 1.174]}>
                  <group name="Cube_1_instance_162" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4063" geometry={nodes.Cube_1_4063.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_64_2" position={[32.678, 0, -4.597]} rotation={[1.254, -1.147, 1.225]}>
                  <group name="Cube_1_instance_163" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4064" geometry={nodes.Cube_1_4064.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_65_2" position={[32.773, 0, -3.865]} rotation={[1.302, -1.153, 1.278]}>
                  <group name="Cube_1_instance_164" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4065" geometry={nodes.Cube_1_4065.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_66_2" position={[32.851, 0, -3.131]} rotation={[1.351, -1.159, 1.332]}>
                  <group name="Cube_1_instance_165" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4066" geometry={nodes.Cube_1_4066.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_67_2" position={[32.913, 0, -2.396]} rotation={[1.401, -1.163, 1.387]}>
                  <group name="Cube_1_instance_166" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4067" geometry={nodes.Cube_1_4067.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_68_2" position={[32.958, 0, -1.66]} rotation={[1.453, -1.166, 1.443]}>
                  <group name="Cube_1_instance_167" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4068" geometry={nodes.Cube_1_4068.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_69_2" position={[32.987, 0, -0.922]} rotation={[1.505, -1.168, 1.499]}>
                  <group name="Cube_1_instance_168" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4069" geometry={nodes.Cube_1_4069.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_6_2" position={[4.414, 0, -32.703]} rotation={[0.405, -0.123, 0.053]}>
                  <group name="Cube_1_instance_105" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4006" geometry={nodes.Cube_1_4006.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_70_2" position={[32.999, 0, -0.184]} rotation={[1.558, -1.169, 1.556]}>
                  <group name="Cube_1_instance_169" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4070" geometry={nodes.Cube_1_4070.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_71_2" position={[32.995, 0, 0.553]} rotation={[1.61, -1.169, 1.614]}>
                  <group name="Cube_1_instance_170" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4071" geometry={nodes.Cube_1_4071.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_72_2" position={[32.975, 0, 1.291]} rotation={[1.663, -1.168, 1.671]}>
                  <group name="Cube_1_instance_171" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4072" geometry={nodes.Cube_1_4072.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_73_2" position={[32.938, 0, 2.028]} rotation={[1.715, -1.165, 1.727]}>
                  <group name="Cube_1_instance_172" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4073" geometry={nodes.Cube_1_4073.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_74_2" position={[32.884, 0, 2.764]} rotation={[1.766, -1.161, 1.783]}>
                  <group name="Cube_1_instance_173" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4074" geometry={nodes.Cube_1_4074.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_75_2" position={[32.814, 0, 3.498]} rotation={[1.816, -1.156, 1.837]}>
                  <group name="Cube_1_instance_174" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4075" geometry={nodes.Cube_1_4075.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_76_2" position={[32.728, 0, 4.231]} rotation={[1.864, -1.15, 1.89]}>
                  <group name="Cube_1_instance_175" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4076" geometry={nodes.Cube_1_4076.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_77_2" position={[32.625, 0, 4.962]} rotation={[1.911, -1.143, 1.942]}>
                  <group name="Cube_1_instance_176" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4077" geometry={nodes.Cube_1_4077.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_78_2" position={[32.506, 0, 5.69]} rotation={[1.957, -1.135, 1.992]}>
                  <group name="Cube_1_instance_177" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4078" geometry={nodes.Cube_1_4078.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_79_2" position={[32.37, 0, 6.415]} rotation={[2, -1.127, 2.04]}>
                  <group name="Cube_1_instance_178" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4079" geometry={nodes.Cube_1_4079.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_7_2" position={[5.144, 0, -32.597]} rotation={[0.406, -0.144, 0.062]}>
                  <group name="Cube_1_instance_106" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4007" geometry={nodes.Cube_1_4007.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_80_2" position={[32.219, 0, 7.138]} rotation={[2.042, -1.117, 2.087]}>
                  <group name="Cube_1_instance_179" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4080" geometry={nodes.Cube_1_4080.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_81_2" position={[32.051, 0, 7.856]} rotation={[2.082, -1.106, 2.131]}>
                  <group name="Cube_1_instance_180" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4081" geometry={nodes.Cube_1_4081.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_82_2" position={[31.868, 0, 8.571]} rotation={[2.12, -1.095, 2.174]}>
                  <group name="Cube_1_instance_181" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4082" geometry={nodes.Cube_1_4082.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_83_2" position={[31.668, 0, 9.281]} rotation={[2.156, -1.083, 2.214]}>
                  <group name="Cube_1_instance_182" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4083" geometry={nodes.Cube_1_4083.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_84_2" position={[31.453, 0, 9.987]} rotation={[2.19, -1.07, 2.253]}>
                  <group name="Cube_1_instance_183" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4084" geometry={nodes.Cube_1_4084.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_85_2" position={[31.221, 0, 10.688]} rotation={[2.223, -1.057, 2.29]}>
                  <group name="Cube_1_instance_184" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4085" geometry={nodes.Cube_1_4085.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_86_2" position={[30.975, 0, 11.383]} rotation={[2.253, -1.043, 2.326]}>
                  <group name="Cube_1_instance_185" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4086" geometry={nodes.Cube_1_4086.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_87_2" position={[30.712, 0, 12.073]} rotation={[2.282, -1.029, 2.359]}>
                  <group name="Cube_1_instance_186" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4087" geometry={nodes.Cube_1_4087.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_88_2" position={[30.435, 0, 12.756]} rotation={[2.309, -1.014, 2.391]}>
                  <group name="Cube_1_instance_187" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4088" geometry={nodes.Cube_1_4088.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_89_2" position={[30.142, 0, 13.434]} rotation={[2.335, -0.999, 2.422]}>
                  <group name="Cube_1_instance_188" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4089" geometry={nodes.Cube_1_4089.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_8_2" position={[5.872, 0, -32.473]} rotation={[0.407, -0.165, 0.071]}>
                  <group name="Cube_1_instance_107" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4008" geometry={nodes.Cube_1_4008.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_90_2" position={[29.834, 0, 14.104]} rotation={[2.36, -0.983, 2.451]}>
                  <group name="Cube_1_instance_189" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4090" geometry={nodes.Cube_1_4090.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_91_2" position={[29.511, 0, 14.768]} rotation={[2.383, -0.967, 2.479]}>
                  <group name="Cube_1_instance_190" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4091" geometry={nodes.Cube_1_4091.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_92_2" position={[29.174, 0, 15.424]} rotation={[2.404, -0.951, 2.505]}>
                  <group name="Cube_1_instance_191" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4092" geometry={nodes.Cube_1_4092.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_93_2" position={[28.822, 0, 16.072]} rotation={[2.425, -0.934, 2.53]}>
                  <group name="Cube_1_instance_192" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4093" geometry={nodes.Cube_1_4093.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_94_2" position={[28.455, 0, 16.713]} rotation={[2.444, -0.917, 2.555]}>
                  <group name="Cube_1_instance_193" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4094" geometry={nodes.Cube_1_4094.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_95_2" position={[28.074, 0, 17.345]} rotation={[2.462, -0.9, 2.578]}>
                  <group name="Cube_1_instance_194" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4095" geometry={nodes.Cube_1_4095.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_96_2" position={[27.679, 0, 17.968]} rotation={[2.479, -0.882, 2.6]}>
                  <group name="Cube_1_instance_195" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4096" geometry={nodes.Cube_1_4096.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_97_2" position={[27.271, 0, 18.582]} rotation={[2.496, -0.864, 2.621]}>
                  <group name="Cube_1_instance_196" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4097" geometry={nodes.Cube_1_4097.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_98_2" position={[26.849, 0, 19.187]} rotation={[2.511, -0.846, 2.641]}>
                  <group name="Cube_1_instance_197" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4098" geometry={nodes.Cube_1_4098.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_99_2" position={[26.413, 0, 19.783]} rotation={[2.525, -0.828, 2.661]}>
                  <group name="Cube_1_instance_198" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4099" geometry={nodes.Cube_1_4099.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
                <group name="Null_9_2" position={[6.596, 0, -32.334]} rotation={[0.409, -0.185, 0.08]}>
                  <group name="Cube_1_instance_108" position={[0, 0, 0.783]}>
                    <mesh name="Cube_1_4009" geometry={nodes.Cube_1_4009.geometry} material={materials['FLUO.002']} />
                  </group>
                </group>
              </group>
            </group>
            <group name="EYES" position={[-66.959, 0.07, 0.011]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
              <group name="_BASE">
                <group name="EYES_2" position={[0, 0, 3.33]}>
                  <group name="left" position={[-11.706, 3.035, -0.003]}>
                    <group name="Cloner_1">
                      <group name="Cube_10_2" position={[1.15, 0, -1.15]}>
                        <mesh name="Cube_0_2010" geometry={nodes.Cube_0_2010.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_11_2" position={[3.45, 0, -1.15]}>
                        <mesh name="Cube_0_2011" geometry={nodes.Cube_0_2011.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_12_2" position={[-3.45, 0, -3.45]}>
                        <mesh name="Cube_0_2012" geometry={nodes.Cube_0_2012.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_13_2" position={[-1.15, 0, -3.45]}>
                        <mesh name="Cube_0_2013" geometry={nodes.Cube_0_2013.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_14_2" position={[1.15, 0, -3.45]}>
                        <mesh name="Cube_0_2014" geometry={nodes.Cube_0_2014.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_15_2" position={[3.45, 0, -3.45]}>
                        <mesh name="Cube_0_2015" geometry={nodes.Cube_0_2015.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_1_2" position={[-1.15, 0, 3.45]}>
                        <mesh name="Cube_0_2001" geometry={nodes.Cube_0_2001.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_2_2" position={[1.15, 0, 3.45]}>
                        <mesh name="Cube_0_2002" geometry={nodes.Cube_0_2002.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_3_2" position={[3.45, 0, 3.45]}>
                        <mesh name="Cube_0_2003" geometry={nodes.Cube_0_2003.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_4_2" position={[-3.45, 0, 1.15]}>
                        <mesh name="Cube_0_2004" geometry={nodes.Cube_0_2004.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_5_2" position={[-1.15, 0, 1.15]}>
                        <mesh name="Cube_0_2005" geometry={nodes.Cube_0_2005.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_6_2" position={[1.15, 0, 1.15]}>
                        <mesh name="Cube_0_2006" geometry={nodes.Cube_0_2006.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_7_2" position={[3.45, 0, 1.15]}>
                        <mesh name="Cube_0_2007" geometry={nodes.Cube_0_2007.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_8_2" position={[-3.45, 0, -1.15]}>
                        <mesh name="Cube_0_2008" geometry={nodes.Cube_0_2008.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_9_2" position={[-1.15, 0, -1.15]}>
                        <mesh name="Cube_0_2009" geometry={nodes.Cube_0_2009.geometry} material={materials['Mat.005']} />
                      </group>
                      <mesh name="Cube_0_2" geometry={nodes.Cube_0_2.geometry} material={materials['Mat.005']} position={[-3.45, 0, 3.45]} />
                    </group>
                  </group>
                  <group name="right" position={[11.739, 3.035, -0.003]}>
                    <group name="Cloner">
                      <group name="Cube_1" position={[-1.15, 0, 3.45]}>
                        <mesh name="Cube_0001" geometry={nodes.Cube_0001.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_10" position={[1.15, 0, -1.15]}>
                        <mesh name="Cube_0010" geometry={nodes.Cube_0010.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_11" position={[3.45, 0, -1.15]}>
                        <mesh name="Cube_0011" geometry={nodes.Cube_0011.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_12" position={[-3.45, 0, -3.45]}>
                        <mesh name="Cube_0012" geometry={nodes.Cube_0012.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_13" position={[-1.15, 0, -3.45]}>
                        <mesh name="Cube_0013" geometry={nodes.Cube_0013.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_14" position={[1.15, 0, -3.45]}>
                        <mesh name="Cube_0014" geometry={nodes.Cube_0014.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_15" position={[3.45, 0, -3.45]}>
                        <mesh name="Cube_0015" geometry={nodes.Cube_0015.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_2" position={[1.15, 0, 3.45]}>
                        <mesh name="Cube_0002" geometry={nodes.Cube_0002.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_3" position={[3.45, 0, 3.45]}>
                        <mesh name="Cube_0003" geometry={nodes.Cube_0003.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_4" position={[-3.45, 0, 1.15]}>
                        <mesh name="Cube_0004" geometry={nodes.Cube_0004.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_5" position={[-1.15, 0, 1.15]}>
                        <mesh name="Cube_0005" geometry={nodes.Cube_0005.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_6" position={[1.15, 0, 1.15]}>
                        <mesh name="Cube_0006" geometry={nodes.Cube_0006.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_7" position={[3.45, 0, 1.15]}>
                        <mesh name="Cube_0007" geometry={nodes.Cube_0007.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_8" position={[-3.45, 0, -1.15]}>
                        <mesh name="Cube_0008" geometry={nodes.Cube_0008.geometry} material={materials['Mat.005']} />
                      </group>
                      <group name="Cube_9" position={[-1.15, 0, -1.15]}>
                        <mesh name="Cube_0009" geometry={nodes.Cube_0009.geometry} material={materials['Mat.005']} />
                      </group>
                      <mesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials['Mat.005']} position={[-3.45, 0, 3.45]} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="MAIN_COVER" position={[-8.531, 0.07, 0.011]} rotation={[-Math.PI / 2, 0, 0]}>
              <group name="BODY">
                <mesh name="ARRIERE" geometry={nodes.ARRIERE.geometry} material={materials['LIGHTS_BODY.002']} />
                <mesh name="BODY_2" geometry={nodes.BODY_2.geometry} material={materials['LIGHTS_BODY.002']} />
                <mesh name="COVER" geometry={nodes.COVER.geometry} material={materials['LIGHTS_BODY.002']} />
                <mesh name="COVER_medium" geometry={nodes.COVER_medium.geometry} material={materials['LIGHTS_BODY.002']} />
              </group>
              <group name="GLASS" position={[-0.752, 0, 0]}>
                <mesh name="GLASS_2" geometry={nodes.GLASS_2.geometry} material={materials['GLASS.002']} />
              </group>
              <group name="ORANGE_TAB" position={[-53.717, 0, 36.604]}>
                <mesh name="TAB" geometry={nodes.TAB.geometry} material={materials.ORANGE} />
              </group>
              <mesh name="LIGHTS_BODY" geometry={nodes.LIGHTS_BODY.geometry} material={materials['ORANGE.002']} />
              <mesh name="SCREEN" geometry={nodes.SCREEN.geometry} material={materials.BLACK_2_wheels} position={[-53.306, 0.004, 0.248]} rotation={[-3.121, 0, Math.PI / 2]} scale={[34, 0.2, 34]} />
            </group>
            <group name="WINGS_SYM" position={[-8.531, 0.07, 0.011]} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Woman;
useGLTF.preload('./models/woman.gltf')
