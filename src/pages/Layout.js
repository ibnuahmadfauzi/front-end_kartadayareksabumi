import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Container fluid>
      <NavigationBar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
