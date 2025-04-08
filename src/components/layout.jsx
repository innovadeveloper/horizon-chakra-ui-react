// src/components/Layout.jsx
import { Flex, Box } from '@chakra-ui/react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const Layout = ({ children }) => (
  <Flex data-component="flexcontainer" direction="column" minH="100vh">
    <Header />
    <Flex flex="1">
      <Sidebar />
      <Box flex="1" p={4} bg="blackAlpha.800">
        {children}
      </Box>
    </Flex>
    <Footer />
  </Flex>
)

export default Layout
