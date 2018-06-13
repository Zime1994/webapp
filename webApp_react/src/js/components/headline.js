import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default class Headline extends React.Component{


render() {


  return(

    <Grid container style={{height: 200}} >
<Grid item xs={12} >
<Typography align='center' variant='display2' style={{marginTop: 50}}> Hallo </Typography>
</Grid>

    </Grid>


  );
}

}
