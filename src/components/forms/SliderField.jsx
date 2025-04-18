'use client';
import { FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, useColorModeValue } from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';
import { useState } from 'react';

const SimpleSliderField = ({ label, min = 20, max = 120, step = 5 }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const barColor = useColorModeValue('secondaryGray.600', 'navy.800');
  const sidebarColor = useColorModeValue('black', 'navy.800');
  const formLabelColor = useColorModeValue('black', 'white');

  return (
    <FormControl>
      <FormLabel color={formLabelColor}>{label} : {sliderValue}</FormLabel>
      <Slider min={min} max={max} step={step} value={sliderValue} onChange={setSliderValue}>
        <SliderTrack bg={barColor}>
          <SliderFilledTrack bg={sidebarColor} />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color={sidebarColor} as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </FormControl>
  );
};

export {SimpleSliderField};
