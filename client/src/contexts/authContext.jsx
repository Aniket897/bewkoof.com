import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? null
  );

  const login = (_token, _user) => {
    localStorage.setItem("token", _token);
    localStorage.setItem("user", JSON.stringify(_user));
    setToken(_token);
    setUser(_user);
  };

  const logout = () => {
    localStorage.clear();
    setToken("");
    setUser(null);
  };

  return (
    <authContext.Provider value={{ login, logout, token, user }}>
      {children}
    </authContext.Provider>
  );
}
