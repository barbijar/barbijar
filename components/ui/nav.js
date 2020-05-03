import React from "react";
import Link from 'next/link';

import { Box, Icon, PseudoBox } from "@chakra-ui/core";

const Nav = ({href, title}) => (
  <Box display="block">
    <PseudoBox
      as="p"
      display="flex"
      alignItems="center"
      py={2}
      px={3}
      borderBottom={{ sm: "1px", md: "none" }}
      borderBottomColor="blue.300"
      _hover={{
        bg: "blue.600",
        borderRadius: "10px",
        transition: "background ease-in-out .3s",
      }}
    >
      <Icon name="search" size="18px" color="white" mr={1} />
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </PseudoBox>
  </Box>
);

export default Nav;
