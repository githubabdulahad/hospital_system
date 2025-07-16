import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Optionally redirect to a 403 page or home
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
