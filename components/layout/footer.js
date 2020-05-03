import React from "react";
import { Flex, Text, PseudoBox } from "@chakra-ui/core";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        p="1.5rem"
        bg="blue.700"
        color="blue.50"
      >
        <Text>
          Hecho con &hearts; por el equipo de BarbijAr © {year}
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
