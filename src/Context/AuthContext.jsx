import { createContext, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Util/Firebase.config";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  UseAuth(() => {
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
  };

  return (
    <AppContext.Provider value={authValue}>{children}</AppContext.Provider>
  );
};
