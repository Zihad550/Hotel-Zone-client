import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAllContext from "../../../hooks/useAllContext";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin , isLoading} = useAllContext();
  const location = useLocation();
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
