import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import AlertDialog from '../components/AlertDialog'
//import image from '../images/20151102_170940.jpg';
import {Link} from "react-router-dom";

const style = {
  center: {
    margin: 'auto',
    display: 'block'
  }
}

export default class Roomcode extends React.Component {

  constructor(){

    super();

    this.state = {
      amount: '',
      test: "test",
      room: []
    };

  }


  getRoomByTag() {
    fetch('http://localhost:3000/score/tag/'+this.state.amount).then(function(response) {
      return response.json();
    }).then(myJson => {
      this.setState({
        room: myJson.room,

      });
    });
    console.log("NOW");
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };



  render() {

    console.log(this.state.room);
    return(
        <div>


    <Link to='/selection' >    <Button  color='inherit' variant="outlined"> Link-Test </Button></Link>

      <Grid container>
<AlertDialog />
      <Grid item xs={12} style={{height: 150}}>
      </Grid>
      <Grid item xs={12}>

      <TextField
      style={{marginLeft: 'auto', marginRight: 'auto', display: 'table'}}
      onChange={this.handleChange('amount')}

      id="simple-start-adornment"

      InputProps={{
        startAdornment: <InputAdornment position="start"><Typography variant="display1">Code</Typography></InputAdornment>,
      }}
      />

      </Grid>
      <Grid item xs={12} style={{marginTop: 350}} >
      <Button style={style.center}  variant="fab" color='primary' onClick={this.getRoomByTag.bind(this)}><Icon style={style.center}>check</Icon></Button>

      <p>{this.state.room.name}</p>
      </Grid>
      <Grid item xs={12}>

      </Grid>
      </Grid>

      </div>

    );
  }
}
