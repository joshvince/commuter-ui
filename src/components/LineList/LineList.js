import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

// this shouldn't actually be declared like this going forward. It should draw from this.props.lineList or w/e
var TflColors = require('../../styles/TflColors')
var lineList = [
  {
    "name": "Northern",
    "color": TflColors.northernBlack
  },
  {
    "name": "Bakerloo",
    "color": TflColors.bakerlooBrown
  }
]

class LineList extends Component {
  render() {
    var lines = lineList.map((line) => {
      return <ListItem primaryText={line.name} style={{backgroundColor: line.color}} key={line.name} />
    });
    return (
      <List>
        {lines}
      </List>
    );
  }
}

export default LineList;




