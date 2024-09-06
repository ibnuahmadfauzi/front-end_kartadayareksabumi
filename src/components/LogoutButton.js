import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const LogoutButton = () => {
  const handleSubmitLogout = (e) => {
    e.preventDefault();
    Cookies.remove("SessionID");
    Cookies.remove("isLogin");
    return <Navigate to="/kdr-auth/login" replace />;
  };
  return (
    <form onSubmit={handleSubmitLogout}>
      <button type="submit" className="btn btn-danger btn-sm w-100 fw-bold">
        <FontAwesomeIcon icon={faPowerOff} />
        <span className="ms-2">LogOut</span>
      </button>
    </form>
  );
};

export default LogoutButton;
