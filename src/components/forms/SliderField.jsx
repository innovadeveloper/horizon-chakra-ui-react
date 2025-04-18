'use client';
import { FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, useColorModeValue } from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';
import { useState } from 'react';

const SimpleSliderField = ({ label, min = 20, max = 120, step = 5 }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const labelColor = useColorModeValue('dark.primary.500', 'light.primary.500');
  const secondaryBarColor = useColorModeValue('light.primary.900', 'dark.primary.100');
  const primaryBarColor = useColorModeValue('dark.primary.900', 'dark.primary.400');
  const logoBarColor = useColorModeValue('dark.primary.900', 'dark.primary.900');

  return (
    <FormControl>
      <FormLabel color={labelColor}>{label} : {sliderValue}</FormLabel>
      <Slider min={min} max={max} step={step} value={sliderValue} onChange={setSliderValue}>
        <SliderTrack bg={secondaryBarColor}>
          <SliderFilledTrack bg={primaryBarColor} />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color={logoBarColor} as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </FormControl>
  );
};

export {SimpleSliderField};
