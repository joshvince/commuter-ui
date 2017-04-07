import React, { Component } from 'react';
import './styles.css'
import Paper from 'material-ui/Paper';
import ArrivalTime from './ArrivalTime';

class Train extends Component {
  calculateArrival(timestamp) {
    var arrival = new Date(Date.parse(timestamp))
    var now = new Date()
    var diff = arrival - now
    return Math.round((diff / 1000) / 60)
  }

  render(){
    let arrival = this.calculateArrival(this.props.arrivalTime)
    let due = (arrival < 1)
    return(
      <Paper className="train-wrapper">
        <div className="icon-wrapper">
          <img src={this.props.star} alt="star"></img>
        </div>
        <ArrivalTime due={due} time={arrival} />
        <div className="destination-wrapper">
          {this.props.destination}
        </div>
      </Paper>
    )
  }
}

export default Train;
