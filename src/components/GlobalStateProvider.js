"use client";
// GlobalStateContext.js
import { createContext, useContext, useState } from "react";

import React from "react";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ setTheme, theme }}>
      <main className={`${theme ? "dark":"light"}`}>
        {children}
      </main>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
export const useGlobalState = () => useContext(GlobalStateContext);
