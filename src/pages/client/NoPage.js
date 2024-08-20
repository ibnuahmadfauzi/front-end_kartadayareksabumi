import { Container } from "react-bootstrap";

const NoPage = () => {
  return (
    <div className="kdr-no-page">
      <Container fluid>
        <img
          src={process.env.PUBLIC_URL + "/assets/logo/404.gif"}
          alt="Logo KDR"
        />
      </Container>
    </div>
  );
};

export default NoPage;
