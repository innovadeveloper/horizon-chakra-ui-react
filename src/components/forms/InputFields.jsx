'use client';
import { FormControl, FormLabel, FormHelperText, Input, useColorModeValue } from '@chakra-ui/react';

const SimpleInputField = ({ label, helperText, placeholder, type = 'text', onChange }) => {
  const labelColor = useColorModeValue('dark.primary.500', 'light.primary.500');
  const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');
  const inputTextColor = useColorModeValue('dark.primary.500', 'light.primary.500');

  return (
    <FormControl>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        focusBorderColor={inputFocusBorderColor}
        textColor={inputTextColor}
        onChange={onChange}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export { SimpleInputField };
