// // pages/ComplexTable.js
// import React, { useState } from 'react';
// import TableComponent from '@components/tables/general/Table';
// import ModalContentComponent from '@components/tables/general/ModalContentComponent';

// import {
//   useDisclosure, useColorModeValue,
//   Box,
//   Card,
//   Center,
//   Flex,
//   Progress,
//   Table,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
//   useRadioGroup,
//   useRadio,
//   Button,
//   Icon,
//   IconButton,
//   useColorMode,
//   Badge,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
//   Input,
//   FormControl, FormLabel, FormHelperText,
//   HStack
// } from '@chakra-ui/react';

// import { AndroidLogo } from '@components/icons/Icons';
// import { MdModeEditOutline } from "react-icons/md";

// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   getSortedRowModel,
//   getPaginationRowModel,
//   useReactTable,
// } from '@tanstack/react-table';
// import { createColumn } from '@components/tables/ColumnHelper';


// const GeneralTable = ({ tableData }) => {
//   const [data, setData] = useState(() => [...tableData]);
//   const [sorting, setSorting] = useState([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 5,
//   });
//   const contentFontSize = { sm: '12px', lg: '14px' };
//   const columnTitleColor = "white";
//   const textColor = useColorModeValue('secondaryGray.900', 'white');
//   const modalBgColor = useColorModeValue('white', 'navy.700');
//   const iconColor = useColorModeValue('secondaryGray.500', 'white');
//   const textTitleColor = useColorModeValue('gray.600', 'white');

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const columns = [
//     createColumn({
//       accessor: 'device',
//       id: 'device',
//       headerText: 'DISPOSITIVO',
//       renderCell: (info) => (
//         <Flex>
//           <Flex height="10" w="30px" align="center" justify="center">
//             <AndroidLogo color={iconColor} h="18px" w="16px" />
//           </Flex>
//           <Flex height="10" grow="1" ml="10px" direction="column">
//             <Text
//               fontFamily="poppins"
//               fontWeight="700"
//               fontSize={contentFontSize}
//               color={textTitleColor}
//             >
//               {info.getValue().modelName}
//             </Text>
//             <Text fontSize={contentFontSize} color={textColor}>
//               {info.getValue().brandName}
//             </Text>
//           </Flex>
//         </Flex>
//       ),
//     }),

//     createColumn({
//       accessor: 'policy',
//       id: 'policy',
//       headerText: 'POLITICA',
//       renderCell: (info) => (
//         <Flex align="center">
//           <Text fontSize={contentFontSize} color={textColor}>
//             {info.getValue()}
//           </Text>
//         </Flex>
//       ),
//     }),

//     createColumn({
//       accessor: 'isOnline',
//       id: 'isOnline',
//       headerText: 'ESTADO',
//       renderCell: (info) => (
//         <>
//           {info.getValue() ? (
//             <Box w="12px" h="12px" bg="green.400" borderRadius="full" display="inline-block" />
//           ) : (
//             <Box w="12px" h="12px" bg="red.400" borderRadius="full" display="inline-block" />
//           )}
//         </>
//       ),
//     }),

//     createColumn({
//       accessor: 'createAt',
//       id: 'createAt',
//       headerText: 'REGISTRO',
//       renderCell: (info) => (
//         <Flex align="center">
//           <Text me="10px" color={textColor} fontSize={contentFontSize}>
//             {info.getValue()}
//           </Text>
//         </Flex>
//       ),
//     }),

//     createColumn({
//       accessor: 'id',
//       id: 'id',
//       headerText: 'EDITAR',
//       renderCell: (info) => (
//         <IconButton variant="solid" onClick={onOpen}>
//           <MdModeEditOutline />
//         </IconButton>
//       ),
//     }),
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//       pagination
//     },
//     onPaginationChange: setPagination,
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     debugTable: true,
//   });

//   return (
//     <>
//       <Card
//         flexDirection="column"
//         w="100%"
//         px="0px"
//         mt="0px"
//         overflowX={{ sm: 'scroll', lg: 'hidden' }}
//       >
//         <TableComponent table={table} />
//       </Card>

//       <ModalContentComponent isOpen={isOpen} onClose={onClose} />
//     </>
//   );
// };

// export default GeneralTable;

// pages/ComplexTable.js
import React, { useState } from 'react';
import TableComponent from '@components/tables/general/Table';
import ModalContentComponent from '@components/tables/general/ModalContentComponent';

import {
  useDisclosure, useColorModeValue,
  Box,
  Card,
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
  useRadioGroup,
  useRadio,
  Button,
  Icon,
  IconButton,
  useColorMode,
  Badge,
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

import { AndroidLogo } from '@components/icons/Icons';
import { MdModeEditOutline } from "react-icons/md";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { createColumn } from '@components/tables/ColumnHelper';


const GeneralTable = ({ tableData, useDeviceTableColumns, ModalComponent, DeviceLocationModal }) => {
  const [data, setData] = useState(() => [...tableData]);
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const contentFontSize = { sm: '12px', lg: '14px' };
  const columnTitleColor = "white";
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const modalBgColor = useColorModeValue('white', 'navy.700');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const textTitleColor = useColorModeValue('gray.600', 'white');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { columns, selectedRow, setSelectedRow, selectedMap, setMapSelected } = useDeviceTableColumns();

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
        <TableComponent table={table} />
      </Card>
      {/* <ModalContentComponent isOpen={selectedRow} onClose={() => setSelectedRow(null)} /> */}
      <ModalComponent isOpen={selectedRow} onClose={() => setSelectedRow(null)} />
      <DeviceLocationModal  setCloseModal={setMapSelected} isOpen={selectedMap} onClose={() => setMapSelected(null)} />
    </>
  );
};

export default GeneralTable;
