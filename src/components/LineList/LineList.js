import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

import { Link } from 'react-router';

// this shouldn't actually be declared like this going forward. It should draw from this.props.lineList or w/e
var TflColors = require('../../styles/TflColors')
var lineList = [
  {
    name: "Northern",
    urlName: "northern",
    color: TflColors.northernBlack
  },
  {
    name: "Bakerloo",
    urlName: "bakerloo",
    color: TflColors.bakerlooBrown
  },
  {
    name: "Hammersmith & City",
    urlName: "hammersmithandcity",
    color: TflColors.hammersmithPink
  },
  {
    name: "Picadilly",
    urlName: "picadilly",
    color: TflColors.picadillyBlue
  }
]

class LineList extends Component {
  render() {
    var lines = lineList.map((line) => {
      var url = `/lines/${line.name}`
      return (
        <Link to={url}>
          <ListItem 
            primaryText={line.name} 
            style={{
              backgroundColor: line.color, 
              color: "white"
            }} 
            key={line.name} 
          />
        </Link>)
    });
    return (
      <List>
        {lines}
      </List>
    );
  }
}

export default LineList;




