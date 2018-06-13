import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import style from '../components/Paper';


export default class Papers extends React.Component {

  render() {

    var style = {
      Paper: {
        background: 'light-grey',
        padding: 10,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
        marginRight: 4,
        height: 192,
      }
      };

      return(

        <Grid item xs={this.props.size}>
        <Paper style={style.Paper}>xs=12</Paper>
        </Grid>

      );
    }
  }
