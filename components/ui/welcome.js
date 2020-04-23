import React from 'react';
import Link from 'next/link';

import { Box, Heading, Text, Flex, Button, Icon } from '@chakra-ui/core';

function Welcome() {
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box p={4}>
          <Heading mb={3} textAlign="center" color="blue.300">
            ¡Bienvenides a BarbijAr!
          </Heading>
          <Text fontSize="xl" textAlign="center">
            BarbijAr es un proyecto para que los argentinos y argentinas tengan
            la posibilidad de solicitar su barbijo obligatorio con la mayor
            facilidad posible.
          </Text>

          <Button color="blue.300" variantColor="blue" variant="outline" align="center" width="100%" mt={3}>
              <Link href="/barbijos">
                <Text textTransform="uppercase">
                  <a>Buscar barbijos</a>
                </Text>
              </Link>
              <Icon name="search" ml={3} />
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default Welcome;