import React from "react";
import { Spinner, Box } from "@chakra-ui/core";

const Loading = () => (
  <>
    <Box display="flex" alignItems="center" justifyContent="center" m={3}>
      <Spinner
        thickness="4px"
        speed="0.45s"
        emptyColor="gray.200"
        color="blue.600"
        size="xl"
      />
    </Box>
  </>
);

export default Loading;
