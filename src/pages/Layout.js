import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

const Layout = () => {
  return (
    <Container fluid>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Outlet />
    </Container>
  );
};

export default Layout;
