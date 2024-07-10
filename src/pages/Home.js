// import data_product
import dataProduct from "../services/product_service";

// import data_characteristic
import dataCharacteristic from "../services/general_service";

// import data about
import data from "../services/about_me_service";

// import data general
import general_data from "../services/general_service";

// import Bootstrap Component
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="row align-items-center kdr-hero-section">
        <div className="col-lg-6 py-5">
          <h1>{general_data[0].title}</h1>
          <h3>{general_data[0].description}</h3>
          <p>
            <a href="#">Layanan Kami</a>
          </p>
        </div>
        <div className="col-lg-6 py-5">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/" +
              general_data[0].heroImage
            }
            alt="Hero Image"
            className="img-fluid"
          />
        </div>
      </div>
    </Container>
  );
};

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <Container>
        <h3 className="text-center">Tentang Kami</h3>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/logo/" + data[0].image}
              alt="Logo KDR"
            />
          </div>
          <div
            className="col-lg-8"
            dangerouslySetInnerHTML={{ __html: data[0].description }}
          />
        </div>
      </Container>
    </div>
  );
};

const Characteristic = () => {
  return (
    <Container>
      <div className="kdr-characteristic-group">
        {dataCharacteristic[0].characteristic.map((value) => (
          <div className="kdr-characteristic-item">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/characteristic/" +
                  value.characteristicImage
                }
              />
            </div>
            <h5>{value.characteristicName}</h5>
            <p>{value.characteristicDescription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

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
