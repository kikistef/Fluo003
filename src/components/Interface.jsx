import React, { useState } from 'react';
import { Affix, Button, Stack, Slider, Text, ColorPicker, Space, Box } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import Woman from "./Woman"; // Import your Woman component


const Interface = (props) => {
	const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();
	var [ envMapIntensity, setEnvMapIntensity] = useState(0); // Initial value,
	const [envMapColor, setEnvMapColor] = useState(["#03bafc", "#00FF00", "#ffff00", "#ff9900", "#f94449", "#ff00ff", "#0xffffff"]); // Array of colors
	
	const [envHdr, setEnvHdr] = useState(["HDR_111_Parking_Lot_2_Ref.hdr", "neon_photostudio_4k.hdr", "brown_photostudio_07_4k.hdr", "studio_small_09_4k.hdr"]); 
	
	var [selCol, setSelCol] = useState(0);
	
	const buttonTexts = ["Parking", "Neon Studio", "Brown Studio", "White Studio"];

	
  
  const marks = {
  0: 'C0',
  1: 'C1',
  2: 'C2',
  3: 'C3',
  4: 'C4',
  5: 'C5',
  6: 'C6', 
  };	
// Handler to update the envMapIntensity when the slider changes
const handleSliderChange = (value) => {  
  	const roundedValue = value.toFixed(1); // arrondi en nombre entier
  	props.setEnvMapIntensity(roundedValue); // transmission de la valeur à d'autres jsx via props
};
	
const handleSliderChangeColor = (value) => {
	const selectedColor = envMapColor[value];
	props.setEnvMapColor(selectedColor);
	/*console.log("--> selectedColor : " + selectedColor);
	console.log("--> envMapColor : " + envMapColor)
	console.log("--> value : " + value)*/
  };
	//var selCol = 1;
const handleButtonChangeHdr = (selectedColor2) => {
  props.setEnvHdr(envHdr[selectedColor2]);
	setSelCol(selectedColor2)
  //console.log("--> selectedColor2 : " + selectedColor2);
  //console.log("--> envHdr : " + envHdr);/**/
	//selCol = selectedColor2;
};

	
const divStyles = {
    position: 'relative',
    padding: '20px',
    borderRadius: '5px',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    textAlign: 'center',
  };
	
	
  return (
	<div>


   <Affix position={{ bottom: 50, left: 40, width: 300 }}>
	         <Stack>
		  <div style={divStyles}>
			  <Text c="white" mb="0px" fw="500">Face Animations</Text> 
	{/*		  <Button.Group>
        {animations.map((animation, index) => (
			  
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "outline"}
			size="xs"
            onClick={() => {
				setAnimationIndex(index)
					//  console.log("---envMapIntensity : " + props.envMapIntensity);
					//  console.log("---envMapColor : " + props.envMapColor);

			}}
          >
            {animation}
				 
          </Button>
        ))}
				  </Button.Group> */}
			  </div>
      </Stack>
	   
	   <Space h="2px" /> 
	   
      <Stack>
		  <div style={divStyles}>
			  <Text c="white" mb="0px" fw="500">Animations</Text> 
			  <Button.Group>
        {animations.map((animation, index) => (
			  
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "outline"}
			size="xs"
            onClick={() => {
				setAnimationIndex(index)
					//  console.log("---envMapIntensity : " + props.envMapIntensity);
					//  console.log("---envMapColor : " + props.envMapColor);

			}}
          >
            {animation}
				 
          </Button>
        ))}
				  </Button.Group>
			  </div>
      </Stack>
	   <Space h="2px" />
	         <Stack>
				<div style={divStyles}>
					<Text c="white" mb="0px" fw="500">Background HDR</Text> 
					<Space h="4px" />
						<Button.Group>	 
							{envHdr.map((hdr, index) => (
							 <Button
								
							  key={hdr}
							 //  Check if the button is selected
							  onClick={() => {
									handleButtonChangeHdr(index);
									  console.log("---xxxx : " + index);
									   console.log("---wwww : " + selCol);
									  }}

							  size="xs"
								 variant={index === selCol ? "filled" : "outline"} //
							>
									<Box w={36}   >
										<Text truncate="end" >
										{buttonTexts[index]}
											</Text>
									</Box>
							 </Button>
						))}	
						</Button.Group>
				 </div>
      </Stack>
	   <Space h="2px" />
	   <Stack>
		   	<div style={divStyles} >
				
				<Text c="white" mb="0px" fw="500">Colors Picker</Text> 
				<ColorPicker
				format="hex"
				swatchesPerRow="10"
				swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
				/>
			</div>
	   </Stack>
	   <Space h="2px" />
	   <Stack>
		<div style={divStyles}>
			  <Text c="white" mb="0px" fw="500">Crown Colors</Text> 
			  <Slider
				
				//defaultValue={0}
				value={envMapColor.indexOf(props.envMapColor)}
                onChange={handleSliderChangeColor} // Update the slider value
				step={1}
				 
				marks={[{ value: '1'}, {value: '2'}, {value: '3'}, {value: '4'}, {value: '5'}, {value: '6'} ]}
				min={0}
				max={6}
				//  color="cyan"
			//	label={props.envMapColor}
				  
				 
				styles={{ markLabel: { display: 'none' } }}
			  />
		</div> 
      </Stack>
	   <Space h="2px" />
      <Stack>
		<div style={divStyles}>
			  <Text c="white" mb="0px" fw="500">Crown Light intensity</Text> 
			  <Slider
				//defaultValue={0}
				value={props.envMapIntensity}
                onChange={handleSliderChange} // Update the slider value
				min={0}
				max={30}
				
			//	label={props.envMapIntensity}
				step={0.1}
				styles={{ markLabel: { display: 'none' } }}
			  />
		</div> 
      </Stack>

		  
    </Affix>
		 
	</div>
  );
	
	
};

export default Interface;
