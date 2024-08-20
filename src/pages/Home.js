/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

// import Bootstrap Component
import { Container } from "react-bootstrap";

// Import jQuery
import LogoSlider from "../components/LogoSlider";

// Import Data General
import useFetch from "../services/general_data";
import dataArticles from "../services/articles_data";

const Header = (props) => {
  return (
    <Container>
      <div className="row align-items-center kdr-hero-section">
        <div className="col-lg-6 py-5">
          <h1>{props.data.title}</h1>
          <h3>{props.data.description}</h3>
          <p>
            <a href="#product">Layanan Kami</a>
          </p>
        </div>
        <div className="col-lg-6 py-5 kdr-hero-section-image-container">
          <img
            src={props.data.heroImage}
            alt="Hero Image"
            className="img-fluid"
          />
          {/* <img
            src={
              process.env.PUBLIC_URL + "/assets/images/" + props.data.heroImage
            }
            alt="Hero Image"
            className="img-fluid"
          /> */}
        </div>
      </div>
    </Container>
  );
};

const AboutMe = (props) => {
  return (
    <div className="about-me-section" id="about-me">
      <Container>
        <h3 className="text-center">Tentang Kami</h3>
        <div className="row align-items-center">
          <div className="col-lg-4 about-me-section-image-container">
            <img src={props.data.image} alt="Logo KDR" />
          </div>
          <div
            className="col-lg-8"
            dangerouslySetInnerHTML={{
              __html: props.data.description,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

const Characteristic = (props) => {
  return (
    <Container>
      <div className="kdr-characteristic-group">
        {props.data.map((value, index) => (
          <div key={index} className="kdr-characteristic-item">
            <div>
              <img src={value.image} />
            </div>
            <h5>{value.name}</h5>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Product = (props) => {
  return (
    <div className="kdr-product-section" id="product">
      <Container>
        <h3 className="text-center">Layanan Kami</h3>
        {props.data.map((value, index) =>
          (index + 1) % 2 != 0 ? (
            <div key={index} className="row align-items-center">
              <div className="col-lg-6 kdr-product-section-img-container">
                <img src={value.image} />
              </div>
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
            </div>
          ) : (
            <div
              key={index}
              className="row align-items-center kdr-product-section-reverse"
            >
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
              <div className="col-lg-6 kdr-product-section-img-container">
                <img src={value.image} />
              </div>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

const Partner = (props) => {
  return (
    <div className="kdr-partner-section">
      <Container>
        <h3>Partner Kami</h3>
        <LogoSlider data={props.data} />
      </Container>
    </div>
  );
};

const Home = () => {
  //   console.log(dataArticles.articles);
  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/"
  );

  if (loading) {
    return (
      <div className="load-gif">
        <img src={process.env.PUBLIC_URL + "/assets/images/load.gif"} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header data={data.data.general} />
      <AboutMe data={data.data.about} />
      <Characteristic data={data.data.about.characteristic} />
      <Product data={data.data.products} />
      <Partner data={data.data.partners} />
    </>
  );
};

export default Home;
