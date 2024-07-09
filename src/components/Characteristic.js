// import bootstrap component
import { Container } from "react-bootstrap";

// import data_characteristic
import dataCharacteristic from "../services/general_service";

const Characteristic = () => {
  return (
    <Container>
      <div className="kdr-characteristic-group">
        {dataCharacteristic[0].characteristic.map((value) => (
          <div className="kdr-characteristic-item">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/characteristic/" +
                  value.characteristicImage
                }
              />
            </div>
            <h5>{value.characteristicName}</h5>
            <p>{value.characteristicDescription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Characteristic;
