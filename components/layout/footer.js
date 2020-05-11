import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      position={{sm: "none", xl: "absolute"}}
      bottom={{xl: "0"}}
      width="100%"
    >
      <Flex justifyContent="center" p="1.5rem" bg="blue.700" color="blue.50">
        <Text>Hecho con &hearts; por el equipo de BarbijAr © {year}</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
