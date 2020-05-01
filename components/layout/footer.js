import React from 'react';
import {
  Flex,
  Text
} from '@chakra-ui/core';

const Footer = () => {
    const fecha = new Date();
    const anio = fecha.getFullYear();

  return (
    <>
        <Flex 
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        p="1.5rem"
        bg="blue.700"
        color="blue.50">
            <Text >
            Barbijar, Copyright © {anio}
            </Text>
        </Flex>
    </>
  );
};

export default Footer;