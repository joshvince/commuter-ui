import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Storage from './storage/indexedDB.js';
import Nav from './components/nav/Nav';
import './styles/App.css';
import Theme from './styles/muitheme.js'

const muiTheme = getMuiTheme(Theme)


class App extends Component {
  constructor(props){
    super(props)
    Storage.initialise()
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="appContainer">
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
