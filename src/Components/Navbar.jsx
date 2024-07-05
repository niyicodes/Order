import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/order.png';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  alignItems: 'center',
  width: '100%',
}));

const LogoImg = styled('img')({
  height: '40px',
  marginRight: 'auto',
});

const CustomNavLink = styled(NavLink)`
  margin: 0 2px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #fc8a06;
    color: white;
    padding:5px 15px;
    border-radius: 20px;
  }

  &:hover {
    background-color: #fc8a06;
    padding:5px 15px;
    border-radius: 20px;
    color:white;
  }
`;

const LoginButton = styled(Button)({
  marginLeft: '20px',
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='w-64'>
      <List>
        {['Home', 'Browse Menu', 'Special Offers', 'Restaurants', 'Track Order'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{backgroundColor:'transparent', margin:'15px 0', boxShadow:'none'}}>
      <Toolbar className="flex justify-between">
        <LogoImg src={Logo} alt="Logo" />
        <div className="hidden lg:flex items-center w-[70%]">
          <NavLinks>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/b">Browse Menu</CustomNavLink>
            <CustomNavLink to="/s">Special Offers</CustomNavLink>
            <CustomNavLink to="/r">Restaurants</CustomNavLink>
            <CustomNavLink to="/t">Track Order</CustomNavLink>
            <LoginButton variant="contained" color="primary">
              Login
            </LoginButton>
          </NavLinks>
        </div>
        <div className="flex lg:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{color:'black'}}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{fontSize:25}}/>
          </IconButton>
        </div>
      </Toolbar>
      <nav className="absolute top-0 left-0 z-50">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          classes={{ paper: 'w-64' }} // Adjust the width as needed
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Navbar;
