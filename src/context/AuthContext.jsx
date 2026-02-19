import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../lib/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      setUser({ token });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post(`${API_BASE}/login`, {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      setUser({ token: res.data.token });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
