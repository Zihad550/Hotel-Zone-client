import React, { createContext } from "react";
import useUser from "../hooks/useUser";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const authContext = useUser();
  return (
    <AuthContext.Provider value={
      authContext
    }>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
