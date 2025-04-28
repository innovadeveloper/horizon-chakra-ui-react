'use client';
import { FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, useColorModeValue } from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';
import { useState } from 'react';

const SimpleSliderField = ({ label, min = 20, max = 120, step = 5, ...props }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const secondaryBarColor = useColorModeValue('light.primary.900', 'light.primary.900');
  const primaryBarColor = useColorModeValue('dark.primary.900', 'light.primary.50');
  const logoBarColor = useColorModeValue('dark.primary.900', 'dark.primary.900');

  return (
    <FormControl>
      <FormLabel>{label} : {sliderValue}</FormLabel>
      <Slider {...props} min={min} max={max} step={step} value={sliderValue} onChange={setSliderValue}>
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
