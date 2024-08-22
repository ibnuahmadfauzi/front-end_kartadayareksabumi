import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Secondlayout = () => {
  return (
    <Container fluid>
      <Outlet />
    </Container>
  );
};

export default Secondlayout;
