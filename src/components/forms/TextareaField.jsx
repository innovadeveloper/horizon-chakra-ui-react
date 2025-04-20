'use client';
import { FormControl, FormLabel, Textarea, useColorModeValue } from '@chakra-ui/react';

const SimpleTextareaField = ({ label, placeholder = 'Here is a sample placeholder' }) => {
  const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea focusBorderColor={inputFocusBorderColor} resize="none" placeholder={placeholder} />
    </FormControl>
  );
};

export {SimpleTextareaField};
