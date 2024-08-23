import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Partner = () => {
  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faHandshake} />
        </span>
        Partner
      </h3>
      <hr />
    </div>
  );
};

export default Partner;
