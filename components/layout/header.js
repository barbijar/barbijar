import React, { useState } from 'react';
import Link from 'next/link';

import {
  Tabs,
  TabPanels,
  Flex,
  Box,
  Icon,
  PseudoBox,
} from '@chakra-ui/core';
import { MdHome, MdContentCut, MdAddBox, MdMenu } from 'react-icons/md';

const Header = props => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        p="1.5rem"
        bg="blue.700"
        color="blue.50"
        {...props}
      >
        <PseudoBox
          as="div"
          display={{ sm: 'block', md: 'none' }}
          onClick={handleToggle}
        >
          <Box as={MdMenu} size="18px" color="white" mr={1} />
        </PseudoBox>

        <Box
          display={{ sm: toggle ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Tabs width="100%">
            <TabPanels
              display="flex"
              width="100%"
              flexDirection={{ sm: 'column', md: 'row' }}
              justifyContent={{ md: 'space-around' }}
              alignItems={{ md: 'center' }}
            >
              <Box display="block">
                <PseudoBox
                  as="p"
                  display="flex"
                  alignItems="center"
                  py={2}
                  px={3}
                  borderBottom={{ sm: '1px', md: 'none' }}
                  borderBottomColor="blue.300"
                  _hover={{ bg: 'blue.400', borderRadius: '10px',  transition: 'all ease-in-out .5s' }}
                >
                  <Box as={MdHome} size="18px" color="white" mr={1} />
                  <Link href="/">
                      <a>Inicio</a>
                  </Link>
                </PseudoBox>
              </Box>
              <Box display="block">
                <PseudoBox
                  as="p"
                  display="flex"
                  alignItems="center"
                  py={2}
                  px={3}
                  borderBottom={{ sm: '1px', md: 'none' }}
                  borderBottomColor="blue.300"
                  _hover={{ bg: 'blue.400', borderRadius: '10px',  transition: 'all ease-in-out .5s' }}
                >
                  <Icon name="search" size="18px" color="white" mr={1} />
                  <Link href="/barbijos">
                      <a>Barbijos</a>
                  </Link>
                </PseudoBox>
              </Box>
              <Box display="block">
                <PseudoBox
                  as="p"
                  display="flex"
                  alignItems="center"
                  py={2}
                  px={3}
                  borderBottom={{ sm: '1px', md: 'none' }}
                  borderBottomColor="blue.300"
                  _hover={{ bg: 'blue.400', borderRadius: '10px',  transition: 'all ease-in-out .5s' }}
                >
                  <Box as={MdContentCut} size="18px" color="white" mr={1} />
                  <Link href="/emprender">
                      <a>Emprender</a>
                  </Link>
                </PseudoBox>
              </Box>
              <Box display="block">
                <PseudoBox
                  as="p"
                  display="flex"
                  alignItems="center"
                  py={2}
                  px={3}
                  borderBottom={{ sm: '1px', md: 'none' }}
                  borderBottomColor="blue.300"
                  _hover={{ bg: 'blue.400', borderRadius: '10px',  transition: 'all ease-in-out .5s' }}
                >
                  <Box as={MdAddBox} size="18px" color="white" mr={1} />
                  <Link href="/salud">
                      <a>Salud</a>
                  </Link>
                </PseudoBox>
              </Box>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default Header;