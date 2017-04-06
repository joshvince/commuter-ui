import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Train from './Train';
import EmptyTrainList from './EmptyTrainList';

import quarterStar from '../../img/stars/quarterstar.svg';
import halfStar from '../../img/stars/halfstar.svg';
import threeQuarterStar from '../../img/stars/threequarterstar.svg';
import fullStar from '../../img/stars/fullstar.svg';
import questionMark from '../../img/questionmark.svg';

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
    var listLength = this.props.list.length
    var content = listLength === 0 ? <EmptyTrainList /> :
      this.props.list.map((el, i) => {
      var icon = (i === 0) ? questionMark : this.calculateStar(el.interval)
      return(
        <ListItem key={i} disabled={true} style={{padding: 3}}>
          <Train
            star={icon}
            arrivalTime={el.time_to_station}
            destination={el.destination.destination_name}
          />
        </ListItem>

      )
    })
    return(
      <Paper>
        <List>
          <div className="train-wrapper col-head">
            <div className="icon-wrapper">Score</div>
            <div className="arrival-time-wrapper">Arrives</div>
            <div className="destination-wrapper col-head">Destination</div>
          </div>
          {content}
        </List>
      </Paper>
    )
  }

}

export default TrainList;
