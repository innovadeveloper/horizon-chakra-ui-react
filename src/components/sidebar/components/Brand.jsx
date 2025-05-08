import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Text, Box } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "@/components/icons/Icons";
import { HSeparator } from "@/components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Text fontSize="30" fontWeight="bold">Infinitix</Text>
      <Box h='20px' />
    </Flex>
  );
}

export default SidebarBrand;
