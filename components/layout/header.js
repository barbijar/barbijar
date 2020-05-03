import React, { useState } from 'react';
import Nav from '../ui/nav';

import {
  Tabs,
  TabPanels,
  Flex,
  Box,
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
              <Nav href='/' title='Inicio' />
              <Nav href='/barbijos' title='Barbijos' />
              <Nav href='/emprender' title='Emprender' />
              <Nav href='/salud' title='Salud' />

            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default Header;