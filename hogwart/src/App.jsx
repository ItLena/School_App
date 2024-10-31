// import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useRoutes } from 'react-router-dom'
import NavBar from '../src/components/Navbar'
import Home from '../src/pages/Home'

import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  // const [count, setCount] = useState(0)
  let pages = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "/cart", element: <Cart cartItems={cartItems} /> }

  ])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
  
    <NavBar/>
     
        {pages}
     
    </ThemeProvider>
  )
}

export default App
