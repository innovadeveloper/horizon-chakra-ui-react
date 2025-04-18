'use client';
import { FormControl, FormLabel, HStack, useColorModeValue, useRadioGroup } from '@chakra-ui/react';
import {SimpleRadioCard} from '@components/forms/RadioCard';

const SimpleRadioGroupField = ({ label, options = [], onChange }) => {
  const inputTextColor = useColorModeValue('light.secondary.500', 'dark.secondary.500');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: options[0],
    onChange,
  });

  const group = getRootProps();

  return (
    <FormControl>
      <FormLabel color={inputTextColor}>{label}</FormLabel>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <SimpleRadioCard key={value} {...radio}>
              {value}
            </SimpleRadioCard>
          );
        })}
      </HStack>
    </FormControl>
  );
};

export {SimpleRadioGroupField};
