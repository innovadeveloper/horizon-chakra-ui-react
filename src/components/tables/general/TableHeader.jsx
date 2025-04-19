// components/TableHeader.js
import { Th, Flex, Text, Tr } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

const TableHeader = ({ headerGroup, barColor, borderColor }) => {
  return (
    <Tr key={headerGroup.id} bg={barColor}>
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
              color="gray.400"
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