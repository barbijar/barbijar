import React from "react";
import Layout from "../components/layout/layout";
import Landing from "../components/ui/landing";
import { MdContentCut } from "react-icons/md";

const Emprender = () => (
  <Layout>
    <Landing title="Emprender" desc="Descripción Emprender" icon={MdContentCut} href="/emprender" hrefValue="Emprender" />
  </Layout>
);

export default Emprender;
