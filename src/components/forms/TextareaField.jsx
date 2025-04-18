'use client';
import { FormControl, FormLabel, Textarea, useColorModeValue } from '@chakra-ui/react';

const SimpleTextareaField = ({ label, placeholder = 'Here is a sample placeholder' }) => {
  const barColor = useColorModeValue('secondaryGray.600', 'navy.800');
  const formLabelColor = useColorModeValue('black', 'white');

  return (
    <FormControl>
      <FormLabel color={formLabelColor}>{label}</FormLabel>
      <Textarea focusBorderColor={barColor} resize="none" placeholder={placeholder} />
    </FormControl>
  );
};

export {SimpleTextareaField};
