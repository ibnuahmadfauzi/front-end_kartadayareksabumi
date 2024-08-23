import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characteristic = () => {
  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faCertificate} />
        </span>
        Characteristic
      </h3>
      <hr />
    </div>
  );
};

export default Characteristic;
