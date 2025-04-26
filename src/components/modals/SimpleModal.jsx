'use client';
import {
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter,
    Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel,
    Button, useColorModeValue,
    Box
} from '@chakra-ui/react';

const SimpleModal = ({
    isOpen,
    onClose,
    onUpdate,
    // tabLabels = [],
    children,
    modalTitle,
    confirmTextButton,
    cancelTextButton
}) => {
    const labelColor = useColorModeValue('dark.secondary.500', 'light.secondary.500');
    const modalBgColor = useColorModeValue('light.primary.500', 'dark.primary.900');
    const tabIndicatorColor = useColorModeValue('light.secondary.500', 'dark.secondary.50');
    const tabSelectedProperties = { color: labelColor, bg: tabIndicatorColor, fontWeight: 'bold' }

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={modalBgColor} maxWidth="100%" width="50%">
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    {children}
                </ModalBody>
                <ModalFooter>
                    { (confirmTextButton != null && confirmTextButton != undefined) ? <Button colorScheme="brand" mr={3} onClick={onUpdate}>
                        {confirmTextButton}
                    </Button> : <Box/>}
                    { (cancelTextButton != null && cancelTextButton != undefined) ? <Button mr={3} onClick={onClose}>
                        {cancelTextButton}
                    </Button> : <Box/>}
                    
                    {/* <Button onClick={onClose}>{cancelTextButton}</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export { SimpleModal };
