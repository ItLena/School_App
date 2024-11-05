import { createContext, useState,  } from 'react'
import { ThemeProvider,  createTheme  } from '@mui/material/styles';
import PropTypes from 'prop-types'




const AppThemeProvider = ({ children }) =>{

// const [theme, setTheme] = useState('light')


// const toggleTheme = () => {
//     setTheme(!theme);
//   };
 
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const Theme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',      
    },
    const  ThemeContext = createContext(Theme, toggleTheme); 
  });
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
{children}
    </ThemeContext.Provider >
  )
}
AppThemeProvider.propTypes = {
    children: PropTypes.any,
  }
export default AppThemeProvider