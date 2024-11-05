import { useState, useContext } from 'react'
import { ThemeProvider,  createTheme  } from '@mui/material/styles';
import { Container} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useRoutes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Staffs from './pages/Staffs'
import House from './pages/House';

import './App.css'


function App() {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const darkTheme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light', 
        
    },
  
  });


  const links = useRoutes([
    { path: "/", element: <Home/> },
    { path: "home", element: <Home/> },
    { path: "staffs", element: <Staffs/> },
    { path: "house/:id", element: <House/> }

  ])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
  
      <NavBar theme={theme} toggleTheme={toggleTheme}/>
   
      <Container component="section" sx={{margin: '3rem'}}>          
      {links}
      </Container>
    
    </ThemeProvider>
  )
}

export default App
