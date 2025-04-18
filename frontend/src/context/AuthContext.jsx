import React, { createContext, useState, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap around your app and provide auth context
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Login function to set token and store it in localStorage
  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token); // Store the token in localStorage
  };

  // Logout function to remove token and clear localStorage
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Remove the token from localStorage
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access auth context
export const useAuth = () => useContext(AuthContext);
