import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Characteristic from "../components/Characteristic";

// import data_product
import dataProduct from "../services/product_service";

// import Bootstrap Component
import { Container } from "react-bootstrap";

const Product = () => {
  console.log(dataProduct);
  return (
    <div className="kdr-product-section">
      <Container>
        <h3 className="text-center">Layanan Kami</h3>
        {dataProduct.map((value) =>
          value.id % 2 != 0 ? (
            <div className="row  align-items-center">
              <div className="col-lg-6 kdr-product-section-img-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/product/" +
                    value.image
                  }
                />
              </div>
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
            </div>
          ) : (
            <div className="row  align-items-center">
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
              <div className="col-lg-6 kdr-product-section-img-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/product/" +
                    value.image
                  }
                />
              </div>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Characteristic />
      <Product />
    </>
  );
};

export default Home;
