import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import GridList from '../GridList'

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    },
  }
})

class Content extends Component {
  render () {
    const { classes, match } = this.props
    return (
      <main className={classes.content}>
         <GridList />
      </main>
    )
  }
}

export default withStyles(styles)(Content)




// import React, { Component } from 'react'
// import { Grid, Radio, FormControl, FormControlLabel, Paper, FormLabel, RadioGroup } from 'material-ui'
// import { Card, CardMedia, Typography, CardActions, Button, CardContent } from 'material-ui'
// import { withStyles } from 'material-ui/styles'
// // import GridList from '../GridList'

// const styles = theme => ({
//   content: {
//     overflow: 'auto',
//     width: '100%',
//     padding: theme.spacing.unit * 3,
//     height: 'calc(100% - 56px)',
//     [theme.breakpoints.up('sm')]: {
//       height: 'calc(100% - 64px)',
//       marginTop: 64
//     },
//     root: {
//       // flexGrow: 1,
//       flexDirection: 'column'
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing.unit * 2,
//     },
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 200,
//     },
//   }
// })

// const SimpleMediaCard = (props) => {
//   const { classes } = props;
//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography type="headline" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button dense color="primary">
//             Share
//           </Button>
//           <Button dense color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// const StyledCard = withStyles(styles)(SimpleMediaCard)

// class Content extends Component {
//   state = {
//     spacing: '16',
//   }
//   handleChange = key => (event, value) => {
//     this.setState({
//       [key]: value,
//     })
//   }
//   render () {
//     const { classes, match } = this.props
//     const { spacing } = this.state
//     return (
//       <main className={classes.content}>
//         <Grid container className={classes.root}>

//           <Grid item xs={12}>
//             <Grid container className={classes.demo} justify="center" spacing={4}>
//               {[0, 1, 2].map(value => (
//                 <Grid key={value} item>
//                   <StyledCard className={classes.card} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>

//           <Grid item xs={12}>
//             <Grid container className={classes.demo} justify="center" spacing={4}>
//               {[0, 1, 2].map(value => (
//                 <Grid key={value} item>
//                   <Paper className={classes.paper} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <Paper className={classes.control}>
//               <Grid container>
//                 <Grid item>
//                   <FormLabel>spacing</FormLabel>
//                   <RadioGroup
//                     name="spacing"
//                     aria-label="spacing"
//                     value={spacing}
//                     onChange={this.handleChange('spacing')}
//                     row
//                   >
//                     <FormControlLabel value="0" control={<Radio />} label="0" />
//                     <FormControlLabel value="8" control={<Radio />} label="8" />
//                     <FormControlLabel value="16" control={<Radio />} label="16" />
//                     <FormControlLabel value="24" control={<Radio />} label="24" />
//                     <FormControlLabel value="40" control={<Radio />} label="40" />
//                   </RadioGroup>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>
//         </Grid>
//       </main>
//     )
//   }
// }

// export default withStyles(styles)(Content)
