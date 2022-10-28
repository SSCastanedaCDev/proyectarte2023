import React, {useState} from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import { useTheme } from "@mui/material";

import logotipo from "assets/logotipo.svg"

const pages = [
  {
    nombre: 'Inicio',
    link: '/'
  },
  {
    nombre: 'Nosotros',
    link: '/nosotros'
  },
  {
    nombre: 'Servicios',
    link: '/servicios'
  },
  {
    nombre: 'Blog',
    link: '/blog'
  },
  {
    nombre: 'Encuentra Ayuda',
    link: '/ayuda'
  },
];

const Header = () => {
  const theme = useTheme();
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
    <AppBar position="static" sx={{background:theme.palette.secondary.light}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{paddingTop:'10vh'}}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={logotipo} style={{height:'12vh'}} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, key) => (
                <MenuItem key={key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.nombre}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow:1 }}>
            <img src={logotipo} style={{width:'120px'}} />
          </Box>
          <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, key) => (
              <Button
                component={"a"}
                key={key}
                sx={{ my: 2, mx:2, display: 'block' }}
                variant={window.location.pathname === page.link ? 'contained' : 'outlined'}
                href={page.link}
              >
                {page.nombre} 
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
