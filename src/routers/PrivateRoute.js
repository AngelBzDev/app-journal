import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isLoggedIn }) =>
  isLoggedIn ? children : <Navigate to={"/auth/login"} />;

export default PrivateRoute;
