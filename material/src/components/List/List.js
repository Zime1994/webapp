import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import GrinIcon from 'material-ui-icons/GridOn'
import AlarmIcon from 'material-ui-icons/AccessAlarm'
import SettingsIcon from 'material-ui-icons/Settings'

const styles = theme => ({
})

const StyledList = ({ classes, history, match }) => {
  return (
    <List>
      <ListItem button >
        <ListItemIcon>
          <GrinIcon />
        </ListItemIcon>
        <ListItemText primary='Grid' />
      </ListItem>
      <ListItem button  >
        <ListItemIcon>
          <AlarmIcon />
        </ListItemIcon>
        <ListItemText primary='Alarm' />
      </ListItem>
      <ListItem button  >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </List>
  )
}

export default withStyles(styles)(
  StyledList
)
