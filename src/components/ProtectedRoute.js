import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const isLoggedIn = cookies; // Ambil nilai cookie

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAccess = async () => {
    try {
      await axios.get("https://api.kartadayareksabumi.com/products", {
        withCredentials: true,
      });
      setIsAuthenticated(true); // Set user as authenticated
    } catch (error) {
      console.error("Access denied:", error);
      setIsAuthenticated(false); // Set user as unauthenticated
    }
  };

  useEffect(() => {
    checkAccess(); // Check access when the component mounts
  }, []);

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="login" replace />;
  }

  //   if (!isLoggedIn) {
  //     // Redirect to login page if not logged in
  //     return <Navigate to="/kdr-auth/login" />;
  //   }

  // Render the children (protected component) if logged in
  return children;
};

export default ProtectedRoute;
