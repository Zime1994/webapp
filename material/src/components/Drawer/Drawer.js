import React, { Component, PropTypes } from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import List from '../List'

const drawerWidth = 240
const drawerWidthClose = 50

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    position: 'relative',
    height: '100%',
    width: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    ...theme.mixins.toolbar
  },
  drawerTitle: {
    fontWeight: 'bold',
    marginLeft: 20
  },
  chevronLeft: {
    position: 'absolute',
    right: 0
  },
  chevronRight: {
    position: 'absolute',
    left: 0
  },
  hide: {
    display: 'none'
  }
})

class StyledDrawer extends Component {
  toggleDrawer = () => {
    this.props.toggleDrawer(!this.props.open)
  }
  render () {
    const { classes, theme, open } = this.props
    return (
      <Drawer
        type='permanent'
        open={open}
        classes={{
          paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <Typography type='title' color='secondary' noWrap>
              <p className={classes.drawerTitle}>Material-UI</p>
            </Typography>
            <IconButton className={classNames(theme.direction === 'rtl'
              ? classes.chevronRight : classes.chevronLeft, !open && classes.hide)}
              onClick={this.toggleDrawer}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
        </div>
        <Divider />
        <List />
      </Drawer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(StyledDrawer)
