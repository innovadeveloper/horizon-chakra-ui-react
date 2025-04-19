/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, SimpleGrid, Flex, useColorModeValue, Text, IconButton } from "@chakra-ui/react";
import GeneralTable from "@/components/tables/general/GeneralTable";
// import DevicesTable from "@views/admin/dataTables/components/DevicesTable";
import CheckTable from "@views/admin/dataTables/components/CheckTable";
import ColumnsTable from "@views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "@views/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "@views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "@views/admin/dataTables/variables/tableDataDevelopment.json";
import devicesTableDevelopment from "@views/admin/dataTables/variables/devices-table-data.json";
import tableDataCheck from "@views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "@views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "@views/admin/dataTables/variables/tableDataComplex.json";
import React from "react";
import { AndroidLogo } from '@components/icons/Icons';
import { createColumn } from '@components/tables/ColumnHelper';
import { MdModeEditOutline } from "react-icons/md";
import { useState, useCallback } from 'react';


const useDeviceTableColumns = () => {
  const [selectedRow, setSelectedRow] = useState(null); // Para saber qué fila se clickeó

  const contentFontSize = { sm: '12px', lg: '14px' };
  const columnTitleColor = "white";
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const modalBgColor = useColorModeValue('white', 'navy.700');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const textTitleColor = useColorModeValue('gray.600', 'white');

  // Este será tu "closure" para editar
  const onEdit = useCallback((rowData) => {
    setSelectedRow(rowData); // Guardas los datos que quieras
    console.log('Editando fila:', rowData);
  }, []);

  // Definir columnas
  const columns = [
    createColumn({
      accessor: 'device',
      id: 'device',
      headerText: 'DISPOSITIVO',
      renderCell: (info) => (
        <Flex>
          <Flex height="10" w="30px" align="center" justify="center">
            <AndroidLogo color={iconColor} h="18px" w="16px" />
          </Flex>
          <Flex height="10" grow="1" ml="10px" direction="column">
            <Text
              fontFamily="poppins"
              fontWeight="700"
              fontSize={contentFontSize}
              color={textTitleColor}
            >
              {info.getValue().modelName}
            </Text>
            <Text fontSize={contentFontSize} color={textColor}>
              {info.getValue().brandName}
            </Text>
          </Flex>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'policy',
      id: 'policy',
      headerText: 'POLITICA',
      renderCell: (info) => (
        <Flex align="center">
          <Text fontSize={contentFontSize} color={textColor}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'isOnline',
      id: 'isOnline',
      headerText: 'ESTADO',
      renderCell: (info) => (
        <>
          {info.getValue() ? (
            <Box w="12px" h="12px" bg="green.400" borderRadius="full" display="inline-block" />
          ) : (
            <Box w="12px" h="12px" bg="red.400" borderRadius="full" display="inline-block" />
          )}
        </>
      ),
    }),

    createColumn({
      accessor: 'createAt',
      id: 'createAt',
      headerText: 'REGISTRO',
      renderCell: (info) => (
        <Flex align="center">
          <Text me="10px" color={textColor} fontSize={contentFontSize}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'id',
      id: 'id',
      headerText: 'EDITAR',
      renderCell: (info) => (
        <IconButton variant="solid" 
        // onClick={(e) => onEdit()}
        onClick={() => onEdit(info)} // Aquí le pasas toda la fila
        >
          <MdModeEditOutline />
        </IconButton>
      ),
    }),
  ];

  return { columns, selectedRow, setSelectedRow };
}

const columns = (onOpen) => {

  const contentFontSize = { sm: '12px', lg: '14px' };
  const columnTitleColor = "white";
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const modalBgColor = useColorModeValue('white', 'navy.700');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const textTitleColor = useColorModeValue('gray.600', 'white');

  return [
    createColumn({
      accessor: 'device',
      id: 'device',
      headerText: 'DISPOSITIVO',
      renderCell: (info) => (
        <Flex>
          <Flex height="10" w="30px" align="center" justify="center">
            <AndroidLogo color={iconColor} h="18px" w="16px" />
          </Flex>
          <Flex height="10" grow="1" ml="10px" direction="column">
            <Text
              fontFamily="poppins"
              fontWeight="700"
              fontSize={contentFontSize}
              color={textTitleColor}
            >
              {info.getValue().modelName}
            </Text>
            <Text fontSize={contentFontSize} color={textColor}>
              {info.getValue().brandName}
            </Text>
          </Flex>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'policy',
      id: 'policy',
      headerText: 'POLITICA',
      renderCell: (info) => (
        <Flex align="center">
          <Text fontSize={contentFontSize} color={textColor}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'isOnline',
      id: 'isOnline',
      headerText: 'ESTADO',
      renderCell: (info) => (
        <>
          {info.getValue() ? (
            <Box w="12px" h="12px" bg="green.400" borderRadius="full" display="inline-block" />
          ) : (
            <Box w="12px" h="12px" bg="red.400" borderRadius="full" display="inline-block" />
          )}
        </>
      ),
    }),

    createColumn({
      accessor: 'createAt',
      id: 'createAt',
      headerText: 'REGISTRO',
      renderCell: (info) => (
        <Flex align="center">
          <Text me="10px" color={textColor} fontSize={contentFontSize}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'id',
      id: 'id',
      headerText: 'EDITAR',
      renderCell: (info) => (
        <IconButton variant="solid" onClick={(e) => onOpen()}>
          <MdModeEditOutline />
        </IconButton>
      ),
    }),
  ];
}


export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <GeneralTable
          // columnsData={columnsDataDevelopment}
          tableData={devicesTableDevelopment}
          useDeviceTableColumns = {useDeviceTableColumns}
        />
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
      </SimpleGrid>
    </Box>
  );
}
