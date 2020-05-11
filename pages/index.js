import React from "react";
import Layout from "../components/layout/layout";
import Landing from "../components/ui/landing";

import { Box } from "@chakra-ui/core";
import { MdHome, MdContentCut, MdAddBox, MdSearch } from "react-icons/md";
export default function Home() {
  return (
    <Layout>
      <Box>
        <Landing
          title="¡Bienvenides a BarbijAr!"
          desc="BarbijAr es un proyecto para que los argentinos y argentinas tengan
            la posibilidad de solicitar su barbijo obligatorio con la mayor
            facilidad posible."
          icon={MdSearch}
          href="/barbijos"
          hrefValue="Buscar barbijos"
        />
      </Box>
      <Box bg="blue.700" color="white">
        <Landing
          title="Emprender"
          desc="Descripción Emprender"
          icon={MdContentCut}
          href="/emprender"
          hrefValue="Emprender"
        />
      </Box>
      <Box>
        <Landing
          title="Salud"
          desc="Descripción Salud"
          icon={MdAddBox}
          href="/salud"
          hrefValue="salud"
        />
      </Box>
    </Layout>
  );
}
