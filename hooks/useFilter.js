import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormLabel, Select } from '@chakra-ui/core';

const useFilter = (commerces) => {
  const [provinces, setProvinces] = useState([]);
  const [prov, setProv] = useState("");

  useEffect(() => {
    const getProvince = async () => {
      const res = await axios.get(
        "https://calm-brook-73441.herokuapp.com/provinces"
      );
      const province = res.data;
      setProvinces(province);
    };

    getProvince();
  }, []);

  const FilterByProvince = () => (
    <>
      <FormControl m="0 auto" width={{sm: '18rem', md: '40rem'}}>
        <FormLabel htmlFor="Provincias">Provincias</FormLabel>
        <Select onChange={e => setProv(e.target.value)} value={prov} placeholder="Filtrar provincia">
          {Object.values(
            provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.province_name}
              </option>
            ))
          )}
        </Select>
      </FormControl>
    </>
  );

  return { FilterByProvince, prov };
};

export default useFilter;
