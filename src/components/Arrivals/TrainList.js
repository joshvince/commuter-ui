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
    this.state = {
      trainList: this.props.list
    }
    this.calculateStar = this.calculateStar.bind(this)
		this.isInTheFuture = this.isInTheFuture.bind(this)
    this.tick = this.tick.bind(this)
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 10000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

// this feels very hacky. I am setting the state so it triggers a re-render...
// TODO: lookup how to trigger a re-render without this.
  tick(){
    this.setState({
      trainList: this.state.trainList
    })
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

	isInTheFuture(timestamp) {
		var arrival = new Date(Date.parse(timestamp))
		var now = new Date()
		return now < arrival
	}

  render(){
    var content = null;
    // If the list is empty, there are no trains and you should display a message.
    if (this.props.list.length === 0) {
      content = <EmptyTrainList />
    }
    // Otherwise, display a train component for each object
    else {
      // we only want trains who are still due to arrive in the future
      var trainList = this.state.trainList.filter(obj =>
				this.isInTheFuture(obj.arrival_time)
			);
      // if there were no trains left in the future, then display a message
      if (trainList.length === 0) {
        content = <EmptyTrainList />
      }
      else {
        // for each of the trains, render a List item with a train component
        content = trainList.map((obj, i) => {
          var icon = (i === 0) ? questionMark : this.calculateStar(obj.interval)
          // var arrivalMins = this.calculateArrival(obj.arrival_time)
          return(
            <ListItem key={i} disabled={true} style={{padding: 3}}>
              <Train
                star={icon}
                arrivalTime={obj.arrival_time}
                destination={obj.destination.destination_name}
              />
            </ListItem>
          )
        });
      }
    }

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
