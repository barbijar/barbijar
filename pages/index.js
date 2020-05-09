import React from "react";
import Layout from "../components/layout/layout";
import Landing from "../components/ui/landing";
import { MdHome, MdContentCut, MdAddBox, MdMenu, MdSearch } from 'react-icons/md';
export default function Home() {
  return (
    <Layout>
      <Landing title="¡Bienvenides a BarbijAr!" desc="BarbijAr es un proyecto para que los argentinos y argentinas tengan
            la posibilidad de solicitar su barbijo obligatorio con la mayor
            facilidad posible." icon={MdSearch} href="/barbijos" hrefValue="Buscar barbijos" />
      <Landing title="Barbijos" desc="Descripción barbijos" icon={MdHome} href="/" hrefValue="Inicio" />
      <Landing title="Emprender" desc="Descripción Emprender" icon={MdContentCut} href="/emprender" hrefValue="Emprender" />
      <Landing title="Salud" desc="Descripción Salud" icon={MdAddBox} href="/salud" hrefValue="salud" />
    </Layout>
  );
}
