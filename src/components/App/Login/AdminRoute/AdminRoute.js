import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAllContext from "../../../../hooks/useAllContext";
import Loader from "../../../Shared/Loader/Loader";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin , isLoading} = useAllContext();
  const location = useLocation();
  if(isLoading){
    return <Loader/>
  }
  else if (admin && user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
