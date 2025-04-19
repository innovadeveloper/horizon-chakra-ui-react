// components/Table.js
import { Table, Tbody, Thead, useColorModeValue } from '@chakra-ui/react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';

const TableComponent = ({ table }) => {
  return (
    <>
      <Table variant="simple" color="gray.500" mb="24px" mt="0px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeader
              key={headerGroup.id}
              headerGroup={headerGroup}
              barColor={useColorModeValue('black', 'navy.800')}
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
            />
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.slice(0, 11).map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </Tbody>
      </Table>
      <Pagination table={table} />
    </>

  );
};

export default TableComponent;