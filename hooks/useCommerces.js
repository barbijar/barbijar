import React from "react";
import Card from "../components/ui/card";

const useCommerces = (commerces) => {
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
