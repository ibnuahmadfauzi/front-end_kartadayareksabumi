import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-lg-4">
          <div className="card border-0">
            <div className="card-body">
              <h2 className="fw-bold text-center">Login</h2>
              <hr />
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username . . ."
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password . . ."
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-secondary w-100">
                    <FontAwesomeIcon icon={faRightToBracket} /> SignIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
