// components/ModalContentComponent.js
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text, Box, Flex, IconButton, HStack } from '@chakra-ui/react';
import { SimpleModal } from '@components/modals/SimpleModal';
import { useAuth } from "@helpers/hooks/useAuth";
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';

import {
  SimpleTextareaField,
  SimpleNumberInputFieldComponent,
  SimpleSliderField,
  SimpleRadioGroupField,
  SimpleInputField,
} from '@components/forms/index';
import { useAddPolicy } from "@helpers/hooks/usePolicy";

const ModalContentComponent = ({ isOpen, onClose, setOpenModal }) => {

  const { data: policyAdded, error: errorPolicyAdded, mutateAsync: refetchAddPolicy } = useAddPolicy();
  const { userInfo, getUser } = useAuth();
  const [selectedPolicy, setSelectedPolicy] = useState({});

  const onUpdate = async () => {
    const response = await refetchAddPolicy({
      email: userInfo.email,
      createAt : new Date().getTime(),
      policyName: selectedPolicy.policyName,
      disabledPackages: selectedPolicy.disabledPackages
    })
    if (response && response.isValid) {
      setOpenModal(false)
    } else {
      alert(response.exceptions[0]?.description || "Ocurrió un error, volver a intentarlo luego")
    }
  };
  // const { data: pendingDeviceUpdated, error: errorDeviceUpdated, mutateAsync: refetchUpdatePendingDevice } = useUpdateConfirmPendingDevice();
  useEffect(() => {
    if (isOpen && userInfo == null) {
      getUser()
    }
  }, [isOpen]);

  // console.log(`[RegisterPolicyModal] userInfo`, userInfo)

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
      modalTitle={`Registro de nueva política`}
      cancelTextButton={"Cancelar"}
      confirmTextButton={"Registrar"}
      modalContentProps={{ maxWidth: "50%" }}
    >
      <>
        <Box h="5" />
        <SimpleInputField onChange={handlePolicyNameChange} label="Nombre de Política" placeholder="ej. Kiosko" helperText="Luego podrás cambiarlo" type="text" />
        <Box h="5" />
        <SimpleTextareaField onChange={handleDisabledPackagesChange} label="Paquetes deshabilitados" placeholder="ej. com.sample.app" type="text" />
        {/* <SimpleTextareaField onChange={handleDisabledPackagesChange} value={(selectedPolicy != null) ? selectedPolicy.disabledPackages : ""} label="Paquetes deshabilitados" placeholder="com.sample.app, com.demo.app" type="text" /> */}
        <Box h="5" />
      </>
    </SimpleModal>
  );
};

export default ModalContentComponent;
