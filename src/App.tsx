import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";
import Footer from "./components/Footer";

import previewSiteV1 from "./assets/site-v1.jpg";
import previewSiteV2 from "./assets/site-v2.jpg";
import previewSiteV3 from "./assets/site-v3.jpg";
import previewPortfolio from "./assets/portfolio.jpg";

function App() {
  return (
    <>
      <Header />
      <CardGrid>
        <Card
          img={previewSiteV1}
          url={"/projects/site/v1"}
          title={"Site V1"}
          year={"2015"}
        ></Card>
        <Card
          img={previewSiteV2}
          url={"/projects/site/v2"}
          title={"Site V2"}
          year={"2017"}
        ></Card>
        <Card
          img={previewSiteV3}
          url={"/projects/site/v3"}
          title={"Site V3"}
          year={"2017"}
        ></Card>
        <Card
          img={previewPortfolio}
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
