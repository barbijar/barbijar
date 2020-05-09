import React from "react";
import Layout from "../components/layout/layout";
import Landing from "../components/ui/landing";
import {MdAddBox} from 'react-icons/md';
const Salud = () => (
  <Layout>
    <Landing title="Salud" desc="Descripción Salud" icon={MdAddBox} href="/salud" hrefValue="salud" />
  </Layout>
);

export default Salud;
