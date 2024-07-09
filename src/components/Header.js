import { Container } from "react-bootstrap";

// import data general
import general_data from "../services/general_service";

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

export default Header;
