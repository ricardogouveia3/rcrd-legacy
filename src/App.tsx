import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <CardGrid>
        <Card
          img={"/projects/site/v1/preview.jpg"}
          url={"/projects/site/v1"}
          title={"Site V1"}
          year={"2015"}
        ></Card>
        <Card
          img={"/projects/site/v2/preview.jpg"}
          url={"/projects/site/v2"}
          title={"Site V2"}
          year={"2017"}
        ></Card>
        <Card
          img={"/projects/portfolio/v1/preview.jpg"}
          url={"/projects/portfolio/v1"}
          title={"Portfolio V1"}
          year={"2017"}
        ></Card>
      </CardGrid>
      <Footer />
    </>
  );
}

export default App;
