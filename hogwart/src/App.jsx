import { useContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useRoutes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Staffs from './pages/Staffs'
import House from './pages/House';
import { ThemeContext } from './ThemeContextProvider.jsx';
import './App.css'


function App() {
  // const [theme, setTheme] = useState(true)

  // const toggleTheme = () => {
  //   setTheme(!theme);
  // };
  // const appTheme = createTheme({
  //   palette: {
  //     mode: theme ? 'dark' : 'light', 

  //   },

  // });
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);


  const links = useRoutes([
    { path: "/", element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "staffs", element: <Staffs /> },
    { path: "house/:id", element: <House /> }

  ])

  return (
    <Container component="section" sx={{ margin: '3rem' }}>
      <CssBaseline />
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      {links}
    </Container>
  )
}

export default App
