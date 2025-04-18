'use client';
import { Box, useColorModeValue, useRadio } from '@chakra-ui/react';

const SimpleRadioCard = ({ children, ...props }) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  const radioBackgroundColor = useColorModeValue('light.secondary.500', 'dark.secondary.500');
  const inputTextColor = useColorModeValue('dark.secondary.500', 'light.secondary.500');
  // const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: radioBackgroundColor,
          color: inputTextColor,
          // borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
};

export {SimpleRadioCard};
