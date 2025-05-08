// components/ModalContentComponent.js
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text, Box, Flex, IconButton, HStack } from '@chakra-ui/react';
import { SimpleModal } from '@components/modals/SimpleModal';
import { useAuth } from "@helpers/hooks/useAuth";
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';

import { useUpdateConfirmPendingDevice } from "@helpers/hooks/usePendingDevice";


const ModalContentComponent = ({ isOpen, onClose, setOpenModal }) => {
  const onUpdate = () => {
    console.log("Regresar / salir del pop up")
    setOpenModal(false) // cierra el pop luego de la solicitud http
  };
  // const { getAccessTokenInvoke } = useAuth();
  // const { data: pendingDeviceUpdated, error: errorDeviceUpdated, mutateAsync: refetchUpdatePendingDevice } = useUpdateConfirmPendingDevice();


  // console.log(`[MQTT] message ${message} , isConnected ${isConnected}`)

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={`Enrolamiento del nuevo dispositivo`}
      cancelTextButton={undefined}
      confirmTextButton={undefined}
      modalContentProps={{ width: "30%" }}
    >
      <>
        <Box h="5" />
        {/* {buildContent(message)} */}
        <Box h="5" />
      </>
    </SimpleModal>
  );
};

export default ModalContentComponent;
