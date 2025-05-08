// components/ModalContentComponent.js
import GenericForm from '@components/forms/GenericForm';
import { TabPanel, Text, Box, Flex, IconButton, HStack } from '@chakra-ui/react';
import { SimpleModal } from '@components/modals/SimpleModal';
import QRCode from 'react-qr-code';
import { useMqttClient } from "@/helpers/hooks/useMqtt";
import { useAuth } from "@helpers/hooks/useAuth";
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';

import { useUpdateConfirmPendingDevice } from "@helpers/hooks/usePendingDevice";


const ModalContentComponent = ({ isOpen, onClose, device, setOpenModal, location }) => {
  const onUpdate = () => {
    console.log("Regresar / salir del pop up")
    setOpenModal(false) // cierra el pop luego de la solicitud http
  };
  const { message, isConnected, publish, connect, disconnect } = useMqttClient({
    brokerUrl: 'wss://mosquitto-websocket.abexa.pe'
  });
  const { getAccessTokenInvoke } = useAuth();
  const [token, setToken] = useState("");
  const { data: pendingDeviceUpdated, error: errorDeviceUpdated, mutateAsync: refetchUpdatePendingDevice } = useUpdateConfirmPendingDevice();

  // MQTT HOOK
  useEffect(() => {
    const fetchTokenAndConnect = async () => {
      try {
        const token = (await getAccessTokenInvoke());
        setToken(token);
        connect(token);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };
    if (isOpen)
      fetchTokenAndConnect();

    return () => {
      disconnect();
    };
  }, [isOpen]);

  const buildContent = (message) => {
    // console.log("buildContent", message, (message != null))
    const payload = JSON.parse(message || "{}")

    if (Object.keys(payload).length == 0 || payload?.body?.content?.randomCodes == null)
      return (<Flex direction={"column"} align="center" justifyContent="center" width="100%">
        <QRCode value={token} />
        <Text fontSize={"md"} mt={"20px"} variant={"classic"}>Escanea el QR con la app <b>INFINITIX</b></Text>
      </Flex>)

    // build randomCodes

    return (<Flex direction={"column"} align="center" justifyContent="center" width="100%">

      <HStack spacing={4} mt={"20px"}>
        {payload.body.content.randomCodes.map((code, index) => (
          <IconButton
            key={index}
            isRound={true}
            variant='classic'
            aria-label={`Code ${code}`}
            fontSize='20px'
            onClick={async (e) => {
              if (code == payload.body.content.randomCode) {
                const response = await refetchUpdatePendingDevice({
                  _id: payload.body.content._id,
                  randomCode: payload.body.content.randomCode,
                  uid: payload.body.content.uid
                })
                if (response && response.isValid) {
                  console.log("devicePolicyUpdated", response)
                  setOpenModal(false)
                } else {
                  alert(response.exceptions[0]?.description || "Ocurrió un error, volver a intentarlo luego")
                }
              } else {
                alert("Error : El código seleccionado no fue el correcto.")
                setOpenModal(false)
              }
            }}
          >
            <Text textColor="white">{code}</Text>
          </IconButton>
        ))}
      </HStack>

      <Text fontSize={"md"} fontWeight={"300"} mt={"20px"} variant={"classic"} textAlign="center">Selecciona el código recibido en el dispositivo</Text>

    </Flex>)
  }

  // console.log(`[MQTT] message ${message} , isConnected ${isConnected}`)

  return (
    <SimpleModal
      isOpen={isOpen}
      onUpdate={onUpdate}
      onClose={onClose}
      modalTitle={`Enrolamiento del nuevo dispositivo`}
      cancelTextButton={undefined}
      confirmTextButton={undefined}
      modalContentProps={{ width: "30%" }}
    >
      <>
        <Box h="5" />
        {buildContent(message)}
        <Box h="5" />
      </>
    </SimpleModal>
  );
};

export default ModalContentComponent;
