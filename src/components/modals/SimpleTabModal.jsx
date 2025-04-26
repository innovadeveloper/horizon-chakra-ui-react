'use client';
import {
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter,
    Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel,
    Button, useColorModeValue
} from '@chakra-ui/react';

const SimpleModal = ({
    isOpen,
    onClose,
    onUpdate,
    tabLabels = [],
    children,
}) => {
    const labelColor = useColorModeValue('dark.secondary.500', 'light.secondary.500');
    const modalBgColor = useColorModeValue('light.primary.500', 'dark.primary.900');
    const tabIndicatorColor = useColorModeValue('light.secondary.500', 'dark.secondary.50');
    const tabSelectedProperties = { color: labelColor, bg: tabIndicatorColor, fontWeight: 'bold' }

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={modalBgColor} maxWidth="100%" width="50%">
                <ModalHeader>Edición de Dispositivo</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Tabs isFitted variant="enclosed">
                        <TabList mb="1em">
                            {tabLabels.map((label, index) => (
                                <Tab key={index} _selected={tabSelectedProperties}>
                                    {label}
                                </Tab>
                            ))}
                        </TabList>
                        <TabIndicator mt="-1.5px" height="2px" bg={tabIndicatorColor} borderRadius="1px" />
                        <TabPanels>
                            {children}
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="brand" mr={3}>
                        Actualizar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export { SimpleModal };
