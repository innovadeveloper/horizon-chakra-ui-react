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
import { useDisclosure, Box, SimpleGrid, Flex, useColorModeValue, Text, IconButton, Input, FormLabel, Button } from "@chakra-ui/react";
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
// import devicesTableDevelopment from "@views/admin/dataTables/variables/devices-table-data.json";
import devicesTableDevelopment from "@views/admin/dataTables/variables/my-devices-data.json";
// import tableDataCheck from "@views/admin/dataTables/variables/tableDataCheck.json";
// import tableDataColumns from "@views/admin/dataTables/variables/tableDataColumns.json";
// import tableDataComplex from "@views/admin/dataTables/variables/tableDataComplex.json";
import React from "react";
import { AndroidLogo } from '@components/icons/Icons';
import { createColumn } from '@components/tables/ColumnHelper';
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

import { useState, useCallback } from 'react';
import ModalContentComponent from "@/components/tables/general/ModalContentComponent";
import DeviceLocationModal from "@components/modals/DeviceLocationModal";
import DevicePolicyEditionModal from "@/components/modals/DevicePolicyEditionModal";
import DeviceDeleteModal from "@components/modals/DeviceDeleteModal";
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";


const useDeviceTableColumns = () => {
  // hooks 
  const [selectedPolicy, setSelectPolicy] = useState(null);
  const [selectedMap, setSelectMap] = useState(null);
  const [selectedEdit, setSelectEdit] = useState(null);
  const [selectedDelete, setSelectDelete] = useState(null);



  // const [selectedRow, setSelectedRow] = useState(null); // Para saber qué fila se clickeó

  // const [selectedMap, setMapSelected] = useState(null);

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

  const onMap = useCallback((info) => {
    setMapSelected(info);
    console.log('Abriendo mapa:', info);
  }, []);



  // Definir columnas
  const columns = [
    createColumn({
      accessor: row => ({
        isOnline: row.isOnline,
        modelName: row.modelName,
        brandName: row.brandName,
      }),
      id: 'device',
      headerText: 'DISPOSITIVO',
      renderCell: (info) => (
        <Flex>
          <Flex height="10" w="30px" align="center" justify="center">

            <Flex direction={"row"} alignItems="center" position="relative">
              <AndroidLogo color={iconColor} h="25px" w="22px" />
              <Box
                w="10px"
                h="10px"
                bg={info.getValue().isOnline ? "green.400" : "red.400"}
                borderRadius="full"
                position="absolute"
                bottom={0}
                right={-1}
              />
            </Flex>

            {/* <AndroidLogo color={iconColor} h="18px" w="16px" /> */}
          </Flex>
          <Flex height="10" grow="1" ml="10px" direction="column">
            <Text variant={"listItemTitle"} >
              {info.getValue().modelName}
            </Text>
            <Text variant={"listItemCaption"}>
              {info.getValue().brandName}
            </Text>
          </Flex>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'androidVersion',
      id: 'androidVersion',
      headerText: 'VERSION',
      renderCell: (info) => (
        <Flex align="center">
          <Text variant={"listItemCaption"}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),


    createColumn({
      accessor: 'createAt',
      id: 'createAt',
      headerText: 'REGISTRO',
      renderCell: (info) => (
        <Flex align="center">
          <Text variant={"listItemCaption"}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),


    createColumn({
      accessor: row => ({
        id: row.id,
        policyName: row.policyName,
      }),
      id: 'policyName',
      headerText: 'POLITICA',
      renderCell: (info) => (
        <Flex align="center" alignItems={"center"}>
          {info.getValue().policyName ? (<Text variant={"listItemTitle"}>
            {info.getValue().policyName}
          </Text>) : (<IconButton variant="solid" onClick={() => setSelectPolicy(info.getValue())}>
            <IoIosAddCircle />
          </IconButton>)}

        </Flex>
      ),
    }),

    createColumn({
      accessor: row => ({
        id: row.id,
        modelName: row.modelName,
        brandName: row.brandName,
      }),
      id: 'viewInMap',
      headerText: 'VER EN MAPA',
      renderCell: (info) => (
        <Flex justifyContent={"center"}>
          <IconButton variant="solid" onClick={() => setSelectMap(info.getValue())}>
            <FaMapMarkerAlt />
          </IconButton>
        </Flex>
      ),
    }),


    createColumn({
      accessor: row => ({
        id: row.id,
        modelName: row.modelName,
        brandName: row.brandName,
        policyName: row.policyName,
      }),
      id: 'actions',
      headerText: 'ACCIONES',
      renderCell: (info) => (

        <Flex direction={"row"}>
          {/* <IconButton variant="solid" onClick={() => setSelectInfo(info.getValue())}>
            <FaInfoCircle />
          </IconButton> */}
          <IconButton variant="solid" onClick={() => setSelectPolicy(info.getValue())}>
            <MdModeEditOutline />
          </IconButton>
          <IconButton variant="solid" onClick={() => setSelectDelete(info.getValue())}>
            <MdDeleteForever />
          </IconButton>
        </Flex>
      ),
    }),

  ];

  return {
    columns, selected: { selectedPolicy, selectedMap, selectedEdit, selectedDelete }, setSelect: {
      setSelectPolicy, setSelectMap, setSelectEdit, setSelectDelete
    }
  };
}


export default function Settings() {
  const { columns, selected, setSelect } = useDeviceTableColumns();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectePolicyId = (selected.selectedPolicy ? selected.selectedPolicy.id : null)
  const selectePolicyName = (selected.selectedPolicy ? selected.selectedPolicy.policyName : null)
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <GeneralTable tableData={devicesTableDevelopment} columns={columns}>
          <DevicePolicyEditionModal currentPolicy={selected.selectedPolicy} setCloseModal={setSelect.setSelectPolicy} isOpen={selected.selectedPolicy} onClose={() => setSelect.setSelectPolicy(null)} />
          <DeviceLocationModal setCloseModal={setSelect.setSelectMap}
            location={{ latitude: -12.007172935393886, longitude: -77.06031303157475 }}
            device={selected.selectedMap || {}}
            isOpen={selected.selectedMap} onClose={() => setSelect.setSelectMap(null)} />
          <DeviceDeleteModal currentDevice={selected.selectedDelete} setCloseModal={setSelect.setSelectDelete} isOpen={selected.selectedDelete} onClose={() => setSelect.setSelectDelete(null)} />
        </GeneralTable>
      </SimpleGrid>
    </Box>
  );
}
