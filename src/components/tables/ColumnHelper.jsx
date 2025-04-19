// pages/ComplexTable.js

import { Text } from '@chakra-ui/react';

import { MdModeEditOutline } from "react-icons/md";

import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const createColumn = ({ accessor, id, headerText, renderCell }) => {
  const columnTitleColor = "white";

  return columnHelper.accessor(accessor, {
    id,
    header: () => (
      <Text
        justifyContent="space-between"
        align="center"
        fontSize={{ sm: '10px', lg: '12px' }}
        color={columnTitleColor}
      >
        {headerText}
      </Text>
    ),
    cell: renderCell,
  });
};
