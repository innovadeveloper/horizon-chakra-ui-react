// src/App.jsx
import React from 'react'
import { Box, ChakraProvider, ColorModeScript, extendTheme, AspectRatio, Center} from '@chakra-ui/react'
import Layout from './components/layout'
import { Flex } from "@chakra-ui/react"

// Configuración del tema
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // O 'dark' según lo que quieras
    useSystemColorMode: false, // Si deseas que se adapte al sistema, cámbialo a true
  },
})

const App = () => {
  return (
    // ChakraProvider con el tema extendido
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* <Layout>
        <h1>B</h1>
        <p>E</p>
      </Layout> */}
      {DemoAspectRatio()}
    </ChakraProvider >
  )
}

const DemoAspectRatio = () => {
  return (
    <AspectRatio bg="blackAlpha.100" ratio={2 / 1}>
      <Center fontSize="xl">2 / 1</Center>
    </AspectRatio>
  )
}

export default App
