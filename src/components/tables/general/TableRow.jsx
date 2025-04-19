// components/TableRow.js
import { Td, Text, Tr } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

const TableRow = ({ row }) => {
  return (
    <Tr key={row.id}>
      {row.getVisibleCells().map((cell) => {
        return (
          <Td
            key={cell.id}
            fontSize={{ sm: '14px' }}
            minW={{ sm: '150px', md: '200px', lg: 'auto' }}
            borderColor="transparent"
          >
            {flexRender(
              cell.column.columnDef.cell,
              cell.getContext(),
            )}
          </Td>
        );
      })}
    </Tr>
  );
};

export default TableRow;