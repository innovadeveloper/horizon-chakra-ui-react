// components/Pagination.js
import { Button, Text, Flex, useColorModeValue } from '@chakra-ui/react';

const Pagination = ({ table }) => {
  const labelColor = useColorModeValue('dark.primary.500', 'light.primary.500');
  const inputFocusBorderColor = useColorModeValue('light.secondary.50', 'dark.secondary.50');
  const inputTextColor = useColorModeValue('dark.primary.500', 'light.primary.500');

  return (
    <Flex mt="4" justify="space-between" align="center">
      <Button
        // variant={"brand"}
        // textColor={labelColor}
        onClick={() => table.previousPage()}
        isDisabled={!table.getCanPreviousPage()}
      >
        Anterior
      </Button>
      <Text
        textColor={labelColor}>
        Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </Text>
      <Button
        textColor={labelColor}
        onClick={() => table.nextPage()}
        isDisabled={!table.getCanNextPage()}
      >
        Siguiente
      </Button>
    </Flex>
  );
};

export default Pagination;