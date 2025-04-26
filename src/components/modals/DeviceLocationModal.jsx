// components/ModalContentComponent.js
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text, Box, Flex } from '@chakra-ui/react';
import { SimpleModal } from '@components/modals/SimpleModal';
import {
  MapComponent
} from '@components/maps/MapComponent';


const ModalContentComponent = ({ isOpen, onClose, device, setCloseModal }) => {
  const onUpdate = () => {
    console.log("Regresar / salir del pop up")
    setCloseModal(null) // cierra el pop luego de la solicitud http
  };


  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={`Ubicación del dispositivo ${device.modelName}`}
      cancelTextButton={undefined}
      confirmTextButton={"Regresar"}
    >
      <>
        <Box h="5" />
        <Flex align="center" width="100%">
          <MapComponent position={[-12.007172935393886, -77.06031303157475]} />
        </Flex>
        <Box h="5" />
      </>


      {/* <>
        <Text fontSize="sm" color="gray.500" mb={4}>
          {JSON.stringify(isOpen)}
        </Text>
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
      </> */}
    </SimpleModal>
  );
};

export default ModalContentComponent;
