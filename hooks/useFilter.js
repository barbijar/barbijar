import React, { useState, useEffect } from "react";
import axios from "axios";

const useFilter = (commerces) => {
  const [provinces, setProvinces] = useState([]);

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
      <form>
        <select>
          <option>--FILTRAR POR PROVINCIA--</option>
          {Object.values(
            provinces.map((province) => (
              <option key={province.id}>{province.province_name}</option>
            ))
          )}
        </select>
      </form>
    </>
  );

  return { FilterByProvince };
};

export default useFilter;
