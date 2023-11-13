
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
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh castShadow name="avaturn_body001" geometry={nodes.avaturn_body001.geometry} material={materials['avaturn_body_material.001']} skeleton={nodes.avaturn_body001.skeleton} />
          <skinnedMesh castShadow name="avaturn_hair_0001" geometry={nodes.avaturn_hair_0001.geometry} material={materials['avaturn_hair_0_material.001']} skeleton={nodes.avaturn_hair_0001.skeleton} />
          <skinnedMesh castShadow name="avaturn_look_0001" geometry={nodes.avaturn_look_0001.geometry} material={materials['avaturn_look_0_material.001']} skeleton={nodes.avaturn_look_0001.skeleton} />
          <skinnedMesh castShadow name="avaturn_shoes_0001" geometry={nodes.avaturn_shoes_0001.geometry} material={materials['avaturn_shoes_0_material.001']} skeleton={nodes.avaturn_shoes_0001.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Woman;

useGLTF.preload("./models/woman.gltf");


//console.log("animation name : " )
/*  const handleAnimation = (animationName) => {
  let from = "idle";
  let to = animationName;

 if (actions[from] && actions[to]) {
    if (actions[from].isRunning()) {
      actions[from].fadeOut(2.0);
		//actions[from].reset().fadeOut(0.5).stop();
    }
    actions[to].reset().fadeIn(0.5).play();
  } else {
    console.error(`Action '${from}' or '${to}' is undefined.`);
    console.log('Available animations:', Object.keys(animations));
  } 
  //console.log('animationName : ' + animationName);
};*/
//	console.log('App.js : ' + window.obj)
