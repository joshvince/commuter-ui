import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

import '../../styles/global.css'

class Nav extends Component {
  render() {
    return (
      <AppBar title={<Link to="/">Choobio</Link>} iconStyleLeft={{display: "none"}} />
    );
  }
}

export default Nav;
