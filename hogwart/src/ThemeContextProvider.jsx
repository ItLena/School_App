import {StyledEngineProvider, ThemeProvider, createTheme} from "@mui/material/styles";
  import { createContext, useMemo, useState } from "react";
  import PropTypes from 'prop-types'
  
  export const ThemeContext = createContext({
    switchColorMode: () => {},
  });
  
  export function ThemeContextProvider({ children }) {
    const [mode, setMode] = useState('light');
  
    const toggleTheme = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode]
    );
  
    return (
      <StyledEngineProvider injectFirst>
        <ThemeContext.Provider value={{ toggleTheme }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </StyledEngineProvider>
    );
  }
  ThemeContextProvider.propTypes = {
    children: PropTypes.any,
    
  }