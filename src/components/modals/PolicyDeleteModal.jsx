// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { IoIosAddCircle } from "react-icons/io";
import { SimpleMenu } from '@components/forms';
import { useState, useEffect } from "react";


const ModalContentComponent = ({ setCloseModal, isOpen, onClose, currentPolicy }) => {

  const onConfirm = () => {
    console.log("eliminando la política " + JSON.stringify(currentPolicy))
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };
  const onCancel = () => {
    console.log("cancelando la operación " + JSON.stringify(currentPolicy))
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onConfirm}
      onClose={onCancel}
      modalTitle={`¿Deseas eliminar la política ${(currentPolicy) ? currentPolicy.policyName : ""}?`}
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
