import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Train from './Train';

import quarterStar from '../../img/stars/quarterstar.svg';
import halfStar from '../../img/stars/halfstar.svg';
import threeQuarterStar from '../../img/stars/threequarterstar.svg';
import fullStar from '../../img/stars/fullstar.svg';

class TrainList extends Component {
  constructor(props){
    super(props)
    this.calculateStar = this.calculateStar.bind(this)
  }

  calculateStar(time){
    if (time < 60) {
      return fullStar
    }
    else if (time < 120) {
      return threeQuarterStar
    }
    else if (time < 180) {
      return halfStar
    }
    else {
      return quarterStar
    }
  }

  render(){
    var items = this.props.list.map((el, i) => {
      return(
        <ListItem key={i} disabled={true} style={{padding: 3}}>
          <Train
            star={this.calculateStar(el.interval)}
            arrivalTime={el.time_to_station}
            destination={el.destination.destination_name}
          />
        </ListItem>

      )
    })
    return(
      <Paper>
        <List>
          <h3 className="list-header">{this.props.listName}</h3>
          {items}
        </List>
      </Paper>
    )
  }

}

export default TrainList;
