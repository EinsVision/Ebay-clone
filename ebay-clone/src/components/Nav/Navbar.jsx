import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

function Navbar({ totalItems }) {

  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
            <img 
              src='https://www.flaticon.com/svg/vstatic/svg/888/888848.svg?token=exp=1614910970~hmac=31cb381d37526d9415115fefc7c8cf11'
              alt='Commerce.js' 
              height='80px' 
              className={classes.image}
            />
            
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
          
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
