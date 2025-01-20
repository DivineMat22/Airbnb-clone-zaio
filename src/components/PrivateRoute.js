import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));  // Get the user from localStorage (or use your global state)

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
