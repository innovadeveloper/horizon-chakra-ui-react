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
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
// Custom components
import Card from '@components/card/Card';
import Menu from '@components/menu/MainMenu';
import { AndroidLogo, AppleLogo, WindowsLogo } from '@components/icons/Icons';
import * as React from 'react';
// Assets

const columnHelper = createColumnHelper();

// const columns = columnsDataCheck;
export default function ComplexTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  const textTitleColor = useColorModeValue('black', 'white');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
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
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
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
              fontWeight="500"
              fontSize={{ sm: '12px', lg: '14px' }}
              color={textTitleColor}>{info.getValue().modelName}</Text>
            <Text
              fontSize={{ sm: '10px', lg: '12px' }}
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
          color="gray.400"
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
              fontSize={{ sm: '10px', lg: '12px' }}
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
          color="gray.400"
        >
          ONLINE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue() ? "v" : "x"}
        </Text>
      ),
    }),
    columnHelper.accessor('createAt', {
      id: 'createAt',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          REGISTRO
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
          {/* <Progress
            variant="table"
            colorScheme="brandScheme"
            h="8px"
            w="63px"
            value={info.getValue()}
          /> */}
        </Flex>
      ),
    }),
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Development Table
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
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
    </Card>
  );
}
