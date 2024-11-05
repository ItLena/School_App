import { AppBar, Box, CssBaseline, Toolbar, Typography, Button, Switch } from '@mui/material';
import PropTypes from 'prop-types'


const pages = ['home', 'staffs', 'house'];
const NavBar = ({theme, toggleTheme}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            HOGWART
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}> 
           { pages.map((page) =>(
               <Button sx={{color: 'white'}} key={page} href={`/${page}`} >{page}</Button>
            ))   
          }  
          <Switch checked={theme} onChange={toggleTheme}></Switch>
           </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
NavBar.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.bool
}

export default NavBar 