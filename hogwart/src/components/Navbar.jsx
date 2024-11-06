import { AppBar, Box, CssBaseline, Toolbar, Typography, Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types'
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const pages = ['home', 'staffs', 'houses'];
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
          
          <IconButton
                  onClick={toggleTheme}
                  sx={{
                    p: 1,
                    border: `1px ${theme.palette.text.disabled} solid`,
                  }}
                  size="large"
                  color="inherit"
                >
                  {theme.palette.mode === "light" ? (
                    <LightModeOutlined />
                  ) : (
                    <DarkModeOutlined color="action" />
                  )}
                </IconButton>
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