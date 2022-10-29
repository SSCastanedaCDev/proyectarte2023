import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/material";

import logotipo from "assets/logotipo.svg"

const pages = [
  {
    nombre: 'Inicio',
    link: '/',
    disabled: false,
    target: '_self'
  },
  {
    nombre: 'Nosotros',
    link: '/nosotros',
    disabled: false,
    target: '_self'
  },
  {
    nombre: 'Servicios',
    link: '/servicios',
    disabled: false,
    target: '_self'
  },
  {
    nombre: 'Blog',
    link: '/blog',
    disabled: true,
    target: '_self'
  },
  {
    nombre: 'Encuentra Ayuda',
    link: 'https://api.whatsapp.com/send/?phone=573176424485',
    disabled: false,
    target: '_blank'
  },
];

const Header = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background:theme.palette.secondary.light}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{paddingTop:'3vh'}}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={logotipo} style={{height:'12vh'}} alt='Clínica Proyectarte' />
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
                <MenuItem
                  key={key}
                  component={"a"}
                  href={page.link}
                  disabled={page.disabled}
                  target={page.target}
                >
                  <Typography textAlign="center">{page.nombre}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow:1 }}>
            <img src={logotipo} style={{width:'120px'}} alt='Clínica Proyectarte'/>
          </Box>
          <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, key) => (
              <Button
                component={"a"}
                key={key}
                sx={{ my: 2, mx:2, display: 'block' }}
                variant={window.location.pathname === page.link ? 'contained' : 'outlined'}
                href={page.link}
                disabled={page.disabled}
                target={page.target}
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
