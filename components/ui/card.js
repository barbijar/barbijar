import React, { useState } from "react";
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
        <Box className="badges">
          <Badge marginRight="1" backgroundColor="blue.700" color="white">
            {province.province_name}
          </Badge>
        </Box>

        <Box className="badges">
          <Badge marginRight="1" backgroundColor="blue.700" color="white">
            {delivery ? "Con envío" : "Sin envío"}
          </Badge>
        </Box>

        <Box className="badges">
          <Badge marginRight="1" backgroundColor="blue.700" color="white">
            {area}
          </Badge>
        </Box>
      </Flex>

      <Box>
        <Heading size="xs" mt={3} textTransform="uppercase">
          Precios:
        </Heading>

        <List>
          $
          {prices.map((price) => (
            <Box key={price.id}>
              <ListItem>Precio de barbijo: ${price.mask_price}</ListItem>
              {price.secundary_mask_price ? (
                <>
                  <ListItem>
                    Otras opciones: ${price.secundary_mask_price}
                  </ListItem>
                </>
              ) : (
                <>{null}</>
              )}
            </Box>
          ))}
        </List>
      </Box>

      <Box>
        <Heading size="xs" mt={3} textTransform="uppercase">
          Información de contacto:
        </Heading>

        <List>
          <ListItem>Teléfono: {contact.main_phone}</ListItem>

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
