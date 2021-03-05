import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

function Navbar() {

  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img 
              src='https://www.flaticon.com/svg/vstatic/svg/888/888848.svg?token=exp=1614910970~hmac=31cb381d37526d9415115fefc7c8cf11'
              alt='Commerce.js' 
              height='80px' 
              className={classes.image}
            />
            
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
