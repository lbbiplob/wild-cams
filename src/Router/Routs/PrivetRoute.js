import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
