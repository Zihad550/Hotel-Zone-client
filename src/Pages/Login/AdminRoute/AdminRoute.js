import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin , isLoading} = useAuth();
  const location = useLocation();
  console.log(isLoading)
  if(isLoading){
    return <CircularProgress/>
  }
  else if (admin && user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
