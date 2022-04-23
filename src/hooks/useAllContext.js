import { useContext } from "react";
import { AuthContext } from "../contexts/ContextProvider";

const useAllContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAllContext;
