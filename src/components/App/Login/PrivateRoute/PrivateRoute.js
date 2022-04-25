import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAllContext from "../../../hooks/useAllContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAllContext();
  const location = useLocation();
  
  if(isLoading){
    return <Spinner/>
  }
  else if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
