import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hotelImage, setHotelImage] = useState("");

  // navigate

  // login using google
  const googleLogin = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        // setUser(res.user);
        const destination = location?.state?.from?.pathname || "/";
        saveUser(user.email, user.displayName, "PUT");
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // register
  const registerUser = (email, password, name, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // set error
        setError("");
        const destination = location?.state?.from?.pathname || "/";
        navigate(destination);
        setUser({ email, displayName: name });
        saveUser(email, name, "POST");

        // save name
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => {
          setError(error.message);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login
  const login = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // setUser(res.user);
        const destination = location?.state?.from?.pathname || "/";
        navigate(destination);
        setError("");
      })
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
    fetch("https://polar-island-87071.herokuapp.com/users", {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  // checks if the user is admin
  useEffect(() => {
    fetch(`https://polar-island-87071.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

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
    admin,
    error,
    googleLogin,
    registerUser,
    login,
    logOut,
    isLoading,
    setError,
  };
};

export default useFirebase;
