import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  console.log(location)
  
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
