import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import useCommerces from "../hooks/useCommerces";
import useFetch from "../hooks/useFetch";

import axios from "axios";
import { Box, Grid, PseudoBox } from "@chakra-ui/core";

const Barbijos = () => {
  const res = useFetch("https://calm-brook-73441.herokuapp.com/commerce", {});

  const { Commerces } = useCommerces(res);

  return (
    <Layout>
      <>
        <PseudoBox as="div">
          <Commerces />
        </PseudoBox>
      </>
    </Layout>
  );
};

export default Barbijos;
