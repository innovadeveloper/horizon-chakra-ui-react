'use client';
import { FormControl, FormLabel, FormHelperText, Input, useColorModeValue } from '@chakra-ui/react';

const SimpleInputField = ({ label, helperText, placeholder, type = 'text', onChange }) => {
  const barColor = useColorModeValue('secondaryGray.600', 'navy.800');
  const textColor = useColorModeValue('black', 'white');
  const formLabelColor = useColorModeValue('black', 'white');

  return (
    <FormControl>
      <FormLabel color={formLabelColor}>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        focusBorderColor={barColor}
        textColor={textColor}
        onChange={onChange}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export {SimpleInputField};
