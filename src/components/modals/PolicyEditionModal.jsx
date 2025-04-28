// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { IoIosAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import {
    SimpleTextareaField,
    SimpleNumberInputFieldComponent,
    SimpleSliderField,
    SimpleRadioGroupField,
    SimpleInputField,
} from '@components/forms/index';

const policies = [
  { key: "1", value: "Kiosko" },
  { key: "2", value: "Restaurante" },
  { key: "3", value: "Oficina" },
];

const ModalContentComponent = ({ setCloseModal, isOpen, onClose, currentPolicy }) => {

  const [selectedPolicy, setSelectedPolicy] = useState(currentPolicy || null);

  useEffect(() => {
    if (isOpen) {
      setSelectedPolicy(currentPolicy || null);
    }
  }, [isOpen, currentPolicy]);

  const onUpdate = () => {
    console.log("guardando la política " + JSON.stringify(selectedPolicy))
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };

  const handlePolicyNameChange = (e) => {
    setSelectedPolicy({...currentPolicy, policyName: e.target.value})
  };

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={"Edición Política"}
      confirmTextButton={"Actualizar"}
      cancelTextButton={"Cancelar"}
    >
      <Box h="5" />
      <SimpleInputField onChange={handlePolicyNameChange} value={(selectedPolicy != null) ? selectedPolicy.policyName : ""} label="Nombre" helperText="El nombre de la política se considera solamente un alias representativo." type="text" />
      <Box h="5" />
    </SimpleModal>
  );
};

export default ModalContentComponent;
