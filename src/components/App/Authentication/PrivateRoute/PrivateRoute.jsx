import Loader from "components/Shared/Loader";
import useAuth from "hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  if (user.email) return children;
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
