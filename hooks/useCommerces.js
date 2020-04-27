import React from "react";
import Card from "../components/ui/card";

const useCommerces = (res) => {
  const commerces = res.response.data;

  const Commerces = () => (
    <>
      <ul>
        {commerces.map((commerce) => (
          <li key={commerce.id}>
            <Card commerce={commerce} />
          </li>
        ))}
      </ul>
    </>
  );

  return { Commerces };
};

export default useCommerces;
