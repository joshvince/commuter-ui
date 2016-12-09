import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from './nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="appContainer">
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
