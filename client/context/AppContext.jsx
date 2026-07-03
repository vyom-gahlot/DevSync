import { useContext, useEffect, useState, createContext } from "react";
import api from "../src/api/axios.js";
import { jwtDecode } from "jwt-decode";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      try {
        const { exp } = jwtDecode(token);
        const timeout = exp * 1000 - Date.now();

        if (timeout <= 0) {
          logout();
          return;
        }

        const timer = setTimeout(() => {
          logout();
        }, timeout);

        return () => clearTimeout(timer);

      } catch (err) {
        logout(); // invalid token safety
      }
    }
  }, [token]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const value = {
    token,
    login,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);