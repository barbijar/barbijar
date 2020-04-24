import React from "react";
import Layout from "../components/layout/layout";
import Card from "../components/ui/card";
import { Box, Grid, Heading } from "@chakra-ui/core";

const Rosario = () => {
  return (
    <Box padding={3}>
      <Heading as="h2" textAlign="center" mb={3}>Rosario</Heading>
      <Grid
        templateColumns="repeat(auto-fit, 350px)"
        gap={2}
        justifyContent="center"
      >
        <Card price={0} />
        <Card />
        <Card shipment={false} />
        <Card area="Villa crespo" />
        <Card area="Palermo" />
      </Grid>
    </Box>
  );
};

export default Rosario;
