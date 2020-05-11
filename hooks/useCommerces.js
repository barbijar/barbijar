import React from "react";
import Card from "../components/ui/card";
import { List, ListItem } from "@chakra-ui/core";

const useCommerces = (commerces) => {

  const Commerces = () => (
    <>
      <List display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {commerces.map((commerce) => (
          <ListItem key={commerce.id} m={2}>
            <Card commerce={commerce} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return { Commerces };
};

export default useCommerces;
