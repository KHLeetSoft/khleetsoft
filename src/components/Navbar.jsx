import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import logo from '../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Industries', path: '/industries' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navActive = (path) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 68 }, py: 0.5 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              mr: { xs: 1, md: 5 },
            }}
          >
            <img src={logo} alt="KH LeetSoft" style={{ height: '38px', display: 'block' }} />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto', alignItems: 'center', gap: 1 }}>
            <Button
              component={RouterLink}
              to="/contact"
              onClick={handleCloseNavMenu}
              size="small"
              variant="contained"
              color="primary"
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, px: 2 }}
            >
              Contact
            </Button>
            <IconButton
              size="medium"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { mt: 1 } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={navActive(page.path)}
                  sx={{ py: 1.25, minHeight: 44 }}
                >
                  <Typography fontWeight={navActive(page.path) ? 600 : 500} fontSize="0.9375rem">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginLeft: 'auto',
              alignItems: 'center',
              gap: 0.25,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: navActive(page.path) ? 'primary.main' : 'text.secondary',
                  fontWeight: navActive(page.path) ? 600 : 500,
                  fontSize: '0.9375rem',
                  px: 1.75,
                  py: 1,
                  minWidth: 'auto',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(156, 35, 64, 0.06)',
                    color: 'primary.main',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{ ml: 2, px: 2.5 }}
            >
              Enquire
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
