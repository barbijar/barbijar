import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import useCommerces from "../hooks/useCommerces";
import useFilter from "../hooks/useFilter";

import axios from "axios";
import { Box, Grid, PseudoBox } from "@chakra-ui/core";

const Barbijos = () => {
  const [commerces, setCommerces] = useState([]);
  const [error, setError] = useState(null);

  const { Commerces } = useCommerces(commerces);
  const { FilterByProvince} = useFilter(commerces);

  useEffect(() => {
    const getCommerces = async () => {
      try {
        const res = await axios.get(
          "https://calm-brook-73441.herokuapp.com/commerce"
        );
        setCommerces(res.data);
      } catch (error) {
        setError(error);
      }
    };
    getCommerces();
  }, []);

  return (
    <Layout>
      <>
        <PseudoBox as="div">
          <FilterByProvince />
          <Commerces />
        </PseudoBox>
      </>
    </Layout>
  );
};

export default Barbijos;
