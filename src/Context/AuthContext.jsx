import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Util/Firebase.config";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sum, setSum] = useState("sum is 10 ");

  // function for register a user
  const registerFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function for login a user
  const loginFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // function for logout a user
  const logout = () => {
    return signOut(auth);
  };

  // effect to handle user
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // auth context states
  const authValue = {
    user,
    loading,
    darkMode,
    sum,
    registerFunction,
    logout,
    loginFunction,
  };

  return (
    <AppContext.Provider value={authValue}>{children}</AppContext.Provider>
  );
};
