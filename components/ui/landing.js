import React from 'react';
import Link from 'next/link';

import { Box, Heading, Text, Flex, Button, Icon } from '@chakra-ui/core';
function Landing({title, desc, icon, href, hrefValue}) {
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box p={4} width="100%">
          <Heading mb={3} textAlign="center" color="blue.300">
            {title}
          </Heading>
          <Text fontSize="xl" textAlign="center">
            {desc}
          </Text>

          <Button color="blue.300" 
          variantColor="blue" 
          variant="outline"
          display="flex" 
          align="center" 
          width={{base: '100%', md: '50%', lg: '30%'}} 
          mt={3}
          mx="auto"
          >
              <Box display="flex">
              <Link href={href}>
                <Text textTransform="uppercase">
                  <a>{hrefValue}</a>
                </Text>
              </Link>
              <Box as={icon} size="18px" color="blue.300" ml={2} />
              </Box>
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default Landing;