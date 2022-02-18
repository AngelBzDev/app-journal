import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isLoggedIn }) =>
  isLoggedIn ? <Navigate to={"/"} /> : children;

export default PublicRoute;
