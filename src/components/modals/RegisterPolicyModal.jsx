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
      modalTitle={`Registro de nueva política`}
      cancelTextButton={undefined}
      confirmTextButton={undefined}
      modalContentProps={{ maxWidth: "50%"}}
    >
      <>
        <Box h="5" />
        <GenericForm
          inputLabel="Your Email"
          inputPlaceholder="Enter your email"
          onInputChange={(e) => {
            console.log('Input value:', e.target.value);
          }}
          onRadioChange={(value) => {
            console.log('Selected framework:', value);
          }}
          options={['Angular', 'React', 'Vue']}
        />
        {/* {buildContent(message)} */}
        <Box h="5" />
      </>
    </SimpleModal>
  );
};

export default ModalContentComponent;
