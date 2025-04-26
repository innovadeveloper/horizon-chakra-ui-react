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
import { Box, SimpleGrid, Flex, useColorModeValue, Text, IconButton, Input, FormLabel, Button } from "@chakra-ui/react";
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
// import devicesTableDevelopment from "@views/admin/dataTables/variables/my-devices-data.json";
import policiesTableDevelopment from "@views/admin/dataTables/variables/my-policies-data.json";
// import tableDataCheck from "@views/admin/dataTables/variables/tableDataCheck.json";
// import tableDataColumns from "@views/admin/dataTables/variables/tableDataColumns.json";
// import tableDataComplex from "@views/admin/dataTables/variables/tableDataComplex.json";
import React from "react";
import { AndroidLogo } from '@components/icons/Icons';
import { createColumn } from '@components/tables/ColumnHelper';
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

import { useState, useCallback } from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

import PolicyEditionModal from "@/components/modals/PolicyEditionModal";
import DeviceDeleteModal from "@components/modals/DeviceDeleteModal";

const useDeviceTableColumns = () => {
  // hooks 
  const [selectedEdit, setSelectEdit] = useState(null);
  const [selectedDelete, setSelectDelete] = useState(null);

  const contentFontSize = { sm: '12px', lg: '14px' };
  const columnTitleColor = "white";
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const modalBgColor = useColorModeValue('white', 'navy.700');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const textTitleColor = useColorModeValue('gray.600', 'white');

  // Este será tu "closure" para editar
  const onEdit = useCallback((rowData) => {
    setSelectEdit(rowData); // Guardas los datos que quieras
    console.log('Editando fila:', rowData);
  }, []);

  const onDelete = useCallback((info) => {
    setSelectDelete(info);
    console.log('Delete :', info);
  }, []);

  // Definir columnas
  const columns = [
    createColumn({
      accessor: 'policyName',
      id: 'policyName',
      headerText: 'NOMBRE',
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
      accessor: 'quantity',
      id: 'quantity',
      headerText: 'CANTIDAD',
      renderCell: (info) => (
        <Flex align="center">
          <Text variant={"listItemCaption"}>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    createColumn({
      accessor: 'id',
      id: 'actions',
      headerText: 'ACCIONES',
      renderCell: (info) => (
        <Flex direction={"row"}>
          <IconButton variant="solid" onClick={() => onEdit(info.getValue())}>
            <MdModeEditOutline />
          </IconButton>
          <IconButton variant="solid" onClick={() => onDelete(info.getValue())}>
            <MdDeleteForever />
          </IconButton>
        </Flex>
      ),
    }),
  ];

  return {
    columns, selected: { selectedEdit, selectedDelete }, setSelect: { setSelectEdit, setSelectDelete}
  };
}


export default function Settings() {

  const { columns, selected, setSelect } = useDeviceTableColumns();

  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* <GeneralTable
          tableData={policiesTableDevelopment}
          useDeviceTableColumns={useDeviceTableColumns}
          ModalComponent={ModalContentComponent}
          DeviceLocationModal={DeviceLocationModal}
        /> */}

        <GeneralTable tableData={policiesTableDevelopment} columns={columns}>
          <PolicyEditionModal currentPolicy={selected.selectedEdit} setCloseModal={setSelect.setSelectEdit} isOpen={selected.selectedEdit} onClose={() => setSelect.setSelectEdit(null)} />
          <DeviceDeleteModal currentDevice={selected.selectedDelete} setCloseModal={setSelect.setSelectDelete} isOpen={selected.selectedDelete} onClose={() => setSelect.setSelectDelete(null)} />
        </GeneralTable>
      </SimpleGrid>
    </Box>
  );
}
