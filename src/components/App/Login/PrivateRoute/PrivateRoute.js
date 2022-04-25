import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAllContext from "../../../../hooks/useAllContext";
import Loader from "../../../Shared/Loader/Loader";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAllContext();
  const location = useLocation();
  
  if(isLoading){
    return <Loader/>
  }
  else if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
