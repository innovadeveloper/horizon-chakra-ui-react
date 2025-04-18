'use client';
/* eslint-disable */

import {
  Box,
  Center,
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useRadioGroup,
  useRadio,
  Button,
  Icon,
  IconButton,
  useColorMode,
  Badge,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
  Input,
  FormControl, FormLabel, FormHelperText,
  HStack
} from '@chakra-ui/react';
import GenericForm from '@components/forms/GenericForm';

// import { Tabs } from "@chakra-ui/react"

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
// Custom components
import Card from '@components/card/Card';
import Menu from '@components/menu/MainMenu';
import { AndroidLogo, AppleLogo, WindowsLogo } from '@components/icons/Icons';
import * as React from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { LoremIpsum } from 'react-lorem-ipsum';

// Assets

const columnHelper = createColumnHelper();

const GenericFormComponent = () => {
  const handleInputChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  const handleRadioChange = (value) => {
    console.log('Selected framework:', value);
  };

  return (
    <GenericForm
      inputLabel="Your Email"
      inputPlaceholder="Enter your email"
      onInputChange={handleInputChange}
      onRadioChange={handleRadioChange}
      options={['Angular', 'React', 'Vue']}
    />
  );
};


// const columns = columnsDataCheck;
export default function ComplexTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const textTitleColor = useColorModeValue('gray.600', 'white');
  const contentFontSize = { sm: '12px', lg: '14px' };
  const columnTitleColor = "white";
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const modalBgColor = useColorModeValue('white', 'navy.700');

  const barColor = useColorModeValue('black', 'navy.800');
  const tabSelectedBackgroundColorMode = useColorModeValue('white.200', 'navy.800');
  const tabSelectedColumnColor = { color: textTitleColor, bg: tabSelectedBackgroundColorMode, fontWeight: 'bold' }
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor('device', {
      id: 'device',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '14px' }}
          color={columnTitleColor}
        >
          DISPOSITIVO
        </Text>
      ),
      cell: (info) => (

        <Flex>
          <Flex height="10" w="30px" align="center" justify="center">
            <AndroidLogo
              color={iconColor}
              h="18px"
              w="16px"
            />
          </Flex>
          <Flex height="10" grow="1" ml="10px" direction="column">
            <Text
              fontFamily="poppins"
              fontWeight="700"
              fontSize={contentFontSize}
              color={textTitleColor}>{info.getValue().modelName}</Text>
            <Text
              fontSize={contentFontSize}
              color={textColor}>{info.getValue().brandName}</Text>
          </Flex>
        </Flex>

      ),
    }),
    columnHelper.accessor('policy', {
      id: 'policy',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color={columnTitleColor}
        >
          POLITICA
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          {/* <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: '10px', lg: '12px' }}
            color="gray.400"
          >
            {info.getValue()}
          </Text> */}
          <Text
            fontSize={contentFontSize}
            color={textColor}>{info.getValue()}</Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('isOnline', {
      id: 'isOnline',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color={columnTitleColor}
        >
          ESTADO
        </Text>
      ),
      cell: (info) => (
        <>
          {info.getValue() ? <Box
            w="12px"
            h="12px"
            bg="green.400"
            borderRadius="full"
            display="inline-block"
          />
            : <Box
              w="12px"
              h="12px"
              bg="red.400"
              borderRadius="full"
              display="inline-block"
            />}
        </>
      ),
    }),
    columnHelper.accessor('createAt', {
      id: 'createAt',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color={columnTitleColor}
        >
          REGISTRO
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text me="10px" color={textColor} fontSize={contentFontSize}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),


    columnHelper.accessor('id', {
      id: 'id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '14px' }}
          color={columnTitleColor}
        >
          EDITAR
        </Text>
      ),
      cell: (info) => (

        <IconButton
          variant="solid"
          onClick={onOpen}
        >
          <MdModeEditOutline />
        </IconButton>
      ),
    }),

  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  return (
    <>
      <Card
        flexDirection="column"
        w="100%"
        px="0px"
        mt="0px"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        {/* <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        </Flex> */}
        <Box>
          <Table variant="simple" color="gray.500" mb="24px" mt="0px">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
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
              ))}
            </Thead>
            <Tbody>
              {table
                .getRowModel()
                .rows.slice(0, 11)
                .map((row) => {
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
                })}
            </Tbody>
          </Table>
        </Box>
        <Flex mt="4" justify="space-between" align="center">
          <Button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Text>
            Página {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </Text>
          <Button
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </Flex>
      </Card>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={modalBgColor} maxWidth="100%" width="50%">
          <ModalHeader>Edición de Dispositivo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Tabs isFitted variant='enclosed'>
              <TabList mb='1em'>
                <Tab _selected={tabSelectedColumnColor} >One</Tab>
                <Tab _selected={tabSelectedColumnColor}>Two</Tab>
              </TabList>
              <TabIndicator mt='-1.5px' height='2px' bg={tabSelectedBackgroundColorMode} borderRadius='1px' />
              <TabPanels>
                <TabPanel>
                  {/* <p>one!</p> */}
                  {/* <Input placeholder='Basic usage' focusBorderColor={barColor} /> */}

                  <GenericFormComponent/>

                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3}>
              Actualizar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
