'use client';
import { useColorModeValue } from '@chakra-ui/react';

export const useFormColors = () => {
    const barColor = useColorModeValue('secondaryGray.600', 'navy.800');
    const textColor = useColorModeValue('black', 'white');
    const formLabelColor = useColorModeValue('black', 'white');

    return { barColor, textColor, formLabelColor };
};
