import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LineList from './components/LineList/LineList.js';
import LineStatus from './components/LineStatus/LineStatus.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="appContainer">
          <AppBar title="Commuter" iconStyleLeft={{display: "none"}} />
          <LineStatus />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
