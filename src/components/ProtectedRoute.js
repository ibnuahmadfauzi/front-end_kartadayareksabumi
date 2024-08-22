import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/kdr-auth/login" />;
  }

  // Render the children (protected component) if logged in
  return children;
};

export default ProtectedRoute;
