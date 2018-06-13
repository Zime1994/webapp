import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import casual from 'casual-browserify'

const getIdenticon = val => `https://api.adorable.io/avatars/300/${val}`

const users = [
  1,1,1,1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,1,1,1,
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    // width: 800,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tiles = users.map(user => ({ 
  name: casual.full_name,
  email: casual.email,
  description: casual.short_description,
  number: casual.integer(0, 500)
}))

function TitlebarGridList(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={4} spacing={12} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <Subheader component="div">December</Subheader>
        </GridListTile> */}
        {tiles.map(user => (
          <GridListTile key={user.email}>
            <img src={getIdenticon(user.email)} alt={user.name} />
            <GridListTileBar
              title={user.name}
              subtitle={<span>{user.description}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
