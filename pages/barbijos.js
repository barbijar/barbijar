import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import useCommerces from "../hooks/useCommerces";
import useFilter from "../hooks/useFilter";
import Loading from "../components/ui/loading";

import axios from "axios";
import { PseudoBox } from "@chakra-ui/core";

const Barbijos = () => {
  const [commerces, setCommerces] = useState([]);
  const [error, setError] = useState(null);
  const [filteredProvince, setFilteredProvince] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { Commerces } = useCommerces(filteredProvince);
  const { FilterByProvince, prov } = useFilter(commerces);

  useEffect(() => {
    const getCommerces = async () => {
      if (prov) {
        const filterProv = commerces.filter(
          (commerce) => commerce.province.id == prov
        );

        setFilteredProvince(filterProv);
      } else {
        try {
          const res = await axios.get(
            "https://calm-brook-73441.herokuapp.com/commerce"
          );

          setIsLoading(true);

          setTimeout(() => {
            setIsLoading(false);
            setCommerces(res.data);
            setFilteredProvince(res.data);
          }, 3000);
        } catch (err) {
          console.log(err);
          setError(err);
        }
      }
    };
    getCommerces();
  }, [prov]);

  const showCommerces = isLoading ? <Loading /> : <Commerces />;

  return (
    <Layout>
      <PseudoBox as="div">
        <FilterByProvince />

        {showCommerces}
      </PseudoBox>
    </Layout>
  );
};

export default Barbijos;
