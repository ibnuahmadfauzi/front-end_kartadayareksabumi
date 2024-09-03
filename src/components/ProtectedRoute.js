import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk loading

  const checkAccess = async () => {
    try {
      await axios.get("https://api.kartadayareksabumi.com/products", {
        withCredentials: true,
      });
      setIsAuthenticated(true); // Set user as authenticated
    } catch (error) {
      console.error("Access denied:", error);
      setIsAuthenticated(false); // Set user as unauthenticated
    } finally {
      setIsLoading(false); // Set loading selesai
    }
  };

  useEffect(() => {
    checkAccess(); // Check access when the component mounts
  }, []);

  if (isLoading) {
    // Render loading indicator atau null saat loading
    return (
      <div className="load-gif">
        <img src={process.env.PUBLIC_URL + "/assets/images/load.gif"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/kdr-auth/login" replace />;
  }

  // Render the children (protected component) if logged in
  return children;
};

export default ProtectedRoute;
