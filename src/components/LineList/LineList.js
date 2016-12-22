import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

import { Link } from 'react-router';


var TflColors = require('../../styles/TflColors')
var lineList = [
  {
    name: "Northern",
    urlName: "northern",
    color: TflColors.northernBlack
  }
  // {
  //   name: "Bakerloo",
  //   urlName: "bakerloo",
  //   color: TflColors.bakerlooBrown
  // },
  // {
  //   name: "Hammersmith & City",
  //   urlName: "hammersmithandcity",
  //   color: TflColors.hammersmithPink
  // },
  // {
  //   name: "Picadilly",
  //   urlName: "picadilly",
  //   color: TflColors.picadillyBlue
  // }
]

class LineList extends Component {
  render() {
    var lines = lineList.map((line) => {
      var url = `/lines/${line.urlName}`
      return (
        <Link to={url} key={line.name}>
          <ListItem
            primaryText={line.name}
            style={{
              backgroundColor: line.color,
              color: "white"
            }}
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
