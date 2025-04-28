'use client';
import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useColorModeValue } from '@chakra-ui/react';

const SimpleNumberInputFieldComponent = ({ label, defaultValue = 15, min = 10, max = 20, ...props }) => {
  // const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');
  // const inputTextColor = useColorModeValue('dark.primary.500', 'light.primary.500');

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <NumberInput {...props} variant="classic" defaultValue={defaultValue} min={min} max={max}>
        <NumberInputField variant="classic"/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export {SimpleNumberInputFieldComponent};
