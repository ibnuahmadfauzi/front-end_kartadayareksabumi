import { Container, Navbar, Nav } from "react-bootstrap";

// import data general
import general_data from "../services/general_service";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary kdr-navbar">
        <Container>
          <Navbar.Brand href="/" className="kdr-navbar-brand">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/logo/" +
                general_data[0].logoImage
              }
              alt="Logo KDR"
            />
            <span className="ms-2">{general_data[0].title}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/artikel">Artikel</Nav.Link>
              <Nav.Link href="/#about-me">Tentang Kami</Nav.Link>
              <Nav.Link href="#contact">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
