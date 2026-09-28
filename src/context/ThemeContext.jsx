import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to 'dark' to deliver the cinematic FRNKLYNRD aesthetic
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('zenitsu_portfolio_theme');
    return saved ? saved : 'dark';
  });

  // State to control live background video animation (play/pause or dim)
  const [isLiveBgActive, setIsLiveBgActive] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('zenitsu_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLiveBg = () => {
    setIsLiveBgActive((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isLiveBgActive,
        toggleLiveBg,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
