import React, { useState } from "react";
import Nav from "../ui/nav";

import { Tabs, TabPanels, Flex, Box, PseudoBox, Image } from "@chakra-ui/core";
import {
  MdHome,
  MdContentCut,
  MdAddBox,
  MdMenu,
  MdSearch,
} from "react-icons/md";

const Header = (props) => {
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
        <Box flex="0 0 50%" display={{ sm: "none", md: "block" }}>
          <Image width="200px" src={"./logo.png"} alt="Logo Barbijar" />
        </Box>

        <PseudoBox
          as="div"
          display={{ sm: "block", md: "none" }}
          onClick={handleToggle}
        >
          <Box as={MdMenu} size="18px" color="white" mr={1} />
        </PseudoBox>

        <Box
          display={{ sm: toggle ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <Tabs width="100%">
            <TabPanels
              display="flex"
              width="100%"
              flexDirection={{ sm: "column", md: "row" }}
              justifyContent={{ md: "space-around" }}
              alignItems={{ md: "center" }}
            >
              <Nav href="/" title="Inicio" icon={MdHome} />
              <Nav href="/barbijos" title="Barbijos" icon={MdSearch} />
              <Nav href="/emprender" title="Emprender" icon={MdContentCut} />
              <Nav href="/salud" title="Salud" icon={MdAddBox} />
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
