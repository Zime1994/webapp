import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

export default class Header extends React.Component{

constructor() {
  super();
  this.state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
}

toggleDrawer = (side, open) => () => {
   this.setState({
     [side]: open,
   });
 };



render() {
  const styles = {

    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };


  return(

    <AppBar position="static"  >
            <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

              <Typography variant="title" color="inherit">
                Title
              </Typography>

            </Toolbar>

          </AppBar>



  );
}

}
