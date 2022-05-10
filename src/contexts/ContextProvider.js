import useHotel from "hooks/useHotel";
import React, { createContext } from "react";
import useUser from "../hooks/useUser";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const userContext = useUser();
  const hotelContext = useHotel();
  return (
    <AuthContext.Provider value={{
      ...userContext, ...hotelContext
    }}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
