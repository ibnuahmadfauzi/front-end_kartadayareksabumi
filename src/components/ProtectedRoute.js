import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const cookies = Cookies.get();
console.log(cookies);
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = cookies; // Ambil nilai cookie

  const allCookies = Cookies.get();
  console.log("All Cookies:", allCookies);
  console.log(Cookies.get("SessionID"));

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/kdr-auth/login" />;
  }

  // Render the children (protected component) if logged in
  return children;
};

export default ProtectedRoute;
