import React from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'

const styles = ({ transitions, zIndex }) => ({
  appBar: {
    postition: 'absolute',
    width: `calc(100% - ${0}px)`,
    zIndex: zIndex.navDrawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    // marginLeft: drawer.width,
    width: `calc(100% - ${240}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  logoutButton: {
    marginLeft: 'auto'
  },
  hide: {
    display: 'none'
  }
})

const StyledAppBar = ({ classes, logoutUser, sidebarOpen, open, location, toggleDrawer }) => {
  const handleDrawer = () => toggleDrawer(!open)
  return (
    <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
      <Toolbar disableGutters={!open}>
        <IconButton
          color='contrast'
          aria-label='open drawer'
          onClick={handleDrawer}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography type='title' color='inherit' noWrap>
          {/* {location.pathname.toUpperCase().split('/')[2] || 'DASHBOARD'} */}
        </Typography>
        <IconButton
          color='contrast'
          aria-label='open drawer'

          className={classNames(classes.logoutButton, true)}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(StyledAppBar)


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import AccountCircle from 'material-ui-icons/AccountCircle';
// import Switch from 'material-ui/Switch';
// import { FormControlLabel, FormGroup } from 'material-ui/Form';
// import Menu, { MenuItem } from 'material-ui/Menu';

// const styles = {
//   root: {
//     width: '100%',
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// class MenuAppBar extends React.Component {
//   state = {
//     anchorEl: null,
//   }
  
//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget })
//   }

//   handleClose = () => {
//     this.setState({ anchorEl: null })
//   }

//   toggleDrawer = () => this.props.toggleDrawer(!this.props.open)

//   render() {
//     const { classes } = this.props
//     const { anchorEl } = this.state
//     const open = Boolean(anchorEl)

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"
//               onClick={this.toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//             <Typography type="title" color="inherit" className={classes.flex}>
//               Title
//             </Typography>
//             <div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : null}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="contrast"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(MenuAppBar)
