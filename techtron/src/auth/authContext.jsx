// AuthContext.jsx
//in case you want access to the logged-in user details everywhere...
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem('currentUser');
//     if (stored !== null) {
//       setUser(JSON.parse(stored));
//     }
//     }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem('currentUser', JSON.stringify(userObj));
    console.log("local storage: user stored as: "+userObj)
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
