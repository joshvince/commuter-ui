import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h2><Link to="/lines" >Get Tube Status</Link></h2>
      </div>
    );
  }
}

export default Home;
