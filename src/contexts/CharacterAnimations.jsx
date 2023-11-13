import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);
	//const [envMapIntensity, setEnvMapIntensity] = useState(18);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
		//	envMapIntensity, 
		//	setEnvMapIntensity,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
