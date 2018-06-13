import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Papers from '../components/Papers';
import Headline from '../components/headline';


export default class Dashboard extends React.Component {

  render() {



      return(
        <div>
        <Headline />

<Grid container spacing={8}>

        <Papers size={12} />
        <Papers size={6} />
        <Papers size={6} />
        <Papers size={6} />
        <Papers size={6} />

        </Grid>

</div>

      );
    }
  }
