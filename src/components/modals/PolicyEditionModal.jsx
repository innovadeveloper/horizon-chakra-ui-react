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

import { useUpdateDetailPolicy } from "@helpers/hooks/usePolicy";


const ModalContentComponent = ({ setCloseModal, isOpen, onClose, currentPolicy }) => {

  const [selectedPolicy, setSelectedPolicy] = useState(currentPolicy || null);
  const { data: policyUpdated, error: errorPolicyUpdated, mutateAsync: refetchUpdateDetailPolicy } = useUpdateDetailPolicy();

  useEffect(() => {
    if (isOpen) {
      setSelectedPolicy(currentPolicy || null);
    }
  }, [isOpen, currentPolicy]);


  const onUpdate = async () => {
    const response = await refetchUpdateDetailPolicy({
      _id: selectedPolicy._id,
      policyName: selectedPolicy.policyName,
      email: selectedPolicy.email,
      disabledPackages: selectedPolicy.disabledPackages
    })
    if (response && response.isValid) {
      setCloseModal(null)
    } else {
      alert(response.exceptions[0]?.description || "Ocurrió un error, volver a intentarlo luego")
    }
  };

  const handlePolicyNameChange = (e) => {
    setSelectedPolicy({ ...selectedPolicy, policyName: e.target.value })
  };
  const handleDisabledPackagesChange = (e) => {
    setSelectedPolicy({ ...selectedPolicy, disabledPackages: e.target.value })
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
      <SimpleTextareaField onChange={handleDisabledPackagesChange} value={(selectedPolicy != null) ? selectedPolicy.disabledPackages : ""} label="Paquetes deshabilitados" placeholder="com.sample.app, com.demo.app" type="text" />
      <Box h="5" />
    </SimpleModal>
  );
};

export default ModalContentComponent;
