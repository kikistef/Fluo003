
import obj from '../App.jsx'
import React, { useEffect, useRef, useState  } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Woman = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/woman.gltf");
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);
  var [isAudioPlaying, setIsAudioPlaying] = useState(false);
  var [isTalking, setIsTalking] = useState(false);

  useEffect(() => {
    setAnimations(names);
	  console.log("names: " + names)
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
	  console.log("woman index : " + animationIndex);
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
	  
  }, [animationIndex]);



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
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CC3_Base_Plus" scale={0.01}>
          <primitive object={nodes.CC_Base_BoneRoot} />
          <skinnedMesh castShadow name="Basic_T_shirts" geometry={nodes.Basic_T_shirts.geometry} material={materials.Basic_T_shirts} skeleton={nodes.Basic_T_shirts.skeleton} />
          <skinnedMesh castShadow name="TrentyPants_v01_5786_Shape" geometry={nodes.TrentyPants_v01_5786_Shape.geometry} material={materials.TrentyPants_v01_aiStandardSurface1SG} skeleton={nodes.TrentyPants_v01_5786_Shape.skeleton} />
          <group name="CC_Base_Body">
            <skinnedMesh castShadow name="CC_Base_Body_1" geometry={nodes.CC_Base_Body_1.geometry} material={materials.Std_Skin_Head} skeleton={nodes.CC_Base_Body_1.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Body_2" geometry={nodes.CC_Base_Body_2.geometry} material={materials.Std_Skin_Body} skeleton={nodes.CC_Base_Body_2.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Body_3" geometry={nodes.CC_Base_Body_3.geometry} material={materials.Std_Skin_Arm} skeleton={nodes.CC_Base_Body_3.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Body_4" geometry={nodes.CC_Base_Body_4.geometry} material={materials.Std_Skin_Leg} skeleton={nodes.CC_Base_Body_4.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Body_5" geometry={nodes.CC_Base_Body_5.geometry} material={materials.Std_Nails} skeleton={nodes.CC_Base_Body_5.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Body_6" geometry={nodes.CC_Base_Body_6.geometry} material={materials.Std_Eyelash} skeleton={nodes.CC_Base_Body_6.skeleton} />
          </group>
          <group name="CC_Base_Eye">
            <skinnedMesh castShadow name="CC_Base_Eye_1" geometry={nodes.CC_Base_Eye_1.geometry} material={materials.Std_Eye_R} skeleton={nodes.CC_Base_Eye_1.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Eye_2" geometry={nodes.CC_Base_Eye_2.geometry} material={materials.Std_Cornea_R} skeleton={nodes.CC_Base_Eye_2.skeleton} />
            <skinnedMesh  castShadow name="CC_Base_Eye_3" geometry={nodes.CC_Base_Eye_3.geometry} material={materials.Std_Eye_L} skeleton={nodes.CC_Base_Eye_3.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Eye_4" geometry={nodes.CC_Base_Eye_4.geometry} material={materials.Std_Cornea_L} skeleton={nodes.CC_Base_Eye_4.skeleton} />
          </group>
          <group name="CC_Base_EyeOcclusion">
            <skinnedMesh castShadow name="CC_Base_EyeOcclusion_1" geometry={nodes.CC_Base_EyeOcclusion_1.geometry} material={materials.Std_Eye_Occlusion_R} skeleton={nodes.CC_Base_EyeOcclusion_1.skeleton} />
            <skinnedMesh castShadow name="CC_Base_EyeOcclusion_2" geometry={nodes.CC_Base_EyeOcclusion_2.geometry} material={materials.Std_Eye_Occlusion_L} skeleton={nodes.CC_Base_EyeOcclusion_2.skeleton} />
          </group>
          <group name="CC_Base_TearLine">
            <skinnedMesh castShadow name="CC_Base_TearLine_1" geometry={nodes.CC_Base_TearLine_1.geometry} material={materials.Std_Tearline_R} skeleton={nodes.CC_Base_TearLine_1.skeleton} />
            <skinnedMesh castShadow name="CC_Base_TearLine_2" geometry={nodes.CC_Base_TearLine_2.geometry} material={materials.Std_Tearline_L} skeleton={nodes.CC_Base_TearLine_2.skeleton} />
          </group>
          <group name="CC_Base_Teeth">
            <skinnedMesh castShadow name="CC_Base_Teeth_1" geometry={nodes.CC_Base_Teeth_1.geometry} material={materials.Std_Upper_Teeth} skeleton={nodes.CC_Base_Teeth_1.skeleton} />
            <skinnedMesh castShadow name="CC_Base_Teeth_2" geometry={nodes.CC_Base_Teeth_2.geometry} material={materials.Std_Lower_Teeth} skeleton={nodes.CC_Base_Teeth_2.skeleton} />
          </group>
          <skinnedMesh castShadow name="CC_Base_Tongue" geometry={nodes.CC_Base_Tongue.geometry} material={materials.Std_Tongue} skeleton={nodes.CC_Base_Tongue.skeleton} />
          <group name="Classic_short">
            <skinnedMesh castShadow name="Classic_short_1" geometry={nodes.Classic_short_1.geometry} material={materials.Hair_Transparency} skeleton={nodes.Classic_short_1.skeleton} />
            <skinnedMesh castShadow name="Classic_short_2" geometry={nodes.Classic_short_2.geometry} material={materials.Scalp_Transparency} skeleton={nodes.Classic_short_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Woman;

useGLTF.preload("./models/woman.gltf");
