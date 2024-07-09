import { Container, Navbar, Nav } from "react-bootstrap";

// Logo KDR
import kdrLogo from "../assets/images/logo/kdr-logo.png";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary kdr-navbar">
        <Container>
          <Navbar.Brand href="/" className="kdr-navbar-brand">
            <img src={kdrLogo} alt="Logo KDR" />
            <span className="ms-2">Karta Daya Reksabumi</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="#">Tentang Kami</Nav.Link>
              <Nav.Link href="#">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
