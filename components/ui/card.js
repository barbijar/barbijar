import React from "react";
import { Box, Heading, Badge, Button, Text } from "@chakra-ui/core";

const Card = ({ title, area, shipment, description, price }) => {
  return (
    <Box rounded="md" p={2} shadow="md" backgroundColor="#ecf0f1" width="350px">
      <Heading size="md">{title}</Heading>
      <Box className="badges">
        <Badge marginRight="1" variantColor="teal" variant="solid">
          {area}
        </Badge>
        {shipment && (
          <Badge variantColor="teal" variant="solid">
            con envio
          </Badge>
        )}
      </Box>
      <Text>{description}</Text>
      <Box
        className="options"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop={2}
      >
        <Heading>{price === 0 ? "Gratis" : `$${price}`}</Heading>
        <Button variant="solid" variantColor="teal">
          Visitar!
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
