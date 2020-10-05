import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
import useGlobalContext from './hooks/useGlobalContext';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  const { sideBar, setSideBar } = useGlobalContext();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout, sideBar, setSideBar }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
