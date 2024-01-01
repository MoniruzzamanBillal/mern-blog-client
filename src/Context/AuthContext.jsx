import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Util/Firebase.config";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sum, setSum] = useState("sum is 10 ");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);

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
  };

  return (
    <AppContext.Provider value={authValue}>{children}</AppContext.Provider>
  );
};
