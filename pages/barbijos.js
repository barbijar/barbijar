import React from 'react';
import Layout from '../components/layout';
import Card from '../components/ui/card';
import { Box, Grid } from '@chakra-ui/core';

const Barbijos = () => (
  <Layout>
    <Box padding={3}>
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
  </Layout>
);

export default Barbijos;