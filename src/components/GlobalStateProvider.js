"use client";
// GlobalStateContext.js
import { createContext, useContext, useState,useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import React from "react";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [LoginPage, setLoginPage] = useState(false);
  useEffect(() => {
    Aos.init({
            duration: 1800,
            offset : 20,
    });
},[])
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
