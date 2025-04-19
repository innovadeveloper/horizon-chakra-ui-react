// components/Pagination.js
import { Button, Text, Flex } from '@chakra-ui/react';

const Pagination = ({ table }) => {
  return (
    <Flex mt="4" justify="space-between" align="center">
      <Button
        onClick={() => table.previousPage()}
        isDisabled={!table.getCanPreviousPage()}
      >
        Anterior
      </Button>
      <Text>
        Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </Text>
      <Button
        onClick={() => table.nextPage()}
        isDisabled={!table.getCanNextPage()}
      >
        Siguiente
      </Button>
    </Flex>
  );
};

export default Pagination;