import React, { Component } from 'react'
import AppBar from '../AppBar'
import Drawer from '../Drawer'
import Content from '../Content'
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  }
})

class Layout extends Component {
  state = {
    open: false
  }

  toggleDrawer = open => this.setState({ open })

  render () {
    const { open } = this.state
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <div className={classes.appFrame} >
          <AppBar open={open} toggleDrawer={this.toggleDrawer} />
          <Drawer open={open} toggleDrawer={this.toggleDrawer} />
          <Content  />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
