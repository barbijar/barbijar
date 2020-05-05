import React from "react";
import CardBadge from "./cardBadge";
import PriceList from "./priceList";
import Contact from "./contact";

import { Box, Heading, Badge, Flex } from "@chakra-ui/core";

const Card = ({ commerce }) => {
  const {
    name,
    commerceName,
    commerceAddress,
    area,
    web,
    instagram,
    facebook,
    delivery,
    province,
    contact,
    prices,
  } = commerce;

  const showCommerces = commerce ? (
    <Contact
      phone={contact.main_phone}
      commerceName={commerceName}
      commerceAddress={commerceAddress}
      instagram={instagram}
      facebook={facebook}
      web={web}
    />
  ) : (
    null
  );

  return (
    <Box
      rounded="md"
      p={2}
      shadow="md"
      backgroundColor="#ecf0f1"
      width="350px"
      m="1rem auto"
    >
      <Heading size="xl">{name}</Heading>

      <Flex>
        <CardBadge badge={province.province_name} />

        <Box className="badges">
          <Badge marginRight="1" backgroundColor="blue.700" color="white">
            {delivery ? "Con envío" : "Sin envío"}
          </Badge>
        </Box>

        <CardBadge badge={area} />
      </Flex>

      <Box>
        <Heading size="xs" mt={3} textTransform="uppercase">
          Precios:
        </Heading>

        <PriceList prices={prices} />
      </Box>

      <Box>
        <Heading size="xs" mt={3} textTransform="uppercase">
          Información de contacto:
        </Heading>

        {showCommerces}
      </Box>
    </Box>
  );
};

export default Card;
