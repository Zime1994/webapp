import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


export default class Test extends React.Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.reloadData();
  }


  reloadData() {
    fetch('http://localhost:3000/score/users').then(function(response) {
      return response.json();
    }).then(myJson => {
      this.setState({
        items: myJson.users
      });
    });
  }

  render() {
var style = {
      Paper: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
      },
      Button: {
        marginLeft: 20,
        flex: 1
      },
      root: {
        flexGrow: 1
      }
    };

    return(

      <div> <Grid container spacing = { 24 } style = {style.root}>

      <Grid item xs> {this.state.items.map(hello =>
        <Paper key = {hello.idUser} style = {style.Paper}>{hello.firstName} {hello.lastName} < Button style = {style.Button} variant = 'outlined' > action </Button> </Paper> )
      } </Grid>
      </Grid>
      < /div>

    );
  }
}
