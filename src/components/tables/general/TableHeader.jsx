// components/TableHeader.js
import { Th, Flex, Text, Tr, useColorModeValue } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';
import { color } from 'framer-motion';

const TableHeader = ({ headerGroup, borderColor }) => {
  const barBorderColor = useColorModeValue('light.secondary.500', 'dark.secondary.500');

  return (
    <Tr key={headerGroup.id} bg={barBorderColor}>
      {headerGroup.headers.map((header, index) => {
        const isFirst = index === 0;
        const isLast = index === headerGroup.headers.length - 1;

        return (
          <Th
            key={header.id}
            colSpan={header.colSpan}
            pe="10px"
            borderColor={borderColor}
            cursor="pointer"
            borderTopLeftRadius={isFirst ? "md" : undefined}
            borderBottomLeftRadius={isFirst ? "md" : undefined}
            borderTopRightRadius={isLast ? "md" : undefined}
            borderBottomRightRadius={isLast ? "md" : undefined}
            onClick={header.column.getToggleSortingHandler()}
          >
            <Flex
              justifyContent="space-between"
              align="center"
              fontSize={{ sm: '10px', lg: '12px' }}
            >
              {flexRender(
                header.column.columnDef.header,
                header.getContext(),
              )}
              {{
                asc: '',
                desc: '',
              }[header.column.getIsSorted()] ?? null}
            </Flex>
          </Th>
        );
      })}
    </Tr>
  );
};

export default TableHeader;