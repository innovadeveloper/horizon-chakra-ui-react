// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { IoIosAddCircle } from "react-icons/io";
import { SimpleMenu } from '@components/forms';
import { useState, useEffect } from "react";
import { useDeleteDevice } from "@helpers/hooks/useDevices";

const ModalContentComponent = ({ setCloseModal, isOpen, onClose, currentDevice }) => {

  const { data: deviceDeleted, error: errorDeviceDeleted, mutateAsync: refetchDeviceDeleted } = useDeleteDevice();

  const onConfirm = async () => {
    // console.log("current device ", currentDevice)
    const response = await refetchDeviceDeleted({
      _id: currentDevice._id,
    })
    if (response && response.isValid) {
      setCloseModal(null)
    } else {
      alert(response.exceptions[0]?.description || "Ocurrió un error, volver a intentarlo luego")
    }
    // setCloseModal(null) // cierra el pop luego de la solicitud http
  };
  const onCancel = () => {
    // console.log("cancelando la operación " + JSON.stringify(currentDevice))
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onConfirm}
      onClose={onCancel}
      modalTitle={`¿Deseas eliminar Dispositivo ${(currentDevice) ? currentDevice.modelName : ""}?`}
      confirmTextButton={"Confirmar"}
      cancelTextButton={"Cancelar"}
    >
      <Box h="5" />
      <Flex direction="column" align="center" width="100%">
        <Text fontSize="lg" mb="4" variant={"classic"}>
          Esta acción eliminará completamente el registro del dispositivo en el sistema. ¿Estás seguro de realizar esta acción?
        </Text>
      </Flex>
      <Box h="5" />
    </SimpleModal>
  );
};

export default ModalContentComponent;
