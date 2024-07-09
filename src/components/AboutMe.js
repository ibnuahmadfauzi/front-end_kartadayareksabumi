import { Container } from "react-bootstrap";

// import data about
import data from "../services/about_me_service";

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

export default AboutMe;
