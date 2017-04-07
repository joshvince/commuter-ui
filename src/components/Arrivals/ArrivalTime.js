import React, { Component } from 'react';

class ArrivalTime extends Component {
  render(){
    if (this.props.due) {
      return(
        <div className="arrival-time-wrapper">
          <h1>Due</h1>
        </div>
      )
    }
    else {
      return(
        <div className="arrival-time-wrapper">
          <h1>{this.props.time}</h1>min
        </div>
      )
    }
  }

}

export default ArrivalTime;
