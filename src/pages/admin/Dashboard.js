import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Dashboard = () => {
  console.log(Cookies.get());
  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faChartSimple} />
        </span>
        Dashboard
      </h3>
      <hr />
    </div>
  );
};

export default Dashboard;
