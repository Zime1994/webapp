import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Roomcode from './roomcode';



export default class Selection extends React.Component {
  state = {

     computer: false,
     heating: false,
     window: false,
     light: false,
     beamer: false,
     roomActions: {createdAt: "2018-05-13T08:26:02.000Z", idRooms: 1, isBeamer:1, isComputer:1, isHeating:1, isLight:1, isWindow:1, name:"G001", tag:111, updatedAt:"2018-05-13T08:26:02.000Z"},
   };



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

console.log("HAns", this.state.test);


    return(
      <FormControl component="fieldset">

       <FormGroup>

     <FormControlLabel
           control={
             <Checkbox
             disabled={this.isBeamerAllowed()}
               checked={this.state.beamer}
               onChange={this.handleChange('beamer')}
               value="Beamer"
             />
           }
           label="Beamer"
         />
         <FormControlLabel
           control={
             <Checkbox
             disabled={this.isComputerAllowed()}
               checked={this.state.jason}
               onChange={this.handleChange('computer')}
               value="computer"
             />
           }
           label="Computer"
         />
         <FormControlLabel
           control={
             <Checkbox
             disabled={this.isHeatingAllowed()}
               checked={this.state.heating}
               onChange={this.handleChange('heating')}
               value="heating"
             />
           }
           label="Heating"
         />
         <FormControlLabel
           control={
             <Checkbox
             disabled={this.isLightAllowed()}
               checked={this.state.light}
               onChange={this.handleChange('light')}
               value="light"
             />
           }
           label="Light"
         />

         <FormControlLabel
           control={
             <Checkbox
             icon={<FavoriteBorder fontSize={20} />} checkedIcon={<Favorite />}
             disabled={this.isWindowAllowed()}
               checked={this.state.window}
               onChange={this.handleChange('window')}
               value="window"
             />
           }
           label="Window"
         />


       </FormGroup>

     </FormControl>
   );
 }
}
