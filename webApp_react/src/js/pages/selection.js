import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import Roomcode from './roomcode';
import Headline from '../components/headline';



export default class Selection extends React.Component {
  state = {

    computer: false,
    heating: false,
    window: false,
    light: false,
    beamer: false,
    roomActions: {createdAt: "2018-05-13T08:26:02.000Z", idRooms: 1, isBeamer:1, isComputer:1, isHeating:1, isLight:1, isWindow:1, name:"G001", tag:111, updatedAt:"2018-05-13T08:26:02.000Z"},
  };


 getSelectionsAndPOST(){
var selectComputer, selectHeating, selectWindow, selectLight, selectBeamer;
this.state.computer ? selectComputer = 1 : selectComputer = 0;
this.state.heating ? selectHeating = 1 : selectHeating = 0;
this.state.window ? selectWindow = 1 : selectWindow = 0;
this.state.light ? selectLight = 1 : selectLight = 0;
this.state.beamer ? selectBeamer = 1 : selectBeamer = 0;
console.log(selectBeamer, selectComputer, selectHeating, selectLight, selectWindow );
 }



  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  isBeamerAllowed(){
    if(this.state.roomActions.isBeamer === 1) {
      return false
    }
    else return true}

  isComputerAllowed(){
    if(this.state.roomActions.isComputer === 1) {
      return false
    }
    else return true}

  isHeatingAllowed(){
    if(this.state.roomActions.isHeating === 1) {
      return false
    }
    else return true}

  isLightAllowed(){
    if(this.state.roomActions.isLight === 1) {
      return false
    }
    else return true}

  isWindowAllowed(){
    if(this.state.roomActions.isWindow === 1) {
      return false
    }
    else return true}




render() {




  return(

    <div>

    <Headline />

    <Grid container
    direction='row'
    justify='center'
    alignItems='center'>

    <Grid item xs={3} >
    <Checkbox
    disabled={this.isBeamerAllowed()}
    checked={this.state.beamer}
    onChange={this.handleChange('beamer')}
    value="Beamer"
    />
    </Grid >
    <Grid item xs={9}>
    <Typography variant='display1' >Beamer </Typography>
    </Grid>

    <Grid item xs={3}>
    <Checkbox
    disabled={this.isComputerAllowed()}
    checked={this.state.jason}
    onChange={this.handleChange('computer')}
    value="computer"
    />
    </Grid >
    <Grid item xs={9}>
    <Typography variant='display1' >Computer </Typography>
    </Grid>

    <Grid item xs={3}>
    <Checkbox
    disabled={this.isHeatingAllowed()}
    checked={this.state.heating}
    onChange={this.handleChange('heating')}
    value="heating"
    />
    </Grid >
    <Grid item xs={9}>
    <Typography variant='display1' >Heating </Typography>
    </Grid>


    <Grid item xs={3}>
    <Checkbox
    disabled={this.isLightAllowed()}
    checked={this.state.light}
    onChange={this.handleChange('light')}
    value="light"
    />
    </Grid >
    <Grid item xs={9}>
    <Typography variant='display1' >Light </Typography>
    </Grid>


    <Grid item xs={3}>
    <Checkbox
    icon={<FavoriteBorder />} checkedIcon={<Favorite />}
    disabled={this.isWindowAllowed()}
    checked={this.state.window}
    onChange={this.handleChange('window')}
    value="window"
    />
    </Grid >
    <Grid item xs={9}>
    <Typography variant='display1'>Window </Typography>
    </Grid>

    </Grid>


<Button style={{margin: 'auto', display: 'block'}}  variant="raised" size="large" color="primary" onClick={this.getSelectionsAndPOST.bind(this)}>SUBMIT</Button>








    </div>
  );
}
}
