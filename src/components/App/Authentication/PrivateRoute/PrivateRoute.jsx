import Loader from "components/Shared/Loader";
import useAuth from "hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();
  if (userLoading) return <Loader />;
  if (user.email) return children;
  if (!user.email) return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
