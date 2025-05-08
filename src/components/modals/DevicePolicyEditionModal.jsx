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
import { useReadDevices, useUpdatePolicyDevice } from "@helpers/hooks/useDevices";
import { useReadPolicies, useUpdateDetailPolicy } from "@helpers/hooks/usePolicy";



const ModalContentComponent = ({ setCloseModal, isOpen, device, onClose, currentPolicy }) => {
  // const { data, refetch } = useFetch('http://localhost:9002/context/api/policy', 'GET');
  const [selectedPolicy, setSelectedPolicy] = useState(currentPolicy || null);
  const [policies, setPolicies] = useState([])
  const { getAccessTokenInvoke } = useAuth();
  const { data: devicePolicyUpdated, error: errorPolicityUpdated, mutateAsync: refetchUpdatePolicy } = useUpdatePolicyDevice();
  const { data: policiesLoaded, error: errorPoliciesLoaded, refetch: refetchPolicies } = useReadPolicies();

  useEffect(() => {
    if (policiesLoaded && policiesLoaded.isValid) {
      const buildPolicies = (response) => {
        return response.map((policy, index) => ({
          key: policy._id,
          value: policy.policyName
        }));
      }
      setPolicies(buildPolicies(policiesLoaded.content))
    }
    // else
    //   console.log("policies none")
  }, [policiesLoaded?.timestamp]);


  useEffect(() => {
    if (isOpen) {
      refetchPolicies();
      setSelectedPolicy(currentPolicy || null);
    }
    console.log("[] refetchPolicies ", isOpen, currentPolicy)
  }, [isOpen]);

  // actualiza la política PUT
  const onUpdate = async () => {
    const response = await refetchUpdatePolicy({
      _id: device._id,
      policyId: selectedPolicy.key
    })
    if (response && response.isValid) {
      console.log("devicePolicyUpdated", response)
      setCloseModal(null)
    }else {
      alert(response.exceptions[0]?.description || "Ocurrió un error, volver a intentarlo luego")
    }
  };

  const handlePolicySelect = (policy) => {
    console.log("Seleccionaste:", policy.value);
    setSelectedPolicy({ value: policy.value, key: policy.key });
  };
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
