import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Layout = () => {
  return (
    <Container fluid>
      <NavigationBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
