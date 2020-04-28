import React from "react";
import { Box, List, ListItem } from "@chakra-ui/core";

const PriceList = ({ prices }) => {
  return (
    <List>
      $
      {prices.map((price) => (
        <Box key={price.id}>
          <ListItem>Precio de barbijo: ${price.mask_price}</ListItem>
          {price.secundary_mask_price ? (
            <>
              <ListItem>Otras opciones: ${price.secundary_mask_price}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}
        </Box>
      ))}
    </List>
  );
};

export default PriceList;
