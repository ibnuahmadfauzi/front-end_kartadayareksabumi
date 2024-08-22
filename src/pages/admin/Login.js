import {
  faRightToBracket,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import users from "../../services/user_service";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    users.map((value) => {
      if (value.username === username) {
        if (
          password ===
          CryptoJS.AES.decrypt(value.password, "your-secret-key").toString(
            CryptoJS.enc.Utf8
          )
        ) {
          setStatus(true); // Update status
        }
      }
    });

    if (status === false) {
      setMessage(true);
    }
  };

  useEffect(() => {
    if (status) {
      // Lakukan sesuatu setelah status diperbarui, misalnya redirect
      console.log("Status updated:", status); // jika menggunakan useNavigate dari react-router-dom
      localStorage.setItem("isLoggedIn", true);
      navigate("/kdr-auth/dashboard");
    }
  }, [status]);

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
              {message ? (
                <div className="alert alert-danger">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  <span className="ms-2">
                    username or password is incorrect
                  </span>
                </div>
              ) : (
                ""
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username . . ."
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password . . ."
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
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
