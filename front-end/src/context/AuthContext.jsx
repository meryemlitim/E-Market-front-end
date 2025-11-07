import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/users/me");
      setUser(data);
    } catch (err) {
      console.log("auth err", err);
      logout();
    }
  };

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
   localStorage.setItem("token", data.accessToken); 
    setUser(data.user);
  };

const register = async (formData) => {
    const { data } = await api.post("/auth/register", formData);
    localStorage.setItem("token", data.accessToken);
    setUser(data.user);
};


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
