// SessionRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Progress, VStack, Center } from "@chakra-ui/react";

export default function ViewRedirect({ message, delay, path }) {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(path, { replace: true });
        }, delay); // 1 segundo

        return () => clearTimeout(timeout); // limpieza por si desmonta antes
    }, [navigate]);

    return (
        <VStack spacing={4} align="center" justify="center" height="100vh">
            <Box w="300px" textAlign="center">
                <Text fontSize="xl">
                    {message}
                </Text>
                <Center>
                    <Progress mt={4} size="sm" isIndeterminate colorScheme="brand" />
                </Center>
            </Box>
        </VStack>
    );
}
