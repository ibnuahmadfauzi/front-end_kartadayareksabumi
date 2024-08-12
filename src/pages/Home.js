/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

// import Bootstrap Component
import { Container } from "react-bootstrap";

// Import jQuery
import LogoSlider from "../components/LogoSlider";

// Import Data General
import data from "../services/data";

const Header = () => {
  return (
    <Container>
      <div className="row align-items-center kdr-hero-section">
        <div className="col-lg-6 py-5">
          <h1>{data.general.title}</h1>
          <h3>{data.general.description}</h3>
          <p>
            <a href="#product">Layanan Kami</a>
          </p>
        </div>
        <div className="col-lg-6 py-5 kdr-hero-section-image-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/" +
              data.general.heroImage
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
    <div className="about-me-section" id="about-me">
      <Container>
        <h3 className="text-center">Tentang Kami</h3>
        <div className="row align-items-center">
          <div className="col-lg-4 about-me-section-image-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/logo/" + data.about.image}
              alt="Logo KDR"
            />
          </div>
          <div
            className="col-lg-8"
            dangerouslySetInnerHTML={{
              __html: data.about.description,
            }}
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
        {data.about.characteristics.map((value) => (
          <div key={value.id} className="kdr-characteristic-item">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/characteristic/" +
                  value.image
                }
              />
            </div>
            <h5>{value.name}</h5>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Product = () => {
  return (
    <div className="kdr-product-section" id="product">
      <Container>
        <h3 className="text-center">Layanan Kami</h3>
        {data.products.map((value, index) =>
          (index + 1) % 2 != 0 ? (
            <div key={value.id} className="row align-items-center">
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
            <div
              key={value.id}
              className="row align-items-center kdr-product-section-reverse"
            >
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

const Partner = () => {
  return (
    <div className="kdr-partner-section">
      <Container>
        <h3>Partner Kami</h3>
        <LogoSlider />
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
      <Partner />
    </>
  );
};

export default Home;
