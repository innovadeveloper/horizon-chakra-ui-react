// components/ModalContentComponent.js
import { SimpleModal } from '@components/modals/SimpleModal';
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text } from '@chakra-ui/react';

const ModalContentComponent = ({ isOpen, onClose }) => {
  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      onUpdate={() => { }}
      tabLabels={['One', 'Two']}
    >
      <TabPanel>
        <>

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
        </>
      </TabPanel>
      <TabPanel>
        <p>Contenido del segundo tab</p>
      </TabPanel>
    </SimpleModal>
  );
};

export default ModalContentComponent;
