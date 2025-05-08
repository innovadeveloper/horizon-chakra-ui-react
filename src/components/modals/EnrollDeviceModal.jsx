// components/ModalContentComponent.js
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text, Box, Flex } from '@chakra-ui/react';
import { SimpleModal } from '@components/modals/SimpleModal';
import QRCode from 'react-qr-code';


const ModalContentComponent = ({ isOpen, onClose, device, setCloseModal, location }) => {
  const onUpdate = () => {
    console.log("Regresar / salir del pop up")
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };


  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={`Enrolamiento del nuevo dispositivo`}
      cancelTextButton={undefined}
      confirmTextButton={"Regresar"}
      modalContentProps={{ width: "30%" }}
    >
      <>
        <Box h="5" />
        <Flex direction={"column"} align="center" justifyContent="center" width="100%">
          <QRCode value="https://www.ejemplo.com" />
          <Text fontSize={"lg"} mt={"20px"} variant={"classic"}>Escanea el QR con la app <b>INFINITIX</b></Text>
        </Flex>
        <Box h="5" />
      </>
    </SimpleModal>
  );
};

export default ModalContentComponent;
