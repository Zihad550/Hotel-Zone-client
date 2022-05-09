import Loader from "components/Shared/Loader";
import useAllContext from "hooks/useAllContext";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, userLoading } = useAllContext();
  const location = useLocation();
  if (userLoading) return <Loader />;
  if (user.email) return children;
  if (!user.email) return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
