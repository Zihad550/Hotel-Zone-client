import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// providers
const googleProvider = new GoogleAuthProvider();

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  // states
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const { email, password } = userInfo;
  const [isLoading, setIsLoading] = useState(false);

  // login using google
  const googleLogin = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // register
  const register = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login
  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successfully
      })
      .catch((error) => setError(error.massage))
      .finally(() => setIsLoading(false));
  };

  // save user to the server
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("");
  };

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    error,
    googleLogin,
    setUserInfo,
    register,
    login,
    logOut,
    userInfo,
    isLoading,
  };
};

export default useFirebase;
