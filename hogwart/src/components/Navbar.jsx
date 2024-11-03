import { AppBar, Box, CssBaseline, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            HOGWART
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href="/"><Button>Home</Button></Link>
            <Link href="/contact"><Button>Contact</Button></Link>
            <Link href="/staff"><Button>Staffs</Button></Link>
            <Link href="/spell"><Button>Spells</Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default NavBar 