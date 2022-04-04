import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin , isLoading} = useAuth();
  const location = useLocation();
  console.log(isLoading)
  if(isLoading){
    return <Spinner/>
  }
  else if (admin && user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
