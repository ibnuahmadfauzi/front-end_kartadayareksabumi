import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import useFetch from "../services/general_data";

const Layout = () => {
  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/"
  );

  if (loading) {
    return (
      <div className="load-gif">
        <img src={process.env.PUBLIC_URL + "/assets/images/load.gif"} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container fluid>
      <NavigationBar data={data.data.general} />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
