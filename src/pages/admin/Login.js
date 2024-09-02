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
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.kartadayareksabumi.com/user/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.headers);
        setTimeout(() => {
          navigate("/kdr-auth/dashboard");
        }, 5000);
      })
      .catch((error) => {
        console.error("Login error:", error);
        setMessage("Login failed. Please check your credentials.");
      });
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username . . ."
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    placeholder="Password . . ."
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-secondary w-100">
                    <FontAwesomeIcon icon={faRightToBracket} /> SignIn
                  </button>
                </div>
                {message && <p>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
