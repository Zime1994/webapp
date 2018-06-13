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
import Alert from '../components/alert'



export default class Roomcode extends React.Component {

  constructor(){

    super();

  this.state = {
      amount: '',
      test: "test",
      room: []
    };

  }
  componentDidMount() {
    this.getRoomByTag();

  }

  getRoomByTag() {
    fetch('http://localhost:3000/score/tag/'+this.state.amount).then(function(response) {
      return response.json();
    }).then(myJson => {
      this.setState({
        room: myJson.room,
        open: false
      });
    });

  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };



  render() {





    return(

      <div>

      <div style={{height: 100}}>
      </div>

      <TextField

      onChange={this.handleChange('amount')}

      id="simple-start-adornment"

      InputProps={{
        startAdornment: <InputAdornment position="start"><Typography variant="title">Code</Typography></InputAdornment>,
      }}
      />


      <Button onClick={() => { this.getRoomByTag() }}>hey</Button>



      </div>

    );
  }
}
