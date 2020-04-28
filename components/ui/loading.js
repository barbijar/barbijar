import React from "react";
import { Spinner } from "@chakra-ui/core";

const Loading = () => (
  <>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.600"
      size="xl"
    />
  </>
);

export default Loading;
