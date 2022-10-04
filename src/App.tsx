import React from "react";
import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { Cards } from "./components/cards";
import { cardsData } from "./mocks";

export const App = () => {
  return (
    <Layout>
      <Header />
      <Cards cardsData={cardsData} />
    </Layout>
  );
};
