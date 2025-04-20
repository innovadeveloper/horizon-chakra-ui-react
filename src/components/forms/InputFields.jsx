'use client';
import { FormControl, FormLabel, FormHelperText, Input, useColorModeValue } from '@chakra-ui/react';

const SimpleInputField = ({ label, helperText, placeholder, type = 'text', onChange }) => {
  // const labelColor = useColorModeValue('dark.primary.500', 'light.primary.500');
  // const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');
  // const inputTextColor = useColorModeValue('dark.primary.500', 'light.primary.500');

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        variant={"classic"}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export { SimpleInputField };
