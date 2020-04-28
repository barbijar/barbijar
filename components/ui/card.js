import React from "react";
import CardBadge from './cardBadge';
import PriceList from './priceList';

import { Box, Heading, Badge, Flex, List, ListItem } from "@chakra-ui/core";

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

        <List>

          {contact.main_phone ? (
            <>
              <ListItem>Local: {contact.main_phone}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}

          {commerceName ? (
            <>
              <ListItem>Local: {commerceName}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}

          {commerceAddress ? (
            <>
              <ListItem>Dirección: {commerceAddress}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}

          {instagram ? (
            <>
              <ListItem>Instagram: {instagram}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}

          {facebook ? (
            <>
              <ListItem>Facebook: {facebook}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}

          {web ? (
            <>
              <ListItem>Sitio web: {web}</ListItem>
            </>
          ) : (
            <>{null}</>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Card;
