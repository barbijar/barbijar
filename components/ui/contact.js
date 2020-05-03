import React from "react";

import { List, ListItem } from "@chakra-ui/core";

const Contact = ({
  phone,
  commerceName,
  commerceAddress,
  instagram,
  facebook,
  web,
}) => {
  return (
    <>
      <List>
        {phone ? (
          <>
            <ListItem>Local: {phone}</ListItem>
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
      
    </>
  );
};

export default Contact;
