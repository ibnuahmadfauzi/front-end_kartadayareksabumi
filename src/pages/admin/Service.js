import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faBellConcierge} />
        </span>
        Service
      </h3>
      <hr />
    </div>
  );
};

export default Service;
