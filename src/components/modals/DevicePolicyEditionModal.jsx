// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { IoIosAddCircle } from "react-icons/io";
import { SimpleMenu, SimpleInputField } from '@components/forms';
import { useState, useEffect } from "react";
import useFetch from '@helpers/hooks/useFetch'; // Importa el hook
import clientFetch from '@helpers/utils/FetchHelper'; // Importa el hook
import { useAuth } from "@helpers/hooks/useAuth";

const ModalContentComponent = ({ setCloseModal, isOpen, device, onClose, currentPolicy }) => {
  const { data, refetch } = useFetch('http://localhost:9002/context/api/policy', 'GET');
  const [selectedPolicy, setSelectedPolicy] = useState(currentPolicy || null);
  const [policies, setPolicies] = useState([])
  const { getAccessTokenInvoke } = useAuth();

  useEffect(() => {
    if (data && data.isValid) {
      const buildPolicies = (response) => {
        return response.map((policy, index) => ({
          key: policy._id,
          value: policy.policyName
        }));
      }
      setPolicies(buildPolicies(data.content))
      // console.log("data setted policies ", data.content)
    }
    // else
    //   console.log("policies none")
  }, [data]);


  useEffect(() => {
    if (isOpen) {
      refetch();
      setSelectedPolicy(currentPolicy || null);
    }
  }, [isOpen, currentPolicy]);

  const onUpdate = async () => {
    const token = await getAccessTokenInvoke();
    const data = await clientFetch('http://localhost:9002/context/api/device',
      'PUT', {
      _id: device._id,
      policyId: selectedPolicy.key
    }, { "Authorization": `Bearer ${token}` });
    if (data.isValid) {
      console.log("guardando la nueva política " + JSON.stringify(data))
      setCloseModal(null) // cierra el pop luego de la solicitud http
    }
  };

  const handlePolicySelect = (policy) => {
    console.log("Seleccionaste:", policy.value);
    setSelectedPolicy({ value: policy.value, key: policy.key });
  };
  // console.log(`selectedPolicy ${JSON.stringify(selectedPolicy)}`)
  // console.log(`isopen ${isOpen}`)

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
        {/* <Text flex="8" fontSize="lg">
          {(selectedPolicy && (selectedPolicy.policyName != undefined && selectedPolicy.policyName != null) ) ? selectedPolicy.policyName : "No tiene ninguna política actual"}
        </Text> */}

        <SimpleInputField flex="8" fontSize="lg" value={(selectedPolicy && (selectedPolicy.value != undefined && selectedPolicy.value != null)) ? selectedPolicy.value : "No tiene ninguna política actual"} disabled={true} type="text" />

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
