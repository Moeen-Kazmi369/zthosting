"use client";
// GlobalStateContext.js
import { createContext, useContext, useState } from "react";

import React from "react";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [LoginPage, setLoginPage] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ setTheme, theme,LoginPage,setLoginPage }}>
      <main className={`${theme ? "dark":"light"}`}>
        {children}
      </main>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
export const useGlobalState = () => useContext(GlobalStateContext);
