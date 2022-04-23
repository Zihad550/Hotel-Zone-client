import React, { createContext } from "react";
import useDashboardTitle from "../hooks/useDashboardTitle";
import useUser from "../hooks/useUser";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const userContext = useUser();
  const titleContext = useDashboardTitle();
  return (
    <AuthContext.Provider value={{
      ...userContext, ...titleContext
    }}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
