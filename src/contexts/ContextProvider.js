import React, { createContext } from "react";
import useBlogs from "../hooks/useBlogs";
import useDashboardTitle from "../hooks/useDashboardTitle";
import useUser from "../hooks/useUser";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const userContext = useUser();
  const titleContext = useDashboardTitle();
  const blogsContext = useBlogs();
  return (
    <AuthContext.Provider value={{
      ...userContext, ...titleContext, ...blogsContext
    }}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
