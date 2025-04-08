// src/components/Sidebar.jsx
import { Box, VStack, Text } from '@chakra-ui/react'

const Sidebar = () => (
  <Box bg="blackAlpha.700" w="200px" p={4} minH="calc(100vh - 120px)">
    <VStack align="start" spacing={4}>
      <Text cursor="pointer">I</Text>
      <Text cursor="pointer">P</Text>
      <Text cursor="pointer">C</Text>
    </VStack>
  </Box>
)

export default Sidebar
