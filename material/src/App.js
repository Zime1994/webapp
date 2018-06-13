import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Button } from 'material-ui'
import { green, purple, orange, black } from 'material-ui/colors'

import Layout from './components/Layout'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: black,
    accent: green
  }
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme} >
        <Layout />
      </MuiThemeProvider>
    )
  }
}

export default App
