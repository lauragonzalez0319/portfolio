import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typewriter from 'typewriter-effect';

function NavBar() {
  const pages = [
    {name: 'Home', link: "home"}, 
    {name: 'About', link: "about"},
    {name: 'Projects', link: "projects"},
    {name: 'Blogs', link: "blogs"},
    {name: 'Contact', link: "contact"}
  ]; 
  
  const drawerWidth = 90;

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //CUSTOM CSS
  const MyCustomImage = styled("img")({
    marginTop: "0.5em",
    marginBottom: "0.5em",
  });
  //CUSTOM CSS ^^

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#0f0e17" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className="typewriter">
        <Typewriter
          onInit={(typewriter)=> {
          typewriter
          .typeString("Hi, I'm Laura and I'm a Fullstack Software Engineer.")
          .start();
          }}
        />
        </div>
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
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}
            justifyContent="flex-end"
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: "inline", fontSize: '1.5em', padding: '1em', textTransform: "capitalize" }}
                href={page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, height: "25%", marginTop: "25%", backgroundColor: "#0f0e17"},
     }}
   >
     <Toolbar />
     <Box sx={{ overflow: 'auto' }}>
       <List>
           <ListItem disablePadding>
             <ListItemButton>
               <ListItemIcon>
                <LinkedInIcon sx={{fontSize: 40, color: "white", backgroundColor: "#0f0e17"}}/>
               </ListItemIcon>
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton>
               <ListItemIcon>
                <GitHubIcon sx={{fontSize: 40, color: "white", backgroundColor: "#0f0e17"}}/>
               </ListItemIcon>
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton>
               <ListItemIcon>
                <MenuBookIcon sx={{fontSize: 40, color: "white", backgroundColor: "#0f0e17"}}/>
               </ListItemIcon>
             </ListItemButton>
           </ListItem>
       </List>
     </Box>
   </Drawer>
   </Box>
  );
}

export default NavBar