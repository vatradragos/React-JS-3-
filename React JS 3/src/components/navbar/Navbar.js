import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ShoppingCart from '../shoppingcart/ShoppingCart';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ background: '#4B0082' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ILLUSION's STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to='/' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>SignIn</Link>
                <Link to='/Home' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Home</Link>
                <Link to='/Life' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Life</Link>
                <Link to='/Love' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Love</Link>
                <Link to='/Work' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Work</Link>
                <Link to='/Social' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Social</Link>
              </Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ILLUSIONS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Sign In</Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/Home' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Home</Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/Life' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Life</Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/Love' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Love</Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/Work' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Work</Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/Social' style={{color: "#fff", margin: "20px 20px", textDecoration: "none"}}>Social</Link>
              </Button>
              
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                <Link to='/' style={{display: "block", color: "#111", textDecoration: "none", margin: "10px 10px", }}>Sign In</Link>
                <Link to='/Home' style={{display: "block", color: "#111", textDecoration: "none"}}>Sign Out</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ShoppingCart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;