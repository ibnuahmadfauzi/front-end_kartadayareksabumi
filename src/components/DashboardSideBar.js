import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faChartSimple,
  faFaceSmileWink,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutButton from "./LogoutButton";

const DashboardSideBar = () => {
  return (
    <div className="card border-0 mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo/kdr-logo.png"}
            style={{ height: "50px" }}
            alt="Karta Daya Reksabumi"
          />
        </div>
        <h5 className="fw-bold text-center mt-3">Karta Daya Reksabumi</h5>
        <h6 className="fw-bold text-center">Content Management System</h6>
        <hr />
        <div className="list-group">
          <a
            href="/kdr-auth/dashboard"
            className="list-group-item list-group-item-action"
          >
            <span className="d-inline-block" style={{ width: "30px" }}>
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
            Dashboard
          </a>
          <a
            href="/kdr-auth/article"
            className="list-group-item list-group-item-action"
          >
            <span className="d-inline-block" style={{ width: "30px" }}>
              <FontAwesomeIcon icon={faBlog} />
            </span>
            Article
          </a>
          <a
            href="/kdr-auth/general"
            className="list-group-item list-group-item-action"
          >
            <span className="d-inline-block" style={{ width: "30px" }}>
              <FontAwesomeIcon icon={faGear} />
            </span>
            General
          </a>
          <a
            href="/kdr-auth/message"
            className="list-group-item list-group-item-action"
          >
            <span className="d-inline-block" style={{ width: "30px" }}>
              <FontAwesomeIcon icon={faRocketchat} />
            </span>
            Message
          </a>
          <a
            href="/kdr-auth/user"
            className="list-group-item list-group-item-action"
          >
            <span className="d-inline-block" style={{ width: "30px" }}>
              <FontAwesomeIcon icon={faFaceSmileWink} />
            </span>
            User
          </a>
        </div>
        <hr />
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardSideBar;
