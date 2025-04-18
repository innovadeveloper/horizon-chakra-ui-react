'use client';
import { FormControl, FormLabel, Textarea, useColorModeValue } from '@chakra-ui/react';

const SimpleTextareaField = ({ label, placeholder = 'Here is a sample placeholder' }) => {
  const labelColor = useColorModeValue('dark.primary.500', 'light.primary.500');
  const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');

  return (
    <FormControl>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <Textarea focusBorderColor={inputFocusBorderColor} resize="none" placeholder={placeholder} />
    </FormControl>
  );
};

export {SimpleTextareaField};
