import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = (props) => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary kdr-navbar">
        <Container>
          <Navbar.Brand href="/" className="kdr-navbar-brand">
            <img src={props.data.logoImage} alt="Logo KDR" />
            <span className="ms-2">{props.data.title}</span>
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
