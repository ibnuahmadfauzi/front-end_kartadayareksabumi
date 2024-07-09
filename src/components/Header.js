import { Container } from "react-bootstrap";

// Import Hero Image
import heroImage from "../assets/images/hero/hero-image.jpg";

const Header = () => {
  return (
    <Container>
      <div className="row align-items-center kdr-hero-section">
        <div className="col-lg-6 py-5">
          <h1>Karta Daya Reksabumi</h1>
          <h3>Spatial - Planning - IT Development</h3>
          <p>
            <a href="#">Layanan Kami</a>
          </p>
        </div>
        <div className="col-lg-6 py-5">
          <img src={heroImage} alt="Hero Image" className="img-fluid" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
