import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState, useEffect } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext({
  switchColorMode: () => { },
});

export function ThemeContextProvider({ children }) {

  const [mode, setMode] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined')
      setMode(window.localStorage.getItem('theme') || 'light');
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    window.localStorage.setItem('theme', newMode);
    setMode(newMode)
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst >
      <ThemeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
}