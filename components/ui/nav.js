import React from "react";
import Link from 'next/link';

import { Box, PseudoBox } from "@chakra-ui/core";

const Nav = ({href, title, icon}) => (
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
      <Box as={icon} size="18px" color="white" mr={1} />
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </PseudoBox>
  </Box>
);

export default Nav;
