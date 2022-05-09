import React, { createContext } from "react";
import useUser from "../hooks/useUser";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const userContext = useUser();
  return (
    <AuthContext.Provider value={{
      ...userContext
    }}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
