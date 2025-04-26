// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Button, Flex, Box } from '@chakra-ui/react';
import { IoIosAddCircle } from "react-icons/io";
import { SimpleMenu } from '@components/forms';
import { useState, useEffect } from "react";

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

  const handlePolicySelect = (policy) => {
    console.log("Seleccionaste:", policy);
    setSelectedPolicy({ policyName: policy.value, id: policy.key });
  };

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={"Edición Política"}
      confirmTextButton={"Guardar"}
      cancelTextButton={"Cancelar"}
    >
      <Box h="5" />
      <Flex align="center" width="100%">
        <Text flex="8" fontSize="lg">
          {selectedPolicy ? selectedPolicy.policyName : "No tiene ninguna política actual"}
        </Text>
        <SimpleMenu
          textMenu={selectedPolicy ? "Cambiar" : "Seleccionar"}
          items={policies}
          onSelect={handlePolicySelect}
          flex="2" // Opcional, depende cómo lo definiste adentro
        />
      </Flex>
      <Box h="5" />
    </SimpleModal>
  );
};

export default ModalContentComponent;
