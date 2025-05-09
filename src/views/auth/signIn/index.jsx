/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "@components/separator/Separator";
import DefaultAuth from "@layouts/auth/Default";
// Assets
// import illustration from "@assets/img/auth/auth.png";

//  https://unsplash.com/es/s/fotos/pos
//  https://unsplash.com/es/s/fotos/smartphone-isometric-vector
// import illustration from "@assets/img/auth/auth-bg.avif";
import illustration from "@assets/img/auth/auth-bg2.avif";
import { FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useAuth } from "@helpers/hooks/useAuth"

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const { login, logout } = useAuth();


  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        height="100vh"
        w="40%"
        justify="center"
        align="center"
        px={{ base: "25px", md: "0px" }}
      >
        <Flex
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
        >
          <Box textAlign="center" mb="36px">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Autenticación
            </Heading>
            <Text color={textColorSecondary} fontWeight="400" fontSize="md">
              Inicia sesión con tu cuenta de empresa.
            </Text>
          </Box>

          <Button
            fontSize="sm"
            mb="26px"
            py="15px"
            h="50px"
            variant="brand"
            borderRadius="16px"
            fontWeight="500"
            onClick={() => login()}
          >
            <Icon as={FaKey} w="20px" h="20px" me="10px" />
            Iniciar sesión con Abexa
          </Button>
        </Flex>
      </Flex>
    </DefaultAuth>

    // <DefaultAuth illustrationBackground={illustration} image={illustration}>
    //   <Flex
    //     maxW={{ base: "100%", md: "max-content" }}
    //     w='100%'
    //     mx={{ base: "auto", lg: "0px" }}
    //     me='auto'
    //     h='100%'
    //     alignItems='start'
    //     justifyContent='center'
    //     mb={{ base: "30px", md: "60px" }}
    //     px={{ base: "25px", md: "0px" }}
    //     mt={{ base: "40px", md: "14vh" }}
    //     flexDirection='column'>
    //     <Box me='auto'>
    //       <Heading color={textColor} fontSize='36px' mb='10px'>
    //         Autenticación
    //       </Heading>
    //       <Text
    //         mb='36px'
    //         ms='4px'
    //         color={textColorSecondary}
    //         fontWeight='400'
    //         fontSize='md'>
    //         Inicia sesión con tu cuenta de empresa.
    //       </Text>
    //     </Box>

    //     <Flex
    //       zIndex='2'
    //       direction='column'
    //       w={{ base: "100%", md: "420px" }}
    //       maxW='100%'
    //       background='transparent'
    //       borderRadius='15px'
    //       mx={{ base: "auto", lg: "unset" }}
    //       me='auto'
    //       mb={{ base: "20px", md: "auto" }}>
    //       <Button
    //         fontSize='sm'
    //         me='0px'
    //         mb='26px'
    //         py='15px'
    //         h='50px'
    //         variant='brand'
    //         data-element='prueba'
    //         borderRadius='16px'
    //         fontWeight='500'
    //         onClick={() => login()}
    //       >
    //         <Icon as={FaKey} w='20px' h='20px' me='10px' />
    //         Iniciar sesión con Abexa
    //       </Button>
    //     </Flex>
    //   </Flex>
    // </DefaultAuth>
  );
}

export default SignIn;
