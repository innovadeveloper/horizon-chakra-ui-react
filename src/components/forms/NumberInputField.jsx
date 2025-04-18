'use client';
import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useColorModeValue } from '@chakra-ui/react';

const SimpleNumberInputFieldComponent = ({ label, defaultValue = 15, min = 10, max = 20 }) => {
  const barColor = useColorModeValue('secondaryGray.600', 'navy.800');
  const formLabelColor = useColorModeValue('black', 'white');

  return (
    <FormControl>
      <FormLabel color={formLabelColor}>{label}</FormLabel>
      <NumberInput defaultValue={defaultValue} min={min} max={max} focusBorderColor={barColor}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export {SimpleNumberInputFieldComponent};
