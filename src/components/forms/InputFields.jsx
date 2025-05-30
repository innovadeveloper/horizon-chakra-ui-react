'use client';
import { FormControl, FormLabel, FormHelperText, Input, useColorModeValue } from '@chakra-ui/react';

const SimpleInputField = ({ label, helperText, placeholder, type = 'text', onChange, value, ...props }) => {

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        // disabled={true}
        {...props} // Aquí sí recibirá disabled, value, etc
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
