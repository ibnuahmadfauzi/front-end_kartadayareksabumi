import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://api.kartadayareksabumi.com/user/logout",
        {
          method: "GET", // Atur sesuai dengan method API (GET, POST, dll)
          credentials: "include",
        }
      );

      if (response.ok) {
        // Berhasil logout, hapus data user dari localStorage atau state
        // dan redirect ke halaman login
        navigate("/kdr-auth/login");
      } else {
        // Tangani kesalahan jika logout gagal
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-danger btn-sm w-100 fw-bold"
    >
      <FontAwesomeIcon icon={faPowerOff} />
      <span className="ms-2">LogOut</span>
    </button>
  );
};

export default LogoutButton;
