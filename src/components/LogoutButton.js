import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoutButton = () => {
  const handleSubmitLogout = () => {
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <form onSubmit={handleSubmitLogout} action="">
      <button type="submit" className="btn btn-danger btn-sm w-100 fw-bold">
        <FontAwesomeIcon icon={faPowerOff} />
        <span className="ms-2">LogOut</span>
      </button>
    </form>
  );
};

export default LogoutButton;
