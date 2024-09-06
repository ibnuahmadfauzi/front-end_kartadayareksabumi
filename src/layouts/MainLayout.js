import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container fluid>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
